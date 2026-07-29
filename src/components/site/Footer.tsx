import { Link } from "@tanstack/react-router";
import { Mail, Linkedin, MapPin } from "lucide-react";
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
            Consultoria de dados e inteligência artificial para empresas que querem decidir com
            base em informação confiável.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Navegação</h3>
          <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
            <li>
              <Link to="/solucoes" className="hover:text-foreground">
                Soluções
              </Link>
            </li>
            <li>
              <Link to="/metodo" className="hover:text-foreground">
                Método
              </Link>
            </li>
            <li>
              <Link to="/equipe-de-dados" className="hover:text-foreground">
                Equipe de Dados
              </Link>
            </li>
            <li>
              <Link to="/contato" className="hover:text-foreground">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contato</h3>
          <ul className="text-muted-foreground mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="text-brand-orange size-4" /> contato@cytrixdata.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="text-brand-orange size-4" /> São Paulo, Brasil
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="text-brand-orange size-4" /> /cytrix-data
            </li>
          </ul>
        </div>
      </div>
      <div className="border-border/70 text-muted-foreground border-t px-5 py-5 text-center text-xs">
        © {new Date().getFullYear()} Cytrix Data Consulting. Todos os direitos reservados.
      </div>
    </footer>
  );
}