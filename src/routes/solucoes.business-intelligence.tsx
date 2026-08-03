import { createFileRoute } from "@tanstack/react-router";
import {
  LayoutDashboard,
  LineChart,
  PieChart,
  Target,
  TrendingUp,
  Eye,
} from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";
import imgEcossistema from "@/assets/solucoes-ecossistema.jpg";

export const Route = createFileRoute("/solucoes/business-intelligence")({
  head: () => ({
    meta: [
      { title: "Business Intelligence (BI) — Cytrix Data Consulting" },
      {
        name: "description",
        content:
          "Painéis executivos, dashboards operacionais e indicadores em tempo real para decisões mais rápidas e assertivas.",
      },
      { property: "og:title", content: "Business Intelligence (BI) — Cytrix Data Consulting" },
      {
        property: "og:description",
        content:
          "Visualização de dados, KPIs e analytics que colocam o negócio no controle da operação.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BusinessIntelligencePage,
});

const features = [
  {
    icon: LayoutDashboard,
    title: "Dashboards executivos sob medida",
    text: "Painéis intuitivos que reúnem os indicadores mais relevantes para cada nível de decisão da empresa.",
  },
  {
    icon: LineChart,
    title: "Análise de tendências e comparativos",
    text: "Acompanhe evolução histórica, sazonalidades e benchmarks para antecipar movimentos do mercado.",
  },
  {
    icon: PieChart,
    title: "Visualizações interativas",
    text: "Gráficos dinâmicos, filtros avançados e drill-down que permitem explorar a informação em detalhes.",
  },
  {
    icon: Target,
    title: "KPIs alinhados à estratégia",
    text: "Definimos e acompanhamos métricas que refletem objetivos reais de crescimento e eficiência.",
  },
  {
    icon: TrendingUp,
    title: "Analytics descritivo e preditivo",
    text: "Vá além do retratos: identifique causas, projeções e cenários com modelos estatísticos.",
  },
  {
    icon: Eye,
    title: "Monitoramento em tempo real",
    text: "Alertas automáticos e visões atualizadas para que nenhum desvio passe despercebido.",
  },
];

const steps = [
  {
    n: "01",
    title: "Entender",
    text: "Levantamos as decisões críticas e os indicadores que as sustentam.",
  },
  {
    n: "02",
    title: "Modelar",
    text: "Estruturamos as fontes e criamos a camada semântica dos dados.",
  },
  {
    n: "03",
    title: "Visualizar",
    text: "Desenvolvemos dashboards com foco em clareza, velocidade e ação.",
  },
  {
    n: "04",
    title: "Escalar",
    text: "Expandimos para novas áreas e adicionamos análises preditivas.",
  },
];

function BusinessIntelligencePage() {
  return (
    <ServicePage
      eyebrow="Business Intelligence (BI)"
      title="Veja o negócio com clareza e"
      highlight="decida mais rápido"
      description="Criamos soluções de BI que traduzem dados complexos em visões acionáveis. Desde dashboards operacionais até análises estratégicas, entregamos a informação certa para cada decisor, no momento certo."
      image={imgEcossistema}
      imageAlt="Dashboards executivos em monitores"
      features={features}
      steps={steps}
    />
  );
}
