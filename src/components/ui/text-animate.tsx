import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ElementType } from "react";

type AnimationType = "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "fadeIn" | "blurIn" | "blurInUp" | "scaleUp";
type AnimationBy = "word" | "character" | "text";

interface TextAnimateProps {
  children: string;
  animation?: AnimationType;
  by?: AnimationBy;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  once?: boolean;
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
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" }
  },
  blurInUp: {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
  },
  scaleUp: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  }
};

export function TextAnimate({
  children,
  animation = "slideUp",
  by = "word",
  className,
  delay = 0,
  duration = 0.5,
  as = "span",
  once = true
}: TextAnimateProps) {
  const variants = animationVariants[animation];
  
  // Split text by words, characters, or keep as full text
  const items = by === "text" 
    ? [children]
    : by === "word" 
      ? children.split(" ") 
      : children.split("");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: by === "text" ? 0 : by === "word" ? 0.1 : 0.03,
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

  const MotionComponent = motion[as] as typeof motion.span;

  return (
    <MotionComponent
      className={cn("inline-block", className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
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
          {item === " " ? "\u00A0" : item}
        </motion.span>
      ))}
    </MotionComponent>
  );
}
