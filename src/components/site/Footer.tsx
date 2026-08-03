import { Link } from "@tanstack/react-router";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import logo from "@/assets/cytrix-logo.png";

export function Footer() {
  return (
    <footer className="border-border/70 bg-surface/40 border-t">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <img
            src={logo}
            alt="Cytrix Data Consulting"
            className="h-11 w-auto"
            loading="lazy"
          />
          <p className="text-muted-foreground mt-4 max-w-sm text-sm leading-relaxed">
            Na Cytrix, não entregamos tecnologia isolada. Entregamos um ecossistema de decisão —
            com automação, integração de sistemas e agentes de IA — que transforma processos em
            eficiência e dados em vantagem competitiva. Resultado: uma empresa mais ágil, conectada
            e preparada para crescer sem depender de ferramentas desconectadas.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Navegação</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                to="/solucoes"
                className="text-muted-foreground hover:text-brand-orange transition-colors"
              >
                Soluções
              </Link>
            </li>
            <li>
              <Link
                to="/metodo"
                className="text-muted-foreground hover:text-brand-orange transition-colors"
              >
                Método
              </Link>
            </li>
            <li>
              <Link
                to="/agentes-de-ia"
                className="text-muted-foreground hover:text-brand-orange transition-colors"
              >
                Agentes de IA
              </Link>
            </li>
            <li>
              <Link
                to="/equipe-de-dados"
                className="text-muted-foreground hover:text-brand-orange transition-colors"
              >
                Equipe de Dados
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                className="text-muted-foreground hover:text-brand-orange transition-colors"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contato</h3>
          <ul className="text-muted-foreground mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="text-brand-orange size-4" />
              <a href="mailto:comercial@cytrix.com.br" className="hover:text-foreground">
                comercial@cytrix.com.br
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="text-brand-orange size-4" />
              <a
                href="https://wa.me/5541996890003"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                +55 41 99689-0003
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="text-brand-orange mt-0.5 size-4 shrink-0" />
              <span>Avenida Vicente Machado, 520 - Centro, Curitiba - PR, CEP 80.420-010</span>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="text-brand-orange size-4" />
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
      <div className="border-border/70 border-t px-5 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Cytrix Data Consulting. Todos os direitos reservados.
            Site desenvolvido por Cytrix Technologies Ltda — CNPJ 50.445.596.0001-01.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs">
            <Link
              to="/politica-de-privacidade"
              className="text-muted-foreground hover:text-brand-orange transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              to="/politica-de-cookies"
              className="text-muted-foreground hover:text-brand-orange transition-colors"
            >
              Política de Cookies
            </Link>
            <Link to="/termos-de-uso" className="text-muted-foreground hover:text-brand-orange transition-colors">
              Termos de Uso
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}