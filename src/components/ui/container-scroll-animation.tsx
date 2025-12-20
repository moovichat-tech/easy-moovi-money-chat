import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/utils/scroll";
import { Check } from "lucide-react";

// --- SOLUÇÃO TEMPORÁRIA ---
// Estamos usando a sua logo existente para todas as imagens por enquanto.
// Assim que você tiver os prints reais, salve na pasta 'src/assets' e mude aqui.
import placeholderImage from "@/assets/moovi-logo.png";

const featureImage1 = placeholderImage;
const featureImage2 = placeholderImage;
const featureImage3 = placeholderImage;
const featureImage4 = placeholderImage;
const featureImage5 = placeholderImage;
const featureImage6 = placeholderImage;
const featureImage7 = placeholderImage;

const features = [
  {
    title: "Financeiro",
    description: (
      <>
        <p className="mb-4">
          O Moovi organiza suas finanças direto no WhatsApp. É só enviar mensagens como “gastei 100 no mercado” ou
          “recebi 4 mil de salário” e o Moovi entende, registra e classifica tudo automaticamente.
        </p>
        <p className="mb-4">
          Você acompanha seus gastos e receitas com relatórios inteligentes, gráficos claros e lembretes diários, tudo
          sem planilhas e sem complicação.
        </p>
        <p>Simples, rápido e 100% no WhatsApp, para você ter mais controle do seu dinheiro no dia a dia.</p>
      </>
    ),
    image: featureImage1,
    hasButton: true,
  },
  {
    title: "Registre tudo no Whatsapp",
    description: (
      <>
        <p className="mb-4">
          É só enviar uma mensagem no WhatsApp que o Moovi entende tudo! "Gastei 5 reais no café” ou “Ganhei 120 de hora
          extra”.
        </p>
        <p className="mb-4 font-semibold">Ele te entende de todas as formas!</p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" /> Texto, áudio ou foto! Você escolhe como quer
            conversar
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" /> Classificação automática para facilitar o
            controle
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" /> Rápido, simples e sem complicação no dia a dia
          </li>
        </ul>
      </>
    ),
    image: featureImage2,
    hasButton: false,
  },
  {
    title: "Painel Profissional",
    description: (
      <>
        <p className="mb-4 font-semibold text-lg">Visão clara de todo o seu dinheiro!</p>
        <p className="mb-4">
          Tudo o que você registra no WhatsApp vira um painel simples e fácil de entender, com a visão completa do seu
          dinheiro em um só lugar.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" /> Gráficos automáticos de entradas e saídas
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" /> Organização inteligente dos seus gastos
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" /> Acompanhamento prático para decisões do dia a
            dia
          </li>
        </ul>
      </>
    ),
    image: featureImage3,
    hasButton: true,
  },
  {
    title: "Lembretes Personalizados",
    description: (
      <>
        <p className="mb-4 font-semibold text-lg">Organize seus compromissos direto no WhatsApp</p>
        <p className="mb-4">
          Basta enviar mensagens como “médico amanhã às 16h” ou “pagar cartão dia 20”. O Moovi registra tudo e cria
          lembretes personalizados automaticamente.
        </p>
        <p className="mb-4">
          Receba avisos no momento certo, resumos do dia e uma visão clara dos seus compromissos! Sem anotações manuais
          e sem esquecer nada.
        </p>
        <p>Simples, rápido e sempre no WhatsApp! Para manter sua rotina sob controle todos os dias.</p>
      </>
    ),
    image: featureImage4,
    hasButton: false,
  },
  {
    title: "Categorias Personalizadas",
    description: (
      <>
        <p className="mb-4">
          O Moovi já vem com categorias prontas, como mercado, aluguel e lazer! Mas você pode criar outras do seu jeito,
          quantas você quiser e personalizar como preferir!
        </p>
        <p className="mb-4 italic text-muted-foreground">
          “Academia”, “viagens” ou “cartão de crédito”... você escolhe e você decide!
        </p>
        <p className="mb-4">
          Sempre que você registra um gasto, o Moovi classifica tudo automaticamente e mostra quanto você está gastando
          em cada categoria.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" /> Crie quantas categorias quiser
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" /> Classificação automática dos gastos
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" /> Relatórios por categoria direto no WhatsApp
          </li>
        </ul>
      </>
    ),
    image: featureImage5,
    hasButton: true,
  },
  {
    title: "Limites Inteligentes",
    description: (
      <>
        <p className="mb-4 font-semibold text-lg">Defina limites e evite gastar mais do que deveria</p>
        <p className="mb-4">
          Escolha um valor máximo para categorias como alimentação, lazer ou cartão de crédito. Quando seus gastos se
          aproximarem do limite, o Moovi te avisa automaticamente.
        </p>
        <p className="mb-4">
          Assim, você sabe quando desacelerar antes de estourar o orçamento! Sem precisar fazer conta ou acompanhar
          planilhas.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" /> Defina limites por categoria
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" /> Alertas automáticos no WhatsApp
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" /> Mais controle para gastar melhor no dia a dia
          </li>
        </ul>
      </>
    ),
    image: featureImage6,
    hasButton: false,
  },
  {
    title: "Gestão de Contas e Cartões",
    description: (
      <>
        <p className="mb-4 font-semibold text-lg">Controle todas as suas contas e cartões em um só lugar</p>
        <p className="mb-4">
          Tenha mais de uma conta bancária ou mais de um cartão? Sem problema. O Moovi permite acompanhar tudo junto:
          conta corrente, poupança e vários cartões de crédito.
        </p>
        <p className="mb-4">
          Registre gastos normalmente no WhatsApp e o Moovi identifica de onde saiu o dinheiro e em qual cartão foi
          feito o gasto.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" /> Gerencie várias contas bancárias
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" /> Controle mais de um cartão de crédito
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" /> Tudo organizado de forma simples e automática
          </li>
        </ul>
      </>
    ),
    image: featureImage7,
    hasButton: true,
  },
];

export const FeaturesStaircase = () => {
  return (
    <section className="py-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção (Opcional, se quiser um cabeçalho geral) */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Tudo o que você precisa, direto no <span className="text-green-600">WhatsApp</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça todas as funcionalidades que vão transformar sua vida financeira.
          </p>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0; // Verifica se é par (0, 2, 4...) -> Imagem à Direita

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  // Se for par (Item 1, 3...), row normal (Texto Esq | Img Dir).
                  // Se for ímpar (Item 2, 4...), row-reverse (Img Esq | Texto Dir).
                  // No mobile (flex-col), mudamos a ordem para sempre ficar Imagem em Cima.
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* --- BLOCO DE TEXTO --- */}
                <div className="flex-1 space-y-6 text-left order-2 md:order-1">
                  <div className="relative">
                    {/* Linha decorativa acima do título */}
                    <div className="w-20 h-2 bg-green-500 rounded-full mb-6"></div>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">{feature.title}</h3>
                  </div>

                  <div className="text-lg text-muted-foreground leading-relaxed">{feature.description}</div>

                  {feature.hasButton && (
                    <div className="pt-4">
                      <Button
                        size="lg"
                        className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all text-lg"
                        onClick={() => scrollToSection("pricing-section")}
                      >
                        Quero o Plano Anual 💚
                      </Button>
                    </div>
                  )}
                </div>

                {/* --- BLOCO DE IMAGEM --- */}
                <div className="flex-1 w-full order-1 md:order-2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900 group">
                    {/* Efeito de brilho ao passar o mouse */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <img
                      src={feature.image}
                      alt={`Funcionalidade: ${feature.title}`}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
