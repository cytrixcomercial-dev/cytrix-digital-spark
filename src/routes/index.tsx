import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GitBranch,
  LineChart,
  ShieldCheck,
  Workflow,
  ArrowRight,
  Headset,
  Network,
  Target,
  FileSearch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/site/CtaSection";
import { AiDataBackground } from "@/components/site/AiDataBackground";
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
    icon: Headset,
    title: "Agentes Autônomos para Experiência do Cliente",
    text: "Atendimento omnichannel com IA contextual. Nossos agentes gerenciam chamados, classificam prioridades e interagem via WhatsApp com linguagem natural e empática, garantindo suporte contínuo e qualificado 24 horas por dia.",
  },
  {
    icon: Workflow,
    title: "Orquestração Inteligente de Workflows",
    text: "Elimine tarefas manuais e repetitivas. Projetamos fluxos de automação complexos com ferramentas de ponta (n8n e iPaaS), conectando dados, sistemas e equipes para que sua operação rode com máxima eficiência e mínima intervenção humana.",
  },
  {
    icon: Network,
    title: "Camada Unificadora de Dados e Sistemas Legados",
    text: "Quebre barreiras entre ERPs, CRMs, bancos de dados e APIs. Criamos uma infraestrutura de integração robusta que centraliza suas fontes de informação, permitindo que todos os departamentos operem a partir de uma base única e confiável.",
  },
  {
    icon: LineChart,
    title: "Painéis Estratégicos com Forecasting Preditivo",
    text: "Vá além da visualização estática. Desenvolvemos dashboards interativos alimentados por modelos de IA que monitoram indicadores em tempo real, detectam anomalias e geram previsões operacionais precisas para antecipar cenários.",
  },
  {
    icon: Target,
    title: "Qualificação Inteligente de Leads e Oportunidades",
    text: "Maximize seu funil comercial. Implementamos agentes de IA que analisam perfis de clientes, pontuam leads com base em comportamento histórico e sugerem rotas de abordagem personalizadas, acelerando o ciclo de vendas com dados concretos.",
  },
  {
    icon: FileSearch,
    title: "Extração Cognitiva e Processamento de Documentos",
    text: "Converta dados não estruturados em ativos estratégicos. Utilizamos visão computacional e NLP (Processamento de Linguagem Natural) para extrair informações de contratos, notas fiscais e formulários com alto grau de precisão e governança.",
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
      <AiDataBackground />
      <section className="glow-top border-border/70 border-b">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="eyebrow">CONSULTORIA CONSULTIVA</p>
            <h1 className="mt-5 text-4xl leading-[1.08] font-bold md:text-5xl lg:text-6xl">
              Dados e IA aplicados à <span className="text-gradient-brand">operação</span> do seu
              negócio
            </h1>
            <p className="text-muted-foreground mt-6 max-w-lg text-base leading-relaxed md:text-lg">
              Na Cytrix Data Consulting, potencializamos negócios por meio da automação inteligente de
              fluxos, da unificação de ecossistemas digitais e da implementação de agentes autônomos
              de IA. O resultado? Operações mais ágeis, insights mais precisos e um crescimento
              verdadeiramente escalável. Solicite agora um diagnóstico gratuito de IA.
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
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={heroImage}
                alt="Rede de dados conectados representando a plataforma analítica da Cytrix"
                width={1280}
                height={960}
                className="block w-full rounded-lg"
              />
              <svg
                viewBox="0 0 400 300"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full"
              >
                <g stroke="var(--brand-blue)" strokeWidth="1.2" fill="none" opacity="0.65">
                  <path d="M40 240 L120 170 L210 200 L300 120 L370 60" />
                  <path d="M40 90 L130 60 L210 200 L320 230" />
                  <path d="M130 60 L300 120" />
                </g>
                <g stroke="var(--brand-orange)" strokeWidth="2" fill="none" strokeLinecap="round">
                  <path
                    className="connector-flow"
                    d="M40 240 L120 170 L210 200 L300 120 L370 60"
                  />
                  <path
                    className="connector-flow connector-flow-delay-1"
                    d="M40 90 L130 60 L210 200 L320 230"
                  />
                  <path
                    className="connector-flow connector-flow-delay-2"
                    d="M130 60 L300 120"
                  />
                </g>
                <g fill="var(--brand-purple)">
                  {[
                    [40, 240],
                    [120, 170],
                    [210, 200],
                    [300, 120],
                    [370, 60],
                    [40, 90],
                    [130, 60],
                    [320, 230],
                  ].map(([cx, cy], i) => (
                    <circle
                      key={`${cx}-${cy}`}
                      cx={cx}
                      cy={cy}
                      r="4"
                      className="connector-node"
                      style={{ animationDelay: `${i * 0.35}s` }}
                    />
                  ))}
                </g>
              </svg>
            </div>
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
          <p className="eyebrow">SOLUÇÕES ORQUESTRADAS</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">
              Direcionamos IA & Dados para áreas que geram impacto real nos negócios.
            </h2>
            <Button asChild variant="outline">
              <Link to="/metodo">Conheça nosso método</Link>
            </Button>
          </div>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed">
            Projetamos arquiteturas personalizadas, com governança rigorosa, que desbloqueiam
            entraves reais do cotidiano operacional da sua empresa.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <article key={s.title} className="card-tech flex h-full flex-col p-8">
                <s.icon className="text-brand-blue size-6" />
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{s.text}</p>
                <Link
                  to="/solucoes"
                  className="text-brand-orange mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium"
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
