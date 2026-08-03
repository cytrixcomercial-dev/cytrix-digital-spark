import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/equipe-de-dados")({
  head: () =>
    pageHead({
      path: "/equipe-de-dados",
      title: "Equipe de Dados — Cytrix Data Consulting",
      description: "Um time sob demanda de engenheiros de dados, analistas, especialistas em IA e governança à disposição da sua operação.",
      ogTitle: "Equipe de Dados — Cytrix Data Consulting",
      ogDescription: "Squad de dados sob demanda, sem o custo de montar um time interno.",
    }),
  component: EquipePage,
});

const roles = [
  {
    title: "Engenheiro de Dados",
    text: "Constrói e mantém pipelines, integrações e o modelo de dados corporativo.",
    skills: ["SQL", "Python", "Orquestração", "Cloud"],
  },
  {
    title: "Analista de BI",
    text: "Traduz necessidades de negócio em indicadores e painéis confiáveis.",
    skills: ["Modelagem", "Dashboards", "KPIs", "Storytelling"],
  },
  {
    title: "Especialista em IA",
    text: "Desenha agentes, modelos e automações apoiados nos seus próprios dados.",
    skills: ["LLMs", "RAG", "Machine Learning", "Avaliação"],
  },
  {
    title: "Arquiteto de Dados",
    text: "Define a arquitetura alvo, padrões técnicos e o roadmap de evolução.",
    skills: ["Arquitetura", "Cloud", "Custos", "Escalabilidade"],
  },
  {
    title: "Especialista em Governança",
    text: "Cuida de catálogo, linhagem, acessos e conformidade com a LGPD.",
    skills: ["LGPD", "Catálogo", "Linhagem", "Segurança"],
  },
  {
    title: "Líder de Projeto",
    text: "Garante ritmo, prioridade e comunicação entre o squad e o seu time.",
    skills: ["Discovery", "Sprints", "Riscos", "Reporting"],
  },
];

function EquipePage() {
  return (
    <>
      <section className="glow-top border-border/70 border-b">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <p className="eyebrow">Equipe de dados</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold md:text-5xl">
            Um squad de dados <span className="text-gradient-brand">sob demanda</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
            Você acessa perfis especializados na medida certa do projeto, sem o custo e o tempo de
            montar uma estrutura interna do zero.
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

      <CtaSection
        eyebrow="Monte seu squad"
        title="Qual combinação de perfis sua operação precisa agora?"
        text="Definimos juntos o tamanho do time, o ritmo de entrega e o modelo de contratação mais adequado."
      />
    </>
  );
}