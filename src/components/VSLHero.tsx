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
      // AJUSTE 1: 'min-h-[100dvh]' garante 100% da altura da tela.
      // Removi 'justify-center' e 'py-...' daqui para controlar o espaçamento internamente.
      // Adicionei apenas um padding lateral base.
      className="relative min-h-[100dvh] flex flex-col bg-gradient-to-b from-green-50 via-green-50 to-green-100/20 overflow-x-hidden px-4 md:px-8"
    >
      {/* Floating Badges (Mantidos) */}
      <FloatingBadge icon="💰" value="R$ 234" text="economizado este mês" position="top-left" delay={0.2} />
      <FloatingBadge icon="🍕" value="R$ 156" text="gasto com comida" position="top-right" delay={0.4} />
      <FloatingBadge icon="✅" value="15" text="transações categorizadas" position="middle-left" delay={0.6} />
      <FloatingBadge icon="🎯" value="78%" text="da meta atingida" position="middle-right" delay={0.8} />
      <FloatingBadge icon="💡" value="R$ 89" text="economia inteligente" position="bottom-right" delay={1.0} />

      {/* Container Principal que ocupa toda a altura e centraliza horizontalmente */}
      <div className="w-full max-w-5xl mx-auto flex-grow flex flex-col" ref={elementRef}>
        <div className={`flex-grow flex flex-col text-center fade-in-scroll ${isVisible ? "visible" : ""}`}>
          {/* --- BLOCO SUPERIOR (Logo + Texto) --- */}
          {/* 'shrink-0' impede que este bloco seja esmagado. Adicionei 'pt-8' para dar espaço do topo. */}
          <div className="shrink-0 pt-8 md:pt-12">
            <div className="flex justify-center mb-4 md:mb-6">
              <img src={mooviLogo} alt="Moovi - Controle Financeiro no WhatsApp" className="h-24 md:h-28" />
            </div>
            <AnimatedHero />
          </div>

          {/* --- BLOCO DO MEIO (Vídeo) --- */}
          {/* 'flex-grow' faz este bloco crescer e ocupar o espaço vazio no meio.
                'flex flex-col justify-center' centraliza o vídeo verticalmente nesse espaço. */}
          <div className="flex-grow flex flex-col justify-center py-6 md:py-10">
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
          {/* 'mt-auto' é o segredo: em uma coluna flex, ele empurra o elemento para o final.
                'pb-8' garante um respiro na parte de baixo da tela. */}
          <div className="shrink-0 mt-auto pb-8 md:pb-12">
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
