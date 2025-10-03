import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";
import mooviLogo from "@/assets/moovi-logo.png";

const Hero = () => {
  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in">
            <img 
              src={mooviLogo} 
              alt="MOOVI Logo" 
              className="h-16 mx-auto lg:mx-0"
            />
            
            {/* Headline variations - using first one by default */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Controle financeiro{" "}
                <span className="text-primary">fácil</span> no WhatsApp
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Registre gastos, receba alertas e organize seu dinheiro com facilidade. Sem apps complicados.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="xl" 
                variant="hero"
                onClick={scrollToCTA}
                className="group"
              >
                <MessageCircle className="w-5 h-5" />
                Teste grátis por 3 dias
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="xl" 
                variant="outline"
                onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver como funciona
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Cancele quando quiser</span>
              </div>
            </div>
          </div>

          {/* Right column - Mockup */}
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <img 
                src={heroMockup} 
                alt="MOOVI WhatsApp Interface" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-4 right-4 bg-card p-3 rounded-xl shadow-lg animate-float hidden lg:block">
              <div className="text-xs text-muted-foreground">Economize em média</div>
              <div className="text-2xl font-bold text-primary">R$ 500/mês</div>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-card p-3 rounded-xl shadow-lg animate-float-delayed hidden lg:block">
              <div className="text-xs text-muted-foreground">Tempo de setup</div>
              <div className="text-2xl font-bold text-accent">2 minutos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
