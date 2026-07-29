import { createFileRoute } from "@tanstack/react-router";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/metodo")({
  head: () => ({
    meta: [
      { title: "Método Cytrix — Diagnóstico, arquitetura e escala" },
      {
        name: "description",
        content:
          "Conheça o método da Cytrix Data Consulting: diagnóstico, arquitetura, implementação, governança e escala em ciclos curtos.",
      },
      { property: "og:title", content: "Método Cytrix — Diagnóstico, arquitetura e escala" },
      {
        property: "og:description",
        content: "Cinco etapas para transformar dados em resultado operacional.",
      },
    ],
  }),
  component: MetodoPage,
});

const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    text: "Mapeamos fontes de dados, processos, sistemas e indicadores. Saída: relatório de oportunidades priorizadas por impacto e esforço.",
  },
  {
    n: "02",
    title: "Arquitetura",
    text: "Desenhamos a arquitetura de dados alvo, o modelo de governança e o roadmap de implementação em ondas.",
  },
  {
    n: "03",
    title: "Implementação",
    text: "Construímos pipelines, integrações, painéis e agentes de IA em sprints curtos, com entregas utilizáveis a cada ciclo.",
  },
  {
    n: "04",
    title: "Governança",
    text: "Documentação, catálogo, controle de acesso e monitoramento contínuo da qualidade dos dados.",
  },
  {
    n: "05",
    title: "Escala e transferência",
    text: "Capacitamos o time interno, expandimos casos de uso e mantemos a operação evoluindo com segurança.",
  },
];

function MetodoPage() {
  return (
    <>
      <section className="glow-top border-border/70 border-b">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <p className="eyebrow">Método</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold md:text-5xl">
            Um caminho <span className="text-gradient-brand">previsível</span> para dados que
            geram resultado
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
            Nenhum projeto começa pela ferramenta. Começa pelo problema de negócio, pelos dados
            disponíveis e pela métrica que precisa mudar.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20">
        <ol className="border-border/70 space-y-10 border-l pl-8">
          {steps.map((s) => (
            <li key={s.n} className="relative">
              <span className="bg-gradient-brand absolute top-1.5 -left-[41px] size-4 rounded-full" />
              <span className="text-brand-orange font-mono text-xs tracking-widest">{s.n}</span>
              <h2 className="mt-2 text-xl font-semibold">{s.title}</h2>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaSection
        eyebrow="Comece pelo diagnóstico"
        title="Duas semanas para enxergar sua operação de dados por inteiro"
        text="O diagnóstico entrega um mapa de fontes, riscos e oportunidades priorizadas — mesmo que você não siga com a implementação conosco."
      />
    </>
  );
}