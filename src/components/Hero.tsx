import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import mooviLogo from "@/assets/moovi-logo.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  
  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center" ref={elementRef}>
          {/* Left column - Content */}
          <div className="space-y-8">
            <img 
              src={mooviLogo} 
              alt="MOOVI Logo" 
              className={`h-12 fade-in-scroll ${isVisible ? 'visible' : ''}`}
            />
            
            <div className="space-y-4">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 fade-in-scroll fade-in-scroll-delay-100 ${isVisible ? 'visible' : ''}`}>
                Controle suas finanças{" "}
                <span className="block">direto no WhatsApp</span>
              </h1>
              
              <p className={`text-lg text-gray-600 max-w-xl fade-in-scroll fade-in-scroll-delay-200 ${isVisible ? 'visible' : ''}`}>
                Registre despesas, receba alertas e veja relatórios — tudo no app que você já usa todo dia
              </p>
            </div>

            {/* Trust indicators */}
            <div className={`space-y-3 fade-in-scroll fade-in-scroll-delay-300 ${isVisible ? 'visible' : ''}`}>
              <div className="flex items-center gap-3 text-gray-700">
                <Check className="w-5 h-5 text-primary shrink-0" />
                <span>Teste grátis 3 dias</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Check className="w-5 h-5 text-primary shrink-0" />
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Check className="w-5 h-5 text-primary shrink-0" />
                <span>Cancele quando quiser</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              size="xl" 
              className={`bg-primary hover:bg-primary-hover text-white shadow-lg group fade-in-scroll fade-in-scroll-delay-400 ${isVisible ? 'visible' : ''}`}
              onClick={scrollToCTA}
            >
              Começar agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Security note */}
            <p className={`text-sm text-gray-500 flex items-center gap-2 fade-in-scroll fade-in-scroll-delay-500 ${isVisible ? 'visible' : ''}`}>
              🔒 Seus dados estão seguros com criptografia ponta-a-ponta
            </p>
          </div>

          {/* Right column - WhatsApp Mockup */}
          <div className={`relative fade-in-scroll fade-in-scroll-delay-300 ${isVisible ? 'visible' : ''}`}>
            <div className="relative bg-primary rounded-3xl p-4 shadow-2xl max-w-md mx-auto">
              {/* WhatsApp Header */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="bg-primary/10 p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-white font-bold text-sm">M</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">MOOVI</div>
                    <div className="text-xs text-gray-500">online</div>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-4 space-y-4 bg-gray-50 min-h-[400px] relative">
                  {/* Message 1 - Alert */}
                  <div className="bg-amber-50 rounded-lg p-3 shadow-sm ml-auto max-w-[85%]">
                    <p className="text-sm text-gray-700">Gastei R$ 45 no almoço</p>
                  </div>

                  {/* Message 2 - Confirmation */}
                  <div className="bg-white rounded-lg p-3 shadow-sm mr-auto max-w-[85%]">
                    <div className="text-xs text-primary font-medium mb-1">✓ Registrado! R$ 45,00 em Alimentação.</div>
                    <p className="text-xs text-gray-600">Você já gastou R$ 320 este mês em alimentação.</p>
                  </div>

                  {/* Message 3 - Tip */}
                  <div className="bg-white rounded-lg p-3 shadow-sm mr-auto max-w-[85%]">
                    <div className="text-xs text-amber-600 mb-1">💡 Dica: Faltam R$ 180 para atingir seu limite mensal.</div>
                  </div>

                  {/* Floating savings card */}
                  <div className="absolute bottom-4 right-4 bg-white rounded-xl shadow-xl p-3 animate-float">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-xs text-gray-500">Economia este mês</div>
                        <div className="text-lg font-bold text-primary">R$ 847</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
