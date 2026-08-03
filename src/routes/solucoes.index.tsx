import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import {
  ArrowRight,
  Boxes,
  Database,
  LayoutDashboard,
  MessageSquare,
  Plug,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/site/CtaSection";
import { ConnectorBackground } from "@/components/site/ConnectorBackground";
import imgAtendimento from "@/assets/solucoes-atendimento.jpg";
import imgIntegracao from "@/assets/solucoes-integracao.jpg";
import imgDados from "@/assets/solucoes-dados.jpg";
import imgEcossistema from "@/assets/solucoes-ecossistema.jpg";

export const Route = createFileRoute("/solucoes/")({
  head: () =>
    pageHead({
      path: "/solucoes",
      title: "Soluções de IA e dados que entram em produção — Cytrix",
      description: "Agentes de IA, automação, integração de sistemas e dados organizados: soluções da Cytrix desenhadas para gerar resultado na operação real.",
      ogTitle: "Soluções de IA e dados que entram em produção — Cytrix",
      ogDescription: "Do desafio operacional à solução em produção: IA, automação e dados com método e governança.",
    }),
  component: SolucoesIndexPage,
});

const pillars = [
  {
    image: imgAtendimento,
    tag: "Atendimento e conhecimento",
    step: "01",
    title: "Coloque um agente de IA respondendo pela sua operação hoje",
    text: "Assistentes que conhecem seus produtos, seus processos e seus dados — e resolvem a demanda do cliente sem fila e sem script engessado.",
    bullets: ["Disponível 24 horas por dia", "Triagem que prioriza sozinha", "Resposta com contexto real"],
  },
  {
    image: imgIntegracao,
    tag: "Automação e integração",
    step: "02",
    title: "Elimine o retrabalho conectando tudo que hoje é copiado à mão",
    text: "Fluxos automatizados e integrações entre ERP, CRM, APIs, bancos de dados e plataformas externas, com exceções monitoradas de ponta a ponta.",
    bullets: ["Tarefas manuais fora do caminho", "Sistemas sempre sincronizados", "Falhas detectadas na origem"],
  },
  {
    image: imgDados,
    tag: "Dados e decisão",
    step: "03",
    title: "Enxergue o que trava o resultado antes que ele apareça no fechamento",
    text: "Dados organizados e painéis executivos que transformam sinais dispersos da operação em decisões claras, rastreáveis e tomadas no tempo certo.",
    bullets: ["Indicadores com uma única versão", "Análises assistidas por IA", "Leitura em tempo real"],
  },
];

const capabilities = [
  {
    icon: MessageSquare,
    title: "Ative o WhatsApp como canal inteligente",
    text: "Atendimento automatizado, classificação de demandas e integração direta com os sistemas internos.",
  },
  {
    icon: Plug,
    title: "Conecte seus sistemas corporativos com segurança",
    text: "Ligação controlada entre ERPs, CRMs, bancos de dados, APIs e plataformas de parceiros.",
  },
  {
    icon: LayoutDashboard,
    title: "Entregue portais com IA embarcada",
    text: "Experiências digitais para clientes, fornecedores e times, com inteligência dentro do fluxo de trabalho.",
  },
  {
    icon: Database,
    title: "Prepare seus dados para a era dos agentes",
    text: "Estruturação das fontes para que automações e agentes acessem sempre a informação certa.",
  },
  {
    icon: Boxes,
    title: "Construa sistemas sob medida para o seu processo",
    text: "Desenvolvimento personalizado, alinhado aos objetivos e ao jeito real de operar da sua empresa.",
  },
  {
    icon: RefreshCw,
    title: "Sustente e evolua o que já está em produção",
    text: "Monitoramento, manutenção e melhoria contínua das soluções que já sustentam a operação.",
  },
];

const steps = [
  { n: "01", title: "Entender", text: "Mapeamos processos, gargalos, dados e prioridades da operação." },
  { n: "02", title: "Conectar", text: "Integramos sistemas e organizamos o contexto que a IA precisa." },
  { n: "03", title: "Operar", text: "Colocamos a solução em produção com governança e indicadores." },
  { n: "04", title: "Evoluir", text: "Acompanhamos resultados e ampliamos o impacto continuamente." },
];

const badges = [
  { strong: "Sob medida", rest: "para a sua operação" },
  { strong: "Integrada", rest: "aos sistemas que você já usa" },
  { strong: "Governada", rest: "do piloto até a escala" },
];

function SolucoesIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="glow-top border-border/70 relative overflow-hidden border-b">
        <ConnectorBackground />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
          <p className="eyebrow">Soluções conectadas à operação</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] font-bold md:text-5xl lg:text-6xl">
            Tire a IA do slide e coloque para{" "}
            <span className="text-gradient-brand">trabalhar na sua operação</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
            Combinamos inteligência artificial, automação, dados e sistemas corporativos em soluções
            que rodam todos os dias — e que a sua equipe sente no resultado.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contato">
                Desenhar minha solução <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/metodo">Conhecer nosso método</Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {badges.map((b) => (
              <div key={b.strong} className="card-tech px-5 py-4 text-sm">
                <span className="font-semibold">{b.strong}</span>{" "}
                <span className="text-muted-foreground">{b.rest}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="relative overflow-hidden">
        <ConnectorBackground />
        <div className="relative mx-auto max-w-6xl px-5 py-24">
          <p className="eyebrow">Frentes de alto impacto</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold md:text-4xl">
            Aplique tecnologia exatamente onde o resultado acontece
          </h2>
          <p className="text-muted-foreground mt-5 max-w-2xl text-base leading-relaxed">
            Partimos do desafio operacional para combinar as capacidades certas — nada de solução de
            prateleira ou tecnologia desconectada do negócio.
          </p>

          <div className="mt-14 space-y-14">
            {pillars.map((p, idx) => (
              <article
                key={p.title}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
              >
                <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                  <div className="card-tech overflow-hidden p-0">
                    <img
                      src={p.image}
                      alt={p.tag}
                      loading="lazy"
                      width={1280}
                      height={860}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-brand-orange text-sm">{p.step}</span>
                    <span className="border-border text-muted-foreground rounded-full border px-3 py-1 text-xs">
                      Solução em produção
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-5 text-sm">{p.tag}</p>
                  <h3 className="mt-2 text-2xl font-semibold md:text-3xl">{p.title}</h3>
                  <p className="text-muted-foreground mt-4 text-base leading-relaxed">{p.text}</p>
                  <ul className="mt-6 space-y-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="text-muted-foreground flex items-center gap-2 text-sm">
                        <span className="bg-brand-orange size-1.5 rounded-full" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ecossistema */}
      <section className="border-border/70 relative overflow-hidden border-y">
        <ConnectorBackground />
        <div className="relative mx-auto max-w-6xl px-5 py-24">
          <p className="eyebrow">Ecossistema sob medida</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold md:text-4xl">
            Comece por uma frente e construa a arquitetura que sustenta o crescimento
          </h2>
          <p className="text-muted-foreground mt-5 max-w-2xl text-base leading-relaxed">
            Cada capacidade pode nascer sozinha e evoluir para um ecossistema integrado, seguro e
            pronto para escalar quando a operação pedir.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <article key={c.title} className="card-tech flex h-full flex-col p-8">
                <div className="flex items-center justify-between">
                  <c.icon className="text-brand-blue size-6" />
                  <span className="text-muted-foreground font-mono text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{c.text}</p>
              </article>
            ))}
          </div>

          <div className="card-tech mt-12 overflow-hidden p-0">
            <img
              src={imgEcossistema}
              alt="Equipe acompanhando uma operação integrada por agentes de IA"
              loading="lazy"
              width={1600}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Método */}
      <section className="relative overflow-hidden">
        <ConnectorBackground />
        <div className="relative mx-auto max-w-6xl px-5 py-24">
          <p className="eyebrow">Construção responsável</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold md:text-4xl">
            Garanta que a IA funcione no ambiente real da sua empresa
          </h2>
          <p className="text-muted-foreground mt-5 max-w-2xl text-base leading-relaxed">
            Tecnologia e operação avançam juntas: a solução nasce conectada às pessoas, aos dados e
            aos sistemas que sustentam o negócio.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <article key={s.n} className="card-tech h-full p-7">
                <span className="text-gradient-brand font-mono text-2xl font-bold">{s.n}</span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{s.text}</p>
              </article>
            ))}
          </div>

          <div className="text-muted-foreground mt-10 flex items-center gap-3 text-sm">
            <Sparkles className="text-brand-orange size-4" />
            Da estratégia à operação: IA com método, indicadores e governança.
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Próximo passo"
        title="Vamos construir a solução ideal para a sua operação?"
        text="Comece por um diagnóstico objetivo e descubra onde IA, automação e integração geram mais impacto no seu negócio."
      />
    </>
  );
}
