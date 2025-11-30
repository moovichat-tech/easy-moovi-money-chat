import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface PricingPlan {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  yearlyTotal: number;
  savings?: number;
  savingsPercent?: number;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
  badge?: string;
}

interface PricingToggleProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function PricingToggle({
  plans,
  title = "Escolha seu plano",
  description = "",
}: PricingToggleProps) {
  const [isMonthly, setIsMonthly] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "hsl(var(--primary))",
          "hsl(var(--accent))",
          "hsl(var(--secondary))",
          "hsl(var(--muted))",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="container py-20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="text-muted-foreground text-lg whitespace-pre-line">
            {description}
          </p>
        )}
      </div>

      <div className="flex justify-center items-center gap-3 mb-10">
        <span className={cn("font-semibold transition-colors", isMonthly ? "text-foreground" : "text-muted-foreground")}>
          Mensal
        </span>
        <Label>
          <Switch
            ref={switchRef as any}
            checked={!isMonthly}
            onCheckedChange={handleToggle}
            className="relative"
          />
        </Label>
        <span className={cn("font-semibold transition-colors", !isMonthly ? "text-foreground" : "text-muted-foreground")}>
          Anual <span className="text-primary">(Economize 20% 🎉)</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={
              isDesktop
                ? {
                    y: plan.isPopular ? -10 : 0,
                    opacity: 1,
                    scale: plan.isPopular ? 1.05 : 1.0,
                  }
                : { y: 0, opacity: 1 }
            }
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: index * 0.2,
            }}
            className={cn(
              `rounded-2xl border-2 p-8 bg-card text-center relative`,
              plan.isPopular ? "border-primary shadow-2xl" : "border-border shadow-lg",
              "flex flex-col"
            )}
          >
            {plan.isPopular && plan.badge && (
              <div className="absolute top-0 right-0 bg-primary py-1.5 px-4 rounded-bl-xl rounded-tr-xl flex items-center gap-1.5">
                <Star className="text-primary-foreground h-4 w-4 fill-current" />
                <span className="text-primary-foreground text-sm font-semibold">
                  {plan.badge}
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            </div>

            <div className="mb-6">
              {!isMonthly && plan.savings && (
                <div className="text-sm text-muted-foreground line-through mb-1">
                  R$ {plan.monthlyPrice.toFixed(2).replace(".", ",")}
                </div>
              )}
              <div className="text-5xl font-bold text-primary mb-2">
                <NumberFlow
                  value={isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
                  format={{
                    style: "currency",
                    currency: "BRL",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }}
                  locales="pt-BR"
                  transformTiming={{
                    duration: 500,
                    easing: "ease-out",
                  }}
                  willChange
                />
              </div>
              <p className="text-sm text-muted-foreground">{plan.period}</p>
              {!isMonthly && plan.yearlyTotal && (
                <p className="text-xs text-primary font-medium mt-2">
                  cobrado anualmente (R$ {plan.yearlyTotal.toFixed(2).replace(".", ",")})
                </p>
              )}
              {!isMonthly && plan.savings && (
                <p className="text-xs text-green-600 font-semibold mt-1">
                  💰 Economia de R$ {plan.savings.toFixed(2).replace(".", ",")} no ano
                </p>
              )}
            </div>

            <ul className="mb-8 space-y-3 text-left">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={plan.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({
                  variant: "hero",
                  size: "lg",
                }),
                "w-full font-semibold text-base mt-auto",
                "group relative gap-2 overflow-hidden",
                "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-1"
              )}
            >
              {plan.buttonText}
            </a>

            <p className="mt-6 text-xs text-muted-foreground">{plan.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
