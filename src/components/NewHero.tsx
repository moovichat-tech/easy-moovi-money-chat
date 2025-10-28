import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import mooviLogo from "@/assets/moovi-logo.png";
import { AnimatedHero } from "@/components/ui/animated-hero";
import { FloatingBadge } from "@/components/ui/floating-badge";

const NewHero = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative py-12 md:py-20 lg:py-24 bg-gradient-to-br from-green-50 to-white overflow-hidden">
      {/* Floating Badges */}
      <FloatingBadge 
        icon="💰"
        value="R$ 234"
        text="economizado este mês"
        position="top-left"
        delay={0.2}
      />
      <FloatingBadge 
        icon="🍕"
        value="R$ 156"
        text="gasto com comida"
        position="top-right"
        delay={0.4}
      />
      <FloatingBadge 
        icon="✅"
        value="15"
        text="transações categorizadas"
        position="middle-left"
        delay={0.6}
      />
      <FloatingBadge 
        icon="🎯"
        value="78%"
        text="da meta atingida"
        position="middle-right"
        delay={0.8}
      />
      <FloatingBadge 
        icon="💡"
        value="R$ 89"
        text="economia inteligente"
        position="bottom-right"
        delay={1.0}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={elementRef}>
        <div className="max-w-6xl mx-auto text-center">
          <div className={`space-y-8 fade-in-scroll ${isVisible ? 'visible' : ''}`}>
            {/* Logo */}
            <div className="flex justify-center">
              <img src={mooviLogo} alt="Moovi" className="h-16 md:h-20 lg:h-24" />
            </div>
            
            {/* Animated Hero */}
            <AnimatedHero />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
