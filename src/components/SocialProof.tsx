import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Junte-se aos pioneiros
          </h2>
          <p className="text-lg text-muted-foreground">
            Em breve, veja como os primeiros usuários estão simplificando suas finanças com o MOOVI
          </p>
        </div>

        {/* Testimonials placeholders */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3].map((index) => (
            <Card 
              key={index}
              className="border-2 border-dashed border-border/50 bg-muted/20"
            >
              <CardContent className="p-8 space-y-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className="w-5 h-5 fill-primary text-primary opacity-20" 
                    />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground/50 italic pl-6">
                    Em breve, aqui você verá depoimentos reais de usuários que 
                    transformaram suas finanças com o MOOVI.
                  </p>
                </div>
                
                <div className="flex items-center gap-3 pt-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10"></div>
                  <div className="space-y-1">
                    <div className="h-4 w-24 bg-muted-foreground/20 rounded"></div>
                    <div className="h-3 w-32 bg-muted-foreground/10 rounded"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats preview */}
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <div className="text-4xl sm:text-5xl font-bold text-primary">+500</div>
            <p className="text-muted-foreground">Usuários esperados no primeiro mês</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl sm:text-5xl font-bold text-accent">R$ 500</div>
            <p className="text-muted-foreground">Economia média projetada</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl sm:text-5xl font-bold text-primary">24/7</div>
            <p className="text-muted-foreground">Suporte sempre disponível</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
