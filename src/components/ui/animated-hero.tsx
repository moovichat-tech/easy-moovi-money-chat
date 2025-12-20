function AnimatedHero() {
  return (
    <div className="w-full">
      <div className="flex gap-3 py-3 md:py-5 items-center justify-center flex-col">
        <div className="flex gap-2 flex-col items-center">
          {/* Header com Quebras de Linha Forçadas */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl max-w-5xl tracking-tight text-center font-bold leading-tight text-gray-900">
            <span className="block">Controle sua vida financeira</span>
            {/* Adicionei 'text-green-600' abaixo caso queira destacar o WhatsApp, 
                se não quiser, basta remover essa classe */}
            <span className="block" text-green-600>
              direto no WhatsApp,
            </span>
            <span className="block">sem planilhas e</span>
            <span className="block">sem esforço</span>
          </h1>

          {/* SubHeader */}
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center px-4 md:text-lg mt-4">
            O Moovi organiza sua vida financeira automaticamente direto no WhatsApp, sem planilhas e sem esforço.{" "}
            <br className="hidden md:block" />
            Assista ao vídeo para entender por que cada vez mais pessoas usam o Moovi para ter controle total do
            dinheiro no dia a dia.
          </p>
        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };
