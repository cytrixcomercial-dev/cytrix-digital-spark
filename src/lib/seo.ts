export const SITE_URL = "https://www.opriun.com.br";

export type PageSeo = {
  /** Caminho canônico da página, ex: "/solucoes/bi-platform" */
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  image?: string;
  noindex?: boolean;
};

type Override = {
  title: string;
  description: string;
  crumb?: string;
  service?: string;
  noindex?: boolean;
};

/** Titles (≤60) e descriptions (≤150) otimizados por palavra-chave. */
const SEO: Record<string, Override> = {
  "/": {
    title: "Opriun | Consultoria de Business Intelligence e IA",
    description:
      "Consultoria de Business Intelligence, dados e agentes de IA para empresas que precisam decidir com clareza e automatizar a operação.",
  },
  "/quem-somos": {
    title: "Quem Somos | Opriun Consultoria de Dados e IA",
    description:
      "Conheça a Opriun: consultoria de dados, BI e inteligência artificial em Curitiba, focada em resultado operacional para empresas B2B.",
    crumb: "Quem Somos",
  },
  "/solucoes": {
    title: "Automação de Processos com IA e Dados | OPRIUN",
    description:
      "Soluções de automação de processos com IA, integração de sistemas, BI e agentes autônomos desenhadas para a operação real da sua empresa.",
    crumb: "Soluções",
  },
  "/solucoes/data-consulting": {
    title: "Consultoria de Inteligência Artificial e Dados | OPRIUN",
    description:
      "Consultoria de dados e inteligência artificial: diagnóstico, arquitetura e roadmap para transformar dados dispersos em decisões.",
    crumb: "Data Consulting",
    service: "Consultoria de dados e inteligência artificial",
  },
  "/solucoes/business-intelligence": {
    title: "Business Intelligence para Empresas | OPRIUN",
    description:
      "Consultoria de Business Intelligence: KPIs, modelagem de dados e dashboards executivos para decisões mais rápidas e rastreáveis.",
    crumb: "Business Intelligence",
    service: "Consultoria de Business Intelligence",
  },
  "/solucoes/bi-data-quality": {
    title: "Qualidade de Dados para BI (Data Quality) | OPRIUN",
    description:
      "Validação, padronização e monitoramento da qualidade de dados para que relatórios e dashboards de BI sejam confiáveis.",
    crumb: "BI Data Quality",
    service: "Qualidade de dados para Business Intelligence",
  },
  "/solucoes/bi-platform": {
    title: "Desenvolvimento de Dashboards Empresariais | OPRIUN",
    description:
      "Desenvolvimento de dashboards empresariais e plataformas de BI integradas aos seus sistemas, com governança e acesso seguro.",
    crumb: "BI Platform",
    service: "Desenvolvimento de dashboards empresariais",
  },
  "/solucoes/bi-ia-outsourcing": {
    title: "Outsourcing de BI e IA | OPRIUN",
    description:
      "Time dedicado de BI e IA para sustentar, evoluir e operar suas soluções de dados sem aumentar a estrutura interna.",
    crumb: "BI & IA Outsourcing",
    service: "Outsourcing de BI e inteligência artificial",
  },
  "/agentes-de-ia": {
    title: "Agentes de IA para Empresas | OPRIUN",
    description:
      "Agentes autônomos de IA para atendimento, triagem, qualificação e extração de documentos, integrados aos seus sistemas.",
    crumb: "Agentes de IA",
    service: "Agentes de IA para empresas",
  },
  "/equipe-de-dados": {
    title: "Equipe de Dados e IA | OPRIUN",
    description:
      "Engenheiros de dados, analistas de BI e especialistas em IA que atuam como extensão do seu time, do diagnóstico à operação.",
    crumb: "Equipe de Dados e IA",
  },
  "/metodo": {
    title: "Metodologia de Projetos de BI e IA | OPRIUN",
    description:
      "Metodologia Opriun: diagnóstico, arquitetura, implementação, governança e escala em ciclos curtos com entregas mensuráveis.",
    crumb: "Metodologia",
  },
  "/contato": {
    title: "Fale com um Especialista em BI e IA | OPRIUN",
    description:
      "Agende uma conversa estratégica com a Opriun e avalie oportunidades de BI, dados e automação com IA na sua empresa.",
    crumb: "Contato",
  },
  "/seja-um-representante-comercial": {
    title: "Seja um Representante Comercial | OPRIUN",
    description:
      "Represente soluções de BI, dados e IA da Opriun na sua região. Envie seus dados e conheça o programa de parceria comercial.",
    crumb: "Representante Comercial",
  },
  "/politica-de-privacidade": {
    title: "Política de Privacidade | OPRIUN",
    description: "Como a Opriun coleta, utiliza e protege dados pessoais, em conformidade com a LGPD.",
    crumb: "Política de Privacidade",
  },
  "/politica-de-cookies": {
    title: "Política de Cookies | OPRIUN",
    description: "Saiba como a Opriun utiliza cookies e tecnologias semelhantes neste site.",
    crumb: "Política de Cookies",
  },
  "/termos-de-uso": {
    title: "Termos de Uso | OPRIUN",
    description: "Condições de acesso e uso do site da Opriun.",
    crumb: "Termos de Uso",
  },
  "/cartao": {
    title: "Cartão Digital | OPRIUN",
    description: "Cartão digital da Opriun com contatos, WhatsApp, e-mail e LinkedIn.",
    noindex: true,
  },
};

