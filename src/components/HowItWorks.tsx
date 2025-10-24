import { Edit3, Bell, BarChart3, Shield, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Feature {
  icon: any;
  title: string;
  description: string;
  conversation: Array<{ type: 'user' | 'bot'; text: string }>;
}

const HowItWorks = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const features: Feature[] = [
    {
      icon: Edit3,
      title: "Registre suas despesas do jeito mais fácil",
      description: "Por texto, áudio ou até foto do cupom fiscal. Você decide como quer conversar com seu assessor.",
      conversation: [
        { type: 'user', text: 'Gastei 45 reais no almoço' },
        { type: 'bot', text: 'Registrado! Almoço — R$ 45,00. Categoria: Alimentação.' }
      ]
    },
    {
      icon: Bell,
      title: "Receba alertas inteligentes de tudo que importa",
      description: "Nunca mais esqueça uma conta. A Moovi avisa você sobre vencimentos, gastos altos e oportunidades de economia.",
      conversation: [
        { type: 'bot', text: 'Oi! Seu boleto de internet vence amanhã. Já separou o valor?' }
      ]
    },
    {
      icon: BarChart3,
      title: "Entenda suas finanças de verdade",
      description: "Relatórios claros e insights que realmente fazem sentido. Descubra para onde seu dinheiro está indo — sem abrir planilhas.",
      conversation: [
        { type: 'user', text: 'Gastei demais esse mês?' },
        { type: 'bot', text: 'Você gastou 30% a mais com delivery. Quer uma dica pra equilibrar?' }
      ]
    },
    {
      icon: Target,
      title: "Categorização automática inteligente",
      description: "A Moovi aprende com você e categoriza tudo sozinha. Você só precisa registrar — o resto é com ela.",
      conversation: [
        { type: 'user', text: 'Paguei R$ 120 no mercado' },
        { type: 'bot', text: '✓ Registrado em Supermercado. Total do mês: R$ 680.' }
      ]
    },
    {
      icon: BarChart3,
      title: "Relatórios Automáticos",
      description: "Receba relatórios completos sem fazer nada. A Moovi organiza tudo automaticamente e te mostra onde você pode melhorar.",
      conversation: [
        { type: 'user', text: 'Como estão minhas finanças?' },
        { type: 'bot', text: 'Preparei seu relatório do mês! Você economizou 15% 🎉' }
      ]
    }
  ];

  const WhatsAppConversation = ({ messages }: { messages: any[] }) => (
    <div className="bg-white rounded-2xl shadow-xl p-4 max-w-md mx-auto lg:mx-0">
      <div className="bg-gray-50 p-4 rounded-xl space-y-3 min-h-[180px]">
        {messages.map((msg, i) => (
          <div 
            key={i}
            className={`
              rounded-lg p-3 max-w-[85%] animate-fade-in
              ${msg.type === 'user' 
                ? 'bg-green-100 ml-auto text-right' 
                : 'bg-white mr-auto shadow-sm'
              }
            `}
          >
            <p className="text-sm text-gray-800">{msg.text}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={elementRef}>
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 fade-in-scroll ${isVisible ? 'visible' : ''}`}>
          Seu Assessor Financeiro Pessoal no WhatsApp
        </h2>
        <p className={`text-lg sm:text-xl text-muted-foreground text-center mb-16 fade-in-scroll fade-in-scroll-delay-100 ${isVisible ? 'visible' : ''}`}>
          É tão simples quanto mandar uma mensagem. A Moovi entende você.
        </p>
        
        <div className="space-y-20">
          {features.map((feature, i) => (
            <div 
              key={i}
              className={`
                grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center
                ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}
              `}
            >
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''} fade-in-scroll ${isVisible ? 'visible' : ''}`}>
                <feature.icon className="w-12 h-12 sm:w-16 sm:h-16 text-primary mb-4" />
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
              
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} fade-in-scroll fade-in-scroll-delay-200 ${isVisible ? 'visible' : ''}`}>
                <WhatsAppConversation messages={feature.conversation} />
              </div>
            </div>
          ))}
        </div>

        {/* Additional security feature */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <div className={`bg-card rounded-2xl p-8 shadow-lg border border-border fade-in-scroll ${isVisible ? 'visible' : ''}`}>
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Segurança de nível bancário</h3>
            <p className="text-base sm:text-lg text-muted-foreground">
              Criptografia de ponta a ponta em todas as conversas. Seus dados financeiros protegidos 24 horas por dia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
