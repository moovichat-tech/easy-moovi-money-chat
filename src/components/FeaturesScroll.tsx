import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import featuresMockup from "@/assets/features-mockup.png";

export default function FeaturesScroll() {
  return (
    <section className="bg-background">
      <ContainerScroll
        titleComponent={
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              Seu Assessor Financeiro Pessoal
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Direto no WhatsApp 💚
            </p>
          </div>
        }
      >
        <div className="h-full w-full overflow-auto">
          <img 
            src={featuresMockup} 
            alt="Features do Moovi no WhatsApp" 
            className="w-full h-auto object-contain"
          />
        </div>
      </ContainerScroll>
    </section>
  );
}
