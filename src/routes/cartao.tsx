import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, MapPin, Phone, Globe } from "lucide-react";
import { pageHead } from "@/lib/seo";
import logo from "@/assets/cytrix-logo.png";

export const Route = createFileRoute("/cartao")({
  head: () =>
    pageHead({
      path: "/cartao",
      title: "Cytrix Data Consulting — Cartão digital",
      description:
        "Cartão digital da Cytrix Data Consulting: quem somos, contatos, WhatsApp, e-mail e LinkedIn.",
      ogTitle: "Cytrix Data Consulting — Cartão digital",
      ogDescription:
        "Dados, automação e agentes de IA aplicados à operação do seu negócio. Fale com a Cytrix.",
    }),
  component: CartaoPage,
});

function CartaoPage() {
  return (
    <section className="glow-top">
      <div className="mx-auto max-w-xl px-5 py-16 text-center">
        <img
          src={logo}
          alt="Cytrix Data Consulting"
          className="mx-auto h-16 w-auto"
          width={320}
          height={64}
        />

        <h1 className="mt-8 text-2xl font-bold md:text-3xl">
          Cytrix <span className="text-gradient-brand">Data Consulting</span>
        </h1>

        <p className="text-muted-foreground mx-auto mt-5 max-w-md text-sm leading-relaxed">
          Somos uma consultoria de Dados &amp; IA focada em resultado.
          Organizamos dados, integramos sistemas e automatizamos processos.
          Criamos agentes autônomos e painéis que orientam decisões.
          Entregamos operações mais ágeis, previsíveis e escaláveis.
        </p>

        <div className="border-border/70 bg-surface/50 mx-auto mt-10 max-w-md rounded-2xl border p-6 text-left">
          <h2 className="text-sm font-semibold">Contatos</h2>
          <ul className="text-muted-foreground mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Globe className="text-brand-orange size-4 shrink-0" />
              <a
                href="https://project--06e41034-2559-4fbe-be9d-e7c5e5ff6e42.lovable.app/"
                className="hover:text-foreground"
              >
                Acessar o site da Cytrix Data Consulting
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="text-brand-orange size-4 shrink-0" />
              <a href="https://wa.me/5541996890003" className="hover:text-foreground">
                +55 41 99689-0003 (WhatsApp)
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-brand-orange size-4 shrink-0" />
              <a href="mailto:comercial@cytrix.com.br" className="hover:text-foreground">
                comercial@cytrix.com.br
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="text-brand-orange mt-0.5 size-4 shrink-0" />
              <span>
                Avenida Vicente Machado, 520 - Centro, Curitiba - PR, CEP 80.420-010
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="text-brand-orange size-4 shrink-0" />
              <a
                href="https://www.linkedin.com/company/cytrix-data-consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                /cytrix-data-consulting
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
