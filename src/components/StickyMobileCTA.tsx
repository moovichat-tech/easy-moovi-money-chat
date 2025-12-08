import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/utils/scroll";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const StickyMobileCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra o botão após rolar 600px (passou do Hero)
      if (window.scrollY > 600) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 p-4 z-40 md:hidden bg-transparent shadow-none border-none backdrop-blur-none"
        >
          <div className="flex flex-col gap-2">
            {/* Gatilho de urgência/benefício */}

            <Button
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg animate-pulse-slow"
              onClick={() => scrollToSection("pricing-section")}
            >
              QUERO MINHA ECONOMIA
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
