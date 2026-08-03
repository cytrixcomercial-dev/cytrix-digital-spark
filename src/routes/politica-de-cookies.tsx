import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () =>
    pageHead({
      path: "/politica-de-cookies",
      title: "Política de Cookies — Cytrix Data Consulting",
      description: "Política de Cookies da Cytrix Data Consulting: saiba como utilizamos cookies e tecnologias semelhantes.",
      ogTitle: "Política de Cookies — Cytrix Data Consulting",
      ogDescription: "Saiba como a Cytrix Data Consulting utiliza cookies e tecnologias semelhantes neste site.",
    }),
  component: PoliticaCookiesPage,
});

function PoliticaCookiesPage() {
  return (
    <>
      <section className="glow-top border-border/70 border-b">
        <div className="mx-auto max-w-4xl px-5 py-20 md:py-24">
          <p className="eyebrow">Cookies</p>
          <h1 className="mt-5 text-4xl font-bold md:text-5xl">
            Política de <span className="text-gradient-brand">Cookies</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-sm leading-relaxed">
            Esta página explica como a Cytrix Data Consulting utiliza cookies e tecnologias
            semelhantes em seu site. As práticas descritas refletem a configuração atual da empresa e
            podem ser revisadas conforme novas ferramentas forem adotadas.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <div className="prose prose-invert prose-sm max-w-none">
          <section className="mb-10">
            <h2 className="text-xl font-semibold">1. O que são cookies</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Cookies são pequenos arquivos de texto armazenados no seu navegador quando você visita
              um site. Eles ajudam a manter a sessão, lembrar preferências e entender como os
              visitantes interagem com as páginas.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold">2. Tipos de cookies que utilizamos</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Atualmente, este site utiliza cookies estritamente necessários para o funcionamento
              básico da navegação e, quando configurado, cookies de desempenho e análise para
              entender como o site é utilizado.
            </p>
            <ul className="text-muted-foreground mt-3 list-inside list-disc space-y-1 text-sm leading-relaxed">
              <li>
                <strong>Cookies essenciais:</strong> necessários para o funcionamento do site,
                segurança e prevenção de fraudes. Não podem ser desativados sem comprometer a
                experiência.
              </li>
              <li>
                <strong>Cookies de análise:</strong> utilizados para medir tráfego, páginas mais
                visitadas e origem dos acessos, quando uma ferramenta de analytics estiver ativa.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold">3. Finalidade do uso</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Os cookies são utilizados para:
            </p>
            <ul className="text-muted-foreground mt-3 list-inside list-disc space-y-1 text-sm leading-relaxed">
              <li>Garantir a estabilidade e segurança do site;</li>
              <li>Compreender a origem e o comportamento dos visitantes;</li>
              <li>Melhorar a experiência de navegação e o conteúdo oferecido.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold">4. Cookies de terceiros</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              A Cytrix não utiliza cookies de publicidade comportamental ou remarketing de
              terceiros. Caso ferramentas de analytics ou chat sejam integradas no futuro, esta
              política será atualizada para refletir os novos provedores e finalidades.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold">5. Como gerenciar cookies</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Você pode gerenciar ou desativar cookies diretamente nas configurações do seu
              navegador. Abaixo estão links úteis para os navegadores mais comuns:
            </p>
            <ul className="text-muted-foreground mt-3 list-inside list-disc space-y-1 text-sm leading-relaxed">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange hover:underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/pt-BR/kb/gerencie-configuracoes-de-armazenamento-local"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange hover:underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange hover:underline"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a94629f2092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange hover:underline"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              A desativação de cookies essenciais pode afetar o funcionamento correto do site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold">6. Alterações nesta política</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Esta política pode ser alterada para refletir mudanças nas ferramentas utilizadas ou
              na legislação aplicável. A data da última revisão é indicada abaixo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">7. Contato</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Dúvidas sobre o uso de cookies podem ser enviadas para{" "}
              <a
                href="mailto:comercial@cytrix.com.br"
                className="text-brand-orange hover:underline"
              >
                comercial@cytrix.com.br
              </a>
              .
            </p>
            <p className="text-muted-foreground mt-6 text-xs">
              Última atualização: {new Date().getFullYear()}.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
