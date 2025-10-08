import { Button } from "@/components/ui/button";
import { Lock, Database, Clock, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const securityFeatures = [
  {
    icon: Lock,
    title: "Criptografia ponta-a-ponta",
    description: "Suas conversas e dados financeiros são protegidos com a mesma segurança do WhatsApp.",
  },
  {
    icon: Database,
    title: "Armazenamento seguro",
    description: "Seus dados são armazenados em servidores seguros com backup automático.",
  },
  {
    icon: Clock,
    title: "Disponível 24/7",
    description: "O MOOVI está sempre online, pronto para ajudar quando você precisar.",
  },
];

const Security = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });
  
  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={elementRef}>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 fade-in-scroll ${isVisible ? 'visible' : ''}`}>
            Seus dados estão seguros
          </h2>
          <p className={`text-lg text-gray-600 fade-in-scroll fade-in-scroll-delay-100 ${isVisible ? 'visible' : ''}`}>
            Levamos a segurança das suas informações financeiras muito a sério.
          </p>
        </div>

        {/* Security features - horizontal layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const delay = 200 + (index * 150);
            const delayClass = `fade-in-scroll-delay-${Math.min(delay, 500)}`;
            return (
              <div key={index} className={`text-center space-y-4 fade-in-scroll ${delayClass} ${isVisible ? 'visible' : ''}`}>
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quote box */}
        <div className={`max-w-3xl mx-auto mb-12 fade-in-scroll fade-in-scroll-delay-500 ${isVisible ? 'visible' : ''}`}>
          <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: 'hsl(42, 100%, 95%)' }}>
            <p className="text-lg text-gray-700 italic">
              "Utilizamos as mesmas práticas de segurança dos maiores bancos digitais do Brasil."
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="xl" 
            className={`bg-primary hover:bg-primary-hover text-white shadow-lg group fade-in-scroll fade-in-scroll-delay-600 ${isVisible ? 'visible' : ''}`}
            onClick={scrollToCTA}
          >
            Começar com segurança
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Security;
