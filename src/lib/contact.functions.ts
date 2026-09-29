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

    // Envia o lead ao Opriun CRM (não bloqueia o formulário em caso de falha)
    const crmUrl =
      process.env["CRM_WEBHOOK_URL"] ||
      "https://project--fd117f08-5d17-4e2f-a58b-205fea4b5c27.lovable.app/api/public/leads-intake";
    const crmSecret = process.env["CRM_WEBHOOK_SECRET"];
    if (crmSecret) {
      try {
        const res = await fetch(crmUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-webhook-secret": crmSecret },
          body: JSON.stringify({
            name: data.nome,
            company_name: data.empresa,
            email: data.email,
            phone: data.telefone,
            whatsapp: data.telefone,
            notes: data.mensagem,
            source: "Site Opriun - Formulário de Contato",
          }),
        });
        if (!res.ok) console.error("[contato] CRM respondeu", res.status, await res.text());
      } catch (e) {
        console.error("[contato] falha ao enviar lead ao CRM", e);
      }
    } else {
      console.warn("[contato] CRM_WEBHOOK_SECRET não configurado; lead não enviado ao CRM");
    }

    return { ok: true as const };
  });