import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import {
  Database,
  GitBranch,
  Layers,
  Workflow,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";
import imgDados from "@/assets/solucoes-dados.jpg";

export const Route = createFileRoute("/solucoes/data-consulting")({
  head: () =>
    pageHead({
      path: "/solucoes/data-consulting",
      title: "Data Consulting — Opriun",
      description: "Estratégia, arquitetura e governança de dados para empresas que querem transformar informação em vantagem competitiva.",
      ogTitle: "Data Consulting — Opriun",
      ogDescription: "Consultoria especializada em dados: modelagem, pipelines, data warehouse e governança.",
    }),
  component: DataConsultingPage,
});

const features = [
  {
    icon: Database,
    title: "Arquitetura de dados escalável",
    text: "Desenhamos data warehouses, data lakes e lakehouses alinhados ao volume e à velocidade do seu negócio.",
  },
  {
    icon: GitBranch,
    title: "Pipelines robustos e monitorados",
    text: "Orquestramos a ingestão, transformação e disponibilização dos dados com rastreabilidade e alertas automáticos.",
  },
  {
    icon: Layers,
    title: "Modelagem dimensional e semântica",
    text: "Estruturamos dados para que áreas de negócio consultem indicadores sem depender de TI a cada nova pergunta.",
  },
  {
    icon: Workflow,
    title: "Integração de fontes heterogêneas",
    text: "Conectamos ERPs, CRMs, APIs, planilhas e bancos de dados em uma camada unificada e confiável.",
  },
  {
    icon: ShieldCheck,
    title: "Governança e qualidade",
    text: "Implementamos catálogo de dados, linhagem, políticas de acesso e controles que garantem confiança na informação.",
  },
  {
    icon: BarChart3,
    title: "Preparação para IA e analytics",
    text: "Deixamos seus dados prontos para alimentar painéis, modelos preditivos e agentes autônomos de forma segura.",
  },
];

const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    text: "Mapeamos fontes, gargalos, indicadores e objetivos estratégicos do negócio.",
  },
  {
    n: "02",
    title: "Arquitetura",
    text: "Definimos a modelagem, stack e camadas de integração mais adequadas ao seu cenário.",
  },
  {
    n: "03",
    title: "Implementação",
    text: "Construímos pipelines, testamos qualidade e preparamos o ambiente para produção.",
  },
  {
    n: "04",
    title: "Evolução",
    text: "Monitoramos, documentamos e aprimoramos a plataforma conforme novas demandas surgem.",
  },
];

function DataConsultingPage() {
  return (
    <ServicePage
      eyebrow="Data Consulting"
      title="Estruture dados confiáveis para"
      highlight="decidir com velocidade"
      description="Transformamos dados dispersos em uma base sólida, governada e pronta para analytics e IA. Nossa consultoria cobre arquitetura, modelagem, pipelines, qualidade e integração de sistemas — tudo alinhado aos objetivos do seu negócio."
      image={imgDados}
      imageAlt="Arquitetura de dados e pipelines organizados"
      features={features}
      steps={steps}
    />
  );
}
