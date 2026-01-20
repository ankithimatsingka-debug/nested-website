import StickyHeader from "@/components/superfd-landing/StickyHeader";
import HeroSection from "@/components/superfd-landing/HeroSection";
import ProblemSection from "@/components/superfd-landing/ProblemSection";
import PositioningSection from "@/components/superfd-landing/PositioningSection";
import ProductsSection from "@/components/superfd-landing/ProductsSection";
import ReturnsSection from "@/components/superfd-landing/ReturnsSection";
import IdealForSection from "@/components/superfd-landing/IdealForSection";
import FinalCTA from "@/components/superfd-landing/FinalCTA";
import ComplianceFooter from "@/components/superfd-landing/ComplianceFooter";

const SuperFDLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />
      <HeroSection />
      <ProblemSection />
      <PositioningSection />
      <ProductsSection />
      <ReturnsSection />
      <IdealForSection />
      <FinalCTA />
      <ComplianceFooter />
    </div>
  );
};

export default SuperFDLanding;
