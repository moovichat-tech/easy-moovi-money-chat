import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";

const SocialProof = () => {
  const testimonials = [
    {
      author: {
        name: "Ana Luiza",
        role: "Designer Autônoma",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "Antes eu vivia perdida com boletos. Agora durmo tranquila sabendo que o Moovi me avisa de tudo!"
    },
    {
      author: {
        name: "Carlos Eduardo",
        role: "Dono de E-commerce",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "Achei que ia ser mais um app que eu não usaria. Mas como é no WhatsApp, ficou automático. Mudou minha vida financeira!"
    },
    {
      author: {
        name: "Juliana Martins",
        role: "Mãe e Empreendedora",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "Finalmente consegui pagar minhas dívidas porque enxerguei onde estava vazando dinheiro. Vale MUITO a pena."
    },
    {
      author: {
        name: "Roberto Alves",
        role: "Consultor",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      text: "O melhor investimento que fiz em mim. É tipo ter um contador particular, mas sem pagar uma fortuna."
    },
    {
      author: {
        name: "Fernanda Costa",
        role: "Professora Particular",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      text: "Muito prático! Mando um áudio enquanto estou no trânsito e pronto, registrado. Não tem desculpa pra não usar."
    },
    {
      author: {
        name: "Thiago Souza",
        role: "Freelancer de TI",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      text: "Nunca imaginei que controlar minhas finanças seria TÃO simples. Sério, é só conversar no WhatsApp."
    }
  ];

  return (
    <TestimonialsSection
      title="Eles decidiram ter paz. E você?"
      testimonials={testimonials}
    />
  );
};

export default SocialProof;
