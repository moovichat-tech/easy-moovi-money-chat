import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppWidget = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const handleClick = () => {
    window.open(
      'https://wa.me/5511989269937?text=Ol%C3%A1%2C%20queria%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Plano%20Anual%20do%20Moovi',
      '_blank'
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <div className={`
        absolute bottom-full right-0 mb-2 px-4 py-2 
        bg-gray-900 text-white text-sm rounded-lg shadow-lg
        whitespace-nowrap transition-all duration-300
        ${showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
      `}>
        Suporte Moovi 💬
        <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900" />
      </div>

      {/* Botão Principal */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="
          relative w-14 h-14 md:w-16 md:h-16 
          bg-[#25D366] hover:bg-[#20BA5A]
          rounded-full shadow-2xl
          flex items-center justify-center
          transition-all duration-300
          hover:scale-110
        "
        aria-label="Falar com o Suporte Moovi no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
      </button>

    </div>
  );
};

export default WhatsAppWidget;
