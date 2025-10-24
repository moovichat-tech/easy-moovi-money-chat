import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Testimonial {
  text: string;
  name: string;
  role: string;
}

const SocialProof = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const testimonials: Testimonial[] = [
    {
      text: "Antes eu vivia perdida com boletos. Agora durmo tranquila sabendo que o Moovi me avisa de tudo!",
      name: "Ana Luiza",
      role: "Designer Autônoma"
    },
    {
      text: "Achei que ia ser mais um app que eu não usaria. Mas como é no WhatsApp, ficou automático. Mudou minha vida financeira!",
      name: "Carlos Eduardo",
      role: "Dono de E-commerce"
    },
    {
      text: "Finalmente consegui pagar minhas dívidas porque enxerguei onde estava vazando dinheiro. Vale MUITO a pena.",
      name: "Juliana Martins",
      role: "Mãe e Empreendedora"
    },
    {
      text: "O melhor investimento que fiz em mim. É tipo ter um contador particular, mas sem pagar uma fortuna.",
      name: "Roberto Alves",
      role: "Consultor"
    },
    {
      text: "Muito prático! Mando um áudio enquanto estou no trânsito e pronto, registrado. Não tem desculpa pra não usar.",
      name: "Fernanda Costa",
      role: "Professora Particular"
    },
    {
      text: "Nunca imaginei que controlar minhas finanças seria TÃO simples. Sério, é só conversar no WhatsApp.",
      name: "Thiago Souza",
      role: "Freelancer de TI"
    }
  ];

  const TestimonialCard = ({ text, name, role }: Testimonial) => (
    <div className="bg-card rounded-2xl p-6 shadow-lg border border-border card-hover h-full flex flex-col">
      <p className="text-foreground text-base sm:text-lg leading-relaxed mb-4 flex-grow">
        "{text}"
      </p>
      
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map(i => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      <div>
        <p className="font-semibold text-foreground">— {name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={elementRef}>
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 fade-in-scroll ${isVisible ? 'visible' : ''}`}>
          Eles decidiram ter paz. E você?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i}
              className={`fade-in-scroll fade-in-scroll-delay-${i * 100} ${isVisible ? 'visible' : ''}`}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
