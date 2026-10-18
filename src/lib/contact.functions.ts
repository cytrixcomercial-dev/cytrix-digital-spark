import { createServerFn } from "@tanstack/react-start";
import { getRequest, setResponseHeader } from "@tanstack/react-start/server";
import { z } from "zod";
import { contactSchema } from "./contact-schema";
import { shouldSendContactEmail, isContactDelivered } from "./contact-delivery-policy";

type Channels = Record<"banco" | "crm" | "email", string>;

// Thrown when the mandatory leads insert fails; carries only safe status tokens.
class DatabaseSaveError extends Error {
  constructor(public channels: Channels) {
    super("Falha ao salvar no banco de dados.");
  }
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => data)
  .handler(async ({ data: input }) => {
    const { getRequestId, safeErrorDetails, formErrorResponse } = await import("./request-diagnostics.server");
    const requestId = getRequestId(getRequest());
    setResponseHeader("X-Request-ID", requestId);
    const logPrefix = `[contato] [requestId=${requestId}]`;
    console.log(`${logPrefix} --- INICIANDO ENVIO DO FORMULÁRIO ---`);
    const channels: Channels = { banco: "nao_configurado", crm: "nao_enviado", email: "nao_enviado" };
    try {
      // Validate inside the catch boundary so validation failures also return an ID.
      const data = contactSchema.parse(input);

      // 1) PRIMEIRO: salvar na tabela leads (obrigatório).
      const databaseUrl = process.env["SUPABASE_URL"];
      const serviceRoleKey = process.env["SUPABASE_SERVICE_ROLE_KEY"];
      if (!databaseUrl || !serviceRoleKey) {
        console.error(`${logPrefix} ERRO AO SALVAR NO BANCO`, { code: "nao_configurado" });
        throw new DatabaseSaveError(channels);
      }
      const { insertContactLead, leadStatusToken, checkDatabaseUrl } = await import("./contact-leads.server");
      const urlProblem = checkDatabaseUrl(databaseUrl);
      if (urlProblem) {
        channels.banco = urlProblem;
        console.error(`${logPrefix} ERRO AO SALVAR NO BANCO`, { code: urlProblem });
        throw new DatabaseSaveError(channels);
      }
      let result;
      try {
        result = await insertContactLead(data, databaseUrl, serviceRoleKey);
      } catch (error) {
        channels.banco = safeErrorDetails(error).code;
        console.error(`${logPrefix} ERRO AO SALVAR NO BANCO`, { code: channels.banco });
        throw new DatabaseSaveError(channels);
      }
      channels.banco = leadStatusToken(result);
      if (result.error) {
        // Only the safe code is logged; raw errors may contain submitted data.
        console.error(`${logPrefix} ERRO AO SALVAR NO BANCO`, { code: channels.banco });
        throw new DatabaseSaveError(channels);
      }
      const savedLocally = true;

      // 2) CRM (opcional, só após o lead estar salvo).
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
          channels.crm = res.ok ? "ok" : `http_${res.status}`;
          if (!res.ok) console.error(`${logPrefix} CRM respondeu`, { status: res.status });
        } catch (e) {
          channels.crm = safeErrorDetails(e).code;
          console.error(`${logPrefix} falha ao enviar lead ao CRM`, safeErrorDetails(e));
        }
      } else {
        channels.crm = "nao_configurado";
      }

      // 3) E-mail de notificação (só após o lead estar salvo).
      const smtpHost = process.env["SMTP_HOST"];
      const smtpUser = process.env["SMTP_USER"];
      const smtpPass = process.env["SMTP_PASS"];
      if (shouldSendContactEmail(savedLocally) && smtpHost && smtpUser && smtpPass) {
        try {
          const nodemailer = await import("nodemailer");
          const transporter = nodemailer.createTransport({
            host: smtpHost.trim(),
            port: Number(process.env["SMTP_PORT"] || 465),
            secure: true,
            auth: { user: smtpUser.trim(), pass: smtpPass },
          });
          await transporter.sendMail({
            from: `Site Opriun <${smtpUser.trim()}>`,
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
          channels.email = "ok";
        } catch (e) {
          channels.email = safeErrorDetails(e).code;
          console.error(`${logPrefix} falha ao enviar e-mail via SMTP`, safeErrorDetails(e));
        }
      } else {
        channels.email = "nao_configurado";
      }

      console.log(`${logPrefix} resultado`, { channels });
      if (!isContactDelivered(savedLocally)) {
        return formErrorResponse(requestId, false, [], channels);
      }
      return { success: true as const, requestId };
    } catch (error) {
      if (error instanceof DatabaseSaveError) {
        return formErrorResponse(requestId, false, [], error.channels);
      }
      console.error(`${logPrefix} [SERVER ERROR]`, safeErrorDetails(error));
      const fields =
        error instanceof z.ZodError
          ? error.issues.flatMap((issue) => issue.path.map(String)).filter(Boolean)
          : undefined;
      return formErrorResponse(requestId, error instanceof z.ZodError, fields);
    }
  });
