import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IPhoneMockup } from "@/components/ui/iphone-mockup";
import phoneLeft from "@/assets/phone-left.png";
import phoneRight from "@/assets/phone-right.png";

const TriplePhoneShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const rightY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const phoneVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-[#0d3320] via-[#0f4a2e] to-[#0a2818]"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            O controle total na palma da mão
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
            Veja como é simples usar o Moovi no seu dia a dia
          </p>
        </motion.div>

        {/* 3 iPhones Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex items-center justify-center gap-0 md:gap-0"
        >
          {/* Left iPhone - Hidden on mobile */}
          <motion.div
            variants={phoneVariants}
            style={{ y: leftY }}
            className="hidden md:block w-48 lg:w-56 xl:w-64 -mr-6 lg:-mr-8 z-10 transform -rotate-6"
          >
            <IPhoneMockup
              src={phoneLeft}
              alt="Moovi - Tela de resumo financeiro"
              className="drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
            />
          </motion.div>

          {/* Center iPhone - Always visible, larger */}
          <motion.div
            variants={phoneVariants}
            className="w-64 sm:w-72 md:w-72 lg:w-80 xl:w-96 z-20"
          >
            <IPhoneMockup
              videoEmbed
              videoEmbedSrc="https://player-vz-c1e2f242-e38.tv.pandavideo.com.br/embed/?v=4e6c28e8-f6eb-4e20-b216-224be1bc17f8"
              alt="Moovi - Demonstração do app"
              className="drop-shadow-[0_35px_60px_rgba(0,0,0,0.6)]"
            />
          </motion.div>

          {/* Right iPhone - Hidden on mobile */}
          <motion.div
            variants={phoneVariants}
            style={{ y: rightY }}
            className="hidden md:block w-48 lg:w-56 xl:w-64 -ml-6 lg:-ml-8 z-10 transform rotate-6"
          >
            <IPhoneMockup
              src={phoneRight}
              alt="Moovi - Tela de conversas"
              className="drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TriplePhoneShowcase;
