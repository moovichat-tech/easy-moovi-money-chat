import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IPhoneMockup } from "@/components/ui/iphone-mockup";
import { TextAnimate } from "@/components/ui/text-animate";
import { FloatingPaths } from "@/components/ui/background-paths";
import phoneLeft from "@/assets/phone-left.png";
import phoneRight from "@/assets/phone-right.png";
const TriplePhoneShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const leftY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const rightY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };
  const phoneVariants = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };
  return <section ref={sectionRef} className="relative py-10 md:py-24 overflow-hidden bg-background">
      {/* Animated Background Paths */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(155_65%_35%/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(155_65%_35%/0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Green Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-[radial-gradient(circle,hsl(var(--primary)/0.12),hsl(var(--primary)/0.05)_40%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center leading-tight mb-3 sm:mb-4">
            <TextAnimate animation="blurInUp" by="character" className="text-foreground" once>
              O controle total
            </TextAnimate>
            <br className="sm:hidden" />
            <TextAnimate animation="blurInUp" by="character" className="text-primary" delay={0.4} once>
              {" na palma da mão"}
            </TextAnimate>
          </h2>
          <TextAnimate 
            animation="blurIn" 
            by="word"
            className="text-base sm:text-lg max-w-xs sm:max-w-2xl mx-auto text-muted-foreground px-2 sm:px-0"
            delay={0.6}
            once
          >
            Veja como é simples usar o Moovi no seu dia a dia
          </TextAnimate>
        </div>

        {/* 3 iPhones Container */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-50px"
      }} className="flex items-center justify-center gap-0 md:gap-0">
          {/* Left iPhone - Hidden on mobile (80% of center) */}
          <motion.div variants={phoneVariants} style={{
          y: leftY
        }} className="hidden md:block w-[14.4rem] lg:w-64 xl:w-[19.2rem] -mr-6 lg:-mr-8 z-10 transform -rotate-6">
            <IPhoneMockup src={phoneLeft} alt="Moovi - Tela de resumo financeiro" className="drop-shadow-[0_25px_50px_rgba(22,163,74,0.25)] ring-1 ring-primary/10 rounded-[2.5rem]" />
          </motion.div>

          {/* Center iPhone - Always visible, larger */}
          <motion.div variants={phoneVariants} className="w-56 sm:w-72 md:w-72 lg:w-80 xl:w-96 z-20">
            <IPhoneMockup videoEmbed videoEmbedSrc="https://player-vz-c1e2f242-e38.tv.pandavideo.com.br/embed/?v=4e6c28e8-f6eb-4e20-b216-224be1bc17f8" alt="Moovi - Demonstração do app" className="drop-shadow-[0_35px_60px_rgba(22,163,74,0.35)]" />
          </motion.div>

          {/* Right iPhone - Hidden on mobile (80% of center) */}
          <motion.div variants={phoneVariants} style={{
          y: rightY
        }} className="hidden md:block w-[14.4rem] lg:w-64 xl:w-[19.2rem] -ml-6 lg:-ml-8 z-10 transform rotate-6">
            <IPhoneMockup src={phoneRight} alt="Moovi - Tela de conversas" className="drop-shadow-[0_25px_50px_rgba(22,163,74,0.25)] ring-1 ring-primary/10 rounded-[2.5rem]" />
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default TriplePhoneShowcase;
