import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingBadgeProps {
  icon: string;
  text: string;
  value?: string;
  position: "top-left" | "top-right" | "middle-left" | "middle-right" | "bottom-right";
  delay?: number;
}

export const FloatingBadge = ({ icon, text, value, position, delay = 0 }: FloatingBadgeProps) => {
  const positionClasses = {
    "top-left": "top-2 left-2 md:top-12 md:left-[8%] xl:left-[15%]",
    "top-right": "top-1 right-1 md:top-12 md:right-[8%] xl:right-[15%]",
    "middle-left": "hidden lg:flex lg:top-[50%] lg:left-[4%] xl:left-[8%]",
    "middle-right": "hidden lg:flex lg:top-[50%] lg:right-[4%] xl:right-[8%]",
    "bottom-right": "bottom-2 right-2 md:bottom-12 md:right-[8%] xl:right-[15%]"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: [-8, 8, -8]
      }}
      whileHover={{
        y: -5,
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      transition={{
        opacity: { duration: 0.8, delay },
        scale: { duration: 0.8, delay },
        y: { 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay 
        }
      }}
      className={cn(
        "absolute flex items-center",
        "opacity-85 md:opacity-90 lg:opacity-100",
        "scale-[0.85] md:scale-95 lg:scale-100",
        "z-0 md:z-5 lg:z-10",
        "gap-2 px-3 py-2 md:gap-3 md:px-5 md:py-4",
        "bg-gradient-to-br from-white via-white to-green-50/30",
        "backdrop-blur-md rounded-2xl md:rounded-3xl",
        "shadow-[0_4px_15px_rgb(0,0,0,0.08)] md:shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
        "border md:border-2 border-white/60",
        "hover:shadow-[0_12px_40px_rgb(34,197,94,0.25)]",
        "hover:scale-105 transition-all duration-300",
        "ring-1 ring-green-100/50",
        positionClasses[position]
      )}
    >
      <span className="text-2xl md:text-3xl drop-shadow-sm">{icon}</span>
      <div className="flex flex-col gap-0.5">
        {value && (
          <span className="font-extrabold text-primary text-lg md:text-xl leading-none tracking-tight">
            {value}
          </span>
        )}
        <span className="text-[10px] md:text-xs font-medium text-gray-600 whitespace-nowrap leading-tight">
          {text}
        </span>
      </div>
    </motion.div>
  );
};
