import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { insertContactLead } from "./contact-leads.server";

describe("contact lead database contract", () => {
  test("inserts into leads with exactly the five requested columns using the server key", async () => {
    let calls = 0;
    const fetcher: typeof fetch = async (input, init) => {
      calls++;
      assert.equal(String(input), "https://database.example.com/rest/v1/leads");
      assert.equal(init?.method, "POST");
      assert.equal(new Headers(init?.headers).get("apikey"), "sb_secret_test_only");
      assert.equal(new Headers(init?.headers).has("Authorization"), false);
      assert.deepEqual(JSON.parse(String(init?.body)), {
        name: "Test Name", company: "Test Company", email: "test@example.com",
        phone: "41999990000", message: "Test message for database mapping",
      });
      return new Response(null, { status: 201 });
    };
    const result = await insertContactLead({
      nome: "Test Name", empresa: "Test Company", email: "test@example.com",
      telefone: "41999990000", mensagem: "Test message for database mapping",
    }, "https://database.example.com", "sb_secret_test_only", fetcher);
    assert.equal(calls, 1);
    assert.equal(result.error, null);
  });
});
import { checkDatabaseUrl, leadStatusToken } from "./contact-leads.server";

describe("contact lead diagnostics", () => {
  test("network failures report a network token instead of UNCLASSIFIED", async () => {
    const fetcher: typeof fetch = async () => {
      throw Object.assign(new TypeError("fetch failed"), { cause: { code: "ENOTFOUND" } });
    };
    const result = await insertContactLead({ nome: "a", empresa: "b", email: "c@d.com", telefone: "41999990000", mensagem: "mensagem de teste" },
      "https://wrong.example.com", "sb_secret_test_only", fetcher);
    assert.equal(leadStatusToken(result), "ENOTFOUND");
  });
  test("invalid server key reports chave_invalida", () => {
    assert.equal(leadStatusToken({ error: { message: "Invalid API key" }, status: 401 }), "chave_invalida");
  });
  test("missing table keeps its database code", () => {
    assert.equal(leadStatusToken({ error: { code: "PGRST205" }, status: 404 }), "PGRST205");
  });
  test("dashboard address is rejected, project address accepted", () => {
    assert.equal(checkDatabaseUrl("https://supabase.com/dashboard/project/abc"), "url_do_painel");
    assert.equal(checkDatabaseUrl("abc.supabase.co"), "url_invalida");
    assert.equal(checkDatabaseUrl("https://abc.supabase.co"), null);
  });
});
