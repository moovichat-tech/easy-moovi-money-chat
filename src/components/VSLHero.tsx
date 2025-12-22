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
    <section
      // AJUSTE 1: 'min-h-[100dvh]' garante que ocupe 100% da altura real do celular.
      // 'flex flex-col' habilita o layout flexível vertical.
      className="relative min-h-[100dvh] flex flex-col justify-center pt-4 pb-4 md:py-8 lg:py-10 md:-mx-8 bg-gradient-to-b from-green-50 via-green-50 to-green-100/20 overflow-x-hidden"
    >
      {/* Floating Badges (Mantidos igual) */}
      <FloatingBadge icon="💰" value="R$ 234" text="economizado este mês" position="top-left" delay={0.2} />
      <FloatingBadge icon="🍕" value="R$ 156" text="gasto com comida" position="top-right" delay={0.4} />
      <FloatingBadge icon="✅" value="15" text="transações categorizadas" position="middle-left" delay={0.6} />
      <FloatingBadge icon="🎯" value="78%" text="da meta atingida" position="middle-right" delay={0.8} />
      <FloatingBadge icon="💡" value="R$ 89" text="economia inteligente" position="bottom-right" delay={1.0} />

      {/* Container Principal */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center" ref={elementRef}>
        <div className="max-w-5xl mx-auto text-center w-full h-full flex flex-col">
          <div
            className={`space-y-2 md:space-y-3 fade-in-scroll flex-grow flex flex-col ${isVisible ? "visible" : ""}`}
          >
            {/* Logo */}
            <div className="flex justify-center mb-2 md:mb-6 shrink-0">
              <img src={mooviLogo} alt="Moovi - Controle Financeiro no WhatsApp" className="h-20 md:h-28" />
            </div>

            {/* Hero Text */}
            <div className="shrink-0">
              <AnimatedHero />
            </div>

            {/* VSL Video Container 
                'my-auto' ajuda a centralizar o vídeo verticalmente se sobrar espaço
            */}
            <div className="relative w-full max-w-3xl mx-auto mt-4 md:mt-6 my-auto">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50"
                style={{ position: "relative", paddingTop: "56.25%" }}
              >
                <iframe
                  id="panda-48616b66-1753-4a6f-b6c5-4e35de714666"
                  src="https://player-vz-c1e2f242-e38.tv.pandavideo.com.br/embed/?v=48616b66-1753-4a6f-b6c5-4e35de714666"
                  style={{ border: "none", position: "absolute", top: -6, left: -6 }}
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                  allowFullScreen
                  width="104%"
                  height="104%"
                  title="Moovi VSL"
                />
              </div>
            </div>

            {/* CTA Button 
                AJUSTE 2: 'mt-auto' empurra o botão para o fundo do container pai.
                Se a tela for alta, ele vai lá pra baixo. Se for pequena, ele fica logo após o vídeo.
            */}
            <div className="pt-6 pb-2 mt-auto">
              <Button
                size="xl"
                className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl px-8 py-6 md:px-12 md:py-8 shadow-2xl hover:shadow-3xl transition-all rounded-full hover:scale-105 w-full md:w-auto"
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
