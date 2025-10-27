import { Edit3, Bell, BarChart3, Shield, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import mooviAvatar from "@/assets/moovi-mascot-avatar.png";
interface Feature {
  icon: any;
  title: string;
  description: string;
  conversation: Array<{
    type: 'user' | 'bot';
    text: string;
  }>;
}
const HowItWorks = () => {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation({
    threshold: 0.1
  });
  const features: Feature[] = [{
    icon: Edit3,
    title: "Registre suas despesas do jeito mais fácil",
    description: "Por texto, áudio ou até foto do cupom fiscal. Você decide como quer conversar com seu assessor.",
    conversation: [{
      type: 'user',
      text: 'Gastei 45 reais no almoço'
    }, {
      type: 'bot',
      text: 'Registrado! Almoço — R$ 45,00. Categoria: Alimentação.'
    }]
  }, {
    icon: Bell,
    title: "Receba alertas inteligentes de tudo que importa",
    description: "Nunca mais esqueça uma conta. A Moovi avisa você sobre vencimentos, gastos altos e oportunidades de economia.",
    conversation: [{
      type: 'bot',
      text: 'Oi! Seu boleto de internet vence amanhã. Já separou o valor?'
    }]
  }, {
    icon: BarChart3,
    title: "Entenda suas finanças de verdade",
    description: "Relatórios claros e insights que realmente fazem sentido. Descubra para onde seu dinheiro está indo — sem abrir planilhas.",
    conversation: [{
      type: 'user',
      text: 'Gastei demais esse mês?'
    }, {
      type: 'bot',
      text: 'Você gastou 30% a mais com delivery. Quer uma dica pra equilibrar?'
    }]
  }, {
    icon: Target,
    title: "Categorização automática inteligente",
    description: "A Moovi aprende com você e categoriza tudo sozinha. Você só precisa registrar — o resto é com ela.",
    conversation: [{
      type: 'user',
      text: 'Paguei R$ 120 no mercado'
    }, {
      type: 'bot',
      text: '✓ Registrado em Supermercado. Total do mês: R$ 680.'
    }]
  }, {
    icon: BarChart3,
    title: "Relatórios Automáticos",
    description: "Receba relatórios completos sem fazer nada. A Moovi organiza tudo automaticamente e te mostra onde você pode melhorar.",
    conversation: [{
      type: 'user',
      text: 'Como estão minhas finanças?'
    }, {
      type: 'bot',
      text: 'Preparei seu relatório do mês! Você economizou 15% 🎉'
    }]
  }];
  const WhatsAppConversation = ({
    messages
  }: {
    messages: any[];
  }) => <div className="bg-white rounded-2xl shadow-xl p-4 max-w-md mx-auto lg:mx-0">
      <div className="bg-gray-50 p-4 rounded-xl space-y-3 min-h-[180px]">
        {messages.map((msg, i) => <div key={i} className={`
              flex items-end gap-2 animate-fade-in
              ${msg.type === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'}
            `}>
            {/* Avatar apenas para mensagens do bot */}
            {msg.type === 'bot' && <img src={mooviAvatar} alt="Moovi" className="w-8 h-8 rounded-full flex-shrink-0" />}
            
            {/* Mensagem */}
            <div className={`
                rounded-lg p-3 max-w-[85%]
                ${msg.type === 'user' ? 'bg-green-100 text-right' : 'bg-white shadow-sm'}
              `}>
              <p className="text-sm text-gray-800">{msg.text}</p>
            </div>
          </div>)}
      </div>
    </div>;
  return <section className="py-16 md:py-20 bg-background">
      
    </section>;
};
export default HowItWorks;