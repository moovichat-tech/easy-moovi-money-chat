import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
  badge?: string;
}
export function Pricing() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const {
    elementRef,
    isVisible
  } = useScrollAnimation({
    threshold: 0.2
  });
  const plans: PricingPlan[] = [{
    name: "Plano Mensal",
    price: "R$ 24,90",
    period: "por mês",
    features: ["Registro ilimitado de gastos", "Alertas inteligentes de limite", "Relatórios financeiros mensais", "Categorização automática", "Suporte via WhatsApp"],
    description: "Ideal para quem quer flexibilidade",
    buttonText: "Assinar Mensal",
    href: "https://buy.stripe.com/3cI00j7sNe45gn19sh5c403",
    isPopular: false
  }, {
    name: "Plano Anual",
    price: "R$ 19,00",
    period: "por mês",
    features: ["Tudo do Plano Mensal", "Economize 24% no valor total", "Prioridade no suporte", "Relatórios anuais detalhados", "Sem aumentos de preço por 1 ano"],
    description: "Melhor custo-benefício",
    buttonText: "Assinar Anual",
    href: "https://buy.stripe.com/28E5kDcN78JL1s77k95c404",
    isPopular: true,
    badge: "Economize 24%"
  }];
  return <section id="pricing-section" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={elementRef}>
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className={`text-4xl font-bold tracking-tight sm:text-5xl fade-in-scroll ${isVisible ? 'visible' : ''}`}>
            Escolha seu plano
          </h2>
          <p className={`text-muted-foreground text-lg max-w-2xl mx-auto fade-in-scroll fade-in-scroll-delay-100 ${isVisible ? 'visible' : ''}`}></p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, index) => <motion.div key={index} initial={{
          y: 50,
          opacity: 0
        }} whileInView={isDesktop ? {
          y: plan.isPopular ? -10 : 0,
          opacity: 1,
          scale: plan.isPopular ? 1.05 : 1.0
        } : {
          y: 0,
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: index * 0.2
        }} className={`
                rounded-2xl border-2 p-8 bg-card text-center relative
                ${plan.isPopular ? "border-primary shadow-2xl" : "border-border shadow-lg"}
              `}>
              {/* Badge "Economize 20%" */}
              {plan.isPopular && plan.badge && <div className="absolute top-0 right-0 bg-primary py-1.5 px-4 rounded-bl-xl rounded-tr-xl flex items-center gap-1.5">
                  <Star className="text-primary-foreground h-4 w-4 fill-current" />
                  <span className="text-primary-foreground text-sm font-semibold">
                    {plan.badge}
                  </span>
                </div>}

              {/* Plan Name */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">
                  {plan.name}
                </h3>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="text-5xl font-bold text-primary mb-2">
                  {plan.price}
                </div>
                <p className="text-sm text-muted-foreground">{plan.period}</p>
                {plan.isPopular && <p className="text-xs text-primary font-medium mt-2">
                    cobrado anualmente (R$ 228)
                  </p>}
              </div>

              {/* Features */}
              <ul className="mb-8 space-y-3 text-left">
                {plan.features.map((feature, idx) => <li key={idx} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>)}
              </ul>

              {/* CTA Button */}
              <Button asChild size="lg" variant={plan.isPopular ? "hero" : "secondary"} className="w-full font-semibold text-base">
                <a href={plan.href} target="_blank" rel="noopener noreferrer">
                  {plan.buttonText}
                </a>
              </Button>

              {/* Description */}
              <p className="mt-6 text-xs text-muted-foreground">{plan.description}</p>
            </motion.div>)}
        </div>

        {/* Trust Badge */}
        <div className={`mt-12 text-center fade-in-scroll fade-in-scroll-delay-400 ${isVisible ? 'visible' : ''}`}>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            🔒 <span>Pagamento 100% seguro processado pelo Stripe</span>
          </p>
        </div>
      </div>
    </section>;
}