import { createStart, createCsrfMiddleware, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";
import { attachSupabaseAuth } from "@/integrations/supabase/auth-attacher";
import { getRequestId, safeErrorDetails } from "./lib/request-diagnostics.server";

const errorMiddleware = createMiddleware().server(async ({ next, request }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    const url = new URL(request.url);
    const requestId = getRequestId(request);
    console.error(`[${new Date().toISOString()}] [requestId=${requestId}] ${request.method} ${url.origin}${url.pathname} - ERROR:`, safeErrorDetails(error));
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8", "X-Request-ID": requestId },
    });
  }
});

// Start installs this automatically when src/start.ts is absent; defining the
// file opts out, so re-add it explicitly to keep server functions protected
// from cross-site requests.
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

// Security headers on every response (works on Cloudflare and Node/Hostinger).
const securityHeadersMiddleware = createMiddleware().server(async ({ next }) => {
  const result = await next();
  const res = (result as { response?: Response }).response ?? (result as unknown as Response);
  if (res && res.headers && typeof res.headers.set === "function") {
    try {
      res.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
      res.headers.set("X-Content-Type-Options", "nosniff");
      res.headers.set("X-Frame-Options", "DENY");
      res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    } catch {
      // immutable headers — ignore
    }
  }
  return result;
});

// Global request logging: method, URL, status and duration for every request.
const requestLoggerMiddleware = createMiddleware().server(async ({ next, request }) => {
  const start = Date.now();
  // Always generated here, never accepted from a caller-controlled header.
  const requestId = getRequestId(request);
  // Query strings can contain personal data or authentication tokens.
  const url = new URL(request.url);
  const requestUrl = `${url.origin}${url.pathname}`;
  try {
    const result = await next();
    console.log(`[${new Date().toISOString()}] [requestId=${requestId}] ${request.method} ${requestUrl} - ${result.response.status} (${Date.now() - start}ms)`);
    // Clone to support responses with immutable headers.
    const headers = new Headers(result.response.headers);
    headers.set("X-Request-ID", requestId);
    return { ...result, response: new Response(result.response.body, {
      status: result.response.status,
      statusText: result.response.statusText,
      headers,
    }) };
  } catch (error) {
    console.error(`[${new Date().toISOString()}] [requestId=${requestId}] ${request.method} ${requestUrl} - ERROR (${Date.now() - start}ms):`, safeErrorDetails(error));
    throw error;
  }
});

export const startInstance = createStart(() => ({
  functionMiddleware: [attachSupabaseAuth],
  requestMiddleware: [requestLoggerMiddleware, securityHeadersMiddleware, errorMiddleware, csrfMiddleware],
}));
