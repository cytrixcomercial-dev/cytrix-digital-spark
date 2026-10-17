import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { formErrorResponse, getRequestId, safeErrorDetails } from "./request-diagnostics.server";

describe("request diagnostics", () => {
  test("each request gets a distinct UUID, stable throughout that request", () => {
    const request = new Request("https://www.opriun.com.br/contato", { headers: { "X-Request-ID": "caller-chosen" } });
    const id = getRequestId(request);
    assert.match(id, /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
    assert.equal(getRequestId(request), id);
    assert.notEqual(getRequestId(new Request(request.url)), id);
  });
  test("provider diagnostics exclude personal data and credentials", () => {
    const error = Object.assign(new Error("visitor@example.com password=private"), { code: "EAUTH", body: "private form content" });
    assert.deepEqual(safeErrorDetails(error), { code: "EAUTH" });
    assert.deepEqual(safeErrorDetails({ code: "visitor@example.com" }), { code: "UNCLASSIFIED" });
  });
  test("form failures include the same request ID and only a safe message", () => {
    const id = getRequestId(new Request("https://www.opriun.com.br/contato"));
    assert.deepEqual(formErrorResponse(id), { success: false, error: "Não foi possível enviar. Tente novamente em instantes.", requestId: id });
    assert.deepEqual(formErrorResponse(id, true), { success: false, error: "Confira os campos do formulário e tente novamente.", requestId: id });
  });
  test("validation failures may include field names, never submitted values", () => {
    const id = getRequestId(new Request("https://www.opriun.com.br/contato"));
    assert.deepEqual(formErrorResponse(id, true, ["telefone"]), {
      success: false,
      error: "Confira os campos do formulário e tente novamente.",
      requestId: id,
      fields: ["telefone"],
    });
  });
});