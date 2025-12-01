import { Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { PricingToggle } from "@/components/ui/pricing-toggle";

export function Pricing() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const plans = [
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
        "Economize 20% no valor total",
        "Prioridade no suporte",
        "Relatórios anuais detalhados",
        "Sem aumentos de preço por 1 ano",
      ],
      description: "Melhor custo-benefício",
      buttonText: "Assinar Anual",
      href: "https://buy.stripe.com/28E5kDcN78JL1s77k95c404",
      isPopular: true,
      badge: "Economize 20%",
    },
    {
      name: "Plano Mensal",
      monthlyPrice: 24.90,
      yearlyPrice: 24.90,
      yearlyTotal: 298.80,
      period: "por mês",
      features: [
        "Registro ilimitado de gastos",
        "Alertas inteligentes de limite",
        "Relatórios financeiros mensais",
        "Categorização automática",
        "Suporte via WhatsApp",
      ],
      description: "Ideal para quem quer flexibilidade",
      buttonText: "Assinar Mensal",
      href: "https://buy.stripe.com/3cI00j7sNe45gn19sh5c403",
      isPopular: false,
    },
  ];

  return (
    <section id="pricing-section" className="py-20 bg-muted/30">
      <div ref={elementRef}>
        <PricingToggle plans={plans} title="Escolha seu plano" />

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
