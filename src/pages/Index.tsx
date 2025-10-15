import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { KeyBenefits } from "@/components/KeyBenefits";
import { FeatureCards } from "@/components/features/FeatureCards";
import { ProcessSteps } from "@/components/features/ProcessSteps";
import { OurStory } from "@/components/about/OurStory";
import { OurMission } from "@/components/about/OurMission";
import { OurValues } from "@/components/about/OurValues";
import { Compliance } from "@/components/about/Compliance";
import { TeamSection } from "@/components/about/TeamSection";
import { Testimonials } from "@/components/Testimonials";
import { EducationCalculator } from "@/components/EducationCalculator";
import { FAQ } from "@/components/FAQ";
import { DownloadBanner } from "@/components/DownloadBanner";
import { Footer } from "@/components/Footer";
import { EnhancedComparisonSection } from "@/components/comparison/EnhancedComparisonSection";
import { InvestSmarterSection } from "@/components/InvestSmarterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <section id="benefits">
          <KeyBenefits />
        </section>
        <section id="calculator">
          <EducationCalculator />
        </section>
        <section id="steps">
          <ProcessSteps />
        </section>
        <section id="features">
          <FeatureCards />
        </section>
        <EnhancedComparisonSection />
        <section id="invest-smarter">
          <InvestSmarterSection />
        </section>
        <section id="about">
          <Compliance />
          <TeamSection />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <DownloadBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
