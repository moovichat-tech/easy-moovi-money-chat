import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import mooviLogo from "@/assets/moovi-logo.png";
import { FloatingBadge } from "@/components/ui/floating-badge";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/utils/scroll";
import { AnimatedHero } from "@/components/ui/animated-hero";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Clock, Users, ArrowRight } from "lucide-react";

const VSLHero = () => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  // --- LÓGICA DO TOP BANNER (ROTATIVO) ---
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages = [
    {
      id: 1,
      text: "🔥 Últimos dias com preço promocional!",
      icon: Sparkles,
    },
    {
      id: 2,
      text: "⚡️ +1.000 pessoas já organizaram suas finanças",
      icon: Users,
    },
    {
      id: 3,
      text: "⏳ Oferta limitada: Preços aumentarão em 2026",
      icon: Clock,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 4000); // Troca a cada 4 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    // Removi o 'pt-2' do section para o banner colar no topo
    <section className="relative min-h-[100dvh] flex flex-col bg-gradient-to-b from-green-50 via-green-50 to-green-100/20 overflow-x-hidden pb-0">
      {/* --- NOVO: BARRA DE AVISOS INTEGRADA --- */}
      <div className="w-full bg-green-900 text-white py-2 px-4 relative z-50 shadow-sm">
        <div className="container mx-auto flex justify-center items-center">
          <div className="relative h-6 w-full max-w-md overflow-hidden flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMessageIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute flex items-center gap-2 text-xs md:text-sm font-medium whitespace-nowrap"
              >
                {/* Renderiza o ícone da mensagem atual */}
                {(() => {
                  const Icon = messages[currentMessageIndex].icon;
                  return <Icon className="w-3 h-3 md:w-4 md:h-4 text-green-300" />;
                })()}

                <span>{messages[currentMessageIndex].text}</span>
                <ArrowRight className="w-3 h-3 ml-1 opacity-70 hidden sm:block" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Floating Badges (Mantidos) */}
      <FloatingBadge icon="💰" value="R$ 234" text="economizado este mês" position="top-left" delay={0.2} />
      <FloatingBadge icon="🍕" value="R$ 156" text="gasto com comida" position="top-right" delay={0.4} />
      <FloatingBadge icon="✅" value="15" text="transações categorizadas" position="middle-left" delay={0.6} />
      <FloatingBadge icon="🎯" value="78%" text="da meta atingida" position="middle-right" delay={0.8} />
      <FloatingBadge icon="💡" value="R$ 89" text="economia inteligente" position="bottom-right" delay={1.0} />

      <div className="w-full max-w-5xl mx-auto flex-grow flex flex-col pt-4 md:pt-8" ref={elementRef}>
        <div className={`flex-grow flex flex-col text-center fade-in-scroll ${isVisible ? "visible" : ""}`}>
          {/* --- BLOCO SUPERIOR --- */}
          <div className="shrink-0">
            <div className="flex justify-center mb-2 md:mb-6">
              <img src={mooviLogo} alt="Moovi - Controle Financeiro no WhatsApp" className="h-12 md:h-28" />
            </div>
            <AnimatedHero />
          </div>
          <Button
            size="xl"
            // ALTERAÇÕES AQUI:
            // 1. Removi 'w-full' e coloquei 'w-fit' (o tamanho agora obedece o texto)
            // 2. Adicionei 'mx-auto' para ele ficar centralizado na tela
            // 3. Ajustei 'px-8' para 'px-10' (padding lateral equilibrado)
            className="bg-green-700 hover:bg-green-800 text-white font-bold text-lg md:text-xl px-10 py-6 md:px-12 md:py-8 shadow-2xl hover:shadow-3xl transition-all rounded-full w-fit mx-auto animate-pulse"
            onClick={() => scrollToSection("pricing-section")}
          >
            Começar no WhatsApp Agora 🚀
          </Button>

          {/* --- BLOCO DO MEIO (Vídeo) --- */}
          <div className="flex-grow flex flex-col justify-center pt-2 pb-4 md:py-8">
            <div className="relative w-full max-w-3xl mx-auto mb-4 px-4 md:px-0">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 bg-black"
                style={{ position: "relative", paddingTop: "56.25%" }}
              >
                <iframe
                  id="panda-48616b66-1753-4a6f-b6c5-4e35de714666"
                  src="https://player-vz-c1e2f242-e38.tv.pandavideo.com.br/embed/?v=48616b66-1753-4a6f-b6c5-4e35de714666"
                  style={{ border: "none", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                  allowFullScreen
                  title="Moovi VSL"
                />
              </div>
            </div>

            {/* Texto Emocional OTIMIZADO (Mobile-First) */}
            <div className="px-4 mt-2">
              <p className="text-base md:text-xl font-medium text-gray-700 leading-snug">
                Esqueça os apps complexos. <br className="md:hidden" />
                <span className="text-green-600 font-bold">Mande um áudio no WhatsApp</span> e organize seu dinheiro em
                segundos.
              </p>
            </div>
          </div>

          {/* --- BLOCO INFERIOR (Botão OTIMIZADO) --- */}
          <div className="shrink-0 mt-auto pb-8 md:pb-12 px-4">
            {/* Garantia Visual (Redutor de Fricção) */}
            <p className="text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
              🔒 Seguro e Criptografado • Oganize já
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSLHero;
