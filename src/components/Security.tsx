import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, Shield, Clock, ArrowRight } from "lucide-react";
import securityIllustration from "@/assets/security-illustration.jpg";

const securityFeatures = [
  {
    icon: Lock,
    title: "Criptografia ponta-a-ponta",
    description: "Todas as suas conversas e dados financeiros são protegidos com a mesma tecnologia do WhatsApp.",
  },
  {
    icon: Shield,
    title: "Armazenamento seguro",
    description: "Seus dados ficam em servidores protegidos com os mais altos padrões de segurança do mercado.",
  },
  {
    icon: Clock,
    title: "Disponível 24/7",
    description: "Acesse suas informações financeiras a qualquer momento, de forma rápida e segura.",
  },
];

const Security = () => {
  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Suas finanças{" "}
                <span className="text-primary">seguras</span> e{" "}
                <span className="text-accent">protegidas</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Levamos a segurança dos seus dados a sério. Você pode confiar no MOOVI 
                para manter suas informações financeiras sempre protegidas.
              </p>
            </div>

            <div className="space-y-6">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={index}
                    className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold">{feature.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Button 
              size="xl" 
              variant="cta"
              onClick={scrollToCTA}
              className="group"
            >
              Começar com segurança
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={securityIllustration} 
                alt="Security Illustration" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
