import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const WhatsAppWidget = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ajuste o valor 600 conforme a altura do seu Hero.
      // Geralmente 600px é o suficiente para passar o primeiro botão CTA.
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.open("https://wa.me/message/KM5F3KCURBTMG1", "_blank");
  };

  return (
    <div
      className={cn(
        "fixed right-4 bottom-6 z-50 group drop-shadow-lg",
        // Lógica de Animação (Pop-up):
        // Se isVisible for true: Escala normal (100%), Opacidade total.
        // Se isVisible for false: Escala zero (some), Opacidade zero.
        // A classe 'origin-center' garante que ele cresça do meio.
        "transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] origin-center",
        isVisible ? "scale-100 opacity-100 translate-y-0" : "scale-0 opacity-0 translate-y-10 pointer-events-none",
      )}
    >
      {/* Tooltip */}
      <div
        className={`
        absolute bottom-full right-0 mb-2 px-3 py-1.5
        bg-gray-900 text-white text-xs font-medium rounded-md shadow-sm
        whitespace-nowrap transition-all duration-300 origin-bottom-right
        ${showTooltip ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
      `}
      >
        Moovi WhatsApp
      </div>

      {/* Botão Principal */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="
          /* TAMANHO RESPONSIVO: */
          /* w-12 h-12 (48px) no celular -> Ficou menor como pediu */
          /* md:w-16 md:h-16 (64px) no PC -> Mantém o destaque */
          relative w-12 h-12 md:w-16 md:h-16 
          flex items-center justify-center
          transition-transform duration-300
          hover:scale-110
        "
        aria-label="Falar com o Moovi no WhatsApp"
      >
        {/* Ícone Oficial Colorido (Verde e Branco) */}
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.38 3.48 16.91L2.16 21.91L7.29 20.56C8.75 21.4 10.4 21.83 12.13 21.83C17.59 21.83 22.04 17.38 22.04 11.92C22.04 6.46 17.59 2 12.04 2Z"
            fill="#25D366"
          />
          <path
            d="M16.98 14.01C16.71 13.87 15.38 13.2 15.13 13.11C14.88 13.02 14.7 12.97 14.52 13.24C14.34 13.51 13.84 14.11 13.69 14.29C13.54 14.47 13.39 14.49 13.12 14.35C12.85 14.21 11.98 13.92 10.95 12.99C10.13 12.25 9.58 11.34 9.4 11.03C9.22 10.72 9.38 10.55 9.51 10.42C9.63 10.3 9.78 10.11 9.91 9.93C10.04 9.75 10.08 9.61 10.17 9.43C10.26 9.25 10.21 9.09 10.15 8.95C10.09 8.81 9.59 7.56 9.38 7.06C9.17 6.56 8.96 6.63 8.8 6.63C8.65 6.63 8.47 6.61 8.29 6.61C8.11 6.61 7.81 6.68 7.56 6.95C7.31 7.22 6.61 7.89 6.61 9.24C6.61 10.59 7.57 11.9 7.71 12.08C7.85 12.26 9.65 15.07 12.4 16.28C13.06 16.57 13.57 16.74 13.97 16.87C14.64 17.09 15.25 17.06 15.73 16.99C16.27 16.91 17.38 16.31 17.61 15.66C17.84 15.01 17.84 14.45 17.77 14.34C17.7 14.23 17.52 14.15 17.25 14.01L16.98 14.01Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppWidget;
