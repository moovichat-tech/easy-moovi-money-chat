function AnimatedHero() {
  return (
    <div className="w-full">
      <div className="flex gap-3 py-3 md:py-5 items-center justify-center flex-col">
        <div className="flex gap-2 flex-col items-center">
          {/* Header Ajustado 
              - Reduzi para text-3xl até text-5xl (estava 6xl) para ficar mais compacto ("um pixel menor")
              - Removi os 'blocks' forçados. Usei <br /> estratégicos para telas grandes (md:block)
          */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl max-w-4xl tracking-tight text-center font-bold leading-tight text-gray-900">
            <span className="text-primary">Controle sua vida financeira </span>
            direto no WhatsApp,
            {/* Essa quebra de linha abaixo só acontece em telas médias/grandes para equilibrar o visual em 2/3 linhas */}
            <br className="hidden md:block" />
            sem planilhas e sem esforço
          </h1>

          {/* SubHeader Ajustado
              - Adicionei 'font-bold' para ficar negrito como pediu
              - Mantive o tamanho (text-base / md:text-lg)
              - text-muted-foreground mantém a cor cinza elegante, mas o bold dá destaque
          */}
          <p className="text-base font-bold leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center px-4 md:text-lg mt-4">
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
