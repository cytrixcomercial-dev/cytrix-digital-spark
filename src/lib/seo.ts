export type PageSeo = {
  /** Caminho canônico da página, ex: "/solucoes/bi-platform" */
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  /** "website" (padrão) ou "article" */
  ogType?: string;
  /** URL absoluta https de uma imagem representativa (opcional) */
  image?: string;
};

/**
 * Monta o head() de uma rota com title, description, Open Graph, Twitter Card
 * e canonical auto-referenciado (caminho relativo, resolvido pelo host).
 */
export function pageHead(seo: PageSeo) {
  const ogTitle = seo.ogTitle ?? seo.title;
  const ogDescription = seo.ogDescription ?? seo.description;

  const meta: Array<Record<string, string>> = [
    { title: seo.title },
    { name: "description", content: seo.description },
    { property: "og:title", content: ogTitle },
    { property: "og:description", content: ogDescription },
    { property: "og:type", content: seo.ogType ?? "website" },
    { property: "og:url", content: seo.path },
    { property: "og:site_name", content: "Cytrix Data Consulting" },
    { property: "og:locale", content: "pt_BR" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: ogTitle },
    { name: "twitter:description", content: ogDescription },
  ];

  if (seo.image) {
    meta.push({ property: "og:image", content: seo.image });
    meta.push({ name: "twitter:image", content: seo.image });
  }

  return {
    meta,
    links: [{ rel: "canonical", href: seo.path }],
  };
}

/** Rotas públicas indexáveis do site (usadas no sitemap.xml). */
export const SITE_ROUTES = [
  "/",
  "/quem-somos",
  "/solucoes",
  "/solucoes/data-consulting",
  "/solucoes/business-intelligence",
  "/solucoes/bi-data-quality",
  "/solucoes/bi-platform",
  "/solucoes/bi-ia-outsourcing",
  "/agentes-de-ia",
  "/equipe-de-dados",
  "/metodo",
  "/contato",
  "/seja-um-representante-comercial",
  "/politica-de-privacidade",
  "/politica-de-cookies",
  "/termos-de-uso",
] as const;
