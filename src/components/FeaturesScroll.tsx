import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Edit3, Bell, BarChart3 } from "lucide-react";
import mooviAvatar from "@/assets/moovi-mascot-avatar.png";

interface Feature {
  icon: any;
  title: string;
  description: string;
  conversation: Array<{ type: 'user' | 'bot'; text: string }>;
}

export default function FeaturesScroll() {
  const features: Feature[] = [
    {
      icon: Edit3,
      title: "Registre suas despesas",
      description: "Por texto, áudio ou até foto do cupom fiscal.",
      conversation: [
        { type: 'user', text: 'Gastei 45 reais no almoço' },
        { type: 'bot', text: 'Registrado! Almoço — R$ 45,00. Categoria: Alimentação.' }
      ]
    },
    {
      icon: Bell,
      title: "Receba alertas inteligentes",
      description: "Nunca mais esqueça uma conta importante.",
      conversation: [
        { type: 'bot', text: 'Oi! Seu boleto de internet vence amanhã. Já separou o valor?' }
      ]
    },
    {
      icon: BarChart3,
      title: "Entenda suas finanças",
      description: "Relatórios claros e insights práticos.",
      conversation: [
        { type: 'user', text: 'Gastei demais esse mês?' },
        { type: 'bot', text: 'Você gastou 30% a mais com delivery. Quer uma dica pra equilibrar?' }
      ]
    }
  ];

  const WhatsAppConversation = ({ messages }: { messages: any[] }) => (
    <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-4">
      <div className="bg-gray-50 dark:bg-zinc-900 p-4 rounded-lg space-y-3">
        {messages.map((msg, i) => (
          <div 
            key={i}
            className={`
              flex items-end gap-2
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
                  ? 'bg-green-100 dark:bg-green-900/30 text-right' 
                  : 'bg-white dark:bg-zinc-800 shadow-sm'
                }
              `}
            >
              <p className="text-gray-800 dark:text-gray-200">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="bg-background">
      <ContainerScroll
        titleComponent={
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              Seu Assessor Financeiro Pessoal
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Direto no WhatsApp 💚
            </p>
          </div>
        }
      >
        <div className="h-full w-full overflow-auto p-3">
          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="bg-card rounded-xl shadow-lg border border-border p-5 md:p-6 flex flex-col gap-4"
              >
                <div>
                  <feature.icon className="w-10 h-10 text-primary mb-3" />
                  <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
                
                <WhatsAppConversation messages={feature.conversation} />
              </div>
            ))}
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
