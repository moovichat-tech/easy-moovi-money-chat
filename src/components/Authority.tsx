import { Button } from "@/components/ui/button";
import { Users, DollarSign, TrendingUp, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { scrollToSection } from "@/utils/scroll";
import { TextAnimate } from "@/components/ui/text-animate";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
const Authority = () => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.15,
  });
  const metrics = [
    {
      icon: Users,
      number: "+1.243",
      label: "usuários organizados",
      description: "Pessoas como você que decidiram ter controle total sobre suas finanças.",
    },
    {
      icon: DollarSign,
      number: "1.344.827",
      label: "de reais gerenciados",
      description: "Seu dinheiro merece a mesma atenção que damos aos nossos clientes.",
    },
    {
      icon: TrendingUp,
      number: "27,3%",
      label: "média de economia",
      description: "Quando você sabe onde está gastando, consegue economizar muito mais.",
    },
    {
      icon: Shield,
      number: "100%",
      label: "seguro e criptografado",
      description: "Seus dados financeiros protegidos com a mesma tecnologia dos bancos.",
    },
  ];
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={elementRef}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
          <TextAnimate animation="slideUp" by="word">
            Moovi ajuda milhares de pessoas a organizarem suas vidas financeiras!
          </TextAnimate>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-12">
          {metrics.map((metric, i) => (
            <CardContainer key={i} className="py-0">
              <CardBody
                className={`bg-card rounded-2xl p-8 text-center shadow-lg border border-border w-full h-auto fade-in-scroll fade-in-scroll-delay-${i * 100} ${isVisible ? "visible" : ""}`}
              >
                <CardItem translateZ="50" className="flex items-center justify-center mb-4">
                  <metric.icon className="w-12 h-12 text-primary" />
                </CardItem>

                <CardItem translateZ="75" className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
                  {metric.number}
                </CardItem>

                <CardItem translateZ="60" className="text-base sm:text-lg font-semibold text-primary mb-2">
                  {metric.label}
                </CardItem>

                <CardItem translateZ="40" className="text-sm text-muted-foreground">
                  {metric.description}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="xl"
            className="bg-green-700 hover:bg-green-800 text-white font-bold text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all rounded-2xl"
            onClick={() => scrollToSection("pricing-section")}
          >
            {" "}
            Quero começar agora 💚
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Authority;
