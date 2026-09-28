export type Faq = { q: string; a: string };

export type ServiceIntro = { what: string; forWho: string[]; faqs: Faq[] };

/** Conteúdo explicativo e FAQ por página de serviço (baseado nos serviços oferecidos). */
export const SERVICE_CONTENT: Record<string, ServiceIntro> = {
  "/solucoes/data-consulting": {
    what: "Consultoria de dados e inteligência artificial é o trabalho de diagnosticar como a empresa gera, armazena e usa informação, e definir uma arquitetura e um roadmap para que dados e IA apoiem decisões e processos.",
    forWho: [
      "Empresas com dados espalhados em planilhas, ERP e CRM sem visão única",
      "Lideranças que querem aplicar IA, mas não sabem por onde começar",
      "Times que precisam priorizar iniciativas de dados com base em impacto",
    ],
    faqs: [
      { q: "O que é entregue em uma consultoria de dados?", a: "Um diagnóstico das fontes e processos, uma proposta de arquitetura de dados e um roadmap priorizado de iniciativas de BI e IA." },
      { q: "Preciso ter um data warehouse para começar?", a: "Não. O diagnóstico parte da estrutura atual e indica se e quando um data warehouse ou data lake faz sentido." },
      { q: "A consultoria inclui implementação?", a: "Pode incluir. Após o diagnóstico, a Opriun pode implementar as soluções ou apoiar o time interno." },
      { q: "Como os dados da empresa são protegidos?", a: "Os acessos são definidos com o cliente, seguindo princípios de menor privilégio e as diretrizes da LGPD." },
    ],
  },
  "/solucoes/business-intelligence": {
    what: "Business Intelligence (BI) é o conjunto de processos e ferramentas que coleta, organiza e apresenta dados em indicadores e dashboards para apoiar decisões de negócio.",
    forWho: [
      "Diretorias que dependem de relatórios manuais para fechar o mês",
      "Empresas com indicadores divergentes entre áreas",
      "Gestores que precisam acompanhar a operação com mais frequência",
    ],
    faqs: [
      { q: "O que faz uma consultoria de Business Intelligence?", a: "Define os KPIs, integra e modela os dados das fontes da empresa e desenvolve dashboards para cada nível de decisão." },
      { q: "Quais ferramentas de BI vocês utilizam?", a: "A escolha depende do ambiente do cliente. Trabalhamos com ferramentas de mercado e com soluções integradas aos sistemas existentes." },
      { q: "Quanto tempo leva o primeiro dashboard?", a: "O prazo depende da quantidade de fontes e da qualidade dos dados; ele é estimado no diagnóstico inicial." },
      { q: "BI serve para empresas de médio porte?", a: "Sim. O escopo é dimensionado conforme o volume de dados e as decisões prioritárias da empresa." },
    ],
  },
  "/solucoes/bi-data-quality": {
    what: "Data Quality é a prática de validar, padronizar e monitorar dados para garantir que sejam completos, consistentes e confiáveis antes de alimentar relatórios, dashboards e modelos de IA.",
    forWho: [
      "Empresas cujos dashboards mostram números que ninguém confia",
      "Operações com cadastros duplicados ou incompletos",
      "Projetos de IA que dependem de dados consistentes",
    ],
    faqs: [
      { q: "Por que a qualidade de dados afeta o BI?", a: "Dados inconsistentes geram indicadores errados; sem validação, o dashboard reproduz o problema da origem." },
      { q: "Como a qualidade dos dados é monitorada?", a: "Com regras de validação automatizadas e alertas quando um dado foge do padrão esperado." },
      { q: "É preciso corrigir tudo antes de começar o BI?", a: "Não. Priorizamos os dados que sustentam os indicadores mais críticos e evoluímos de forma incremental." },
    ],
  },
  "/solucoes/bi-platform": {
    what: "Uma plataforma de BI reúne dashboards empresariais, camada de dados e controle de acesso em um único ambiente, integrado aos sistemas da empresa.",
    forWho: [
      "Empresas que precisam de dashboards financeiros, comerciais e operacionais",
      "Organizações que querem distribuir indicadores com segurança por perfil",
      "Times que desejam substituir relatórios em planilhas",
    ],
    faqs: [
      { q: "O que inclui o desenvolvimento de dashboards empresariais?", a: "Levantamento de indicadores, integração das fontes, modelagem de dados, design dos painéis e controle de acesso." },
      { q: "Os dashboards se integram ao ERP e CRM?", a: "Sim. A integração com os sistemas existentes é parte do projeto." },
      { q: "É possível acessar os painéis pelo celular?", a: "Sim, os dashboards podem ser projetados para leitura em diferentes dispositivos." },
    ],
  },
  "/solucoes/bi-ia-outsourcing": {
    what: "Outsourcing de BI e IA é a contratação de um time especializado externo para sustentar, evoluir e operar soluções de dados e inteligência artificial de forma contínua.",
    forWho: [
      "Empresas sem equipe interna de dados",
      "Times que precisam de capacidade extra para novos projetos",
      "Operações que exigem sustentação contínua de dashboards e automações",
    ],
    faqs: [
      { q: "Como funciona o outsourcing de BI?", a: "Um time dedicado atua com rotinas, prioridades e indicadores de serviço definidos junto ao cliente." },
      { q: "O time substitui a equipe interna?", a: "Não necessariamente. Pode atuar como extensão do time existente, com transferência de conhecimento." },
      { q: "Quais atividades estão incluídas?", a: "Sustentação de dashboards, manutenção de integrações, evolução de modelos de dados e automações com IA." },
    ],
  },
};
