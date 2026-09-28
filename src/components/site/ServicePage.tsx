import { Link, useLocation } from "@tanstack/react-router";
import { SERVICE_CONTENT } from "@/lib/service-faq";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/site/CtaSection";
import { ConnectorBackground } from "@/components/site/ConnectorBackground";

interface ServiceStep {
  n: string;
  title: string;
  text: string;
}

interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  text: string;
}

interface ServicePageProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  image: string;
  imageAlt: string;
  features: ServiceFeature[];
  steps?: ServiceStep[];
}

export function ServicePage({
  eyebrow,
  title,
  highlight,
  description,
  image,
  imageAlt,
  features,
  steps,
}: ServicePageProps) {
  const { pathname } = useLocation();
  const content = SERVICE_CONTENT[pathname.replace(/\/$/, "")];
  return (
    <>
      {/* Hero */}
      <section className="glow-top relative overflow-hidden border-b border-border/70">
        <ConnectorBackground />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">{eyebrow}</p>
              <h1 className="mt-5 text-4xl leading-[1.08] font-bold md:text-5xl lg:text-6xl">
                {title}{" "}
                {highlight && <span className="text-gradient-brand">{highlight}</span>}
              </h1>
              <p className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed md:text-lg">
                {description}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/contato">
                    Agende uma conversa estratégica <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/solucoes">Conheça nossas soluções de BI e IA</Link>
                </Button>
              </div>
            </div>
            <div className="card-tech overflow-hidden p-0">
              <img
                src={image}
                alt={imageAlt}
                loading="eager"
                width={1280}
                height={860}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative overflow-hidden">
        <ConnectorBackground />
        <div className="relative mx-auto max-w-6xl px-5 py-24">
          <p className="eyebrow">O que entregamos</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold md:text-4xl">
            Tecnologia aplicada ao seu desafio de negócio
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="card-tech flex flex-col gap-4 p-6"
                >
                  <div className="flex size-11 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{f.title}</h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      {f.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Steps */}
      {steps && steps.length > 0 && (
        <section className="border-y border-border/70 bg-surface/30">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <p className="eyebrow">Como trabalhamos</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold md:text-4xl">
              Do diagnóstico à operação em produção
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <div key={s.n} className="card-tech p-6">
                  <span className="font-mono text-brand-orange text-sm">{s.n}</span>
                  <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {content && (
        <section className="relative overflow-hidden border-t border-border/70">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Entenda o serviço</p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">O que é e para quem é indicado</h2>
              <p className="text-muted-foreground mt-5 text-base leading-relaxed">{content.what}</p>
              <ul className="mt-6 space-y-3">
                {content.forWho.map((w) => (
                  <li key={w} className="text-muted-foreground flex gap-3 text-sm">
                    <span className="bg-brand-orange mt-2 size-1.5 shrink-0 rounded-full" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Perguntas frequentes</p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">Dúvidas comuns</h2>
              <div className="mt-6 space-y-3">
                {content.faqs.map((f) => (
                  <details key={f.q} className="card-tech group p-5">
                    <summary className="cursor-pointer list-none font-semibold">{f.q}</summary>
                    <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <CtaSection />
    </>
  );
}
