import { PageIntro, TextLink } from "../components/app/Shared";
export default function Privacy() {
  const connected = !!import.meta.env.VITE_CONTACT_ENDPOINT;
  return (
    <>
      <PageIntro title="Privacidade">
        Informações sobre esta apresentação e o formulário de contato.
      </PageIntro>
      <article className="container legal-content">
        <section>
          <h2>Sobre esta apresentação</h2>
          <p>
            Este site apresenta o conceito institucional da Logica. As empresas
            Flow, Atlas, Core, Prisma, Orbit e Pulse são perfis ilustrativos.
            Não representam participações societárias ou ofertas comerciais
            verificadas.
          </p>
        </section>
        <section>
          <h2>Dados do formulário</h2>
          <p>
            {connected
              ? "O formulário encaminha nome, e-mail, empresa, assunto, mensagem e confirmação de leitura deste aviso ao serviço de contato configurado."
              : "O formulário usa os dados preenchidos para gerar uma mensagem no seu navegador. Na configuração de demonstração, esses dados não são enviados a um servidor nem gravados em armazenamento local pelo código do site."}
          </p>
          <p>
            Ao copiar ou baixar a mensagem, você decide onde armazená-la ou
            compartilhá-la. Evite incluir documentos, senhas ou informações
            sensíveis.
          </p>
        </section>
        <section>
          <h2>Cookies e serviços externos</h2>
          <p>
            O código desta apresentação não inclui ferramentas de publicidade ou
            análise de navegação, cookies próprios ou fontes carregadas de
            terceiros. A hospedagem pode processar dados técnicos necessários
            para disponibilizar o site.
          </p>
        </section>
        <section>
          <h2>Antes da operação comercial</h2>
          <p>
            A identificação do responsável pelos dados, os canais para exercer
            direitos, os prestadores utilizados e os prazos de retenção devem
            ser definidos e informados antes da ativação comercial do contato.
            Este texto descreve a apresentação entregue e precisa acompanhar
            qualquer mudança no tratamento de dados.
          </p>
        </section>
        <TextLink to="/contato">Voltar ao contato</TextLink>
      </article>
    </>
  );
}
