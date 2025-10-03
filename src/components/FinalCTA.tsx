import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  "3 dias de teste totalmente grátis",
  "Sem necessidade de cartão de crédito",
  "Cancele quando quiser, sem burocracia",
  "Suporte dedicado para começar",
];

const FinalCTA = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !phone) {
      toast({
        title: "Ops! Faltam informações",
        description: "Por favor, preencha email e telefone para continuar.",
        variant: "destructive",
      });
      return;
    }

    // Here you would integrate with your backend/CRM
    toast({
      title: "Ótimo! 🎉",
      description: "Em breve você receberá o link para começar seu teste gratuito no WhatsApp.",
    });
    
    setEmail("");
    setPhone("");
  };

  return (
    <section id="cta-section" className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto border-2 border-primary/20 shadow-2xl">
          <CardContent className="p-8 sm:p-12">
            <div className="text-center space-y-6 mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <MessageCircle className="w-4 h-4" />
                Teste grátis por 3 dias
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Comece agora mesmo a{" "}
                <span className="text-primary">simplificar</span> suas finanças
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Junte-se ao MOOVI e descubra como é fácil ter controle financeiro 
                no WhatsApp. Sem compromisso, sem complicação.
              </p>
            </div>

            {/* Benefits list */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input 
                  type="email" 
                  placeholder="Seu melhor email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-base"
                  required
                />
                <Input 
                  type="tel" 
                  placeholder="WhatsApp (com DDD)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-12 text-base"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                size="xl" 
                variant="hero"
                className="w-full group text-base"
              >
                <MessageCircle className="w-5 h-5" />
                Começar meu teste gratuito agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Ao se cadastrar, você concorda com nossos Termos de Uso e Política de Privacidade.
                Você receberá o link de acesso direto no WhatsApp informado.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinalCTA;
