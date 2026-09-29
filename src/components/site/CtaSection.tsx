import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function CtaSection({
  eyebrow = "FASE EXPLORATÓRIA",
  title = "Visualize onde seus dados, potencializados por IA, geram mais resultados",
  text = "Empregamos modelos preditivos para rastrear origens de dados, workflows e indicadores, detectando usos estratégicos da IA que maximizam a eficiência e impulsionam a performance financeira do negócio.",
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <div className="group border-border/70 bg-background/40 relative w-full overflow-hidden rounded-[2.5rem] border px-8 py-16 shadow-2xl backdrop-blur-2xl md:px-20 md:py-24">
        {/* Ambient glows */}
        <div
          aria-hidden="true"
          className="bg-brand-blue/20 pointer-events-none absolute -top-32 -right-32 size-80 rounded-full blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="bg-brand-purple/15 pointer-events-none absolute -bottom-32 -left-32 size-80 rounded-full blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="bg-brand-orange/10 pointer-events-none absolute right-0 bottom-1/4 size-64 rounded-full blur-[120px]"
        />

        {/* Tech grid */}
        <div aria-hidden="true" className="cta-grid pointer-events-none absolute inset-0" />

        {/* Scan sweep */}
        <div
          aria-hidden="true"
          className="cta-scan via-brand-blue/60 pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent"
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="border-border/70 bg-foreground/5 hover:border-brand-blue/50 mb-8 inline-flex items-center gap-3 rounded-full border px-4 py-1.5 shadow-inner transition-colors duration-500">
            <span className="bg-brand-orange size-2 animate-pulse rounded-full" />
            <span className="font-display text-foreground/70 text-[10px] font-bold tracking-[0.3em] uppercase md:text-xs">
              {eyebrow}
            </span>
          </div>

          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight md:text-5xl md:leading-[1.1]">
            <span className="text-gradient-orange-white">{title}</span>
          </h2>

          <p className="text-muted-foreground mx-auto mt-8 max-w-2xl text-base leading-relaxed md:text-lg">
            {text}
          </p>

          <div className="relative mt-12">
            <div
              aria-hidden="true"
              className="from-brand-blue to-brand-purple absolute -inset-1 rounded-2xl bg-gradient-to-r opacity-30 blur transition duration-700 group-hover:opacity-60"
            />
            <Link
              to="/contato"
              onClick={() => trackEvent("cta_click", { cta: "solicitar_diagnostico", location: "cta_section" })}
              className="bg-primary text-primary-foreground font-display hover:bg-brand-orange relative flex items-center gap-4 rounded-2xl px-10 py-5 font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
              Solicitar diagnóstico
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>

        {/* Frame corners */}
        <div
          aria-hidden="true"
          className="border-brand-blue/40 pointer-events-none absolute top-0 left-0 size-12 rounded-tl-[2.5rem] border-t-2 border-l-2"
        />
        <div
          aria-hidden="true"
          className="border-brand-orange/40 pointer-events-none absolute right-0 bottom-0 size-12 rounded-br-[2.5rem] border-r-2 border-b-2"
        />
      </div>
    </section>
  );
}