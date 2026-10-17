import { createServerFn } from "@tanstack/react-start";
import { getRequest, setResponseHeader } from "@tanstack/react-start/server";
import { z } from "zod";
import { contactSchema } from "./contact-schema";

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => data)
  .handler(async ({ data: input }) => {
    const { getRequestId, safeErrorDetails, formErrorResponse } = await import("./request-diagnostics.server");
    const requestId = getRequestId(getRequest());
    setResponseHeader("X-Request-ID", requestId);
    const logPrefix = `[contato] [requestId=${requestId}]`;
    console.log(`${logPrefix} --- INICIANDO ENVIO DO FORMULÁRIO ---`);
    try {
      // Validate inside the catch boundary so validation failures also return an ID.
      const data = contactSchema.parse(input);
      let savedLocally = false;
      const databaseUrl = process.env["SUPABASE_URL"];
      const serviceRoleKey = process.env["SUPABASE_SERVICE_ROLE_KEY"];
      if (serviceRoleKey && databaseUrl) {
        try {
          const { insertContactLead } = await import("./contact-leads.server");
          const { error } = await insertContactLead(data, databaseUrl, serviceRoleKey);
          if (error) console.error(`${logPrefix} falha ao salvar lead`, safeErrorDetails(error));
          else savedLocally = true;
        } catch (error) {
          console.error(`${logPrefix} falha ao salvar lead`, safeErrorDetails(error));
        }
      } else {
        console.warn(`${logPrefix} banco local não configurado; seguindo com outros canais`);
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
          if (!res.ok) console.error(`${logPrefix} CRM respondeu`, { status: res.status });
          else sentToCrm = true;
        } catch (e) {
          console.error(`${logPrefix} falha ao enviar lead ao CRM`, safeErrorDetails(e));
        }
      } else {
        console.warn(`${logPrefix} CRM não configurado; lead não enviado ao CRM`);
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
          console.error(`${logPrefix} falha ao enviar e-mail via SMTP`, safeErrorDetails(e));
        }
      } else {
        console.warn(`${logPrefix} SMTP não configurado; e-mail não enviado`);
      }

      console.log(`${logPrefix} resultado`, { savedLocally, sentToCrm, sentByEmail });
      if (!savedLocally && !sentToCrm && !sentByEmail) {
        throw new Error("Não foi possível registrar sua mensagem (banco, CRM e e-mail falharam).");
      }

      return { success: true as const, requestId };
    } catch (error) {
      console.error(`${logPrefix} [SERVER ERROR]`, safeErrorDetails(error));
      const fields =
        error instanceof z.ZodError
          ? error.issues.flatMap((issue) => issue.path.map(String)).filter(Boolean)
          : undefined;
      return formErrorResponse(requestId, error instanceof z.ZodError, fields);
    }
  });