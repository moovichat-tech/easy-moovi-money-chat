function AnimatedHero() {
  return (
    <div className="w-full">
      {/* AJUSTE AQUI: 
          Mudei 'py-3' para 'pt-3 pb-0'. 
          Remover o padding-bottom aqui ajuda a aproximar o vídeo que vem logo depois. 
      */}
      <div className="flex gap-3 pt-3 pb-0 md:py-5 items-center justify-center flex-col">
        <div className="flex gap-2 flex-col items-center">
          {/* Header */}
          <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl max-w-5xl tracking-tighter text-center font-bold leading-tight text-gray-900">
            <span className="block text-primary whitespace-nowrap md:whitespace-normal">
              Controle sua vida financeira
            </span>
            <span className="block">direto no WhatsApp,</span>
            <span className="block">sem planilhas e sem esforço</span>
          </h1>

          {/* SubHeader */}
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground font-bold max-w-2xl text-center px-4 md:text-lg mt-4">
            {/* VERSÃO MOBILE */}
            <span className="md:hidden">
              Assista o vídeo, e descubra como pessoas estão organizando suas finanças automaticamente.
            </span>

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
