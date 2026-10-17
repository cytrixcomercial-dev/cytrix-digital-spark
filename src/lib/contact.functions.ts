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
    console.log("--- INICIANDO ENVIO DO FORMULÁRIO ---");
    try {
      let savedLocally = false;
      if (process.env["SUPABASE_SERVICE_ROLE_KEY"] && process.env["SUPABASE_URL"]) {
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { error } = await supabaseAdmin.from("contact_messages").insert({
          nome: data.nome,
          empresa: data.empresa || null,
          email: data.email,
          telefone: data.telefone || null,
          mensagem: data.mensagem,
        });
        if (error) console.error("[contato] falha ao salvar mensagem", error);
        else savedLocally = true;
      } else {
        console.warn("[contato] banco local não configurado (SUPABASE_URL/SUPABASE_SERVICE_ROLE_KEY); seguindo só com o CRM");
      }

      const crmUrl =
        process.env["CRM_WEBHOOK_URL"] ||
        "https://project--fd117f08-5d17-4e2f-a58b-205fea4b5c27.lovable.app/api/public/leads-intake";
      const crmSecret = process.env["CRM_WEBHOOK_SECRET"];
      let sentToCrm = false;
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
          else sentToCrm = true;
        } catch (e) {
          console.error("[contato] falha ao enviar lead ao CRM", e);
        }
      } else {
        console.warn("[contato] CRM_WEBHOOK_SECRET não configurado; lead não enviado ao CRM");
      }

      let sentByEmail = false;
      const smtpHost = process.env["SMTP_HOST"];
      const smtpUser = process.env["SMTP_USER"];
      const smtpPass = process.env["SMTP_PASS"];
      if (smtpHost && smtpUser && smtpPass) {
        try {
          const nodemailer = await import("nodemailer");
          const transporter = nodemailer.createTransport({
            host: process.env["SMTP_HOST"],
            port: Number(process.env["SMTP_PORT"] || 465),
            secure: true,
            auth: { user: process.env["SMTP_USER"], pass: process.env["SMTP_PASS"] },
          });
          await transporter.sendMail({
            from: `Site Opriun <${smtpUser}>`,
            to: process.env["CONTACT_EMAIL_TO"] || "contato@opriun.com.br",
            replyTo: data.email,
            subject: `Novo contato pelo site: ${data.nome} (${data.empresa})`,
            text: [
              `Nome: ${data.nome}`,
              `Empresa: ${data.empresa}`,
              `E-mail: ${data.email}`,
              `Telefone: ${data.telefone}`,
              "",
              "Mensagem:",
              data.mensagem,
            ].join("\n"),
          });
          sentByEmail = true;
        } catch (e) {
          console.error("[contato] falha ao enviar e-mail via SMTP", e);
        }
      } else {
        console.warn("[contato] SMTP não configurado (SMTP_HOST/SMTP_USER/SMTP_PASS); e-mail não enviado");
      }

      console.log("[contato] resultado", { savedLocally, sentToCrm, sentByEmail, crmUrl });
      if (!savedLocally && !sentToCrm && !sentByEmail) {
        throw new Error("Não foi possível registrar sua mensagem (banco, CRM e e-mail falharam).");
      }

      return { success: true as const };
    } catch (error) {
      console.error("[SERVER ERROR]:", error);
      console.error("STACK TRACE:", error instanceof Error ? error.stack : undefined);
      return {
        success: false as const,
        error: error instanceof Error ? error.message : String(error),
      };
    }
  });