import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setVisible(window.scrollY > 300);
    };

    toggle();
    window.addEventListener("scroll", toggle, { passive: true });
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`
        fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center
        rounded-full border border-border/60 bg-surface/80 shadow-lg backdrop-blur-md
        text-brand-orange transition-all duration-300 ease-out
        hover:scale-110 hover:bg-surface hover:text-brand-orange/90 hover:shadow-brand-orange/20
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60
        ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"}
      `}
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
