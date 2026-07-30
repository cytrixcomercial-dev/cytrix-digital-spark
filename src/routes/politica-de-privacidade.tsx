import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Cytrix Data Consulting" },
      {
        name: "description",
        content:
          "Política de Privacidade da Cytrix Data Consulting: entenda como coletamos, usamos e protegemos seus dados.",
      },
      { property: "og:title", content: "Política de Privacidade — Cytrix Data Consulting" },
      {
        property: "og:description",
        content:
          "Entenda como a Cytrix Data Consulting coleta, usa e protege seus dados pessoais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PoliticaPrivacidadePage,
});

function PoliticaPrivacidadePage() {
  return (
    <>
      <section className="glow-top border-border/70 border-b">
        <div className="mx-auto max-w-4xl px-5 py-20 md:py-24">
          <p className="eyebrow">Privacidade</p>
          <h1 className="mt-5 text-4xl font-bold md:text-5xl">
            Política de <span className="text-gradient-brand">Privacidade</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-sm leading-relaxed">
            Esta página é mantida pela Cytrix Data Consulting para responder dúvidas comuns sobre
            segurança e privacidade. As informações aqui refletem as práticas atuais da empresa e
            podem ser atualizadas periodicamente.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <div className="prose prose-invert prose-sm max-w-none">
          <section className="mb-10">
            <h2 className="text-xl font-semibold">1. Quem somos</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              A presente Política de Privacidade é aplicável às atividades da{" "}
              <strong>CYTRIX TECHNOLOGIES LTDA</strong>, inscrita no CNPJ sob o nº{" "}
              <strong>50.445.596.0001-01</strong>, doravante denominada Cytrix Data Consulting,
              responsável pela operação deste site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold">2. Dados que coletamos</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Coletamos apenas as informações necessárias para responder sua solicitação. No
              formulário de contato, isso inclui:
            </p>
            <ul className="text-muted-foreground mt-3 list-inside list-disc space-y-1 text-sm leading-relaxed">
              <li>Nome e sobrenome;</li>
              <li>E-mail corporativo ou pessoal;</li>
              <li>Telefone (quando informado);</li>
              <li>Nome da empresa (quando informado);</li>
              <li>Mensagem e contexto do seu pedido.</li>
            </ul>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Não coletamos dados sensíveis (como saúde, convicção religiosa ou filiação política)
              por meio deste site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold">3. Como usamos seus dados</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Os dados são utilizados exclusivamente para:
            </p>
            <ul className="text-muted-foreground mt-3 list-inside list-disc space-y-1 text-sm leading-relaxed">
              <li>Entrar em contato sobre sua solicitação;</li>
              <li>Avaliar a viabilidade de uma proposta de serviços;</li>
              <li>Manter histórico de relacionamento comercial;</li>
              <li>Cumprir obrigações legais e regulatórias aplicáveis.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold">4. Base legal e consentimento</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              O tratamento de dados pessoais é realizado com base no consentimento livre e
              informado, fornecido no momento do envio do formulário, e no legítimo interesse da
              Cytrix em responder a solicitações comerciais. Você pode revogar seu consentimento a
              qualquer tempo, conforme descrito na seção de direitos do titular.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold">5. Armazenamento e retenção</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              As mensagens de contato são armazenadas em banco de dados gerenciado pela plataforma de
              hospedagem e backend utilizada pela Cytrix. Os dados são mantidos pelo tempo
              estritamente necessário para atender à finalidade da solicitação ou para cumprir
              obrigações legais. Após esse período, podem ser anonimizados ou excluídos.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold">6. Compartilhamento de dados</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Não vendemos dados pessoais. Compartilhamos informações apenas com:
            </p>
            <ul className="text-muted-foreground mt-3 list-inside list-disc space-y-1 text-sm leading-relaxed">
              <li>Prestadores de serviço que operam a infraestrutura do site;</li>
              <li>Autoridades competentes, quando houver exigência legal.</li>
            </ul>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              A Cytrix utiliza provedores de nuvem e backend para hospedar o site e o banco de
              dados. Esses provedores atuam como operadores de dados, sob contrato e com obrigações
              de confidencialidade e segurança.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold">7. Segurança</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Adotamos medidas técnicas e administrativas adequadas para proteger seus dados contra
              acessos não autorizados, perda, destruição ou alteração. Isso inclui o uso de criptografia
              em trânsito (HTTPS/TLS), controle de acesso aos ambientes de produção e revisão
              periódica das práticas de segurança.
            </p>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Nenhum sistema é completamente invulnerável. A segurança também depende do uso
              responsável por parte dos visitantes, como manter senhas seguras e não compartilhar
              dados confidenciais por meios não seguros.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold">8. Seus direitos</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:
            </p>
            <ul className="text-muted-foreground mt-3 list-inside list-disc space-y-1 text-sm leading-relaxed">
              <li>Confirmar a existência de tratamento dos seus dados;</li>
              <li>Acessar seus dados pessoais;</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li>Solicitar a portabilidade dos dados;</li>
              <li>Revogar o consentimento, quando aplicável.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold">9. Como exercer seus direitos</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Envie sua solicitação para o e-mail{" "}
              <a
                href="mailto:comercial@cytrix.com.br"
                className="text-brand-orange hover:underline"
              >
                comercial@cytrix.com.br
              </a>
              , informando seu nome completo, e-mail utilizado no contato e a ação desejada.
              Responderemos dentro de um prazo razoável e, quando necessário, poderemos solicitar
              documentos para comprovar sua identidade.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold">10. Responsabilidades compartilhadas</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              A Cytrix é responsável pelos dados que coleta e processa em nome do seu negócio. A
              plataforma de hospedagem e backend é responsável pela segurança da infraestrutura que
              disponibiliza. O visitante é responsável por fornecer informações verdadeiras e por
              utilizar o site de forma lícita.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">11. Alterações nesta política</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Esta política pode ser atualizada para refletir mudanças na operação, na legislação ou
              nos serviços utilizados. A data da última revisão é indicada abaixo. Recomendamos
              consultar esta página periodicamente.
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
