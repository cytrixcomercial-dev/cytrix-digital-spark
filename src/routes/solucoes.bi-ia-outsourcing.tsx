import { createFileRoute } from "@tanstack/react-router";
import {
  Users,
  Headset,
  Clock,
  Briefcase,
  GraduationCap,
  Handshake,
} from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";
import imgAtendimento from "@/assets/solucoes-atendimento.jpg";

export const Route = createFileRoute("/solucoes/bi-ia-outsourcing")({
  head: () => ({
    meta: [
      { title: "BI & IA Outsourcing — Cytrix Data Consulting" },
      {
        name: "description",
        content:
          "Equipe especializada de dados e IA alocada no seu negócio para acelerar entregas sem aumentar a estrutura fixa.",
      },
      { property: "og:title", content: "BI & IA Outsourcing — Cytrix Data Consulting" },
      {
        property: "og:description",
        content:
          "Outsourcing de especialistas em BI, dados e IA para impulsionar projetos com agilidade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BiIaOutsourcingPage,
});

const features = [
  {
    icon: Users,
    title: "Equipe multidisciplinar alocada",
    text: "Engenheiros de dados, analistas, cientistas e arquitetos de IA dedicados aos seus projetos.",
  },
  {
    icon: Clock,
    title: "Velocidade sem contratação",
    text: "Acelere entregas com profissionais experientes sem passar pelo processo tradicional de RH.",
  },
  {
    icon: Headset,
    title: "Suporte contínuo",
    text: "Atendimento recorrente para manter painéis, pipelines, modelos e agentes em produção.",
  },
  {
    icon: Briefcase,
    title: "Modelos flexíveis",
    text: "Escolha entre alocação full-time, part-time ou por projeto, conforme a demanda da operação.",
  },
  {
    icon: GraduationCap,
    title: "Transferência de conhecimento",
    text: "Capacitamos seus times internos para reduzir dependência e aumentar autonomia.",
  },
  {
    icon: Handshake,
    title: "Parceria estratégica",
    text: "Trabalhamos como extensão do seu time, alinhados aos objetivos e cultura da empresa.",
  },
];

const steps = [
  {
    n: "01",
    title: "Mapear necessidades",
    text: "Entendemos perfis, skills e ritmo de entrega esperado para o seu time.",
  },
  {
    n: "02",
    title: "Montar o squad",
    text: "Selecionamos os especialistas da Cytrix mais alinhados ao desafio.",
  },
  {
    n: "03",
    title: "Integrar e operar",
    text: "Inserimos o time nos seus processos e ferramentas com governança e alinhamento.",
  },
  {
    n: "04",
    title: "Avaliar e evoluir",
    text: "Acompanhamos resultados, ajustamos a equipe e ampliamos escopo conforme necessário.",
  },
];

function BiIaOutsourcingPage() {
  return (
    <ServicePage
      eyebrow="BI & IA Outsourcing"
      title="Especialistas de dados e IA"
      highlight="no seu time"
      description="Amplie sua capacidade de entrega com uma equipe experiente de BI, dados e inteligência artificial alocada no seu negócio. Nosso outsourcing combina talento técnico, proximidade operacional e flexibilidade para acelerar resultados."
      image={imgAtendimento}
      imageAlt="Equipe de especialistas em dados e IA"
      features={features}
      steps={steps}
    />
  );
}
