import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageSquare, 
  Bell, 
  BarChart3, 
  Calendar, 
  Camera,
  Sparkles,
  ArrowRight
} from "lucide-react";

const benefits = [
  {
    icon: MessageSquare,
    title: "Registre com texto ou áudio",
    description: "Digite ou grave: 'gastei 50 reais no mercado'. O MOOVI entende e organiza tudo automaticamente.",
  },
  {
    icon: Camera,
    title: "Tire foto da nota fiscal",
    description: "Apenas fotografe o cupom. Nossa IA extrai os valores e categoriza suas despesas na hora.",
  },
  {
    icon: Bell,
    title: "Alertas inteligentes",
    description: "Receba avisos quando estiver perto do limite do mês ou quando uma conta estiver vencendo.",
  },
  {
    icon: BarChart3,
    title: "Relatórios visuais instantâneos",
    description: "Veja gráficos claros de onde seu dinheiro está indo. Tudo direto no WhatsApp, sem complicação.",
  },
  {
    icon: Calendar,
    title: "Lembretes automáticos",
    description: "Nunca mais esqueça de pagar uma conta. O MOOVI te lembra antes do vencimento.",
  },
  {
    icon: Sparkles,
    title: "Dicas personalizadas",
    description: "Receba sugestões práticas de economia baseadas no seu padrão de gastos.",
  },
];

const Benefits = () => {
  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Transforme finanças{" "}
            <span className="text-primary">complicadas</span> em algo{" "}
            <span className="text-accent">simples e automático</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tudo no app que você já usa todos os dias. Sem precisar baixar nada novo.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/50"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
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
            variant="cta"
            onClick={scrollToCTA}
            className="group"
          >
            Começar teste gratuito
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
