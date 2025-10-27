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
    <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-4 lg:p-6">
      <div className="bg-gray-50 dark:bg-zinc-900 p-4 lg:p-6 rounded-xl space-y-3 min-h-[160px] lg:min-h-[180px]">
        {messages.map((msg, i) => (
          <div 
            key={i}
            className={`
              flex items-end gap-2 animate-fade-in
              ${msg.type === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'}
            `}
            style={{ animationDelay: `${i * 200}ms` }}
          >
            {msg.type === 'bot' && (
              <img 
                src={mooviAvatar} 
                alt="Moovi" 
                className="w-7 h-7 lg:w-8 lg:h-8 rounded-full flex-shrink-0"
              />
            )}
            
            <div
              className={`
                rounded-lg p-3 lg:p-4 max-w-[85%]
                ${msg.type === 'user' 
                  ? 'bg-green-100 dark:bg-green-900/30 text-right' 
                  : 'bg-white dark:bg-zinc-800 shadow-sm'
                }
              `}
            >
              <p className="text-sm lg:text-base text-gray-800 dark:text-gray-200">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={elementRef}>
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Seu Assessor Financeiro Pessoal
          </h2>
          <p className={`text-lg sm:text-xl lg:text-2xl text-muted-foreground transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Direto no WhatsApp 💚
          </p>
        </div>
        
        {/* Grid de Features - 2 colunas no desktop/tablet */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12">
          {features.map((feature, i) => (
            <div 
              key={i}
              className={`
                bg-card rounded-3xl shadow-lg border border-border p-6 lg:p-10
                flex flex-col gap-6 lg:gap-8 min-h-[320px] lg:min-h-[400px]
                transition-all duration-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              {/* Conteúdo Textual */}
              <div>
                <feature.icon className="w-12 h-12 lg:w-16 lg:h-16 text-primary mb-4" />
                <h3 className="text-xl lg:text-3xl font-bold mb-3 lg:mb-4">{feature.title}</h3>
                <p className="text-sm lg:text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
              
              {/* Chat Simulado */}
              <WhatsAppConversation messages={feature.conversation} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
