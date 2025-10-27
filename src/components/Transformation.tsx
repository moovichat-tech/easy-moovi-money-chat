import { Button } from "@/components/ui/button";
import { X, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { openWhatsApp } from "@/utils/scroll";
const Transformation = () => {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation({
    threshold: 0.15
  });
  const pains = ["Tentando lembrar tudo de cabeça — e esquecendo boletos importantes", "Sem saber para onde foi o dinheiro no final do mês", "Gastando tempo com planilhas que você nunca abre de novo", "Sentindo aquela angústia de não ter controle sobre suas finanças", "Adiando decisões financeiras porque tudo parece complicado demais"];
  const benefits = ["Suas contas estão organizadas e você será avisado de tudo no momento certo", "Você sabe exatamente quanto gastou, quanto tem e quanto pode usar", "Não precisa abrir nenhum aplicativo — tudo acontece no WhatsApp que você já usa", "Um assessor pessoal cuida da sua vida financeira 24 horas por dia", "Você finalmente tem clareza, controle e paz de espírito com seu dinheiro"];
  return <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={elementRef}>
        {/* Dores */}
        <div className="mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center fade-in-scroll ${isVisible ? 'visible' : ''}`}>
            Você ainda vive assim?
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {pains.map((pain, i) => <div key={i} className={`flex items-start gap-4 bg-red-50 rounded-xl p-4 border border-red-200 fade-in-scroll fade-in-scroll-delay-${i * 100} ${isVisible ? 'visible' : ''}`}>
                <X className="text-red-500 w-6 h-6 shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-gray-700">{pain}</p>
              </div>)}
          </div>
        </div>
        
        {/* Benefícios */}
        <div className="mb-12 text-xl">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center fade-in-scroll ${isVisible ? 'visible' : ''}`}>Quero começar agora - 
é grátis por 3 dias💚</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {benefits.map((benefit, i) => <div key={i} className={`flex items-start gap-4 bg-green-50 rounded-xl p-4 border border-green-200 fade-in-scroll fade-in-scroll-delay-${i * 100} ${isVisible ? 'visible' : ''}`}>
                <Check className="text-primary w-6 h-6 shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-gray-700">{benefit}</p>
              </div>)}
          </div>
        </div>
        
        {/* Frase de impacto */}
        <p className={`text-2xl sm:text-3xl font-semibold text-center mt-12 mb-8 fade-in-scroll fade-in-scroll-delay-300 ${isVisible ? 'visible' : ''}`}>
          Isso não é um sonho. É o que a Moovi faz por você.
        </p>
        
        <div className="text-center">
          <Button size="lg" onClick={openWhatsApp} className="bg-primary hover:bg-primary/90 text-white font-bold text-xl">
            Começar agora — é grátis por 3 dias →
          </Button>
        </div>
      </div>
    </section>;
};
export default Transformation;