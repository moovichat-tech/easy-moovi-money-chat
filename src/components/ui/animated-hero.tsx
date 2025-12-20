function AnimatedHero() {
  return (
    <div className="w-full">
      <div className="flex gap-3 py-3 md:py-5 items-center justify-center flex-col">
        <div className="flex gap-2 flex-col items-center">
          {/* Header Ajustado:
             - Mudei de 'text-4xl' para 'text-3xl' na base (celular).
             - Mantive 'md:text-5xl' e 'lg:text-6xl' para computador.
             Isso fará "Controle sua vida financeira" caber melhor na tela do celular.
          */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl max-w-5xl tracking-tight text-center font-bold leading-tight text-gray-900">
            <span className="block text-primary">Controle sua vida financeira</span>
            <span className="block">direto no WhatsApp,</span>
            <span className="block">sem planilhas e sem esforço</span>
          </h1>

          {/* SubHeader Inteligente (Mantido) */}
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground font-bold max-w-2xl text-center px-4 md:text-lg mt-4">
            {/* VERSÃO MOBILE */}
            <span className="md:hidden">
              Organize suas finanças automaticamente no WhatsApp. Assista ao vídeo e veja como funciona.
            </span>

            {/* VERSÃO DESKTOP */}
            <span className="hidden md:block">
              O Moovi organiza sua vida financeira automaticamente direto no WhatsApp, sem planilhas e sem esforço.
              Assista ao vídeo para entender por que cada vez mais pessoas usam o Moovi para ter controle total do
              dinheiro no dia a dia.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };
