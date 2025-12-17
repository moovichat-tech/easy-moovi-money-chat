import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

interface Testimonial {
  id: number;
  image: string;
  title: string;
  quote: string;
  initials: string;
  name: string;
  date: string;
  rating: number;
}

const InstagramTestimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      image: "/testimonials/testimonial-1.jpg",
      title: "Rapidez impressionante",
      quote: "Fiquei impressionado com a rapidez. Em mando uma mensagem e em segundos já tenho tudo registrado!",
      initials: "CM",
      name: "Carlos Mendes",
      date: "15/11/2024",
      rating: 5,
    },
    {
      id: 2,
      image: "/testimonials/testimonial-2.jpg",
      title: "Organização facilitada",
      quote: "Nunca fui organizado com dinheiro, mas o Moovi tornou tudo fácil. Ele me lembra de tudo!",
      initials: "AP",
      name: "Ana Paula",
      date: "22/11/2024",
      rating: 5,
    },
    {
      id: 3,
      image: "/testimonials/testimonial-3.jpg",
      title: "Alertas que salvam",
      quote: "Me avisou na hora certa e evitei estourar o orçamento. Salvou meu mês!",
      initials: "RS",
      name: "Ricardo Silva",
      date: "28/11/2024",
      rating: 5,
    },
    {
      id: 4,
      image: "/testimonials/testimonial-4.jpg",
      title: "Funciona mesmo",
      quote: "Achei que seria mais um app enrolado, mas funciona MESMO. Me salvou nesses dias corridos!",
      initials: "JF",
      name: "Juliana Ferreira",
      date: "03/12/2024",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Clientes que{" "}
            <span className="text-primary">transformaram suas finanças</span>{" "}
            com o Moovi
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Veja como o Moovi está ajudando pessoas reais a alcançar seus objetivos financeiros
          </p>
        </motion.div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col border border-border/50"
            >
              {/* Imagem do Screenshot */}
              <div className="relative w-full h-64 md:h-72 overflow-hidden bg-muted">
                <img
                  src={testimonial.image}
                  alt={`Depoimento de ${testimonial.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Título */}
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {testimonial.title}
                </h3>

                {/* Estrelas */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Citação */}
                <blockquote className="text-sm text-muted-foreground mb-4 flex-grow italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Badge Cliente Verificado */}
                <div className="flex items-center gap-2 mb-4 text-sm text-primary font-medium">
                  <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
                    <Check className="w-4 h-4" />
                    <span>Cliente verificado</span>
                  </div>
                </div>

                {/* Informações do Cliente */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  {/* Avatar com Iniciais */}
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">
                      {testimonial.initials}
                    </span>
                  </div>

                  {/* Nome e Data */}
                  <div className="flex-grow min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm md:text-base text-muted-foreground">
            ✨ Depoimentos autênticos de usuários reais do Moovi
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramTestimonials;
