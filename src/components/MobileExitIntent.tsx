import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, FileText } from "lucide-react";

export function MobileExitIntent() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile(); // Seu hook existente

  useEffect(() => {
    // Só ativa a lógica se for dispositivo móvel
    if (!isMobile) return;

    // Função que "arma a armadilha" no histórico
    const armExitIntent = () => {
      // Adiciona um estado vazio no histórico para criar um "buffer"
      window.history.pushState({ page: "exit-intent" }, "", window.location.href);
    };

    // Função que dispara quando o usuário clica em "Voltar"
    const handleBackButton = (event: PopStateEvent) => {
      // Se o usuário tentar voltar, mostramos o modal em vez de sair
      event.preventDefault();
      setIsOpen(true);
    };

    // Armar a armadilha após 2 segundos (para não bugar se o usuário sair instantaneamente)
    const timer = setTimeout(() => {
      armExitIntent();
      window.addEventListener("popstate", handleBackButton);
    }, 2000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [isMobile]);

  const handleClaimOffer = () => {
    window.open("https://buy.stripe.com/00weVe7JR4i58Tg3TDgMw0f");
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Se ele fechar o modal, a próxima vez que clicar em voltar ele sairá de verdade
  };

  if (!isMobile) return null; // Garante que não renderiza nada no Desktop

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md w-[90%] rounded-2xl border-2 border-red-100 bg-white p-0 overflow-hidden gap-0">
        {/* Cabeçalho Visual de Alerta */}
        <div className="bg-red-50 p-6 text-center border-b border-red-100">
          <div className="mx-auto bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center shadow-sm mb-3">
            <span className="text-3xl">🎁</span>
          </div>
          <DialogTitle className="text-xl font-bold text-red-600 mb-2">Espere! Não vá ainda...</DialogTitle>
          <DialogDescription className="text-gray-600 font-medium">Você ia embora de mãos vazias?</DialogDescription>
        </div>

        {/* Corpo da Oferta */}
        <div className="p-6 space-y-4">
          <div className="bg-gray-50 rounded-xl p-4 flex items-start gap-3 border border-gray-100">
            <div className="bg-green-100 p-2 rounded-lg shrink-0">
              <FileText className="w-6 h-6 text-green-700" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Moovi Mensal</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Teste o Moovi <span className="font-bold text-gray-700">"1 mês economizando"</span>. É o suficiente para
                começar a controlar suas finanças.
              </p>
            </div>
          </div>

          <Button
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12 text-base shadow-lg animate-pulse"
            onClick={handleClaimOffer}
          >
            Quero controlar minhas finanças!
          </Button>

          <button
            onClick={handleClose}
            className="w-full text-center text-xs text-gray-400 hover:text-gray-600 underline py-2"
          >
            Não obrigado, prefiro continuar sem controle
          </button>
        </div>

        {/* Botão X Absoluto */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 bg-white/50 p-1 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>
      </DialogContent>
    </Dialog>
  );
}
