import { Button } from "@/components/ui/button";
import { Lock, Database, Clock, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const securityFeatures = [{
  icon: Lock,
  title: "Criptografia ponta-a-ponta",
  description: "Suas conversas e dados financeiros são protegidos com a mesma segurança do WhatsApp."
}, {
  icon: Database,
  title: "Armazenamento seguro",
  description: "Seus dados são armazenados em servidores seguros com backup automático."
}, {
  icon: Clock,
  title: "Disponível 24/7",
  description: "O MOOVI está sempre online, pronto para ajudar quando você precisar."
}];
const Security = () => {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation({
    threshold: 0.15
  });
  const scrollToCTA = () => {
    window.open('https://api.whatsapp.com/send/?phone=5511989269937&text=Quero+testar+o+MOOVI&type=phone_number&app_absent=0', '_blank');
  };
  return <section className="py-24 bg-white">
      
    </section>;
};
export default Security;