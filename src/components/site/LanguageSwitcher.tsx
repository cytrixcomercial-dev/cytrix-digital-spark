import { useEffect, useRef, useState } from "react";
import { Check, Globe } from "lucide-react";
import { LANGUAGES, useLanguage, type LanguageCode } from "@/lib/i18n";

export function LanguageSwitcher({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  if (variant === "mobile") {
    return (
      <div className="mt-2 border-t border-border/70 pt-3">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {t("lang.label")}
        </p>
        <div className="flex flex-wrap gap-2">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => setLanguage(l.code as LanguageCode)}
              className={`flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors ${
                l.code === language
                  ? "border-primary/60 bg-primary/10 text-foreground"
                  : "border-border/70 text-muted-foreground hover:text-foreground"
              }`}
            >
              <span aria-hidden>{l.flag}</span>
              {l.short}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("lang.label")}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-md border border-border/70 px-2 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <Globe className="size-3.5" />
        <span aria-hidden>{current.flag}</span>
        <span className="hidden lg:inline">{current.short}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-lg border border-border/70 bg-background/95 p-1.5 shadow-lg backdrop-blur-xl">
          <ul role="menu">
            {LANGUAGES.map((l) => (
              <li key={l.code} role="none">
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setLanguage(l.code as LanguageCode);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                    l.code === language ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  <span aria-hidden>{l.flag}</span>
                  <span className="flex-1">{l.label}</span>
                  {l.code === language && <Check className="size-3.5" />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
