import LegalPageLayout from "@/components/LegalPageLayout";

const Privacy = () => {
  return (
    <LegalPageLayout title="Política de Privacidade" lastUpdated="20 de abril de 2026">
      <section>
        <p>
          A sua privacidade é prioridade para o Moovi.chat ("Moovi", "nós"). Esta Política
          de Privacidade explica de forma transparente quais dados coletamos, como os
          utilizamos e quais são os seus direitos ao usar nosso assistente financeiro
          via WhatsApp.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          1. Coleta de Dados
        </h2>
        <p>
          Para que o Moovi funcione corretamente como seu assistente financeiro pessoal,
          coletamos as seguintes informações:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>
            <strong>Número de WhatsApp:</strong> utilizado como identificador único da
            sua conta e canal de comunicação com o assistente.
          </li>
          <li>
            <strong>Nome:</strong> coletado para personalizar a experiência durante as
            interações no chat.
          </li>
          <li>
            <strong>Dados de transações financeiras:</strong> registros de receitas,
            despesas, categorias e descrições inseridos voluntariamente por você no chat
            para que o Moovi possa organizar suas finanças pessoais.
          </li>
          <li>
            <strong>Metadados de uso:</strong> informações técnicas (data, hora, status
            de mensagens) necessárias para o funcionamento do serviço.
          </li>
        </ul>
      </section>

      <section className="mt-10 p-6 rounded-xl border-2 border-primary/30 bg-primary/5">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          2. Uso de Dados do Google (Google Calendar API)
        </h2>
        <p>
          O Moovi utiliza a API do Google Calendar exclusivamente para criar eventos e
          lembretes solicitados explicitamente pelo usuário via WhatsApp. Nós não lemos
          seus eventos passados, não armazenamos sua agenda em nossos servidores e jamais
          compartilhamos os dados do seu Google Workspace com terceiros. O uso e a
          transferência para qualquer outro aplicativo das informações recebidas das APIs
          do Google obedecerão à Política de Dados do Usuário dos Serviços de API do
          Google (Google API Services User Data Policy), incluindo os requisitos de Uso
          Limitado (Limited Use requirements).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          3. Uso das Informações
        </h2>
        <p>Utilizamos os dados coletados para:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Operar o assistente de finanças pessoais via WhatsApp;</li>
          <li>Gerar relatórios, gráficos e resumos financeiros para o próprio usuário;</li>
          <li>Processar a sua assinatura e enviar comunicações relacionadas ao serviço;</li>
          <li>Melhorar a qualidade do produto e prevenir fraudes ou usos indevidos.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          4. Compartilhamento de Dados
        </h2>
        <p>
          O Moovi <strong>não vende</strong> e <strong>não compartilha</strong> dados
          pessoais com terceiros para fins de marketing. Compartilhamos informações
          apenas com prestadores de serviço estritamente necessários para a operação,
          como provedores de pagamento (Asaas e Stripe) e infraestrutura em nuvem, sob
          contratos de confidencialidade e proteção de dados.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          5. Segurança
        </h2>
        <p>
          Adotamos práticas de segurança da informação para proteger seus dados,
          incluindo <strong>criptografia em trânsito (TLS) e em repouso</strong>,
          controle de acesso e monitoramento contínuo. Os dados de cartão de crédito{" "}
          <strong>não são armazenados pelo Moovi</strong>: todo o processamento de
          pagamentos é realizado por gateways seguros e certificados PCI-DSS (Asaas e
          Stripe).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          6. Seus Direitos (LGPD)
        </h2>
        <p>
          Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018),
          você pode solicitar a qualquer momento: acesso, correção, exclusão,
          portabilidade ou anonimização dos seus dados. Para exercer seus direitos,
          entre em contato pelo e-mail{" "}
          <a href="mailto:contato@moovi.chat" className="text-primary hover:underline">
            contato@moovi.chat
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          7. Retenção e Exclusão
        </h2>
        <p>
          Mantemos seus dados enquanto sua conta estiver ativa. Em caso de cancelamento,
          os dados serão excluídos ou anonimizados em até 90 dias, exceto quando houver
          obrigação legal de retenção.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          8. Atualizações desta Política
        </h2>
        <p>
          Esta Política pode ser atualizada periodicamente. Mudanças relevantes serão
          comunicadas pelo WhatsApp ou pelo e-mail cadastrado. O uso continuado do
          serviço após alterações implica concordância com a nova versão.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          9. Contato
        </h2>
        <p>
          Dúvidas sobre esta Política ou sobre o tratamento dos seus dados? Fale com
          nosso Encarregado de Dados:{" "}
          <a href="mailto:contato@moovi.chat" className="text-primary hover:underline">
            contato@moovi.chat
          </a>
          .
        </p>
      </section>
    </LegalPageLayout>
  );
};

export default Privacy;