import { describe, expect, test } from "bun:test";
import { formErrorResponse, getRequestId, safeErrorDetails } from "./request-diagnostics.server";

describe("request diagnostics", () => {
  test("each request gets a distinct UUID, stable throughout that request", () => {
    const request = new Request("https://www.opriun.com.br/contato", { headers: { "X-Request-ID": "caller-chosen" } });
    const id = getRequestId(request);
    expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
    expect(getRequestId(request)).toBe(id);
    expect(getRequestId(new Request(request.url))).not.toBe(id);
  });
  test("provider diagnostics exclude personal data and credentials", () => {
    const error = Object.assign(new Error("visitor@example.com password=private"), { code: "EAUTH", body: "private form content" });
    expect(safeErrorDetails(error)).toEqual({ code: "EAUTH" });
    expect(safeErrorDetails({ code: "visitor@example.com" })).toEqual({ code: "UNCLASSIFIED" });
  });
  test("form failures include the same request ID and only a safe message", () => {
    const id = getRequestId(new Request("https://www.opriun.com.br/contato"));
    expect(formErrorResponse(id)).toEqual({ success: false, error: "Não foi possível enviar. Tente novamente em instantes.", requestId: id });
    expect(formErrorResponse(id, true)).toEqual({ success: false, error: "Confira os campos do formulário e tente novamente.", requestId: id });
  });
});