import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { blockedFreeDomains } from "./email-corporate";

const contactSchema = z.object({
  nome: z.string().trim().min(1, "Informe seu nome").max(100),
  empresa: z.string().trim().min(1, "Informe o nome da empresa").max(120),
  email: z
    .string()
    .trim()
    .email("E-mail inválido")
    .max(255)
    .refine(
      (value) => {
        const domain = value.split("@")[1]?.toLowerCase();
        return !domain || !blockedFreeDomains.has(domain);
      },
      { message: "Utilize um e-mail corporativo (Gmail, Hotmail, etc. não são aceitos)." }
    ),
  telefone: z.string().trim().min(1, "Informe o telefone").max(40),
  mensagem: z.string().trim().min(10, "Descreva melhor o desafio").max(2000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("contact_messages").insert({
      nome: data.nome,
      empresa: data.empresa || null,
      email: data.email,
      telefone: data.telefone || null,
      mensagem: data.mensagem,
    });

    if (error) {
      console.error("[contato] falha ao salvar mensagem", error);
      throw new Error("Não foi possível registrar sua mensagem.");
    }

    return { ok: true as const };
  });