import LegalPageLayout from "@/components/LegalPageLayout";

const Terms = () => {
  return (
    <LegalPageLayout title="Termos de Uso" lastUpdated="20 de abril de 2026">
      <section>
        <p>
          Bem-vindo ao Moovi.chat! Estes Termos de Uso ("Termos") regulam o acesso e a
          utilização do assistente financeiro Moovi ("Serviço"), oferecido via WhatsApp.
          Leia com atenção antes de iniciar uma conversa com o nosso bot.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          1. Aceite dos Termos
        </h2>
        <p>
          Ao enviar a primeira mensagem para o número oficial do Moovi no WhatsApp, você
          declara que leu, compreendeu e concorda integralmente com estes Termos de Uso
          e com a nossa Política de Privacidade. Caso não concorde com qualquer parte
          deste documento, você não deve utilizar o Serviço.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          2. Natureza do Serviço
        </h2>
        <p>
          O Moovi é uma <strong>ferramenta de organização de finanças pessoais</strong>{" "}
          que auxilia o usuário a registrar receitas, despesas e gerar relatórios de
          forma prática via chat.
        </p>
        <p className="mt-3">
          O Moovi <strong>não oferece</strong> recomendações de investimentos,
          consultoria financeira profissional, aconselhamento jurídico, contábil ou
          tributário. As informações apresentadas têm caráter exclusivamente
          organizacional e informativo, não substituindo a orientação de profissionais
          habilitados.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          3. Cadastro e Conta
        </h2>
        <p>
          O cadastro é vinculado ao seu número de WhatsApp. Você é responsável por
          manter a confidencialidade do dispositivo e da conta de WhatsApp utilizada
          para acessar o Moovi, bem como por todas as atividades realizadas a partir
          dela.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          4. Assinaturas e Cancelamentos
        </h2>
        <p>
          O Moovi opera no modelo de assinatura, com os seguintes planos disponíveis:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li><strong>Plano Básico</strong></li>
          <li><strong>Plano Pro</strong></li>
          <li><strong>Plano Premium</strong></li>
        </ul>
        <p className="mt-3">
          Os valores, recursos e periodicidade de cobrança de cada plano estão descritos
          na nossa página inicial. As cobranças são processadas pelos gateways Asaas e
          Stripe.
        </p>
        <p className="mt-3">
          O <strong>cancelamento pode ser feito a qualquer momento</strong> pelo próprio
          usuário, diretamente pelo chat com o assistente ou via solicitação para o
          e-mail de contato. Após o cancelamento, o acesso permanece ativo até o fim do
          ciclo já pago e não há reembolso proporcional, salvo nos casos previstos pelo
          Código de Defesa do Consumidor.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          5. Regras de Conduta
        </h2>
        <p>Ao utilizar o Moovi, você concorda em <strong>não</strong>:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Utilizar o bot para envio de spam, mensagens em massa ou conteúdo não solicitado;</li>
          <li>Praticar atividades ilícitas, fraudulentas ou que violem direitos de terceiros;</li>
          <li>Tentar acessar, modificar ou interferir na infraestrutura do Serviço sem autorização;</li>
          <li>Realizar engenharia reversa, scraping automatizado ou abuso da API do WhatsApp;</li>
          <li>Inserir intencionalmente dados falsos para prejudicar a operação do Serviço.</li>
        </ul>
        <p className="mt-3">
          O descumprimento destas regras poderá resultar na suspensão imediata do acesso,
          sem prejuízo das medidas legais cabíveis.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          6. Propriedade Intelectual
        </h2>
        <p>
          Todo o conteúdo, marca, logotipo, software e demais elementos do Moovi são de
          titularidade exclusiva da empresa responsável pelo Serviço e protegidos pela
          legislação aplicável. É vedada a reprodução total ou parcial sem autorização
          prévia e expressa.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          7. Limitação de Responsabilidade
        </h2>
        <p>
          O Moovi se compromete a manter o Serviço disponível e funcional, mas não
          garante operação ininterrupta ou livre de falhas. Não nos responsabilizamos
          por decisões financeiras tomadas pelo usuário com base nas informações
          organizadas pelo assistente, nem por indisponibilidades causadas por
          terceiros (WhatsApp, provedores de internet, gateways de pagamento).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          8. Alterações nos Termos
        </h2>
        <p>
          Podemos atualizar estes Termos a qualquer momento. Mudanças relevantes serão
          comunicadas via WhatsApp. O uso continuado do Serviço após a publicação das
          alterações implica aceitação da nova versão.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          9. Foro e Legislação Aplicável
        </h2>
        <p>
          Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica
          eleito o foro do domicílio do usuário para dirimir quaisquer controvérsias.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          10. Contato
        </h2>
        <p>
          Dúvidas sobre estes Termos?{" "}
          <a href="mailto:contato@moovi.chat" className="text-primary hover:underline">
            contato@moovi.chat
          </a>
        </p>
      </section>
    </LegalPageLayout>
  );
};

export default Terms;