import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { useState } from "react";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendContactMessage } from "@/lib/contact.functions";
import { isCorporateEmail } from "@/lib/email-corporate";

export const Route = createFileRoute("/seja-um-representante-comercial")({
  head: () =>
    pageHead({
      path: "/seja-um-representante-comercial",
      title: "Seja um Representante Comercial — Opriun",
      description: "Torne-se representante comercial da Opriun e leve soluções de dados, BI e IA para o seu mercado.",
      ogTitle: "Seja um Representante Comercial — Opriun",
      ogDescription: "Represente a Opriun na sua região e construa oportunidades com dados, BI e agentes de IA.",
    }),
  component: SejaRepresentantePage,
});

function SejaRepresentantePage() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const submit = useServerFn(sendContactMessage);

  return (
    <>
      <section className="glow-top border-border/70 border-b">
        <div className="mx-auto max-w-4xl px-5 py-20 md:py-24">
          <p className="eyebrow">Parceria Comercial</p>
          <h1 className="mt-5 text-4xl font-bold md:text-5xl">
            Seja um <span className="text-gradient-brand">Representante Comercial</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-sm leading-relaxed">
            Leve para o seu mercado um portfólio de consultoria em dados, Business Intelligence,
            qualidade de dados e agentes autônomos de IA. Oferecemos suporte técnico, materiais de
            venda e comissões atrativas para quem quer crescer junto com a gente.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            <div className="card-tech p-7">
              <h2 className="text-base font-semibold">Por que representar a Opriun?</h2>
              <ul className="text-muted-foreground mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed">
                <li>Portfólio completo de dados, BI e IA para diferentes segmentos.</li>
                <li>Suporte técnico e comercial durante todo o ciclo de venda.</li>
                <li>Propostas sob medida e metodologia validada em operações reais.</li>
                <li>Contrato claro, comissionamento e NDA de proteção comercial.</li>
              </ul>
            </div>

            <div className="card-tech p-7">
              <h2 className="text-base font-semibold">Quem pode se candidatar</h2>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                Consultores independentes, empresas de tecnologia, integradoras de sistemas,
                escritórios comerciais e profissionais de vendas B2B que atuam com transformação
                digital, dados e inovação operacional.
              </p>
            </div>
          </div>

          <form
            className="card-tech space-y-5 p-8"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const fd = new FormData(form);
              const email = String(fd.get("email") ?? "");

              if (!isCorporateEmail(email)) {
                toast.error("Por favor, informe um e-mail corporativo.");
                return;
              }

              const origem = "[Seja um Representante Comercial]";
              const mensagem = `${origem}\n\nRegião de atuação: ${String(
                fd.get("regiao") ?? ""
              )}\n\n${String(fd.get("mensagem") ?? "")}`;

              setSending(true);
              try {
                await submit({
                  data: {
                    nome: String(fd.get("nome") ?? ""),
                    empresa: String(fd.get("empresa") ?? ""),
                    email,
                    telefone: String(fd.get("telefone") ?? ""),
                    mensagem,
                  },
                });
                form.reset();
                setSent(true);
                toast.success("Solicitação enviada! Nossa equipe entrará em contato em breve.");
              } catch (error) {
                console.error(error);
                toast.error("Não foi possível enviar. Tente novamente em instantes.");
              } finally {
                setSending(false);
              }
            }}
          >
            <div className="space-y-1">
              <h2 className="text-lg font-semibold">Candidate-se</h2>
              <p className="text-muted-foreground text-xs">* campos obrigatórios</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nome">
                  Nome completo <span aria-hidden="true" className="text-brand-orange">*</span>
                </Label>
                <Input id="nome" name="nome" required placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="empresa">
                  Empresa <span aria-hidden="true" className="text-brand-orange">*</span>
                </Label>
                <Input id="empresa" name="empresa" required placeholder="Nome da empresa" />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">
                  E-mail corporativo <span aria-hidden="true" className="text-brand-orange">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="voce@empresa.com"
                />
                <p className="text-muted-foreground text-xs">
                  Não aceitamos e-mails gratuitos (Gmail, Hotmail, etc.).
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefone">
                  Telefone / WhatsApp <span aria-hidden="true" className="text-brand-orange">*</span>
                </Label>
                <Input id="telefone" name="telefone" required placeholder="(11) 99999-0000" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="regiao">
                Cidade / Região de atuação <span aria-hidden="true" className="text-brand-orange">*</span>
              </Label>
              <Input id="regiao" name="regiao" required placeholder="Onde você atua" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensagem">
                Como podemos ajudar? <span aria-hidden="true" className="text-brand-orange">*</span>
              </Label>
              <Textarea
                id="mensagem"
                name="mensagem"
                required
                rows={5}
                placeholder="Conte um pouco sobre sua experiência comercial e o mercado que você atua"
              />
            </div>

            <Button type="submit" size="lg" disabled={sending}>
              {sending ? "Enviando..." : "Quero ser representante"}
            </Button>

            {sent && (
              <p
                role="status"
                className="border-border/70 bg-surface/60 text-muted-foreground rounded-lg border p-4 text-sm"
              >
                Recebemos sua solicitação — nossa equipe responde em até um dia útil nos e-mails
                cadastrados.
              </p>
            )}
          </form>
        </div>
      </article>
    </>
  );
}
