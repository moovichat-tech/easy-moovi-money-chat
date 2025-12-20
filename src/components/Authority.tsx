import { Button } from "@/components/ui/button";
import { Users, DollarSign, TrendingUp, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { scrollToSection } from "@/utils/scroll";
import { TextAnimate } from "@/components/ui/text-animate";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { motion } from "framer-motion";

const Authority = () => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.15,
  });

  const metrics = [
    {
      icon: Users,
      number: "+1.243",
      label: "pessoas usando o Moovi todos os dias",
      description: "Gente real que saiu do descontrole financeiro para o controle total.",
    },
    {
      icon: DollarSign,
      number: "R$1.344.827",
      label: "já organizados pelo Moovi",
      description: "Dinheiro real acompanhado, categorizado e controlado!",
    },
    {
      icon: TrendingUp,
      number: "27,3%",
      label: "de economia em média",
      description: "Quem enxerga os gastos, naturalmente passa a gastar melhor.",
    },
    {
      icon: Shield,
      number: "100%",
      label: "seguro e criptografado",
      description: "Seus dados protegidos com o mesmo padrão usado por bancos.",
    },
  ];

  const MetricCard = ({ metric, index }) => (
    <CardContainer key={index} className="w-full h-full py-2">
      <CardBody
        // AJUSTE 1: Mudei 'items-center' para 'items-start'.
        // AJUSTE 2: Mudei 'text-center' para 'text-left'.
        // Isso joga ícones e textos para a esquerda, criando um alinhamento perfeito.
        className={`bg-card rounded-2xl p-6 md:p-8 text-left shadow-lg border border-border w-full h-full flex flex-col justify-between items-start min-h-[320px] fade-in-scroll fade-in-scroll-delay-${index * 100} ${isVisible ? "visible" : ""}`}
      >
        <div className="w-full">
          {/* Ícone alinhado à esquerda (removi o mx-auto e justify-center) */}
          <CardItem translateZ="50" className="flex items-center justify-start mb-4">
            <metric.icon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
          </CardItem>

          {/* Texto alinhado à esquerda naturalmente (removi o w-full text-center) */}
          <CardItem translateZ="75" className="text-3xl md:text-5xl font-bold text-foreground mb-2">
            {metric.number}
          </CardItem>

          <CardItem translateZ="60" className="text-sm md:text-lg font-semibold text-primary mb-2">
            {metric.label}
          </CardItem>
        </div>

        <CardItem translateZ="40" className="text-xs md:text-sm text-muted-foreground mt-2 w-full text-left">
          {metric.description}
        </CardItem>
      </CardBody>
    </CardContainer>
  );

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-green-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={elementRef}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
          <TextAnimate animation="slideUp" by="word">
            Moovi ajuda milhares de pessoas a organizarem suas vidas financeiras!
          </TextAnimate>
        </h2>

        {/* --- VERSÃO DESKTOP --- */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 items-stretch">
          {metrics.map((metric, i) => (
            <div key={i} className="h-full">
              <MetricCard metric={metric} index={i} />
            </div>
          ))}
        </div>

        {/* --- VERSÃO MOBILE --- */}
        <div className="md:hidden mt-8 relative w-full">
          <div className="flex overflow-hidden mask-linear-gradient">
            <motion.div
              className="flex gap-4 px-4"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 25,
              }}
              style={{ width: "max-content" }}
            >
              {[...metrics, ...metrics].map((metric, i) => (
                <div key={i} className="w-[280px]">
                  <MetricCard metric={metric} index={i} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            size="xl"
            className="bg-green-700 hover:bg-green-800 text-white font-bold text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all rounded-2xl"
            onClick={() => scrollToSection("pricing-section")}
          >
            Quero começar agora 💚
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Authority;
