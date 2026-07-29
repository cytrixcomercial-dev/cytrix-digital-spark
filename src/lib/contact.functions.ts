import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  nome: z.string().trim().min(1, "Informe seu nome").max(100),
  empresa: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().max(40).optional().or(z.literal("")),
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