const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

const BASE_KEYWORDS = [
  "consultoria de dados", "Business Intelligence", "análise de dados empresariais",
  "transformação digital", "agentes de IA", "data consulting", "BI e analytics",
];
const KEYWORDS: Record<string, string[]> = {
  "/solucoes/data-consulting": ["data consulting", "consultoria de dados", "consultoria de inteligência artificial", "estratégia de dados", "transformação digital"],
  "/solucoes/business-intelligence": ["Business Intelligence", "consultoria de BI", "BI e analytics", "KPIs", "dashboards executivos"],
  "/solucoes/bi-data-quality": ["qualidade de dados", "data quality", "governança de dados", "Business Intelligence"],
  "/solucoes/bi-platform": ["dashboards empresariais", "plataforma de BI", "BI e analytics", "desenvolvimento de dashboards"],
  "/solucoes/bi-ia-outsourcing": ["outsourcing de BI", "outsourcing de IA", "time de dados", "BI e analytics"],
  "/agentes-de-ia": ["agentes de IA", "agentes autônomos", "automação com IA", "IA para empresas"],
  "/solucoes": ["automação de processos com IA", "integração de sistemas", "Business Intelligence", "agentes de IA"],
  "/contato": ["consultoria de dados", "especialista em BI", "orçamento Business Intelligence"],
  "/seja-um-representante-comercial": ["representante comercial", "parceria comercial", "consultoria de dados"],
};

const ORG_ID = `${SITE_URL}/#organization`;

function breadcrumbs(path: string) {
  const parts = path.split("/").filter(Boolean);
  const items = [{ name: "Home", url: `${SITE_URL}/` }];
  let acc = "";
  for (const p of parts) {
    acc += `/${p}`;
    items.push({ name: SEO[acc]?.crumb ?? p, url: `${SITE_URL}${acc}` });
  }
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

/**
 * Monta o head() de uma rota: title, description, Open Graph, Twitter Card,
 * canonical absoluto, BreadcrumbList e Service (quando aplicável).
 */
export function pageHead(seo: PageSeo) {
  const o = SEO[seo.path];
  const title = o?.title ?? seo.title;
  const description = o?.description ?? seo.description;
  const ogTitle = o ? title : (seo.ogTitle ?? title);
  const ogDescription = o ? description : (seo.ogDescription ?? description);
  const url = `${SITE_URL}${seo.path === "/" ? "/" : seo.path}`;
  const noindex = seo.noindex ?? o?.noindex;

  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: ogTitle },
    { property: "og:description", content: ogDescription },
    { property: "og:type", content: seo.ogType ?? "website" },
    { property: "og:url", content: url },
    { property: "og:site_name", content: "Opriun" },
    { property: "og:locale", content: "pt_BR" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: ogTitle },
    { name: "twitter:description", content: ogDescription },
  ];
  meta.push({ name: "robots", content: noindex ? "noindex, follow" : "index, follow" });
  meta.push({ name: "keywords", content: (KEYWORDS[seo.path] ?? BASE_KEYWORDS).join(", ") });
  const image = seo.image ?? DEFAULT_OG_IMAGE;
  meta.push({ property: "og:image", content: image });
  meta.push({ property: "og:image:width", content: "1200" });
  meta.push({ property: "og:image:height", content: "630" });
  meta.push({ property: "og:image:alt", content: "OPRIUN — Consultoria de Business Intelligence, Dados e IA" });
  meta.push({ name: "twitter:image", content: image });

  const scripts: Array<{ type: string; children: string }> = [];
  if (seo.path !== "/" && !noindex) {
    scripts.push({ type: "application/ld+json", children: JSON.stringify(breadcrumbs(seo.path)) });
  }
  if (o?.service) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: o.service,
        serviceType: o.service,
        description,
        url,
        areaServed: ["BR", "PT", "US", "FR", "ES"],
        provider: { "@type": "Organization", "@id": ORG_ID, name: "Opriun" },
      }),
    });
  }
  const PAGE_TYPES: Record<string, string> = {
    "/quem-somos": "AboutPage",
    "/contato": "ContactPage",
    "/solucoes": "CollectionPage",
  };
  if (PAGE_TYPES[seo.path]) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": PAGE_TYPES[seo.path],
        name: title,
        description,
        url,
        inLanguage: "pt-BR",
        about: { "@id": ORG_ID },
        isPartOf: { "@id": `${SITE_URL}/#website` },
        ...(seo.path === "/contato" ? { mainEntity: { "@id": `${SITE_URL}/#localbusiness` } } : {}),
      }),
    });
  }

  return {
    meta,
    links: [{ rel: "canonical", href: url }],
    scripts,
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
