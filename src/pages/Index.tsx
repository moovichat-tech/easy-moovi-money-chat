import VSLHero from "@/components/VSLHero";
import Transformation from "@/components/Transformation";
import FeaturesScroll from "@/components/FeaturesScroll";
import SocialProof from "@/components/SocialProof";
import Authority from "@/components/Authority";
import HowItWorks from "@/components/HowItWorks";
import ComparisonSection from "@/components/ComparisonSection";
import { Pricing } from "@/components/Pricing";
import Security from "@/components/Security";
import Footer from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { AppShowcase } from "@/components/AppShowcase";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { LiveSocialProof } from "@/components/LiveSocialProof";
import { MobileExitIntent } from "@/components/MobileExitIntent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <VSLHero />
      <AppShowcase />
      <FeaturesScroll />
      <Authority />
      <SocialProof />
      <ComparisonSection />
      <Pricing />
      <FAQ />
      <Footer />

      <StickyMobileCTA />
      <MobileExitIntent />
    </div>
  );
};
export default Index;
