import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { CtaSection } from "@/components/site/CtaSection";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/agentes-de-ia")({
  head: () =>
    pageHead({
      path: "/agentes-de-ia",
      title: "Agentes de IA — Cytrix Data Consulting",
      description: "Vitrine viva de agentes de IA em operação: comercial, financeiro, TI, atendimento, operações e dados, com casos de uso e integrações reais.",
      ogTitle: "Agentes de IA — Cytrix Data Consulting",
      ogDescription: "Agentes digitais com papel, caso de uso e integrações — IA operacional conectada aos sistemas da empresa.",
    }),
  component: AgentesPage,
});

const agents = [
  {
    name: "Ana",
    role: "Agente comercial",
    summary: "Transforma leads soltos em oportunidades qualificadas, com follow-up e agenda.",
    useCase: "Pré-venda B2B que não deixa lead esfriar",
    detail:
      "Lê formulários, WhatsApp e CRM, qualifica intenção, identifica urgência e aciona o vendedor certo com contexto pronto.",
    result: "Mais velocidade na resposta e menos oportunidades perdidas.",
    integrations: ["CRM", "WhatsApp", "E-mail", "Calendário"],
  },
  {
    name: "Ralf",
    role: "Agente financeiro",
    summary: "Organiza cobranças, conciliação e pendências antes que virem retrabalho.",
    useCase: "Backoffice financeiro com fila priorizada",
    detail:
      "Classifica boletos, notas e pagamentos, aponta divergências e prepara mensagens de cobrança com o tom adequado.",
    result: "Redução de tarefas manuais e previsibilidade de caixa.",
    integrations: ["ERP", "Banco", "Planilhas", "E-mail"],
  },
  {
    name: "Stive",
    role: "Agente de TI",
    summary: "Resolve chamados simples e documenta incidentes com rastreabilidade.",
    useCase: "Service desk N1 que atende 24/7",
    detail:
      "Triagem de chamados, reset de senha, consulta à base de conhecimento e encaminhamento para especialistas.",
    result: "Menos interrupções para o time técnico e SLA mais previsível.",
    integrations: ["Help desk", "AD/SSO", "Base de conhecimento", "Slack/Teams"],
  },
  {
    name: "Laura",
    role: "Agente de atendimento",
    summary: "Atende clientes com contexto, histórico e padrão de resposta consistente.",
    useCase: "Suporte ao cliente com triagem inteligente",
    detail:
      "Entende a solicitação, busca status em sistemas, responde dúvidas recorrentes e transfere casos sensíveis.",
    result: "Mais resolução no primeiro contato sem perder o controle humano.",
    integrations: ["WhatsApp", "Zendesk", "ERP", "Base de FAQ"],
  },
  {
    name: "Lana",
    role: "Agente de operações",
    summary: "Acompanha pedidos, estoque, entregas e exceções operacionais em tempo real.",
    useCase: "Torre de controle para pedidos e logística",
    detail:
      "Cruza pedidos, estoque e transporte, detecta risco de atraso e avisa clientes ou operadores com antecedência.",
    result: "Menos urgência reativa e mais controle sobre exceções.",
    integrations: ["ERP", "WMS", "TMS", "Portal do cliente"],
  },
  {
    name: "Edu",
    role: "Agente de dados",
    summary: "Transforma bases dispersas em leitura executiva e próximos passos claros.",
    useCase: "Análise de operação em linguagem de negócio",
    detail:
      "Consolida planilhas, identifica padrões, explica variações e gera recomendações para gestores.",
    result: "Decisão mais rápida com dados que a liderança entende.",
    integrations: ["BI", "Data warehouse", "Planilhas", "CRM"],
  },
];

const steps = [
  "Diagnóstico de processos e dados",
  "MVP com um agente prioritário",
  "Integração com os sistemas da empresa",
  "Governança, métricas e evolução contínua",
];

function AgentesPage() {
  return (
    <>
      <section className="glow-top border-border/70 border-b">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <p className="eyebrow">Agentes de IA em operação</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold md:text-5xl">
            Uma vitrine viva do que a IA pode fazer{" "}
            <span className="text-gradient-brand">dentro da empresa</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
            Em vez de mostrar ferramentas soltas, apresentamos agentes digitais com papel, caso de
            uso, integrações e resultado esperado na operação.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#agentes">Conhecer os agentes</a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contato">Conversar com especialista</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {agents.slice(0, 3).map((a) => (
              <div
                key={a.name}
                className="border-border/80 bg-surface-2/60 flex items-center gap-3 rounded-full border py-1.5 pr-4 pl-1.5"
              >
                <span className="bg-gradient-brand text-primary-foreground flex size-9 items-center justify-center rounded-full font-display text-sm font-semibold">
                  {a.name.slice(0, 2).toUpperCase()}
                </span>
                <span className="text-sm">{a.name}</span>
              </div>
            ))}
            <span className="text-muted-foreground font-mono text-xs tracking-wide">
              IA operacional conectada aos casos do negócio
            </span>
          </div>
        </div>
      </section>

      <section id="agentes" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
        <p className="eyebrow">Casos de uso</p>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">Agentes com uma missão clara</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-relaxed md:text-base">
          Cada agente existe para atacar um gargalo comum das empresas: fila, retrabalho, falta de
          contexto, baixa visibilidade ou demora de resposta.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {agents.map((a) => (
            <article key={a.name} className="card-tech flex h-full flex-col p-8">
              <div className="flex items-center gap-3">
                <span className="bg-gradient-brand text-primary-foreground flex size-11 items-center justify-center rounded-full font-display text-base font-semibold">
                  {a.name.slice(0, 2).toUpperCase()}
                </span>
                <div>
                  <p className="text-brand-orange font-mono text-[0.68rem] tracking-widest uppercase">
                    {a.role}
                  </p>
                  <h3 className="text-lg font-semibold">{a.name}</h3>
                </div>
              </div>

              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{a.summary}</p>

              <p className="mt-5 text-sm font-semibold">{a.useCase}</p>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{a.detail}</p>
              <p className="text-brand-orange mt-3 text-sm leading-relaxed">{a.result}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {a.integrations.map((i) => (
                  <span
                    key={i}
                    className="border-border/80 bg-surface-2/60 text-muted-foreground rounded-full border px-3 py-1 font-mono text-[0.68rem] tracking-wide"
                  >
                    {i}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link to="/contato">Saiba mais</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-border/70 bg-surface/40 border-y">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">Como isso vira projeto</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold md:text-4xl">
            Da vitrine para a IA trabalhando de verdade
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-relaxed md:text-base">
            A demonstração é só a porta de entrada. Em um projeto real, conectamos fontes de dados,
            definimos permissões, criamos fluxos de aprovação e medimos resultado por área da
            operação.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s} className="card-tech p-6">
                <span className="text-gradient-brand font-display text-2xl font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-sm leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Agentes de IA"
        title="Qual agente resolveria o maior gargalo da sua operação hoje?"
        text="Mapeamos o processo, definimos o agente prioritário e colocamos a IA em produção conectada aos seus sistemas."
      />
    </>
  );
}