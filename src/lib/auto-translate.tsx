import { useEffect, useRef } from "react";
import { useLanguage, type LanguageCode } from "@/lib/i18n";
const LOCALES = import.meta.glob<{ default: Record<string, string> }>("../locales/*.json");

async function loadLocale(lang: LanguageCode): Promise<Record<string, string>> {
  const loader = LOCALES[`../locales/${lang}.json`];
  if (!loader) return {};
  return (await loader()).default;
}

const SKIP_TAGS = new Set([
  "SCRIPT",
  "STYLE",
  "NOSCRIPT",
  "CODE",
  "PRE",
  "TEXTAREA",
  "SVG",
  "PATH",
]);

const NO_TRANSLATE = /^[\s\d\W]*$/; // números, símbolos, pontuação isolada

const originalText = new WeakMap<Text, string>();
const originalAttr = new WeakMap<Element, Record<string, string>>();

const ATTRS = ["placeholder", "aria-label", "title", "alt"] as const;

function collectTextNodes(): Text[] {
  const nodes: Text[] = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = (node as Text).parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (SKIP_TAGS.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
      if (parent.closest("[data-no-translate]")) return NodeFilter.FILTER_REJECT;
      const value = originalText.get(node as Text) ?? node.nodeValue ?? "";
      const trimmed = value.trim();
      if (trimmed.length < 2 || NO_TRANSLATE.test(trimmed)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  let current = walker.nextNode();
  while (current) {
    nodes.push(current as Text);
    current = walker.nextNode();
  }
  return nodes;
}

function collectAttrTargets(): Array<{ el: Element; attr: string; value: string }> {
  const out: Array<{ el: Element; attr: string; value: string }> = [];
  const selector = ATTRS.map((a) => `[${a}]`).join(",");
  document.body.querySelectorAll(selector).forEach((el) => {
    if (el.closest("[data-no-translate]")) return;
    const saved = originalAttr.get(el) ?? {};
    for (const attr of ATTRS) {
      const raw = saved[attr] ?? el.getAttribute(attr);
      if (!raw) continue;
      const trimmed = raw.trim();
      if (trimmed.length < 2 || NO_TRANSLATE.test(trimmed)) continue;
      out.push({ el, attr, value: raw });
    }
  });
  return out;
}

export function AutoTranslate() {
  const { language } = useLanguage();
  const langRef = useRef(language);
  const runningRef = useRef(false);
  const pendingRef = useRef(false);
  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    langRef.current = language;

    async function run() {
      const lang = langRef.current;
      if (runningRef.current) {
        pendingRef.current = true;
        return;
      }
      runningRef.current = true;
      observerRef.current?.disconnect();

      try {
        const textNodes = collectTextNodes();
        const attrTargets = collectAttrTargets();

        // guarda os originais em português
        for (const node of textNodes) {
          if (!originalText.has(node)) originalText.set(node, node.nodeValue ?? "");
        }
        for (const { el, attr, value } of attrTargets) {
          const saved = originalAttr.get(el) ?? {};
          if (saved[attr] === undefined) {
            saved[attr] = value;
            originalAttr.set(el, saved);
          }
        }

        if (lang === "pt-BR") {
          for (const node of textNodes) {
            const orig = originalText.get(node);
            if (orig !== undefined && node.nodeValue !== orig) node.nodeValue = orig;
          }
          for (const { el, attr } of attrTargets) {
            const orig = originalAttr.get(el)?.[attr];
            if (orig !== undefined && el.getAttribute(attr) !== orig) el.setAttribute(attr, orig);
          }
          return;
        }

        const cache = await loadLocale(lang);
        if (langRef.current !== lang) return;

        const applyAll = () => {
          for (const node of textNodes) {
            const orig = originalText.get(node) ?? "";
            const key = orig.trim();
            const translated = cache[key];
            if (!translated) continue;
            const next = orig.replace(key, translated);
            if (node.nodeValue !== next) node.nodeValue = next;
          }
          for (const { el, attr } of attrTargets) {
            const orig = originalAttr.get(el)?.[attr] ?? "";
            const translated = cache[orig.trim()];
            if (translated && el.getAttribute(attr) !== translated) el.setAttribute(attr, translated);
          }
        };

        applyAll();
      } finally {
        runningRef.current = false;
        observerRef.current?.observe(document.body, {
          childList: true,
          subtree: true,
          characterData: true,
        });
        if (pendingRef.current) {
          pendingRef.current = false;
          void run();
        }
      }
    }

    let timer: ReturnType<typeof setTimeout> | null = null;
    const schedule = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => void run(), 250);
    };

    const observer = new MutationObserver(schedule);
    observerRef.current = observer;
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });

    void run();

    return () => {
      if (timer) clearTimeout(timer);
      observer.disconnect();
      observerRef.current = null;
    };
  }, [language]);

  return null;
}
