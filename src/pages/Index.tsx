import VSLHero from "@/components/VSLHero";
import Transformation from "@/components/Transformation";
import FeaturesScroll from "@/components/FeaturesScroll";
import SocialProof from "@/components/SocialProof";
import Authority from "@/components/Authority";
import HowItWorks from "@/components/HowItWorks";
import Differentials from "@/components/Differentials";
import ComparisonSection from "@/components/ComparisonSection";
import { Pricing } from "@/components/Pricing";
import Security from "@/components/Security";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen">
      <VSLHero />
      <Differentials />
      <Transformation />
      <FeaturesScroll />
      
      <Authority />
      <SocialProof />
      <ComparisonSection />
      <Pricing />
      
      <Footer />
    </div>;
};
export default Index;