import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { PricingToggle } from "@/components/ui/pricing-toggle";

export function Pricing() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const plans = [
    {
      name: "Plano Mensal",
      monthlyPrice: 24.9,
      yearlyPrice: 24.9,
      yearlyTotal: 298.8,
      period: "por mês",
      features: [
        { text: "Conversas por Whatsapp", included: true },
        { text: "Conversas por áudios", included: true },
        { text: "Leituras de imagem", included: true },
        { text: "Gestão de receitas e despesas", included: true },
        { text: "Gestão de categorias ilimitadas", included: true },
        { text: "Lembretes de compromissos", included: true },
        { text: "Painel de acompanhamento", included: true },
        { text: "Relatórios completos", included: true },
        { text: "Exportação via Excel ou PDF", included: true },
        // Itens Excluídos no Mensal
        { text: "Suporte VIP prioritário", included: false },
        { text: "Preço congelado por 1 ano", included: false },
        { text: "Bônus exclusivos para assinantes", included: false },
        { text: "Preço congelado por 2 anos", included: false },
        { text: "Acesso antecipado a novidades", included: false },
      ],
      description: "Mais flexível",
      buttonText: "Assinar Mensal",
      href: "https://buy.stripe.com/00weVe7JR4i58Tg3TDgMw0f",
      isPopular: false,
    },
    {
      name: "Plano Anual",
      monthlyPrice: 24.9,
      yearlyPrice: 19.0,
      yearlyTotal: 238.8,
      savings: 60.0,
      savingsPercent: 20,
      period: "por mês",
      features: [
        { text: "Conversas por Whatsapp", included: true },
        { text: "Conversas por áudios", included: true },
        { text: "Leituras de imagem", included: true },
        { text: "Gestão de receitas e despesas", included: true },
        { text: "Gestão de categorias ilimitadas", included: true },
        { text: "Lembretes de compromissos", included: true },
        { text: "Painel de acompanhamento", included: true },
        { text: "Relatórios completos", included: true },
        { text: "Exportação via Excel ou PDF", included: true },
        // Itens Inclusos no Anual
        { text: "Suporte VIP prioritário", included: true },
        { text: "Preço congelado por 1 ano", included: true },
        // Itens Excluídos no Anual
        { text: "Bônus exclusivos para assinantes", included: false },
        { text: "Preço congelado por 2 anos", included: false },
        { text: "Acesso antecipado a novidades", included: false },
      ],
      description: "Melhor custo-benefício",
      buttonText: "Assinar Anual",
      href: "https://buy.stripe.com/5kQ6oIggn7uhfhE0HrgMw0g",
      isPopular: true,
      badge: "MAIS RECOMENDADO",
    },
    {
      name: "Plano 2 anos",
      monthlyPrice: 24.9,
      yearlyPrice: 14.9,
      yearlyTotal: 357.6,
      savings: 240.0,
      savingsPercent: 40,
      period: "por mês",
      features: [
        { text: "Conversas por Whatsapp", included: true },
        { text: "Conversas por áudios", included: true },
        { text: "Leituras de imagem", included: true },
        { text: "Gestão de receitas e despesas", included: true },
        { text: "Gestão de categorias ilimitadas", included: true },
        { text: "Lembretes de compromissos", included: true },
        { text: "Painel de acompanhamento", included: true },
        { text: "Relatórios completos", included: true },
        { text: "Exportação via Excel ou PDF", included: true },
        // Tudo Incluso no Bianual
        { text: "Suporte VIP prioritário", included: true },
        { text: "Preço congelado por 1 ano", included: true },
        { text: "Bônus exclusivos para assinantes", included: true },
        { text: "Preço congelado por 2 anos", included: true },
        { text: "Acesso antecipado a novidades", included: true },
      ],
      description: "Maior economia no longo prazo",
      buttonText: "Assinar Bianual",
      href: "https://buy.stripe.com/bJe5kEe8f4i54D09dXgMw0h",
      isPopular: false,
    },
  ];

  return (
    <section id="pricing-section" className="py-20 bg-muted/30">
      <div ref={elementRef}>
        <PricingToggle
          plans={plans}
          title="Escolha seu plano e comece agora"
          description="Controle financeiro direto no WhatsApp, 24h por dia."
        />
      </div>
    </section>
  );
}
