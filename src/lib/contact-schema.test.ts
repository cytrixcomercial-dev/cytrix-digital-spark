import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { contactSchema } from "./contact-schema";

describe("contact form validation", () => {
  test("rejects the short message from the reported failure, not phone or email", () => {
    const result = contactSchema.safeParse({
      nome: "Teste", empresa: "Teste", email: "teste@teste.com.br",
      telefone: "4199890003", mensagem: "higguygo",
    });
    assert.equal(result.success, false);
    if (!result.success) {
      assert.deepEqual(result.error.issues.map((issue) => issue.path), [["mensagem"]]);
    }
  });

  test("accepts a message at the existing ten-character minimum", () => {
    assert.equal(contactSchema.safeParse({
      nome: "Teste", empresa: "Teste", email: "teste@teste.com.br",
      telefone: "4199890003", mensagem: "0123456789",
    }).success, true);
  });

  test("accepts digits-only phone and corporate country-domain e-mail", () => {
    const result = contactSchema.safeParse({
      nome: "Teste",
      empresa: "Empresa Teste",
      email: "teste@teste.com.br",
      telefone: "4199890003",
      mensagem: "Mensagem de teste com mais de dez caracteres.",
    });
    assert.equal(result.success, true);
  });

  test("accepts masked phone formats as well", () => {
    const result = contactSchema.safeParse({
      nome: "Teste",
      empresa: "Empresa Teste",
      email: "teste@teste.com.br",
      telefone: "(41) 99689-0003",
      mensagem: "Mensagem de teste com mais de dez caracteres.",
    });
    assert.equal(result.success, true);
  });

  test("accepts phone with country code and spaces", () => {
    const result = contactSchema.safeParse({
      nome: "Teste",
      empresa: "Empresa Teste",
      email: "teste@teste.com.br",
      telefone: "+55 41 99689-0003",
      mensagem: "Mensagem de teste com mais de dez caracteres.",
    });
    assert.equal(result.success, true);
  });

  test("rejects phones with fewer than 8 digits", () => {
    const result = contactSchema.safeParse({
      nome: "Teste",
      empresa: "Empresa Teste",
      email: "teste@teste.com.br",
      telefone: "4199",
      mensagem: "Mensagem de teste com mais de dez caracteres.",
    });
    assert.equal(result.success, false);
  });

  test("still rejects free e-mail domains", () => {
    const result = contactSchema.safeParse({
      nome: "Teste",
      empresa: "Empresa Teste",
      email: "teste@gmail.com",
      telefone: "4199890003",
      mensagem: "Mensagem de teste com mais de dez caracteres.",
    });
    assert.equal(result.success, false);
  });
});
