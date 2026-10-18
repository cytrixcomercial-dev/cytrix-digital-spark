import { createClient } from "@supabase/supabase-js";

type ContactData = {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  mensagem: string;
};

const NETWORK_CODES = new Set(["ENOTFOUND", "EAI_AGAIN", "ECONNREFUSED", "ECONNRESET", "ETIMEDOUT", "UND_ERR_CONNECT_TIMEOUT", "CERT_HAS_EXPIRED", "UNABLE_TO_VERIFY_LEAF_SIGNATURE"]);
const DB_CODES = new Set(["23505", "42501", "42P01", "42703", "23502", "22P02", "PGRST204", "PGRST205", "PGRST301"]);

// Returns a fixed diagnostic token for the deployment URL, or null when usable.
// A dashboard address (supabase.com/dashboard/...) is a common misconfiguration.
export function checkDatabaseUrl(url: string): string | null {
  try {
    const parsed = new URL(url.trim());
    if (parsed.protocol !== "https:") return "url_invalida";
    if (parsed.hostname === "supabase.com" || parsed.hostname.endsWith(".supabase.com")) return "url_do_painel";
    if (parsed.pathname !== "/" && parsed.pathname !== "") return "url_invalida";
    return null;
  } catch {
    return "url_invalida";
  }
}

// The deployment's database schema is independent of the generated Cloud types.
export async function insertContactLead(
  data: ContactData,
  url: string,
  serviceRoleKey: string,
  fetcher: typeof fetch = fetch,
) {
  let networkCode: string | undefined;
  const client = createClient(url.trim().replace(/\/+$/, ""), serviceRoleKey.trim(), {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
    global: {
      fetch: async (input, init) => {
        const key = serviceRoleKey.trim();
        const headers = new Headers(init?.headers);
        if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
          headers.delete("Authorization");
        }
        headers.set("apikey", key);
        try {
          return await fetcher(input, { ...init, headers });
        } catch (error) {
          // Keep only a fixed token; network error messages may contain hosts or data.
          const cause = error && typeof error === "object" && "cause" in error ? (error as { cause?: { code?: unknown } }).cause : undefined;
          const code = typeof cause?.code === "string" ? cause.code : undefined;
          networkCode = code && NETWORK_CODES.has(code) ? code : "falha_rede";
          throw error;
        }
      },
    },
  });
  const result = await client
    .from("leads")
    .insert([
      {
        name: data.nome,
        company: data.empresa,
        email: data.email,
        phone: data.telefone,
        message: data.mensagem,
      },
    ])
    .select();
  return { ...result, networkCode };
}

// Maps an insert result to a safe channel status token ("ok" on success).
export function leadStatusToken(result: { error: unknown; status: number; networkCode?: string }): string {
  if (!result.error) return "ok";
  if (result.networkCode) return result.networkCode;
  const code = typeof result.error === "object" && result.error && "code" in result.error ? (result.error as { code?: unknown }).code : undefined;
  if (typeof code === "string" && DB_CODES.has(code)) return code;
  if (result.status === 401 || result.status === 403) return "chave_invalida";
  if (result.status > 0) return `http_${result.status}`;
  return "UNCLASSIFIED";
}
