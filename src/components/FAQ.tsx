import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function FAQ() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const faqs = [
    {
      question: "É seguro? Meus dados estão protegidos?",
      answer: "100% seguro. Utilizamos a mesma criptografia de ponta a ponta que os grandes bancos usam. O Moovi não movimenta seu dinheiro, apenas lê as notificações para organizar sua vida. Seus dados são seus e de mais ninguém."
    },
    {
      question: "Por que o Plano Anual vale mais a pena?",
      answer: "Além de economizar R$ 60,00 imediatamente (o equivalente a 3 meses grátis), você ganha acesso exclusivo à nossa Inteligência Artificial Avançada, relatórios de evolução patrimonial e suporte prioritário. É o kit completo para quem quer enriquecer de verdade."
    },
    {
      question: "Preciso baixar algum aplicativo?",
      answer: "Não! Essa é a mágica. O Moovi funciona direto no seu WhatsApp, o app que você já usa todo dia. Nada de apps pesados ocupando memória do seu celular."
    },
    {
      question: "Serve para quem ganha pouco?",
      answer: "Serve principalmente para quem quer fazer o dinheiro sobrar. O Moovi te ajuda a encontrar os 'gastos invisíveis' que comem seu salário, independente de quanto você ganha."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto max-w-3xl" ref={elementRef}>
        <div className={`text-center mb-12 fade-in-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl font-bold mb-4">Ainda com dúvida?</h2>
          <p className="text-gray-600">
            Tiramos as dúvidas de mais de 1.000 novos membros todos os meses.
          </p>
        </div>

        <div className={`fade-in-scroll fade-in-scroll-delay-200 ${isVisible ? 'visible' : ''}`}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-green-600 hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}