import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimationType = "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "fadeIn";
type AnimationBy = "word" | "character";

interface TextAnimateProps {
  children: string;
  animation?: AnimationType;
  by?: AnimationBy;
  className?: string;
  delay?: number;
  duration?: number;
}

const animationVariants = {
  slideUp: {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },
  slideDown: {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },
  slideLeft: {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  },
  slideRight: {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
};

export function TextAnimate({
  children,
  animation = "slideUp",
  by = "word",
  className,
  delay = 0,
  duration = 0.5
}: TextAnimateProps) {
  const variants = animationVariants[animation];
  
  // Split text by words or characters
  const items = by === "word" 
    ? children.split(" ") 
    : children.split("");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: by === "word" ? 0.1 : 0.03,
        delayChildren: delay
      }
    }
  };

  const itemVariants = {
    hidden: variants.hidden,
    visible: {
      ...variants.visible,
      transition: {
        duration: duration,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <motion.span
      className={cn("inline-block", className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          className="inline-block"
          style={{ 
            marginRight: by === "word" ? "0.25em" : "0",
            whiteSpace: by === "word" ? "nowrap" : "normal"
          }}
        >
          {item}
        </motion.span>
      ))}
    </motion.span>
  );
}
