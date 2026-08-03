import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

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
      <div className="card-tech glow-top overflow-hidden px-8 py-16 text-center md:px-16">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-base leading-relaxed">
          {text}
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link to="/contato">Solicitar diagnóstico</Link>
        </Button>
      </div>
    </section>
  );
}