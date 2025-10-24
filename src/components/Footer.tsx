import { Lock, Smartphone, Zap, CreditCard } from "lucide-react";
import mooviLogo from "@/assets/moovi-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            { icon: Lock, text: "Seus dados 100% seguros", subtitle: "Criptografia ponta a ponta" },
            { icon: Smartphone, text: "Direto no WhatsApp", subtitle: "Sem precisar instalar nada" },
            { icon: Zap, text: "Comece em 2 minutos", subtitle: "É só começar a conversar" },
            { icon: CreditCard, text: "Teste grátis, sem cartão", subtitle: "Experimente sem compromisso" }
          ].map((badge, i) => (
            <div key={i} className="text-center">
              <badge.icon className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <p className="font-semibold mb-1">{badge.text}</p>
              <p className="text-sm text-gray-300">{badge.subtitle}</p>
            </div>
          ))}
        </div>
        
        {/* Logo e Tagline */}
        <div className="text-center border-t border-gray-700 pt-8">
          <img 
            src={mooviLogo} 
            alt="Moovi.chat" 
            className="h-10 mx-auto mb-4 opacity-80 brightness-0 invert"
          />
          
          <p className="text-sm text-gray-400 mt-8">
            © 2025 Moovi.chat. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
