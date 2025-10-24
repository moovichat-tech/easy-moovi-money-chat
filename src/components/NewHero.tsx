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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-8 fade-in-scroll ${isVisible ? 'visible' : ''}`}>
            {/* Logo */}
            <img src={mooviLogo} alt="Moovi" className="h-12 md:h-14" />
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Pare de se preocupar com dinheiro.
              <span className="block text-primary mt-2">
                Tenha um Assessor Financeiro Pessoal 24h no seu WhatsApp.
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Organize suas finanças com a mesma facilidade de mandar uma mensagem. Sem planilhas, sem complicação — só você e a tranquilidade de ter tudo sob controle.
            </p>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {trustBadges.map((badge, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-md border border-border"
                >
                  <badge.icon className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold text-sm mb-1">{badge.title}</h3>
                  <p className="text-xs text-muted-foreground">{badge.description}</p>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="space-y-4">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6 animate-pulse-soft"
                onClick={() => scrollToSection('pricing-section')}
              >
                Quero meu assessor no WhatsApp →
              </Button>
              <p className="text-sm text-muted-foreground">
                Teste grátis por 3 dias. Sem cartão de crédito.
              </p>
            </div>
          </div>
          
          {/* Right Column - WhatsApp Mockup */}
          <div className={`fade-in-scroll fade-in-scroll-delay-200 ${isVisible ? 'visible' : ''}`}>
            <div className="relative">
              <img 
                src={heroMockup} 
                alt="Interface MOOVI no WhatsApp"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
