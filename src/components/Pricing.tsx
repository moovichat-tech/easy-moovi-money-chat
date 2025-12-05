import { Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { PricingToggle } from "@/components/ui/pricing-toggle";

export function Pricing() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const plans = [
    {
      name: "Plano Mensal",
      monthlyPrice: 24.90,
      yearlyPrice: 24.90,
      yearlyTotal: 298.80,
      period: "por mês",
      features: [
        "Registro de compromissos e afazeres",
        "Registro de gastos e receitas",
        "Transações recorrentes",
        "Pergunte o que quiser saber",
        "Lembretes ilimitados",
        "Categorias ilimitadas",
        "Suporte via WhatsApp",
      ],
      description: "Ideal para quem quer flexibilidade",
      buttonText: "Assinar Mensal",
      href: "https://buy.stripe.com/3cI00j7sNe45gn19sh5c403",
      isPopular: false,
    },
    {
      name: "Plano Anual",
      monthlyPrice: 24.90,
      yearlyPrice: 19.90,
      yearlyTotal: 238.80,
      savings: 60.00,
      savingsPercent: 20,
      period: "por mês",
      features: [
        "Tudo do Plano Mensal",
        "Painel para acompanhamento e relatórios",
        "Conecte mais pessoas à sua conta",
        "Receba resumo diário do seu dia",
        "Prioridade no suporte",
        "Sem aumentos de preço por 1 ano",
      ],
      description: "Melhor custo-benefício",
      buttonText: "Assinar Anual",
      href: "https://buy.stripe.com/28E5kDcN78JL1s77k95c404",
      isPopular: true,
      badge: "Economize 20%",
    },
    {
      name: "Plano 2 anos",
      monthlyPrice: 24.90,
      yearlyPrice: 14.90,
      yearlyTotal: 357.60,
      savings: 240.00,
      savingsPercent: 40,
      period: "por mês",
      features: [
        "Tudo do Plano Anual",
        "Maior economia a longo prazo",
        "Preço congelado por 2 anos",
        "Acesso antecipado a novidades",
        "Suporte VIP prioritário",
        "Bônus exclusivos para assinantes",
      ],
      description: "Compromisso de longo prazo com máxima economia",
      buttonText: "Assinar Bianual",
      href: "https://buy.stripe.com/8x2eVddRb1hj5In5c15c40n",
      isPopular: false,
      badge: "Economize 40%",
    },
  ];

  return (
    <section id="pricing-section" className="py-20 bg-muted/30">
      <div ref={elementRef}>
        <PricingToggle 
          plans={plans} 
          title="Conheça nossos planos" 
          description="Organização financeira e pessoal direto no WhatsApp 24h por dia."
        />

        {/* Trust Badge */}
        <div className={`mt-12 text-center fade-in-scroll fade-in-scroll-delay-400 ${isVisible ? 'visible' : ''}`}>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            🔒 <span>Pagamento 100% seguro processado pelo Stripe</span>
          </p>
          
          {/* Card de Segurança Bancária */}
          <div className="mt-6 max-w-md md:max-w-4xl mx-auto px-4">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-base">Segurança de nível bancário</h4>
                <p className="text-sm text-muted-foreground text-center">
                  Criptografia de ponta a ponta em todas as conversas. Seus dados financeiros 
                  protegidos 24 horas por dia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
