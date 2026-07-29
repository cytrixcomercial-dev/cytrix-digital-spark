import { createFileRoute } from "@tanstack/react-router";
import { Bot, Database, LineChart, Workflow, ShieldCheck, Boxes } from "lucide-react";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/solucoes")({
  head: () => ({
    meta: [
      { title: "Soluções em dados e IA — Cytrix Data Consulting" },
      {
        name: "description",
        content:
          "Engenharia de dados, analytics, agentes de IA, automação de processos e governança de dados sob medida para sua empresa.",
      },
      { property: "og:title", content: "Soluções em dados e IA — Cytrix Data Consulting" },
      {
        property: "og:description",
        content: "Do pipeline ao painel executivo: soluções de dados com governança.",
      },
    ],
  }),
  component: SolucoesPage,
});

const items = [
  {
    icon: Database,
    title: "Engenharia de dados",
    text: "Ingestão, tratamento e modelagem de dados em pipelines confiáveis e monitorados.",
    bullets: ["Data warehouse e lakehouse", "ETL/ELT orquestrado", "Qualidade e testes de dados"],
  },
  {
    icon: LineChart,
    title: "Analytics e BI",
    text: "Painéis executivos e operacionais conectados a uma camada semântica única.",
    bullets: ["Dashboards em tempo real", "KPIs padronizados", "Análises preditivas"],
  },
  {
    icon: Bot,
    title: "Agentes de IA",
    text: "Assistentes que consultam seus dados e apoiam atendimento, vendas e back-office.",
    bullets: ["RAG sobre base própria", "Atendimento via WhatsApp", "Copilotos internos"],
  },
  {
    icon: Workflow,
    title: "Automação de processos",
    text: "Fluxos automatizados que eliminam tarefas repetitivas entre áreas e sistemas.",
    bullets: ["Orquestração de fluxos", "Alertas e aprovações", "Robôs de rotina"],
  },
  {
    icon: Boxes,
    title: "Integração de sistemas",
    text: "ERPs, CRMs, APIs e bases legadas conectados em uma operação centralizada.",
    bullets: ["APIs e webhooks", "Sincronização entre sistemas", "Migrações assistidas"],
  },
  {
    icon: ShieldCheck,
    title: "Governança e LGPD",
    text: "Catálogo, linhagem e controle de acesso para dados seguros e auditáveis.",
    bullets: ["Catálogo de dados", "Controle de acesso", "Trilhas de auditoria"],
  },
];

function SolucoesPage() {
  return (
    <>
      <section className="glow-top border-border/70 border-b">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <p className="eyebrow">Soluções</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold md:text-5xl">
            Do dado bruto à <span className="text-gradient-brand">decisão</span> do negócio
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
            Cada frente é desenhada sob medida para o seu contexto — sempre com governança,
            documentação e transferência de conhecimento para o seu time.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <article key={i.title} className="card-tech p-8">
              <i.icon className="text-brand-blue size-6" />
              <h2 className="mt-5 text-lg font-semibold">{i.title}</h2>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{i.text}</p>
              <ul className="mt-5 space-y-2">
                {i.bullets.map((b) => (
                  <li key={b} className="text-muted-foreground flex items-center gap-2 text-sm">
                    <span className="bg-brand-orange size-1.5 rounded-full" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CtaSection
        eyebrow="Vamos conversar"
        title="Qual gargalo de dados você quer resolver primeiro?"
        text="Em uma conversa de 30 minutos mapeamos o cenário atual e indicamos o caminho mais curto até o resultado."
      />
    </>
  );
}