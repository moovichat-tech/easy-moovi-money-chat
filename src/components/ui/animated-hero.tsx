function AnimatedHero() {
  return (
    <div className="w-full">
      <div className="flex gap-3 py-3 md:py-5 items-center justify-center flex-col">
        <div className="flex gap-2 flex-col items-center">
          {/* Header Ajustado */}
          <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl max-w-5xl tracking-tighter text-center font-bold leading-tight text-gray-900">
            {/* TRUQUE AQUI: 
               1. Adicionei 'whitespace-nowrap md:whitespace-normal'. 
                  Isso força a frase a não quebrar de jeito nenhum no celular.
               2. O 'text-2xl' no H1 acima garante que ela caiba na tela sem estourar.
            */}
            <span className="block text-primary whitespace-nowrap md:whitespace-normal">
              Controle sua vida financeira
            </span>

            <span className="block">direto no WhatsApp,</span>
            <span className="block">sem planilhas e sem esforço</span>
          </h1>

          {/* SubHeader Inteligente (Mantido) */}
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground font-bold max-w-2xl text-center px-4 md:text-lg mt-4">
            {/* VERSÃO MOBILE */}
            <span className="md:hidden"></span>

            {/* VERSÃO DESKTOP */}
            <span className="hidden md:block">
              Assista o vídeo, e descubra como pessoas estão organizando suas finanças automaticamente.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };
