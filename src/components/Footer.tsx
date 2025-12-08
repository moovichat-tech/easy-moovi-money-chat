import { Lock, Smartphone, Zap, CreditCard } from "lucide-react";
import mooviLogo from "@/assets/moovi-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="text-center border-t border-gray-700 pt-8">
          <img 
            src={mooviLogo} 
            alt="Moovi.chat" 
            className="h-20 mx-auto mb-4 opacity-80 brightness-0 invert"
          />
          
          <p className="text-sm text-gray-400 mt-8">
            © 2025 Moovi.chat. Todos os direitos reservados.
          </p>
        </div>
    </footer>
  );
};

export default Footer;
