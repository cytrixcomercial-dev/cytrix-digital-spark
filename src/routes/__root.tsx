import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/lib/i18n";
import { AutoTranslate } from "@/lib/auto-translate";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { initAnalytics, trackPageView } from "../lib/analytics";

function NotFoundComponent() {
  return (
    <>
    <meta name="robots" content="noindex" />
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-orange"
          >
            Voltar para a Home
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ocorreu um erro. Tente novamente ou volte para a Home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-orange"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-brand-orange hover:text-primary-foreground"
          >
            Voltar para a Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Opriun" },
      { name: "theme-color", content: "#000000" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-title", content: "Opriun" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon-57x57.png", sizes: "57x57" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon-60x60.png", sizes: "60x60" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon-72x72.png", sizes: "72x72" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon-76x76.png", sizes: "76x76" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon-114x114.png", sizes: "114x114" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon-120x120.png", sizes: "120x120" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon-144x144.png", sizes: "144x144" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon-152x152.png", sizes: "152x152" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon-167x167.png", sizes: "167x167" },
      { rel: "manifest", href: "/manifest.webmanifest" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Opriun",
          legalName: "CYTRIX TECHNOLOGIES LTDA",
          taxID: "50.445.596/0001-01",
          description:
            "Consultoria de dados e IA: engenharia de dados, business intelligence, governança e agentes autônomos de IA.",
          email: "comercial@opriun.com.br",
          telephone: "+55 41 99689-0003",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Avenida Vicente Machado, 520 - Centro",
            addressLocality: "Curitiba",
            addressRegion: "PR",
            postalCode: "80420-010",
            addressCountry: "BR",
          },
          "@id": "https://cytrix-digital-spark.lovable.app/#organization",
          url: "https://cytrix-digital-spark.lovable.app/",
          logo: "https://cytrix-digital-spark.lovable.app/icon-512.png",
          areaServed: "BR",
          knowsAbout: ["Business Intelligence", "Qualidade de dados", "Dashboards empresariais", "Agentes de IA", "Automação de processos com IA", "Engenharia de dados"],
          sameAs: ["https://www.linkedin.com/company/opriun"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Opriun",
          url: "https://cytrix-digital-spark.lovable.app/",
          inLanguage: "pt-BR",
          publisher: { "@id": "https://cytrix-digital-spark.lovable.app/#organization" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();

  useEffect(() => {
    void initAnalytics();
    const unsubscribe = router.subscribe("onResolved", ({ toLocation }) => {
      trackPageView(toLocation.pathname);
    });
    return unsubscribe;
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
            <Outlet />
          </main>
          <Footer />
          <Toaster />
          <BackToTop />
          <WhatsAppButton />
          <AutoTranslate />
        </div>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
