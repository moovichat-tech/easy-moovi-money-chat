import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { openWhatsApp } from "@/utils/scroll";

const FinalCTASection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section 
      id="pricing-section"
      className="py-16 md:py-20 bg-gradient-to-br from-secondary via-primary to-secondary text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={elementRef}>
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 fade-in-scroll ${isVisible ? 'visible' : ''}`}>
          Sua vida financeira organizada começa agora
        </h2>
        
        <div className={`max-w-3xl mx-auto space-y-6 mb-12 fade-in-scroll fade-in-scroll-delay-100 ${isVisible ? 'visible' : ''}`}>
          <p className="text-xl sm:text-2xl font-semibold">
            Você merece ter paz de espírito com seu dinheiro.
          </p>
          <p className="text-lg sm:text-xl opacity-90">
            Você merece clareza, controle e liberdade financeira.
          </p>
          <p className="text-lg sm:text-xl opacity-90">
            Você merece um assessor pessoal trabalhando 24h por você.
          </p>
        </div>
        
        {/* Destaque teste grátis */}
        <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto mb-12 fade-in-scroll fade-in-scroll-delay-200 ${isVisible ? 'visible' : ''}`}>
          <p className="text-2xl sm:text-3xl font-bold mb-4">
            Teste grátis por 3 dias. Sem cartão de crédito.
          </p>
          <p className="text-base sm:text-lg opacity-90">
            Experimente a Moovi sem compromisso. Sinta a diferença de ter um assessor 
            financeiro pessoal no seu WhatsApp. Se você gostar (e vai gostar), continue 
            por menos de um café por dia.
          </p>
        </div>
        
        {/* CTA Gigante */}
        <Button 
          size="lg"
          className={`
            bg-accent hover:bg-accent/90 
            text-white text-lg sm:text-xl px-8 sm:px-16 py-6 sm:py-8 
            animate-pulse-soft
            shadow-2xl hover:shadow-accent/50
            font-semibold
            fade-in-scroll fade-in-scroll-delay-300
            ${isVisible ? 'visible' : ''}
          `}
          onClick={openWhatsApp}
        >
          Comece agora — tenha seu assessor pessoal no WhatsApp →
        </Button>
        
        <p className="text-base sm:text-lg mt-6 opacity-90">
          Junte-se a mais de 10.000 pessoas que já transformaram suas vidas financeiras.
        </p>
        
        {/* Garantia */}
        <div className={`mt-12 max-w-2xl mx-auto fade-in-scroll fade-in-scroll-delay-400 ${isVisible ? 'visible' : ''}`}>
          <p className="text-sm opacity-75 leading-relaxed">
            <strong>Garantia de Satisfação:</strong> Se nos primeiros 3 dias você não 
            sentir que a Moovi mudou sua relação com dinheiro, é só cancelar. Sem 
            perguntas, sem complicação.
          </p>
        </div>
        
        {/* Chamada emocional final */}
        <div className={`mt-16 max-w-3xl mx-auto space-y-4 fade-in-scroll fade-in-scroll-delay-500 ${isVisible ? 'visible' : ''}`}>
          <p className="text-lg sm:text-xl italic">
            Você pode continuar tentando lembrar tudo de cabeça, perdendo contas e se 
            sentindo perdido...
          </p>
          <p className="text-lg sm:text-xl italic">
            Ou pode ter um assessor pessoal cuidando de tudo pra você.
          </p>
          <p className="text-xl sm:text-2xl font-bold mt-6">
            A escolha é sua. Mas a tranquilidade está a uma mensagem de distância.
          </p>
        </div>
        
        <Button 
          size="lg"
          className="mt-8 bg-green-700 hover:bg-green-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
          onClick={openWhatsApp}
        >
          Quero ter controle total das minhas finanças →
        </Button>
      </div>
    </section>
  );
};

export default FinalCTASection;
