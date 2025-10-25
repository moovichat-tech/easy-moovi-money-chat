import NewHero from "@/components/NewHero";
import Transformation from "@/components/Transformation";
import SocialProof from "@/components/SocialProof";
import Authority from "@/components/Authority";
import HowItWorks from "@/components/HowItWorks";
import Differentials from "@/components/Differentials";
import { Pricing } from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NewHero />
      <Transformation />
      <SocialProof />
      <Authority />
      <HowItWorks />
      <Differentials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
