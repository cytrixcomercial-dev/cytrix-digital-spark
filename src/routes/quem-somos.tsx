import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { ArrowRight, Lightbulb, Puzzle, Network, TrendingUp, Lock, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/site/CtaSection";
import { AiDataBackground } from "@/components/site/AiDataBackground";

export const Route = createFileRoute("/quem-somos")({
  head: () =>
    pageHead({
      path: "/quem-somos",
      title: "Quem Somos — Cytrix Data Consulting",
      description: "Conheça a história da Cytrix Data Consulting: como nascemos em Curitiba para transformar dados, IA e automação em resultados reais para empresas.",
      ogTitle: "Quem Somos — Cytrix Data Consulting",
      ogDescription: "Da constatação à arquitetura de decisão: a trajetória da Cytrix Data Consulting.",
    }),
  component: QuemSomosPage,
});

const chapters = [
  {
    icon: Lightbulb,
    title: "A constatação",
    text: "A Cytrix nasceu em Curitiba de uma pergunta provocativa: por que empresas investiam pesado em ferramentas de dados, mas continuavam decidindo no escuro? A resposta veio rápida. Existia uma falha estrutural — uma desconexão brutal entre tecnologia, processos e os objetivos reais de negócio. Dashboards bonitos, mas decisões frágeis. Dados abundantes, mas estratégias pobres.",
  },
  {
    icon: Puzzle,
    title: "A ruptura",
    text: "Foi para romper com esse ciclo que criamos a Cytrix Data Consulting. Não nascemos para entregar telas coloridas. Nascemos para construir arquiteturas de decisão que realmente funcionam — ecossistemas onde Inteligência Artificial, Business Intelligence e automação se conectam para gerar resultados tangíveis, não apenas relatórios bonitos.",
  },
  {
    icon: Network,
    title: "A evolução",
    text: "Evoluímos de uma consultoria técnica para nos tornarmos verdadeiros arquitetos de ecossistemas estratégicos, desenvolvendo metodologia própria que conecta dados, pessoas e processos de ponta a ponta, com governança, segurança e foco em ROI mensurável.",
  },
];

const portfolio = [
  "Agentes de IA que automatizam atendimento, vendas, suporte e operações 24/7",
  "Business Intelligence que transforma dados em dashboards estratégicos e decisões ágeis",
  "Curadoria de dados e tecnologia que orquestra o melhor ecossistema de parceiros para cada desafio",
  "Automação de processos que elimina tarefas repetitivas e libera sua equipe para o que realmente importa",
];

const commitments = [
  {
    icon: TrendingUp,
    title: "Resultado mensurável",
    text: "Entregamos clareza para decidir, eficiência para executar e ROI para provar.",
  },
  {
    icon: Lock,
    title: "Governança total",
    text: "Nossos parceiros atuam com e-mails @cytrix.com.br, NDAs rigorosos e proteção comercial — o cliente sempre tem um único ponto de contato: a Cytrix Data Consulting.",
  },
  {
    icon: Rocket,
    title: "Crescimento sustentável",
    text: "Descomplicamos a gestão de dados e ajudamos negócios a escalar com inteligência, seja via franquias, e-commerce ou transformação digital.",
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
            Nossa história: da pergunta incômoda à{" "}
            <span className="text-gradient-brand">arquitetura de decisão</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
            A Cytrix Data Consulting nasceu em Curitiba para transformar tecnologia em vantagem
            competitiva. Em decisão. Em resultado.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contato">
                Falar com um especialista <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/solucoes">Conhecer nossas soluções</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <AiDataBackground />
        <div className="relative mx-auto max-w-6xl px-5 py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Nossa trajetória</p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                De uma consultoria técnica a arquitetos de ecossistemas estratégicos
              </h2>
              <p className="text-muted-foreground mt-5 text-base leading-relaxed">
                Hoje, somos uma consultoria especializada em Dados, Estratégia Digital e Expansão de
                Negócios. Atuamos com metodologia orientada a resultado, conectando estratégia,
                tecnologia e pessoas — porque sem essa tríade, nenhuma ferramenta resolve.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="card-tech flex flex-col justify-center p-6 text-center"
                >
                  <span className="font-display text-3xl font-bold text-foreground md:text-4xl">
                    {s.value}
                  </span>
                  <span className="text-muted-foreground mt-2 text-sm">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 space-y-16">
            {chapters.map((c, idx) => {
              const Icon = c.icon;
              return (
                <article
                  key={c.title}
                  className="grid items-start gap-6 md:grid-cols-[auto_1fr]"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <span className="font-mono text-lg font-bold">{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h3 className="flex items-center gap-3 text-xl font-semibold md:text-2xl">
                      <Icon className="text-brand-orange size-5" />
                      {c.title}
                    </h3>
                    <p className="text-muted-foreground mt-3 max-w-3xl text-base leading-relaxed">
                      {c.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-surface/30">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <p className="eyebrow">Nosso portfólio</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold md:text-4xl">
            Tecnologias que integramos para gerar resultado
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {portfolio.map((item) => (
              <div
                key={item}
                className="card-tech flex items-start gap-4 p-6"
              >
                <span className="bg-brand-purple mt-1.5 size-2 shrink-0 rounded-full" />
                <p className="text-muted-foreground text-base leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <AiDataBackground />
        <div className="relative mx-auto max-w-6xl px-5 py-24">
          <p className="eyebrow">Nosso compromisso</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold md:text-4xl">
            Inegociável: entregar clareza, eficiência e ROI
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="card-tech flex flex-col gap-4 p-6">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{c.title}</h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{c.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="card-tech mt-16 p-8 md:p-12">
            <blockquote className="max-w-4xl">
              <p className="text-xl font-medium leading-relaxed md:text-2xl">
                Se você está cansado de gastar com ferramentas que não entregam resultado… se quer
                parar de apostar e começar a decidir com dados… a Cytrix Data Consulting é sua parceira estratégica.
              </p>
              <footer className="text-muted-foreground mt-6 text-sm">
                Afinal, informação sem direção não é inteligência. É apenas barulho. E você merece
                mais do que isso.
              </footer>
            </blockquote>
            <div className="mt-8">
              <p className="font-display text-2xl font-bold tracking-tight">
                CYTRIX {"\u00a0"}<span className="text-brand-orange">|</span> Data Consulting
              </p>
              <p className="text-muted-foreground mt-2 text-sm">
                Transformamos tecnologia em vantagem competitiva. Em decisão. Em resultado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
