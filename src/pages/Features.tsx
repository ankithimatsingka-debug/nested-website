import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeaturesHero } from "@/components/features/FeaturesHero";
import { FeatureCards } from "@/components/features/FeatureCards";
import { ProcessSteps } from "@/components/features/ProcessSteps";
import { FeaturesCTA } from "@/components/features/FeaturesCTA";

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Features - Nested | Smart Mutual Fund Investing for Parents</title>
        <meta name="description" content="Explore Nested's features: goal-based investing, automatic rebalancing, personalized asset allocation, and more for your child's education." />
        <link rel="canonical" href="https://nested.money/features" />
      </Helmet>
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