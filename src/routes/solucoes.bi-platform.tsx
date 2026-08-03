import { createFileRoute } from "@tanstack/react-router";
import {
  Layers,
  Cloud,
  Settings,
  Users,
  Lock,
  Gauge,
} from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";
import imgEcossistema from "@/assets/solucoes-ecossistema.jpg";

export const Route = createFileRoute("/solucoes/bi-platform")({
  head: () => ({
    meta: [
      { title: "BI Platform — Cytrix Data Consulting" },
      {
        name: "description",
        content:
          "Implantação, configuração e gestão de plataformas de BI modernas, escaláveis e integradas ao seu ecossistema.",
      },
      { property: "og:title", content: "BI Platform — Cytrix Data Consulting" },
      {
        property: "og:description",
        content:
          "Plataforma de BI sob medida: stack, segurança, governança e adoção pelo negócio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BiPlatformPage,
});

const features = [
  {
    icon: Cloud,
    title: "Plataformas em nuvem",
    text: "Implementamos soluções em cloud com alta disponibilidade, elasticidade e custo otimizado.",
  },
  {
    icon: Layers,
    title: "Arquitetura moderna de BI",
    text: "Camadas de ingestão, transformação, semântica e consumo projetadas para escalar com o negócio.",
  },
  {
    icon: Lock,
    title: "Segurança e controle de acesso",
    text: "Configuramos autenticação, permissões por perfil e auditoria para proteger dados sensíveis.",
  },
  {
    icon: Gauge,
    title: "Performance e otimização",
    text: "Ajustamos consultas, modelos e cache para garantir velocidade mesmo com grandes volumes.",
  },
  {
    icon: Users,
    title: "Adoção pelo negócio",
    text: "Treinamos times e criamos templates que facilitam a construção de novas análises com autonomia.",
  },
  {
    icon: Settings,
    title: "Operação e sustentação",
    text: "Monitoramos a plataforma, aplicamos atualizações e evoluímos funcionalidades continuamente.",
  },
];

const steps = [
  {
    n: "01",
    title: "Definir",
    text: "Escolhemos a stack e a arquitetura ideais para seus objetivos e restrições.",
  },
  {
    n: "02",
    title: "Implantar",
    text: "Configuramos a plataforma, conectores, segurança e camadas de dados.",
  },
  {
    n: "03",
    title: "Publicar",
    text: "Disponibilizamos dashboards, relatórios e acesso controlado aos usuários.",
  },
  {
    n: "04",
    title: "Evoluir",
    text: "Acompanhamos uso, performance e amadurecimento da solução.",
  },
];

function BiPlatformPage() {
  return (
    <ServicePage
      eyebrow="BI Platform"
      title="Uma plataforma de BI robusta,"
      highlight="pronta para escalar"
      description="Desenhamos, implantamos e operamos plataformas de BI que centralizam a inteligência do negócio. Da escolha da stack à adoção pelos usuários, cuidamos de toda a jornada para que sua empresa tenha uma base sólida de decisão."
      image={imgEcossistema}
      imageAlt="Plataforma de BI com dashboards integrados"
      features={features}
      steps={steps}
    />
  );
}
