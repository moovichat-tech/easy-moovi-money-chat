import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Edit3, Bell, BarChart3, Target, FileText, Shield } from "lucide-react";

const features = [
  {
    icon: Edit3,
    title: "Registre suas despesas",
    description: "Do jeito mais fácil",
    color: "bg-green-50 dark:bg-green-950/20",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    icon: Bell,
    title: "Alertas inteligentes",
    description: "De tudo que importa",
    color: "bg-blue-50 dark:bg-blue-950/20",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: BarChart3,
    title: "Entenda suas finanças",
    description: "De verdade",
    color: "bg-purple-50 dark:bg-purple-950/20",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: Target,
    title: "Categorização automática",
    description: "Inteligente",
    color: "bg-orange-50 dark:bg-orange-950/20",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
  {
    icon: FileText,
    title: "Relatórios Automáticos",
    description: "Sempre atualizados",
    color: "bg-pink-50 dark:bg-pink-950/20",
    iconColor: "text-pink-600 dark:text-pink-400",
  },
  {
    icon: Shield,
    title: "Segurança bancária",
    description: "Seus dados protegidos",
    color: "bg-emerald-50 dark:bg-emerald-950/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
];

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
        <div className="h-full w-full p-4 md:p-8">
          <div className="grid grid-cols-2 gap-3 md:gap-6 h-full">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`${feature.color} rounded-xl p-4 md:p-6 flex flex-col items-start justify-center space-y-2 md:space-y-3 transition-all hover:scale-105`}
                >
                  <div className={`${feature.iconColor} w-8 h-8 md:w-12 md:h-12`}>
                    <Icon className="w-full h-full" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm md:text-lg text-gray-900 dark:text-gray-100">
                      {feature.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
