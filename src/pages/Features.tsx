import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeaturesHero } from "@/components/features/FeaturesHero";
import { FeatureCards } from "@/components/features/FeatureCards";
import { ProcessSteps } from "@/components/features/ProcessSteps";
import { FeaturesCTA } from "@/components/features/FeaturesCTA";

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <FeaturesHero />
        <FeatureCards />
        <ProcessSteps />
        <FeaturesCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Features;