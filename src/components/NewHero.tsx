import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Lock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { scrollToSection } from "@/utils/scroll";
import mooviLogo from "@/assets/moovi-logo.png";
import heroMockup from "@/assets/hero-mockup.jpg";

const NewHero = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const trustBadges = [
    {
      icon: Shield,
      title: "Paz de Espírito",
      description: "Nunca mais perca contas ou boletos. Receba alertas inteligentes de tudo que importa."
    },
    {
      icon: TrendingUp,
      title: "Liberdade Financeira",
      description: "Saiba exatamente para onde vai seu dinheiro, sem abrir planilhas ou aplicativos complicados."
    },
    {
      icon: Lock,
      title: "Segurança Total",
      description: "Criptografia de ponta a ponta. Seus dados financeiros protegidos como nunca."
    }
  ];

  return (
    <section className="relative py-12 md:py-20 lg:py-24 bg-gradient-to-br from-green-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={elementRef}>
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          <div className={`space-y-8 fade-in-scroll ${isVisible ? 'visible' : ''}`}>
            {/* Logo */}
            <img src={mooviLogo} alt="Moovi" className="h-16 md:h-20 lg:h-24" />
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Pare de se preocupar com dinheiro.
              <span className="block text-primary mt-2">
                Tenha um Assessor Financeiro Pessoal 24h no seu WhatsApp.
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Controle seu dinheiro com a mesma facilidade de mandar um "oi" no WhatsApp.
              Sem planilhas, sem aplicativos complicados, só conversas simples e resultados reais!
            </p>
            
            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <Button 
                size="xl"
                className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all rounded-2xl"
                onClick={() => scrollToSection('pricing-section')}
              >
                Quero começar agora 💚
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
