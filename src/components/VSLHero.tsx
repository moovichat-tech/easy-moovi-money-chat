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
              <img src={mooviLogo} alt="Moovi - Controle Financeiro no WhatsApp" className="h-14 md:h-28" />
            </div>
            <AnimatedHero />
          </div>

          {/* --- BLOCO DO MEIO (Vídeo + Frase) --- */}
          {/* AJUSTE IMPORTANTE:
                1. Mudei 'justify-center' para 'justify-start md:justify-center'.
                   Isso faz o vídeo subir e encostar no topo no celular.
                2. Adicionei '-mt-4'. Essa margem negativa puxa o vídeo ainda mais pra cima, colando no texto.
            */}
          <div className="flex-grow flex flex-col justify-start md:justify-center -mt-4 md:mt-0 md:py-8">
            {/* Container do Vídeo */}
            <div className="relative w-full max-w-3xl mx-auto mb-4">
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

            {/* Texto Emocional */}
            <div className="px-2">
              <p className="text-sm md:text-lg font-medium text-muted-foreground/90 italic leading-tight">
                "Recupere sua paz e o controle total do seu dinheiro, sem abrir mão do seu tempo."
              </p>
            </div>
          </div>

          {/* --- BLOCO INFERIOR (Botão) --- */}
          <div className="shrink-0 mt-auto pb-6 md:pb-12">
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
    </section>
  );
};

export default VSLHero;
