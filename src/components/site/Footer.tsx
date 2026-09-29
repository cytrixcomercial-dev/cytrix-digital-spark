import { Link } from "@tanstack/react-router";
import { Mail, Linkedin, MapPin, Phone, Download } from "lucide-react";
import logo from "@/assets/opriun-logo-vector-transparent.svg.asset.json";
import contatoQr from "@/assets/cytrix-vcard-qr.png.asset.json";

export function Footer() {
  return (
    <footer className="border-border/70 bg-surface/40 border-t">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-5">
        <div className="md:col-span-2">
          <img
            src={logo.url}
            alt="Opriun"
            className="h-11 w-auto"
            loading="lazy"
          />
          <p className="text-muted-foreground mt-4 max-w-sm text-sm leading-relaxed">
            Na Opriun, não entregamos tecnologia isolada. Entregamos um ecossistema
            de decisão — com automação, integração de sistemas e agentes de IA — que transforma
            processos em eficiência e dados em vantagem competitiva. Resultado: uma empresa mais
            ágil, conectada e preparada para crescer sem depender de ferramentas desconectadas.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Institucional</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                to="/politica-de-privacidade"
                className="text-muted-foreground hover:text-brand-orange transition-colors"
              >
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link
                to="/politica-de-cookies"
                className="text-muted-foreground hover:text-brand-orange transition-colors"
              >
                Política de Cookies
              </Link>
            </li>
            <li>
              <Link
                to="/termos-de-uso"
                className="text-muted-foreground hover:text-brand-orange transition-colors"
              >
                Termos de Uso
              </Link>
            </li>
            <li>
              <Link
                to="/seja-um-representante-comercial"
                className="text-muted-foreground hover:text-brand-orange transition-colors"
              >
                Seja um Representante Comercial
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Navegação</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                to="/"
                className="text-muted-foreground hover:text-brand-orange transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/quem-somos"
                className="text-muted-foreground hover:text-brand-orange transition-colors"
              >
                Quem Somos
              </Link>
            </li>
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
                Equipe de dados e IA
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
              <a href="mailto:comercial@opriun.com.br" className="hover:text-foreground">
                comercial@opriun.com.br
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
                href="https://www.linkedin.com/company/opriun"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                /opriun
              </a>
            </li>
          </ul>

          <div className="border-border/70 bg-surface/60 mt-6 inline-flex flex-col items-center rounded-xl border p-3">
            <img
              src={contatoQr.url}
              alt="QR Code para adicionar o vCard completo da Opriun aos contatos do celular"
              width={160}
              height={160}
              loading="lazy"
              className="size-40 rounded-md bg-white p-2"
            />
            <span className="text-muted-foreground mt-2 max-w-[10rem] text-center text-[11px] leading-tight">
              Aponte a câmera e salve o contato completo da Opriun
            </span>
            <a
              href="/api/public/cytrix-contact.vcf"
              download="opriun-contact.vcf"
              onClick={() => trackEvent("vcard_download", { location: "footer" })}
              className="border-border/70 bg-surface hover:border-brand-orange hover:bg-brand-orange hover:text-primary-foreground mt-3 inline-flex items-center gap-2 rounded-md border px-3 py-2 text-[11px] font-semibold transition-colors"
            >
              <Download className="size-3.5" />
              Baixar vCard (.vcf)
            </a>
          </div>
        </div>
      </div>
      <div className="border-border/70 border-t px-5 py-5">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Opriun. Todos os direitos reservados.
            Site desenvolvido por Opriun Technologies Ltda — CNPJ 50.445.596.0001-01.
          </p>
        </div>
      </div>
    </footer>
  );
}