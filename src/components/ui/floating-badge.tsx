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
    "top-left": "top-12 left-4 lg:left-12",
    "top-right": "top-12 right-4 lg:right-12",
    "middle-left": "top-1/3 left-0 lg:left-8",
    "middle-right": "top-1/3 right-0 lg:right-8",
    "bottom-right": "bottom-12 right-4 lg:right-16"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: [-10, 10, -10]
      }}
      transition={{
        opacity: { duration: 0.8, delay },
        scale: { duration: 0.8, delay },
        y: { 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay 
        }
      }}
      className={cn(
        "absolute hidden lg:flex items-center gap-2 px-4 py-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-green-100",
        positionClasses[position]
      )}
    >
      <span className="text-2xl">{icon}</span>
      <div className="flex flex-col">
        {value && <span className="font-bold text-primary text-lg">{value}</span>}
        <span className="text-sm text-gray-600 whitespace-nowrap">{text}</span>
      </div>
    </motion.div>
  );
};
