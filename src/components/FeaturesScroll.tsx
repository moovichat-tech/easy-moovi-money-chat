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
        <div className="h-full w-full overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center p-2">
          <img 
            src={featuresMockup} 
            alt="Features do Moovi no WhatsApp" 
            className="w-full h-full object-contain"
            loading="eager"
            decoding="async"
          />
        </div>
      </ContainerScroll>
    </section>
  );
}
