// Request objects are request-scoped; WeakMap avoids retained data and works
// with immutable request headers on both workerd and Node.
const requestIds = new WeakMap<Request, string>();

export function getRequestId(request: Request): string {
  const existing = requestIds.get(request);
  if (existing) return existing;
  const id = crypto.randomUUID();
  requestIds.set(request, id);
  return id;
}

export function safeErrorDetails(error: unknown) {
  // Never log messages, stacks, response bodies or arbitrary provider fields:
  // they can contain names, addresses, credentials or submitted content.
  const allowedCodes = new Set(["ECONNREFUSED", "ETIMEDOUT", "ENOTFOUND", "EAUTH", "ESOCKET", "ECONNECTION", "23505", "42501"]);
  const code = error && typeof error === "object" && "code" in error ? error.code : undefined;
  return { code: typeof code === "string" && allowedCodes.has(code) ? code : "UNCLASSIFIED" };
}

export function formErrorResponse(requestId: string, validation = false, fields?: string[]) {
  const base = {
    success: false as const,
    error: validation
      ? "Confira os campos do formulário e tente novamente."
      : "Não foi possível enviar. Tente novamente em instantes.",
    requestId,
  };
  // Field names only — never the submitted values, which can be personal data.
  if (validation && fields?.length) return { ...base, fields };
  return base;
}