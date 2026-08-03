import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export const LANGUAGES = [
  { code: "pt-BR", label: "Português (Brasil)", short: "PT-BR", flag: "🇧🇷", htmlLang: "pt-BR" },
  { code: "en-US", label: "English (US)", short: "EN-US", flag: "🇺🇸", htmlLang: "en-US" },
  { code: "en-GB", label: "English (UK)", short: "EN-GB", flag: "🇬🇧", htmlLang: "en-GB" },
  { code: "es", label: "Español", short: "ES", flag: "🇪🇸", htmlLang: "es" },
  { code: "pt-PT", label: "Português (Portugal)", short: "PT-PT", flag: "🇵🇹", htmlLang: "pt-PT" },
  { code: "fr", label: "Français", short: "FR", flag: "🇫🇷", htmlLang: "fr" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];

type Dict = Record<string, string>;

const dictionaries: Record<LanguageCode, Dict> = {
  "pt-BR": {
    "nav.home": "Home",
    "nav.about": "Quem Somos",
    "nav.solutions": "Soluções",
    "nav.method": "Método",
    "nav.dataTeam": "Equipe de Dados",
    "nav.contact": "Contato",
    "nav.allSolutions": "Ver todas as soluções",
    "nav.aiAgents": "Agentes autônomos de IA",
    "cta.diagnostic": "Solicitar diagnóstico",
    "menu.open": "Abrir menu",
    "menu.close": "Fechar menu",
    "lang.label": "Idioma",
  },
  "en-US": {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.solutions": "Solutions",
    "nav.method": "Method",
    "nav.dataTeam": "Data Team",
    "nav.contact": "Contact",
    "nav.allSolutions": "See all solutions",
    "nav.aiAgents": "Autonomous AI Agents",
    "cta.diagnostic": "Request a diagnostic",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "lang.label": "Language",
  },
  "en-GB": {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.solutions": "Solutions",
    "nav.method": "Methodology",
    "nav.dataTeam": "Data Team",
    "nav.contact": "Contact",
    "nav.allSolutions": "View all solutions",
    "nav.aiAgents": "Autonomous AI Agents",
    "cta.diagnostic": "Request an assessment",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "lang.label": "Language",
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Quiénes Somos",
    "nav.solutions": "Soluciones",
    "nav.method": "Método",
    "nav.dataTeam": "Equipo de Datos",
    "nav.contact": "Contacto",
    "nav.allSolutions": "Ver todas las soluciones",
    "nav.aiAgents": "Agentes autónomos de IA",
    "cta.diagnostic": "Solicitar diagnóstico",
    "menu.open": "Abrir menú",
    "menu.close": "Cerrar menú",
    "lang.label": "Idioma",
  },
  "pt-PT": {
    "nav.home": "Início",
    "nav.about": "Quem Somos",
    "nav.solutions": "Soluções",
    "nav.method": "Metodologia",
    "nav.dataTeam": "Equipa de Dados",
    "nav.contact": "Contactos",
    "nav.allSolutions": "Ver todas as soluções",
    "nav.aiAgents": "Agentes autónomos de IA",
    "cta.diagnostic": "Solicitar diagnóstico",
    "menu.open": "Abrir menu",
    "menu.close": "Fechar menu",
    "lang.label": "Idioma",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.about": "Qui sommes-nous",
    "nav.solutions": "Solutions",
    "nav.method": "Méthode",
    "nav.dataTeam": "Équipe Data",
    "nav.contact": "Contact",
    "nav.allSolutions": "Voir toutes les solutions",
    "nav.aiAgents": "Agents autonomes d'IA",
    "cta.diagnostic": "Demander un diagnostic",
    "menu.open": "Ouvrir le menu",
    "menu.close": "Fermer le menu",
    "lang.label": "Langue",
  },
};

const STORAGE_KEY = "cytrix-lang";
const DEFAULT_LANG: LanguageCode = "pt-BR";

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(DEFAULT_LANG);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
    if (stored && dictionaries[stored]) setLanguageState(stored);
  }, []);

  useEffect(() => {
    const entry = LANGUAGES.find((l) => l.code === language);
    if (entry) document.documentElement.lang = entry.htmlLang;
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: (code) => {
        setLanguageState(code);
        try {
          window.localStorage.setItem(STORAGE_KEY, code);
        } catch {
          /* ignore */
        }
      },
      t: (key) => dictionaries[language][key] ?? dictionaries[DEFAULT_LANG][key] ?? key,
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return { language: DEFAULT_LANG, setLanguage: () => {}, t: (k) => dictionaries[DEFAULT_LANG][k] ?? k };
  }
  return ctx;
}
