import { createStart, createCsrfMiddleware, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";
import { attachSupabaseAuth } from "@/integrations/supabase/auth-attacher";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
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
  try {
    const result = await next();
    const res = (result as { response?: Response }).response ?? (result as unknown as Response);
    const status = res?.status ?? 200;
    console.log(`[request] ${request.method} ${request.url} -> ${status} (${Date.now() - start}ms)`);
    return result;
  } catch (error) {
    console.error(`[request] ${request.method} ${request.url} falhou (${Date.now() - start}ms)`, error);
    throw error;
  }
});

export const startInstance = createStart(() => ({
  functionMiddleware: [attachSupabaseAuth],
  requestMiddleware: [requestLoggerMiddleware, securityHeadersMiddleware, errorMiddleware, csrfMiddleware],
}));
