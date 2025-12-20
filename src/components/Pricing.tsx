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
        "Conversas por Whatsapp",
        "Conversas por áudios",
        "Leituras de imagem",
        "Gestão de receitas e depesas",
        "Gestão de categorias ilimitadas",
        "Lembretes de compromissos",
        "Painel de acompanhamento",
        "Relatórios completos",
        "Exportação via Excel ou PDF",
        "Suporte via WhatsApp",
        "Suporte VIP prioritário",
        "Bônus exclusivos para assinantes",
        "Preço congelado por 1 ano",
        "Preço congelado por 2 anos",
        "Acesso antecipado a novidades",
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
        "Conversas por Whatsapp",
        "Conversas por áudios",
        "Leituras de imagem",
        "Gestão de receitas e depesas",
        "Gestão de categorias ilimitadas",
        "Lembretes de compromissos",
        "Painel de acompanhamento",
        "Relatórios completos",
        "Exportação via Excel ou PDF",
        "Suporte via WhatsApp",
        "Suporte VIP prioritário",
        "Bônus exclusivos para assinantes",
        "Preço congelado por 1 ano",
        "Preço congelado por 2 anos",
        "Acesso antecipado a novidades",
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
        "Conversas por Whatsapp",
        "Conversas por áudios",
        "Leituras de imagem",
        "Gestão de receitas e depesas",
        "Gestão de categorias ilimitadas",
        "Lembretes de compromissos",
        "Painel de acompanhamento",
        "Relatórios completos",
        "Exportação via Excel ou PDF",
        "Suporte via WhatsApp",
        "Suporte VIP prioritário",
        "Bônus exclusivos para assinantes",
        "Preço congelado por 1 ano",
        "Preço congelado por 2 anos",
        "Acesso antecipado a novidades",
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
