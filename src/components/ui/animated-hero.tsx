import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["inteligente", "simples", "poderoso", "prático", "eficaz"], []);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);
  return <div className="w-full">
      <div className="flex gap-3 py-3 md:py-5 items-center justify-center flex-col">
        <div className="flex gap-2 flex-col">
          <h1 className="text-4xl md:text-5xl lg:text-6xl max-w-4xl tracking-tight text-center font-bold leading-tight">
            <span className="text-gray-900">Controle financeiro</span>
            <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
              &nbsp;
              {titles.map((title, index) => <motion.span key={index} className="absolute font-bold text-primary" initial={{
              opacity: 0,
              y: "-100"
            }} transition={{
              type: "spring",
              stiffness: 50
            }} animate={titleNumber === index ? {
              y: 0,
              opacity: 1
            } : {
              y: titleNumber > index ? -150 : 150,
              opacity: 0
            }}>
                  {title}
                </motion.span>)}
            </span>
          </h1>

          <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center px-4 md:text-lg">
            <span className="block">Trabalha o mês inteiro e nunca sabe pra onde foi o dinheiro?</span>
            <span className="block mt-1 text-sm md:text-base">Seu <span className="font-semibold text-primary">assessor financeiro 24h no WhatsApp</span>, mostra <span className="font-semibold text-primary">em tempo real</span> onde cada centavo está indo.</span>
          </p>
        </div>
      </div>
    </div>;
}
export { AnimatedHero };