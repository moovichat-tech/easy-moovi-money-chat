import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, TrendingUp, User } from "lucide-react";

// Dados das notificações
const notifications = [
  {

    name: "Guilherme Pitanga",

    location: "São Paulo, SP",

    action: "assinou o Plano Anual",

    time: "agora mesmo",

    icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,

    type: "purchase"

  },

  {

    name: "IVAN JUSTI",

    location: "Belo Horizonte, MG",

    action: "economizou R$ 450,00 hoje",

    time: "há 2 minutos",

    icon: <TrendingUp className="w-5 h-5 text-blue-500" />,

    type: "economy"

  },

  {

    name: "Jéssica  Lima",

    location: "Curitiba, PR",

    action: "começou com o plano mensal",

    time: "há 5 minutos",

    icon: <User className="w-5 h-5 text-purple-500" />,

    type: "trial"

  },

  {

    name: "Gabriel Lorena",

    location: "Rio de Janeiro",

    action: "registrou 30 despesas hoje",

    time: "há 12 minutos",

    icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,

    type: "purchase"

  },

  {

    name: "Victor Manoel",

    location: "Brasília, DF",

    action: "categorizou 15 gastos via áudio",

    time: "há 1 minuto",

    icon: <TrendingUp className="w-5 h-5 text-amber-500" />,

    type: "usage"

  }
];

export function LiveSocialProof() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showTimer = setInterval(() => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrent((prev) => (prev + 1) % notifications.length);
        }, 1000); 
      }, 5000); 
    }, 12000); 

    const initialDelay = setTimeout(() => setIsVisible(true), 4000);

    return () => {
      clearInterval(showTimer);
      clearTimeout(initialDelay);
    };
  }, []);

  const item = notifications[current];

  return (
    <div className="fixed bottom-28 left-2 z-40 max-w-[95vw] w-fit md:bottom-8 md:left-8 pointer-events-none">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            // Animação de Entrada
            initial={{ opacity: 0, y: 50, scale: 0.9, x: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            // Animação de Saída (Voa para esquerda se for dispensado)
            exit={{ opacity: 0, y: 20, scale: 0.9, x: -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            
            // --- CONFIGURAÇÃO DE ARRASTO (SWIPE) ---
            drag="x" // Permite arrastar na horizontal
            dragConstraints={{ right: 0, left: 0 }} // Não deixa o elemento "solto" na tela, ele volta se não arrastar muito
            dragElastic={0.7} // Sensação de elástico ao puxar
            onDragEnd={(event, info) => {
              // Se arrastou mais de 50px para a esquerda (negativo), dispensa
              if (info.offset.x < -50) {
                setIsVisible(false);
              }
            }}
            whileDrag={{ scale: 1.02, cursor: "grabbing" }} // Feedback visual enquanto arrasta
            
            className="
              bg-white/95 backdrop-blur-md border border-gray-100 
              p-3 md:p-4 rounded-xl md:rounded-2xl 
              shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
              flex items-center gap-3 
              pointer-events-auto cursor-grab touch-pan-y
              transform origin-bottom-left scale-90 md:scale-100
            "
          >
            {/* Ícone */}
            <div className="bg-gray-50 p-2 md:p-2.5 rounded-full shrink-0 border border-gray-100">
              {item.icon}
            </div>

            {/* Texto Compacto */}
            <div className="flex flex-col gap-0.5 select-none">
              <p className="text-xs md:text-sm font-bold text-gray-900 leading-none whitespace-nowrap">
                {item.name} <span className="text-gray-400 font-normal text-[10px] md:text-xs ml-1">de {item.location}</span>
              </p>
              <p className="text-[11px] md:text-xs text-gray-600 font-medium whitespace-nowrap">
                {item.action}
              </p>
              <p className="text-[9px] md:text-[10px] text-green-600 font-bold uppercase tracking-wide mt-0.5">
                Verificado • {item.time}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}