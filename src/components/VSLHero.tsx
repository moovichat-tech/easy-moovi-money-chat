import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import mooviLogo from "@/assets/moovi-logo.png";
import { FloatingBadge } from "@/components/ui/floating-badge";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/utils/scroll";
import { AnimatedHero } from "@/components/ui/animated-hero";
const VSLHero = () => {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation({
    threshold: 0.1
  });
  return <section className="relative py-12 md:py-20 lg:py-24 bg-gradient-to-br from-green-50 to-white overflow-hidden">
      {/* Floating Badges */}
      <FloatingBadge icon="💰" value="R$ 234" text="economizado este mês" position="top-left" delay={0.2} />
      <FloatingBadge icon="🍕" value="R$ 156" text="gasto com comida" position="top-right" delay={0.4} />
      <FloatingBadge icon="✅" value="15" text="transações categorizadas" position="middle-left" delay={0.6} />
      <FloatingBadge icon="🎯" value="78%" text="da meta atingida" position="middle-right" delay={0.8} />
      <FloatingBadge icon="💡" value="R$ 89" text="economia inteligente" position="bottom-right" delay={1.0} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={elementRef}>
        <div className="max-w-5xl mx-auto text-center">
          <div className={`space-y-8 fade-in-scroll ${isVisible ? 'visible' : ''}`}>
            
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img src={mooviLogo} alt="Moovi - Controle Financeiro no WhatsApp" className="h-16 md:h-20 lg:h-24" />
            </div>
            
            {/* Hero Text + First CTA */}
            <AnimatedHero />
            
            {/* VSL Video Container */}
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="video-container rounded-2xl overflow-hidden shadow-2xl">
                <iframe src="https://www.youtube.com/embed/OEKG3nxqB3w?controls=1&modestbranding=1&rel=0&showinfo=0" title="Moovi VSL - Controle suas finanças direto no WhatsApp" frameBorder="0" allow="encrypted-media" allowFullScreen className="absolute top-0 left-0 w-full h-full"></iframe>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Button size="xl" className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all rounded-2xl hover:scale-105" onClick={() => scrollToSection('pricing-section')}>
                Quero começar agora 💚
              </Button>
            </div>

            {/* Trust Badge Below CTA */}
            

          </div>
        </div>
      </div>
    </section>;
};
export default VSLHero;