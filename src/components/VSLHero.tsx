import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import mooviLogo from "@/assets/moovi-logo.png";
import { FloatingBadge } from "@/components/ui/floating-badge";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/utils/scroll";
import { AnimatedHero } from "@/components/ui/animated-hero";

const VSLHero = () => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <section className="relative pt-0 pb-8 md:py-8 lg:py-10 md:-mx-8 bg-gradient-to-b from-green-50 via-green-50 to-green-100/20 overflow-hidden">
      {/* Floating Badges (Mantidos igual) */}
      <FloatingBadge icon="💰" value="R$ 234" text="economizado este mês" position="top-left" delay={0.2} />
      <FloatingBadge icon="🍕" value="R$ 156" text="gasto com comida" position="top-right" delay={0.4} />
      <FloatingBadge icon="✅" value="15" text="transações categorizadas" position="middle-left" delay={0.6} />
      <FloatingBadge icon="🎯" value="78%" text="da meta atingida" position="middle-right" delay={0.8} />
      <FloatingBadge icon="💡" value="R$ 89" text="economia inteligente" position="bottom-right" delay={1.0} />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8" ref={elementRef}>
        <div className="max-w-5xl mx-auto text-center">
          <div className={`space-y-3 fade-in-scroll ${isVisible ? "visible" : ""}`}>
            {/* AJUSTES DA LOGO AQUI: 
                1. Margem: Mudei de 'mb-6' para 'mb-1 md:mb-6'. 
                   No celular (mb-1) ela fica bem pertinho do texto. No PC (mb-6) mantém o respiro.
                
                2. Tamanho: Mudei de 'h-20' para 'h-24'.
                   Agora ela fica bem maior no celular (96px).
            */}
            <div className="flex justify-center mb-1 md:mb-6">
              <img src={mooviLogo} alt="Moovi - Controle Financeiro no WhatsApp" className="h-24 md:h-28" />
            </div>

            {/* Hero Text */}
            <AnimatedHero />

            {/* VSL Video Container */}
            <div className="relative w-full max-w-3xl mx-auto mt-6">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50"
                style={{ position: "relative", paddingTop: "56.25%" }}
              >
                <iframe id="panda-cd97fae3-bdca-436d-88f6-f1ce66937f6c" src="https://player-vz-c1e2f242-e38.tv.pandavideo.com.br/embed/?v=cd97fae3-bdca-436d-88f6-f1ce66937f6c" style="border:none;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" allowfullscreen=true width="720" height="360" fetchpriority="high"></iframe>       
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8 pb-4">
              <Button
                size="xl"
                className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all rounded-full hover:scale-105 w-full md:w-auto"
                onClick={() => scrollToSection("pricing-section")}
              >
                Quero usar o Moovi 💚
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSLHero;
