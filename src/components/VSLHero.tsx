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
      // AJUSTE 1: Reduzi o padding superior do celular para 'pt-2' (antes era pt-8).
      // Isso sobe todo o conteúdo, puxando o vídeo para cima.
      className="relative min-h-[100dvh] flex flex-col bg-gradient-to-b from-green-50 via-green-50 to-green-100/20 overflow-x-hidden px-4 md:px-8 pt-2 pb-0 md:pt-0"
    >
      {/* Floating Badges (Mantidos) */}
      <FloatingBadge icon="💰" value="R$ 234" text="economizado este mês" position="top-left" delay={0.2} />
      <FloatingBadge icon="🍕" value="R$ 156" text="gasto com comida" position="top-right" delay={0.4} />
      <FloatingBadge icon="✅" value="15" text="transações categorizadas" position="middle-left" delay={0.6} />
      <FloatingBadge icon="🎯" value="78%" text="da meta atingida" position="middle-right" delay={0.8} />
      <FloatingBadge icon="💡" value="R$ 89" text="economia inteligente" position="bottom-right" delay={1.0} />

      <div className="w-full max-w-5xl mx-auto flex-grow flex flex-col" ref={elementRef}>
        <div className={`flex-grow flex flex-col text-center fade-in-scroll ${isVisible ? "visible" : ""}`}>
          {/* --- BLOCO SUPERIOR --- */}
          {/* 'pt-4': Espaço pequeno no topo mobile. */}
          <div className="shrink-0 pt-4 md:pt-12">
            <div className="flex justify-center mb-2 md:mb-6">
              {/* AJUSTE 2: Logo reduzida no mobile para 'h-16' (64px). 
                    No desktop mantive 'md:h-28'. */}
              <img src={mooviLogo} alt="Moovi - Controle Financeiro no WhatsApp" className="h-16 md:h-28" />
            </div>

            {/* Hero Text */}
            <AnimatedHero />
          </div>

          {/* --- BLOCO DO MEIO (Vídeo) --- */}
          {/* Reduzi o padding vertical aqui (py-2) para o vídeo não ficar "espremido" 
                e poder ocupar mais espaço central. */}
          <div className="flex-grow flex flex-col justify-center py-2 md:py-8">
            <div className="relative w-full max-w-3xl mx-auto">
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
          </div>

          {/* --- BLOCO INFERIOR (Botão) --- */}
          {/* 'mt-auto': Empurra para o fundo.
                'pb-6': Um respiro leve do fundo da tela (safe area). */}
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
