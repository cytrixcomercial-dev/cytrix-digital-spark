import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import {
  ShieldCheck,
  Search,
  AlertTriangle,
  CheckCircle,
  FileCheck,
  RefreshCw,
} from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";
import imgIntegracao from "@/assets/solucoes-integracao.jpg";

export const Route = createFileRoute("/solucoes/bi-data-quality")({
  head: () =>
    pageHead({
      path: "/solucoes/bi-data-quality",
      title: "BI Data Quality — Cytrix Data Consulting",
      description: "Garanta a confiabilidade dos seus dados com regras de qualidade, monitoramento contínuo e governança aplicada.",
      ogTitle: "BI Data Quality — Cytrix Data Consulting",
      ogDescription: "Qualidade de dados, profiling, validação e governança para decisões sem surpresas.",
    }),
  component: BiDataQualityPage,
});

const features = [
  {
    icon: Search,
    title: "Profiling e descoberta de dados",
    text: "Mapeamos padrões, anomalias, duplicidades e lacunas nas suas bases para entender a saúde real dos dados.",
  },
  {
    icon: ShieldCheck,
    title: "Regras de qualidade customizadas",
    text: "Definimos e automatizamos regras de completude, consistência, unicidade e atualidade conforme o negócio.",
  },
  {
    icon: AlertTriangle,
    title: "Alertas de desvios em tempo real",
    text: "Receba notificações imediatas quando um indicador de qualidade sair do padrão aceitável.",
  },
  {
    icon: CheckCircle,
    title: "Scorecards de qualidade",
    text: "Acompanhe a evolução da confiabilidade das fontes com visões claras para gestores e analistas.",
  },
  {
    icon: FileCheck,
    title: "Linhagem e rastreabilidade",
    text: "Saiba a origem, transformações e destino de cada dado, facilitando auditorias e correções.",
  },
  {
    icon: RefreshCw,
    title: "Correção e enriquecimento",
    text: "Aplicamos rotinas de limpeza, padronização e enriquecimento para elevar o nível da informação.",
  },
];

const steps = [
  {
    n: "01",
    title: "Avaliar",
    text: "Executamos profiling completo nas bases críticas do negócio.",
  },
  {
    n: "02",
    title: "Regrar",
    text: "Definimos critérios de qualidade alinhados aos processos de decisão.",
  },
  {
    n: "03",
    title: "Monitorar",
    text: "Implantamos painéis e alertas que mostram a saúde dos dados continuamente.",
  },
  {
    n: "04",
    title: "Melhorar",
    text: "Corrigimos origens, padronizamos fluxos e evoluímos a maturidade de dados.",
  },
];

function BiDataQualityPage() {
  return (
    <ServicePage
      eyebrow="BI Data Quality"
      title="Dados confiáveis para decisões"
      highlight="sem surpresas"
      description="Elimine dúvidas sobre a origem e a integridade dos seus dados. Nossa solução de BI Data Quality combina profiling, regras automáticas, alertas e governança para que seus indicadores reflitam a realidade do negócio."
      image={imgIntegracao}
      imageAlt="Monitoramento de qualidade de dados"
      features={features}
      steps={steps}
    />
  );
}
