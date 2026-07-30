import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Cytrix Data Consulting" },
      {
        name: "description",
        content:
          "Termos de Uso da Cytrix Data Consulting: condições para acesso e uso deste site.",
      },
      { property: "og:title", content: "Termos de Uso — Cytrix Data Consulting" },
      {
        property: "og:description",
        content:
          "Leia os Termos de Uso que regem o acesso e a utilização do site da Cytrix Data Consulting.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermosDeUsoPage,
});

function TermosDeUsoPage() {
  return (
    <>
      <section className="glow-top border-border/70 border-b">
        <div className="mx-auto max-w-4xl px-5 py-20 md:py-24">
          <p className="eyebrow">Termos</p>
          <h1 className="mt-5 text-4xl font-bold md:text-5xl">
            Termos de <span className="text-gradient-brand">Uso</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-sm leading-relaxed">
            Ao acessar este site, você concorda com as condições descritas abaixo. Recomendamos a
            leitura atenta destes termos. Eles podem ser atualizados periodicamente para refletir
            mudanças na operação da Cytrix Data Consulting.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <div className="prose prose-invert prose-sm max-w-none">
          <section className="mb-10">
            <h2 className="text-xl font-semibold">1. Aplicação dos termos</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Estes Termos de Uso se aplicam a todos os visitantes e usuários do site operado pela{" "}
              <strong>CYTRIX TECHNOLOGIES LTDA</strong>, CNPJ nº{" "}
              <strong>50.445.596.0001-01</strong>, marca Cytrix Data Consulting. O uso contínuo do
              site implica na aceitação das regras aqui estabelecidas.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold">2. Objeto do site</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Este site tem como finalidade apresentar os serviços de consultoria em dados,
              engenharia de dados, analytics, automação e agentes de IA oferecidos pela Cytrix,
              além de possibilitar o contato comercial por meio do formulário de contato.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold">3. Uso permitido</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              O visitante se compromete a utilizar o site de forma lícita, respeitando a legislação
              brasileira, os direitos de terceiros e estes termos. É proibido:
            </p>
            <ul className="text-muted-foreground mt-3 list-inside list-disc space-y-1 text-sm leading-relaxed">
              <li>Utilizar o site para fins ilegais ou fraudulentos;</li>
              <li>Tentar acessar áreas restritas sem autorização;</li>
              <li>Interferir na disponibilidade, segurança ou integridade do site;</li>
              <li>Reproduzir, distribuir ou modificar conteúdos sem autorização prévia;</li>
              <li>Inserir dados falsos ou de terceiros sem consentimento.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold">4. Propriedade intelectual</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Todo o conteúdo disponível neste site — textos, imagens, logotipos, ícones, layout,
              código e materiais — é de propriedade da Cytrix ou de seus licenciadores, salvo indicação
              em contrário. O acesso ao site não confere qualquer direito de uso comercial,
              reprodução ou distribuição não autorizada.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold">5. Formulário de contato</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Ao enviar uma mensagem pelo formulário de contato, o usuário declara que as informações
              fornecidas são verdadeiras e autoriza a Cytrix a utilizá-las para responder sua
              solicitação. O envio de mensagem não constitui contrato de prestação de serviços.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold">6. Limitação de responsabilidade</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              A Cytrix se empenha para manter o site disponível e as informações atualizadas, mas
              não garante acesso ininterrupto ou livre de erros. Não nos responsabilizamos por danos
              diretos ou indiretos decorrentes de indisponibilidade temporária, imprecisões de
              conteúdo ou uso indevido por parte de terceiros.
            </p>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              A operação do site depende também de provedores de infraestrutura, conectividade e
              serviços de internet. A Cytrix não se responsabiliza por falhas originadas nessas
              camadas externas.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold">7. Links externos</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              O site pode conter links para sites de terceiros, como redes sociais e canais de
              comunicação. A Cytrix não controla esses sites e não se responsabiliza por seus
              conteúdos, políticas de privacidade ou práticas de segurança.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold">8. Privacidade</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              O tratamento de dados pessoais realizado por meio deste site está descrito na nossa{" "}
              <a
                href="/politica-de-privacidade"
                className="text-brand-orange hover:underline"
              >
                Política de Privacidade
              </a>
              , que faz parte destes Termos de Uso.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold">9. Alterações nos termos</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              A Cytrix pode atualizar estes Termos de Uso a qualquer momento. As alterações entram em
              vigor na data de publicação no site. O uso continuado do site após a publicação das
              alterações implica na aceitação dos novos termos.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold">10. Legislação aplicável</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Estes Termos de Uso são regidos pela legislação brasileira. Quaisquer disputas serão
              dirimidas no foro da comarca de Curitiba, Estado do Paraná, salvo disposição legal em
              contrário.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">11. Contato</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Dúvidas sobre estes Termos de Uso podem ser enviadas para{" "}
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
