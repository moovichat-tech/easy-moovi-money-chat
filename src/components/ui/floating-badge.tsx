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
    "top-left": "top-20 left-[15%] xl:left-[20%]",
    "top-right": "top-20 right-[15%] xl:right-[20%]",
    "middle-left": "top-[45%] left-[10%] xl:left-[15%]",
    "middle-right": "top-[45%] right-[10%] xl:right-[15%]",
    "bottom-right": "bottom-24 right-[15%] xl:right-[20%]"
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
        "absolute hidden md:flex items-center gap-3 px-5 py-4",
        "bg-gradient-to-br from-white via-white to-green-50/30",
        "backdrop-blur-md rounded-3xl",
        "shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
        "border-2 border-white/60",
        "hover:shadow-[0_12px_40px_rgb(34,197,94,0.25)]",
        "hover:scale-105 transition-all duration-300",
        "ring-1 ring-green-100/50",
        positionClasses[position]
      )}
    >
      <span className="text-3xl drop-shadow-sm">{icon}</span>
      <div className="flex flex-col gap-0.5">
        {value && (
          <span className="font-extrabold text-primary text-xl leading-none tracking-tight">
            {value}
          </span>
        )}
        <span className="text-xs font-medium text-gray-600 whitespace-nowrap leading-tight">
          {text}
        </span>
      </div>
    </motion.div>
  );
};
