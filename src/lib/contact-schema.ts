import { z } from "zod";
import { blockedFreeDomains } from "./email-corporate";

// Shared contact form schema. The phone rule accepts digits-only input
// (e.g. "4199890003") as well as masked formats like "(41) 99689-0003".
export const contactSchema = z.object({
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
  telefone: z
    .string()
    .trim()
    .min(1, "Informe o telefone")
    .max(40)
    .refine(
      (value) => {
        const digits = value.replace(/\D/g, "");
        return digits.length >= 8 && digits.length <= 15;
      },
      { message: "Informe um telefone válido com DDD (pode ser apenas números)." }
    ),
  mensagem: z.string().trim().min(10, "A mensagem deve ter pelo menos 10 caracteres.").max(2000),
});
