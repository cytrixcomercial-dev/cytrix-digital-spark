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