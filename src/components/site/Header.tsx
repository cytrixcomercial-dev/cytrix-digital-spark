import { Link, useLocation } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/cytrix-logo.png";
import { LanguageSwitcher } from "@/components/site/LanguageSwitcher";
import { useLanguage } from "@/lib/i18n";

type NavLink = { to: string; label: string; key?: string };
type NavDropdown = { to: string; label: string; key?: string; children: readonly NavLink[] };

const solutions: readonly NavLink[] = [
  { to: "/solucoes/data-consulting", label: "Data Consulting" },
  { to: "/solucoes/business-intelligence", label: "Business Intelligence (BI)" },
  { to: "/solucoes/bi-data-quality", label: "BI Data Quality" },
  { to: "/agentes-de-ia", label: "Agentes autônomos de IA", key: "nav.aiAgents" },
  { to: "/solucoes/bi-platform", label: "BI Platform" },
  { to: "/solucoes/bi-ia-outsourcing", label: "BI & IA Outsourcing" },
] as const;

const mainLinks: readonly (NavLink | NavDropdown)[] = [
  { to: "/", label: "Home", key: "nav.home" },
  { to: "/quem-somos", label: "Quem Somos", key: "nav.about" },
  { to: "/solucoes", label: "Soluções", key: "nav.solutions", children: solutions },
  { to: "/metodo", label: "Método", key: "nav.method" },
  { to: "/equipe-de-dados", label: "Equipe de Dados", key: "nav.dataTeam" },
  { to: "/contato", label: "Contato", key: "nav.contact" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (to: string, exact = false) =>
    exact ? currentPath === to : currentPath === to || currentPath.startsWith(`${to}/`);
  const label = (l: { label: string; key?: string }) => (l.key ? t(l.key) : l.label);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const toggleMobileSubmenu = (label: string) => {
    setMobileExpanded((prev) => (prev === label ? null : label));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Cytrix Data Consulting"
            className="h-9 w-auto md:h-10"
            loading="eager"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 md:flex" ref={dropdownRef}>
          {mainLinks.map((l) =>
            "children" in l ? (
              <div key={l.to} className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown(l.label)}
                  className={`flex items-center gap-1 text-sm transition-colors hover:text-brand-orange ${
                    isActive(l.to) ? "font-semibold text-brand-blue" : "text-muted-foreground"
                  }`}
                  aria-expanded={openDropdown === l.label}
                  aria-haspopup="menu"
                >
                  {label(l)}
                  <ChevronDown
                    className={`size-3.5 transition-transform ${
                      openDropdown === l.label ? "rotate-180" : ""
                    } ${isActive(l.to) ? "text-brand-blue" : ""}`}
                  />
                </button>
                {openDropdown === l.label && (
                  <div className="absolute left-0 top-full mt-2 w-64 overflow-hidden rounded-lg border border-border/70 bg-background/95 p-1.5 shadow-lg backdrop-blur-xl">
                    <ul role="menu">
                      <li role="none">
                        <Link
                          to={l.to}
                          onClick={() => setOpenDropdown(null)}
                          className={`block rounded-md px-3 py-2 text-sm text-white transition-colors hover:bg-accent hover:text-brand-orange ${
                            isActive(l.to) ? "font-semibold text-brand-blue" : ""
                          }`}
                          role="menuitem"
                        >
                          {t("nav.allSolutions")}
                        </Link>
                      </li>
                      <li className="my-1.5 h-px bg-border/70" />
                      {l.children.map((c: NavLink) => (
                        <li key={c.to} role="none">
                          <Link
                            to={c.to}
                            onClick={() => setOpenDropdown(null)}
                            className={`block rounded-md px-3 py-2 text-sm text-white transition-colors hover:bg-accent hover:text-brand-orange ${
                              isActive(c.to) ? "font-semibold text-brand-blue" : ""
                            }`}
                            role="menuitem"
                          >
                            {label(c)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm transition-colors hover:text-brand-orange ${
                  isActive(l.to, l.to === "/") ? "font-semibold text-brand-blue" : "text-muted-foreground"
                }`}
                activeOptions={{ exact: l.to === "/" }}
              >
                {label(l)}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link to="/contato">{t("cta.diagnostic")}</Link>
          </Button>
          <button
            aria-label={mobileOpen ? t("menu.close") : t("menu.open")}
            className="text-foreground md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="border-t border-border/70 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {mainLinks.map((l) =>
              "children" in l ? (
                <div key={l.to}>
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu(l.label)}
                    className={`flex w-full items-center justify-between py-2 text-sm transition-colors hover:text-brand-orange ${
                      isActive(l.to) ? "font-semibold text-brand-blue" : "text-muted-foreground"
                    }`}
                    aria-expanded={mobileExpanded === l.label}
                  >
                    {label(l)}
                    <ChevronDown
                      className={`size-3.5 transition-transform ${
                        mobileExpanded === l.label ? "rotate-180" : ""
                      } ${isActive(l.to) ? "text-brand-blue" : ""}`}
                    />
                  </button>
                  {mobileExpanded === l.label && (
                    <div className="mb-1 ml-3 border-l border-border/70 pl-3">
                      <Link
                        to={l.to}
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileExpanded(null);
                        }}
                        className={`block py-2 text-sm text-white transition-colors hover:text-brand-orange ${
                          isActive(l.to) ? "font-semibold text-brand-blue" : ""
                        }`}
                      >
                        {t("nav.allSolutions")}
                      </Link>
                      {l.children.map((c: NavLink) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileExpanded(null);
                          }}
                          className={`block py-2 text-sm text-white transition-colors hover:text-brand-orange ${
                            isActive(c.to) ? "font-semibold text-brand-blue" : ""
                          }`}
                        >
                          {label(c)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2 text-sm transition-colors hover:text-brand-orange ${
                    isActive(l.to, l.to === "/") ? "font-semibold text-brand-blue" : "text-muted-foreground"
                  }`}
                >
                  {label(l)}
                </Link>
              )
            )}
            <LanguageSwitcher variant="mobile" />
          </nav>
        </div>
      )}
    </header>
  );
}
