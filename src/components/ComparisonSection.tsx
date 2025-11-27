import { X, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ComparisonSection = () => {
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
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={elementRef}>
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
                  <span className="text-red-500 mt-1 text-xl font-mono">✗</span>
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

export default ComparisonSection;
