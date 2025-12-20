import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);

  // 1. Atualizei a lista de títulos para rotacionar as frases do seu novo Header
  const titles = useMemo(() => ["direto no WhatsApp", "sem planilhas", "sem esforço"], []);

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

  return (
    <div className="w-full">
      <div className="flex gap-3 py-3 md:py-5 items-center justify-center flex-col">
        <div className="flex gap-2 flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl max-w-5xl tracking-tight text-center font-bold leading-tight">
            {/* Parte fixa do Header */}
            <span className="text-gray-900">Controle sua vida financeira</span>

            {/* Parte animada do Header */}
            <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
              &nbsp;
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute font-bold text-primary"
                  initial={{
                    opacity: 0,
                    y: "-100",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                  }}
                  animate={
                    titleNumber === index
                      ? {
                          y: 0,
                          opacity: 1,
                        }
                      : {
                          y: titleNumber > index ? -150 : 150,
                          opacity: 0,
                        }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* 2. Novo SubHeader atualizado */}
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center px-4 md:text-lg mt-4">
            O Moovi organiza sua vida financeira automaticamente direto no WhatsApp, sem planilhas e sem esforço.
            Assista ao vídeo para entender por que cada vez mais pessoas usam o Moovi para ter controle total do
            dinheiro no dia a dia.
          </p>

          {/* 3. Novo Botão adicionado */}
          <div className="mt-6">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Quero usar o Moovi 💚
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };
