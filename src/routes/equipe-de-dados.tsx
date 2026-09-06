import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/equipe-de-dados")({
  head: () =>
    pageHead({
      path: "/equipe-de-dados",
      title: "Equipe de dados e IA — Opriun",
      description: "Squads sob demanda de engenheiros de dados, analistas, cientistas de dados e especialistas em IA para acelerar a transformação digital da sua operação.",
      ogTitle: "Equipe de dados e IA — Opriun",
      ogDescription: "Monte um time de Dados & IA sob demanda, sem o custo de estrutura interna.",
    }),
  component: EquipePage,
});

const roles = [
  {
    title: "Engenheiro de Dados",
    text: "Constrói pipelines escaláveis, integra fontes heterogêneas e garante a qualidade e governança dos dados que alimentam modelos e painéis.",
    skills: ["SQL", "Python", "Orquestração", "Cloud"],
  },
  {
    title: "Analista de BI",
    text: "Transforma dados em visão de negócio, criando indicadores, dashboards e narrativas que orientam decisões em todas as áreas da empresa.",
    skills: ["Modelagem", "Dashboards", "KPIs", "Storytelling"],
  },
  {
    title: "Cientista de Dados",
    text: "Desenvolve modelos preditivos e algoritmos que revelam padrões, antecipam cenários e suportam decisões baseadas em evidências.",
    skills: ["Machine Learning", "Estatística", "Python", "Modelagem"],
  },
  {
    title: "Especialista em IA",
    text: "Projeta agentes autônomos, sistemas com LLMs, RAG e automações inteligentes conectadas aos dados e processos do seu negócio.",
    skills: ["LLMs", "RAG", "Agentes autônomos", "Avaliação"],
  },
  {
    title: "Arquiteto de Dados & IA",
    text: "Define a arquitetura de dados e IA, padrões técnicos, segurança e o roadmap de evolução para escala e performance.",
    skills: ["Arquitetura", "Cloud", "Custos", "Escalabilidade"],
  },
  {
    title: "Especialista em Governança",
    text: "Cuida de catálogo, linhagem, acessos, qualidade e conformidade com a LGPD, garantindo dados confiáveis e auditáveis.",
    skills: ["LGPD", "Catálogo", "Linhagem", "Segurança"],
  },
];

const differentials = [
  {
    title: "Integração Dados + IA",
    text: "Nossos squads unificam pipelines de dados e modelos de IA em um mesmo fluxo de entrega, eliminando silos entre equipes.",
  },
  {
    title: "Escalabilidade sob demanda",
    text: "Aumente ou reduza o time conforme a fase do projeto, do discovery à operação contínua, sem burocracia de contratações.",
  },
  {
    title: "Entrega orientada a resultado",
    text: "Cada perfil é alocado com objetivos claros, métricas de sucesso e ritmo de entregas alinhado às prioridades do negócio.",
  },
];

function EquipePage() {
  return (
    <>
      <section className="glow-top border-border/70 border-b">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <p className="eyebrow">Equipe de dados e IA</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold md:text-5xl">
            Squads de <span className="text-gradient-brand">Dados & IA</span> sob demanda
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
            Monte um time multidisciplinar de engenheiros, analistas, cientistas de dados e
            especialistas em IA na medida certa da sua operação — sem o custo e o tempo de montar
            uma estrutura interna do zero.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((r) => (
            <article key={r.title} className="card-tech p-8">
              <h2 className="text-lg font-semibold">{r.title}</h2>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{r.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {r.skills.map((s) => (
                  <span
                    key={s}
                    className="border-border/80 bg-surface-2/60 text-muted-foreground rounded-full border px-3 py-1 font-mono text-[0.68rem] tracking-wide"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-border/70 border-y bg-surface/30">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow">Por que um squad de Dados & IA</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Dados e IA trabalhando <span className="text-gradient-brand">juntos</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {differentials.map((d) => (
              <article key={d.title} className="card-tech p-8">
                <h3 className="text-lg font-semibold">{d.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{d.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Monte seu squad"
        title="Qual combinação de perfis de Dados & IA sua operação precisa agora?"
        text="Definimos juntos o tamanho do time, o ritmo de entrega e o modelo de contratação mais adequado ao seu projeto."
      />
    </>
  );
}
