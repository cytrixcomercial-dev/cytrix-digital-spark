import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Target,
  Users,
  Zap,
  ShieldCheck,
  Globe,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/site/CtaSection";
import { AiDataBackground } from "@/components/site/AiDataBackground";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Cytrix Data Consulting" },
      {
        name: "description",
        content:
          "Conheça a Cytrix Data Consulting: nossa missão, valores e equipe de especialistas em dados, IA e automação.",
      },
      { property: "og:title", content: "Quem Somos — Cytrix Data Consulting" },
      {
        property: "og:description",
        content:
          "Especialistas em transformar dados e IA em resultados operacionais reais para empresas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuemSomosPage,
});

const values = [
  {
    icon: Target,
    title: "Foco em resultado",
    text: "Não entregamos tecnologia por entregar. Cada projeto começa e termina no impacto mensurável para o negócio.",
  },
  {
    icon: Users,
    title: "Parceria de verdade",
    text: "Trabalhamos lado a lado com seus times, transferindo conhecimento e garantindo autonomia operacional.",
  },
  {
    icon: Zap,
    title: "Agilidade com governança",
    text: "Ciclos curtos de entrega sem abrir mão da segurança, documentação e conformidade dos dados.",
  },
  {
    icon: ShieldCheck,
    title: "Ética e transparência",
    text: "Modelos explicáveis, dados tratados com responsabilidade e comunicação clara em cada etapa.",
  },
  {
    icon: Globe,
    title: "Visão de ecossistema",
    text: "Conectamos pessoas, processos e sistemas para criar uma arquitetura de dados sustentável.",
  },
  {
    icon: Rocket,
    title: "Inovação aplicada",
    text: "Testamos novas tecnologias de forma segura, priorizando o que já gera valor hoje.",
  },
];

const stats = [
  { value: "120+", label: "Pipelines ativos" },
  { value: "+37%", label: "Redução média de retrabalho" },
  { value: "99.8%", label: "Disponibilidade das soluções" },
  { value: "24/7", label: "Monitoramento contínuo" },
];

function QuemSomosPage() {
  return (
    <>
      <AiDataBackground />
      <section className="glow-top border-b border-border/70">
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
          <p className="eyebrow">Quem Somos</p>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.08] font-bold md:text-5xl lg:text-6xl">
            Dados e IA com propósito:{" "}
            <span className="text-gradient-brand">transformar operações</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
            A Cytrix Data Consulting nasceu da convicção de que tecnologia só vale quando resolve
            problemas reais. Reunimos engenheiros de dados, cientistas, arquitetos de IA e
            especialistas em negócios para ajudar empresas a operar com mais clareza, velocidade e
            inteligência.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contato">
                Falar com um especialista <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/equipe-de-dados">Conheça a equipe</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <AiDataBackground />
        <div className="relative mx-auto max-w-6xl px-5 py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Nossa missão</p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Potencializar negócios por meio de dados e IA bem aplicados
              </h2>
              <p className="text-muted-foreground mt-5 text-base leading-relaxed">
                Acreditamos que cada empresa já tem os dados de que precisa. O que falta, muitas
                vezes, é a ponte entre a informação e a decisão. Nossa missão é construir essa ponte:
                organizar dados, automatizar processos e implantar agentes de IA que ampliam a
                capacidade humana em vez de substituí-la.
              </p>
              <p className="text-muted-foreground mt-4 text-base leading-relaxed">
                Atuamos em todo o ciclo — da estratégia à operação em produção — com metodologia
                própria, governança rigorosa e compromisso com resultados mensuráveis.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="card-tech flex flex-col justify-center p-6 text-center">
                  <span className="font-display text-3xl font-bold text-foreground md:text-4xl">
                    {s.value}
                  </span>
                  <span className="text-muted-foreground mt-2 text-sm">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-surface/30">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <p className="eyebrow">Nossos valores</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold md:text-4xl">
            O que move a Cytrix todos os dias
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="card-tech flex flex-col gap-4 p-6">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{v.title}</h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{v.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
