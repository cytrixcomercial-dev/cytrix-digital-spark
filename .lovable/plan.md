# SEO avançado — Opriun

Observação: o documento cita "Cytrix Data Consulting", mas o site hoje usa a marca **Opriun**. O plano segue com Opriun (razão social CYTRIX TECHNOLOGIES LTDA mantida nos dados legais).

## 1. Auditoria (resumo)

| Nível | Problema | Ação |
|---|---|---|
| Crítico | Canonical e og:url relativos | Tornar absolutos com o domínio do projeto |
| Crítico | robots.txt sem Sitemap e `/cartao` + `/api` rastreáveis | Adicionar Sitemap, bloquear `/api/`, `noindex` em `/cartao` |
| Alto | Sem JSON-LD WebSite, Service, BreadcrumbList | Adicionar por tipo de página |
| Alto | Titles/descriptions não alinhados às palavras-chave | Reescrever por página (até 60/150 caracteres) |
| Alto | Página 404 em inglês e sem `noindex` | Traduzir para PT-BR e orientar navegação |
| Médio | Imagem `solucoes-ecossistema.jpg` com 1,2 MB (LCP) | Recomprimir para ~200 KB |
| Médio | Páginas de serviço sem FAQ nem explicação "o que é / para quem" | Adicionar blocos de FAQ visíveis |
| Médio | CTAs genéricos ("Solicitar diagnóstico") | CTAs contextualizados por página |
| Baixo | Sem preparo para GA4/Search Console | Estrutura de eventos + consentimento, sem IDs inventados |

## 2. Palavras-chave e página alvo

| Termo | Intenção | Página |
|---|---|---|
| consultoria de Business Intelligence | Comercial | Home + /solucoes/business-intelligence |
| Business Intelligence para empresas | Informacional/comercial | /solucoes/business-intelligence |
| desenvolvimento de dashboards empresariais | Comercial | /solucoes/bi-platform |
| consultoria de inteligência artificial | Comercial | /solucoes/data-consulting + /agentes-de-ia |
| agentes de IA para empresas | Comercial | /agentes-de-ia |
| automação de processos com IA | Comercial | /solucoes |

Volumes e dificuldade serão consultados na ferramenta de pesquisa (Brasil); dados ausentes ficam marcados como "a validar".

## 3. Implementação

1. **Head por página**: novos title/description/OG/Twitter, canonical absoluto, BreadcrumbList nas páginas internas, Service nas páginas de serviço, WebSite no root.
2. **Técnico**: robots.txt com Sitemap e `Disallow: /api/`; `/cartao` e políticas conferidas; 404 em português.
3. **Conteúdo/GEO**: em cada página de serviço, bloco "O que é / Para quem é indicado" e 4–5 perguntas frequentes baseadas nos serviços reais (sem clientes, números ou certificações inventados). FAQ visível; sem marcação FAQPage como promessa de resultado.
4. **Copy e CTAs**: ajustar subtítulos da Home e CTAs para "Agende uma conversa estratégica", "Converse com um especialista", "Conheça nossas soluções de BI e IA". Destinos e WhatsApp preservados.
5. **Desempenho/acessibilidade**: comprimir imagens grandes, conferir alt, aria-labels em botões de ícone (WhatsApp, voltar ao topo, carrossel).
6. **Mensuração**: utilitário `trackEvent` para cliques em CTA, envio de formulário e WhatsApp, ativo apenas quando um ID GA4 for informado e com consentimento de cookies.

Visual, cores, tipografia, logo e formulários permanecem como estão.

## 4. Validação
Build, Playwright nas rotas principais conferindo title/canonical/JSON-LD, envio do formulário e responsividade mobile.

## 5. Entrega
Relatório final com titles/descriptions/H1 por página, pendências (publicação, domínio, Search Console, ID GA4) e recomendações para os primeiros 90 dias.
