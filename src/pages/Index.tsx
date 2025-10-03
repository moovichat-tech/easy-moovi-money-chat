import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import WhyMoovi from "@/components/WhyMoovi";
import Security from "@/components/Security";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <WhyMoovi />
      <Security />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
