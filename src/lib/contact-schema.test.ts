import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { contactSchema } from "./contact-schema";

describe("contact form validation", () => {
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
