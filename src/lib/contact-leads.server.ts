import { createClient } from "@supabase/supabase-js";

type ContactData = {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  mensagem: string;
};

// The deployment's database schema is independent of the generated Cloud types.
export async function insertContactLead(
  data: ContactData,
  url: string,
  serviceRoleKey: string,
  fetcher: typeof fetch = fetch,
) {
  const client = createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
    global: {
      fetch: (input, init) => {
        const headers = new Headers(init?.headers);
        if (serviceRoleKey.startsWith("sb_") && headers.get("Authorization") === `Bearer ${serviceRoleKey}`) {
          headers.delete("Authorization");
        }
        headers.set("apikey", serviceRoleKey);
        return fetcher(input, { ...init, headers });
      },
    },
  });
  return client.from("leads").insert({
    name: data.nome,
    company: data.empresa,
    email: data.email,
    phone: data.telefone,
    message: data.mensagem,
  });
}