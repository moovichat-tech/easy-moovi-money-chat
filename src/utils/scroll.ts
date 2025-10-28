export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export const openWhatsApp = () => {
  window.open(
    'https://wa.me/5562994019788?text=quero%20o%20teste',
    '_blank'
  );
};
