import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Zap, 
  DollarSign, 
  GraduationCap,
  Trophy,
  Shield,
  ArrowRight
} from "lucide-react";
import mooviMascot from "@/assets/moovi-mascot.png";

const reasons = [
  {
    icon: Smartphone,
    title: "Já está no seu bolso",
    description: "Use o WhatsApp que você já tem. Sem apps extras, sem ocupar espaço no celular.",
  },
  {
    icon: Zap,
    title: "Rápido e natural",
    description: "Fale como você fala normalmente. O MOOVI entende e organiza tudo em segundos.",
  },
  {
    icon: DollarSign,
    title: "Acessível para todos",
    description: "Comece grátis e veja resultados. Planos que cabem no seu bolso.",
  },
  {
    icon: GraduationCap,
    title: "Aprenda enquanto usa",
    description: "Receba dicas e insights sobre suas finanças. Educação financeira no dia a dia.",
  },
  {
    icon: Trophy,
    title: "Conquiste seus objetivos",
    description: "Gamificação que te motiva. Acompanhe metas e comemore cada conquista.",
  },
  {
    icon: Shield,
    title: "Seus dados protegidos",
    description: "Criptografia de ponta a ponta. Sua privacidade é nossa prioridade.",
  },
];

const WhyMoovi = () => {
  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left column - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 flex justify-center">
              <img 
                src={mooviMascot} 
                alt="MOOVI Mascot" 
                className="w-80 h-80 object-contain animate-float"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          </div>

          {/* Right column - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Por que escolher o{" "}
              <span className="text-primary">MOOVI</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Não é só mais um app de finanças. É o seu parceiro financeiro que vive no WhatsApp, 
              sempre pronto para ajudar você a ter mais controle e tranquilidade.
            </p>
          </div>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur border-border/50 hover:border-accent/50"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="xl" 
            variant="hero"
            onClick={scrollToCTA}
            className="group"
          >
            Experimentar agora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyMoovi;
