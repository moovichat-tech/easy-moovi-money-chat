import { Shield } from "lucide-react";
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
        "Controle via texto",
        "Reconhecimento de áudio",
        "Análises de imagem",
        "Registro de compromissos e afazeres",
        "Registro de gastos e receitas",
        "Transações recorrentes",
        "Pergunte o que quiser saber",
        "Lembretes limitados",
        "Categorias ilimitadas",
        "Suporte via WhatsApp",
      ],
      description: "Ideal para quem quer flexibilidade",
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
        "Acesso a todas as funcionalidades",
        "Controle via texto",
        "Reconhecimento de áudio",
        "Análises de imagem",
        "Painel para acompanhamento e relatórios",
        "Resumo diário do seu dia",
        "Resumo de mêses anteriores",
        "Relatórios anuais",
        "Prioridade no suporte",
        "Sem aumentos de preço por 1 ano",
      ],
      description: "Melhor custo-benefício",
      buttonText: "Assinar Anual",
      href: "https://buy.stripe.com/5kQ6oIggn7uhfhE0HrgMw0g",
      isPopular: true,
      badge: "Economize 20%",
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
        "Acesso a todas as funcionalidades",
        "Maior economia a longo prazo",
        "Controle via texto",
        "Reconhecimento de áudio",
        "Análises de imagem",
        "Preço congelado por 2 anos",
        "Resumo diário do seu dia",
        "Resumo de mêses anteriores",
        "Relatórios anuais",
        "Acesso antecipado a novidades",
        "Suporte VIP prioritário",
        "Bônus exclusivos para assinantes",
      ],
      description: "Compromisso de longo prazo com máxima economia",
      buttonText: "Assinar Bianual",
      href: "https://buy.stripe.com/bJe5kEe8f4i54D09dXgMw0h",
      isPopular: false,
      badge: "Economize 40%",
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
