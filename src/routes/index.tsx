import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bot,
  Database,
  GitBranch,
  LineChart,
  ShieldCheck,
  Workflow,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/site/CtaSection";
import heroImage from "@/assets/hero-data.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cytrix Data Consulting — Dados e IA para sua operação" },
      {
        name: "description",
        content:
          "A Cytrix Data Consulting estrutura dados, automatiza processos e aplica IA para tornar a operação da sua empresa mais produtiva e escalável.",
      },
      { property: "og:title", content: "Cytrix Data Consulting — Dados e IA para sua operação" },
      {
        property: "og:description",
        content: "Engenharia de dados, analytics, governança e agentes de IA sob medida.",
      },
    ],
  }),
  component: Index,
});

const pains = [
  "Relatórios feitos manualmente em planilhas",
  "Indicadores divergentes entre áreas",
  "Sistemas que não conversam entre si",
  "Falta de visibilidade sobre os dados",
  "Retrabalho e processos repetitivos",
  "Dificuldade para escalar a operação",
];

const solutions = [
  {
    icon: Database,
    title: "Engenharia e arquitetura de dados",
    text: "Pipelines, data warehouse e modelagem que consolidam suas fontes em uma base única e confiável.",
  },
  {
    icon: LineChart,
    title: "Analytics e dashboards inteligentes",
    text: "Painéis em tempo real com indicadores que a diretoria e a operação realmente usam para decidir.",
  },
  {
    icon: Bot,
    title: "Agentes de IA aplicados ao negócio",
    text: "Atendimento, triagem e análise assistida por IA, com contexto dos seus próprios dados.",
  },
  {
    icon: Workflow,
    title: "Automação e integração de sistemas",
    text: "ERPs, CRMs, APIs e sistemas legados conectados em fluxos automatizados de ponta a ponta.",
  },
];

const metrics = [
  { label: "Pipelines ativos", value: "120+" },
  { label: "Redução de retrabalho", value: "+37%" },
  { label: "Disponibilidade", value: "99.8%" },
  { label: "Monitoramento", value: "24/7" },
];

function Index() {
  return (
    <>
      <section className="glow-top border-border/70 border-b">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="eyebrow">Consultoria de dados</p>
            <h1 className="mt-5 text-4xl leading-[1.08] font-bold md:text-5xl lg:text-6xl">
              Dados e IA aplicados à <span className="text-gradient-brand">operação</span> do seu
              negócio
            </h1>
            <p className="text-muted-foreground mt-6 max-w-lg text-base leading-relaxed md:text-lg">
              A Cytrix Data Consulting ajuda empresas a organizar dados, integrar sistemas e criar
              soluções de inteligência artificial para uma operação mais produtiva, inteligente e
              escalável.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contato">Solicitar diagnóstico de dados</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/equipe-de-dados">Conheça nossa equipe</Link>
              </Button>
            </div>

            <dl className="mt-12 grid grid-cols-4 gap-x-4 gap-y-5 sm:gap-x-6">
              {metrics.map((m) => (
                <div key={m.label} className="flex flex-col justify-end">
                  <dt className="text-muted-foreground font-mono text-[0.65rem] tracking-widest uppercase sm:text-[0.7rem]">
                    {m.label}
                  </dt>
                  <dd className="font-display mt-1 text-lg font-bold sm:text-xl">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="card-tech overflow-hidden p-2">
            <img
              src={heroImage}
              alt="Rede de dados conectados representando a plataforma analítica da Cytrix"
              width={1280}
              height={960}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">
          Sua operação ainda depende de processos manuais?
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed">
          A tecnologia deve servir ao negócio. Se sua equipe passa mais tempo organizando planilhas
          do que gerando valor, os dados mudam o jogo.
        </p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p) => (
            <li key={p} className="card-tech flex items-start gap-3 p-6">
              <GitBranch className="text-brand-purple mt-0.5 size-5 shrink-0" />
              <span className="text-sm leading-relaxed">{p}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-border/70 bg-surface/30 border-y">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <p className="eyebrow">Soluções conectadas</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">
              Aplicamos dados onde eles geram resultado prático
            </h2>
            <Button asChild variant="outline">
              <Link to="/metodo">Conheça nosso método</Link>
            </Button>
          </div>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed">
            Não vendemos hype. Entregamos soluções sob medida, com alta governança, que resolvem
            gargalos reais do dia a dia da sua empresa.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {solutions.map((s) => (
              <article key={s.title} className="card-tech p-8">
                <s.icon className="text-brand-blue size-6" />
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{s.text}</p>
                <Link
                  to="/solucoes"
                  className="text-brand-orange mt-5 inline-flex items-center gap-1.5 text-sm font-medium"
                >
                  Saiba mais <ArrowRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Governança em primeiro lugar",
              text: "Segurança, rastreabilidade e conformidade com LGPD em cada camada da arquitetura.",
            },
            {
              icon: Workflow,
              title: "Entrega em ciclos curtos",
              text: "Valor em semanas, não em anos. Cada sprint entrega algo utilizável pela operação.",
            },
            {
              icon: LineChart,
              title: "Foco em indicador de negócio",
              text: "Todo projeto nasce ligado a uma métrica de custo, receita ou produtividade.",
            },
          ].map((i) => (
            <div key={i.title}>
              <i.icon className="text-brand-orange size-6" />
              <h3 className="mt-4 text-lg font-semibold">{i.title}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{i.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
