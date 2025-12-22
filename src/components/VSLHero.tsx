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
    <section className="relative min-h-[100dvh] flex flex-col bg-gradient-to-b from-green-50 via-green-50 to-green-100/20 overflow-x-hidden px-4 md:px-8 pt-2 pb-0 md:pt-0">
      {/* Floating Badges */}
      <FloatingBadge icon="💰" value="R$ 234" text="economizado este mês" position="top-left" delay={0.2} />
      <FloatingBadge icon="🍕" value="R$ 156" text="gasto com comida" position="top-right" delay={0.4} />
      <FloatingBadge icon="✅" value="15" text="transações categorizadas" position="middle-left" delay={0.6} />
      <FloatingBadge icon="🎯" value="78%" text="da meta atingida" position="middle-right" delay={0.8} />
      <FloatingBadge icon="💡" value="R$ 89" text="economia inteligente" position="bottom-right" delay={1.0} />

      <div className="w-full max-w-5xl mx-auto flex-grow flex flex-col" ref={elementRef}>
        <div className={`flex-grow flex flex-col text-center fade-in-scroll ${isVisible ? "visible" : ""}`}>
          {/* --- BLOCO SUPERIOR --- */}
          <div className="shrink-0 pt-2 md:pt-12">
            <div className="flex justify-center mb-1 md:mb-6">
              <img src={mooviLogo} alt="Moovi - Controle Financeiro no WhatsApp" className="h-16 md:h-28" />
            </div>
            <AnimatedHero />
          </div>
          <div className="shrink-0 mt-auto pb-0 md:pb-12">
            <Button
              size="xl"
              className="bg-green-700 hover:bg-green-700 text-white font-bold text-lg md:text-xl px-8 py-6 md:px-12 md:py-8 shadow-2xl hover:shadow-3xl transition-all rounded-full w-full md:w-auto animate-pulse"
              onClick={() => scrollToSection("pricing-section")}
            >
              Testar no WhatsApp Agora 💬
            </Button>
          </div>
          {/* --- BLOCO DO MEIO (Vídeo) --- */}
          {/* AJUSTE AQUI:
                Mudei de 'py-2' para 'pt-1 pb-2'.
                Isso reduz o espaço acima do vídeo pela metade, aproximando-o do subheader.
            */}
          <div className="flex-grow flex flex-col justify-center pt-12 pb-12 md:py-8">
            <div className="relative w-full max-w-3xl mx-auto mb-4">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl border-12 border-white/50"
                style={{ position: "relative", paddingTop: "55.25%" }}
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

            {/* Texto Emocional */}
            <div className="px-2">
              <p className="text-sm md:text-lg font-medium text-muted-foreground/90 italic leading-tight">
                "Dê adeus às planilhas. Mande um áudio e a gente organiza seu dinheiro. Simples assim."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSLHero;
