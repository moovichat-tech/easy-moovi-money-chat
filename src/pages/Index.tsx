import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import WhyMoovi from "@/components/WhyMoovi";
import { Pricing } from "@/components/Pricing";
import Security from "@/components/Security";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <WhyMoovi />
      <Pricing />
      <Security />
      <FinalCTA />
    </div>
  );
};

export default Index;
