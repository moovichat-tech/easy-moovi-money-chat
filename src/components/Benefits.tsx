import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageCircle, 
  Mic, 
  Camera,
  Bell, 
  BarChart3, 
  Calendar,
  ArrowRight
} from "lucide-react";

const benefits = [
  {
    icon: MessageCircle,
    title: "Registre por texto",
    description: "Apenas envie uma mensagem: 'Gastei R$ 50 no mercado'. Pronto! Registrado automaticamente.",
  },
  {
    icon: Mic,
    title: "Ou use sua voz",
    description: "Envie um áudio enquanto dirige ou caminha. O MOOVI entende e registra para você.",
  },
  {
    icon: Camera,
    title: "Tire foto da nota",
    description: "Fotografe o cupom fiscal e deixe o MOOVI extrair os valores. Sem digitação.",
  },
  {
    icon: Bell,
    title: "Alertas inteligentes",
    description: "Receba lembretes de contas a vencer e avisos quando estiver perto do limite.",
  },
  {
    icon: BarChart3,
    title: "Relatórios visuais",
    description: "Veja gráficos claros sobre onde seu dinheiro está indo, direto no WhatsApp.",
  },
  {
    icon: Calendar,
    title: "Lembrete de contas",
    description: "Nunca mais esqueça boletos ou assinaturas. O MOOVI avisa você no momento certo.",
  },
];

const Benefits = () => {
  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Transforme finanças complicadas em algo simples e automático
          </h2>
          <p className="text-lg text-gray-600">
            O MOOVI funciona do jeito que você já vive. Sem apps novos, sem curva de aprendizado.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: 'hsl(42, 100%, 95%)' }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
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
            className="bg-primary hover:bg-primary-hover text-white shadow-lg group"
            onClick={scrollToCTA}
          >
            Teste grátis por 3 dias
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
