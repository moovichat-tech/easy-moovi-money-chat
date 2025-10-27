import { Edit3, Bell, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import mooviAvatar from "@/assets/moovi-mascot-avatar.png";

interface Feature {
  icon: any;
  title: string;
  description: string;
  conversation: Array<{ type: 'user' | 'bot'; text: string }>;
}

export default function FeaturesScroll() {
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
    }
  ];

  const WhatsAppConversation = ({ messages }: { messages: any[] }) => (
    <div className="bg-card rounded-2xl shadow-xl p-4">
      <div className="bg-muted/50 p-4 rounded-xl space-y-3 min-h-[140px]">
        {messages.map((msg, i) => (
          <div 
            key={i}
            className={`
              flex items-end gap-2 animate-fade-in
              ${msg.type === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'}
            `}
          >
            {msg.type === 'bot' && (
              <img 
                src={mooviAvatar} 
                alt="Moovi" 
                className="w-6 h-6 rounded-full flex-shrink-0"
              />
            )}
            
            <div
              className={`
                rounded-lg p-3 max-w-[85%] text-sm
                ${msg.type === 'user' 
                  ? 'bg-primary/10 text-right' 
                  : 'bg-card shadow-sm'
                }
              `}
            >
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={elementRef}>
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Seu Assessor Financeiro Pessoal
          </h2>
          <p className={`text-lg sm:text-xl lg:text-2xl text-muted-foreground ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Direto no WhatsApp 💚
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <div 
              key={i}
              className={`
                bg-card rounded-2xl shadow-lg border border-border p-6
                flex flex-col gap-4 min-h-[320px]
                ${isVisible ? 'animate-fade-in' : 'opacity-0'}
              `}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div>
                <feature.icon className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
              
              <WhatsAppConversation messages={feature.conversation} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
