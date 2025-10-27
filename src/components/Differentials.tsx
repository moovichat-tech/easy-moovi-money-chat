import { Smartphone, Zap, MessageCircle, Clock, X, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Differentials = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const withoutMoovi = [
    "Você tenta lembrar onde gastou",
    "Esquece contas importantes",
    "Se sente perdido no final do mês",
    "Vive com sensação de 'não sei pra onde foi meu dinheiro'"
  ];

  const withMoovi = [
    "Clareza total de todas as despesas",
    "Alertas automáticos de tudo que importa",
    "Entende seus padrões de gastos",
    "Decisões financeiras com confiança e tranquilidade"
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={elementRef}>
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 fade-in-scroll ${isVisible ? 'visible' : ''}`}>
          Não é só mais um app de finanças
        </h2>
        <p className={`text-xl sm:text-2xl text-center text-muted-foreground mb-12 fade-in-scroll fade-in-scroll-delay-100 ${isVisible ? 'visible' : ''}`}>
          É o seu Assessor Pessoal de Bolso
        </p>
        
        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Smartphone, text: "Sem instalar nada novo", subtitle: "Funciona direto no WhatsApp" },
            { icon: Zap, text: "Sem complicação", subtitle: "Simples como uma mensagem" },
            { icon: MessageCircle, text: "Conversa natural", subtitle: "Como falar com um amigo" },
            { icon: Clock, text: "Disponível 24h", subtitle: "Seu assessor nunca tira folga" }
          ].map((badge, i) => (
            <div 
              key={i} 
              className={`bg-card rounded-xl p-6 text-center shadow-lg border border-border card-hover fade-in-scroll fade-in-scroll-delay-${i * 100} ${isVisible ? 'visible' : ''}`}
            >
              <badge.icon className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">{badge.text}</p>
              <p className="text-sm text-muted-foreground">{badge.subtitle}</p>
            </div>
          ))}
        </div>
        
        {/* Comparação */}
        <h3 className={`text-2xl sm:text-3xl font-bold text-center mb-12 fade-in-scroll ${isVisible ? 'visible' : ''}`}>
          A diferença entre ter e não ter controle
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Sem Moovi */}
          <div className={`bg-red-50 rounded-2xl p-8 border-2 border-red-200 fade-in-scroll ${isVisible ? 'visible' : ''}`}>
            <h4 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
              <X className="text-red-500" />
              Sem o Moovi
            </h4>
            <ul className="space-y-4">
              {withoutMoovi.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-red-500 mt-1 text-xl">✗</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Com Moovi */}
          <div className={`bg-green-50 rounded-2xl p-8 border-2 border-green-200 fade-in-scroll fade-in-scroll-delay-200 ${isVisible ? 'visible' : ''}`}>
            <h4 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
              <Check className="text-primary" />
              Com o Moovi
            </h4>
            <ul className="space-y-4">
              {withMoovi.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="text-primary mt-1 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
