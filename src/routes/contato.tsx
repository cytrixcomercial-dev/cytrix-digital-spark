import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendContactMessage } from "@/lib/contact.functions";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Cytrix Data Consulting" },
      {
        name: "description",
        content:
          "Fale com a Cytrix Data Consulting e solicite um diagnóstico de dados para a sua operação.",
      },
      { property: "og:title", content: "Contato — Cytrix Data Consulting" },
      {
        property: "og:description",
        content: "Solicite um diagnóstico de dados e IA para sua empresa.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const submit = useServerFn(sendContactMessage);

  return (
    <>
      <section className="glow-top border-border/70 border-b">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <p className="eyebrow">Contato</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold md:text-5xl">
            Solicite seu <span className="text-gradient-brand">diagnóstico</span> de dados
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
            Conte um pouco sobre o seu cenário. Respondemos em até um dia útil com os próximos
            passos.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.4fr_1fr]">
        <form
          className="card-tech space-y-5 p-8"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const fd = new FormData(form);
            setSending(true);
            try {
              await submit({
                data: {
                  nome: String(fd.get("nome") ?? ""),
                  empresa: String(fd.get("empresa") ?? ""),
                  email: String(fd.get("email") ?? ""),
                  telefone: String(fd.get("telefone") ?? ""),
                  mensagem: String(fd.get("mensagem") ?? ""),
                },
              });
              form.reset();
              setSent(true);
              toast.success("Mensagem enviada! Entraremos em contato em breve.");
            } catch (error) {
              console.error(error);
              toast.error("Não foi possível enviar. Tente novamente em instantes.");
            } finally {
              setSending(false);
            }
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" name="nome" required placeholder="Seu nome" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="empresa">Empresa</Label>
              <Input id="empresa" name="empresa" placeholder="Nome da empresa" />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" name="email" type="email" required placeholder="voce@empresa.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefone">Telefone</Label>
              <Input id="telefone" name="telefone" placeholder="(11) 99999-0000" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="mensagem">Como podemos ajudar?</Label>
            <Textarea
              id="mensagem"
              name="mensagem"
              required
              rows={5}
              placeholder="Descreva o desafio de dados da sua operação"
            />
          </div>
          <Button type="submit" size="lg" disabled={sending}>
            {sending ? "Enviando..." : "Enviar mensagem"}
          </Button>
          {sent && (
            <p
              role="status"
              className="border-border/70 bg-surface/60 text-muted-foreground rounded-lg border p-4 text-sm"
            >
              Recebemos sua mensagem — nossa equipe responde em até um dia útil nos e-mails
              cadastrados.
            </p>
          )}
        </form>

        <aside className="space-y-6">
          <div className="card-tech p-7">
            <h2 className="text-base font-semibold">Canais diretos</h2>
            <ul className="text-muted-foreground mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail className="text-brand-orange size-4" />
                <a href="mailto:comercial@cytrix.com.br" className="hover:text-foreground transition-colors">
                  comercial@cytrix.com.br
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="text-brand-orange size-4" />
                <a
                  href="https://wa.me/5541996890003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  +55 41 99689-0003
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="text-brand-orange mt-0.5 size-4 shrink-0" />
                <span>Avenida Vicente Machado, 520 - Centro, Curitiba - PR, CEP 80.420-010</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Linkedin className="text-brand-orange size-4" />
                <a
                  href="https://www.linkedin.com/company/cytrix-data-consulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  /cytrix-data-consulting
                </a>
              </li>
            </ul>
          </div>
          <div className="card-tech p-7">
            <h2 className="text-base font-semibold">O que acontece depois</h2>
            <ol className="text-muted-foreground mt-4 space-y-3 text-sm leading-relaxed">
              <li>1. Conversa inicial de 30 minutos para entender o contexto.</li>
              <li>2. Mapeamento rápido de fontes, sistemas e indicadores.</li>
              <li>3. Proposta com escopo, prazos e resultado esperado.</li>
            </ol>
          </div>
        </aside>
      </section>
    </>
  );
}