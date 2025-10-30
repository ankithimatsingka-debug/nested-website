import { Header } from "@/components/Header";
import { HeroLanding } from "@/components/HeroLanding";
import { KeyBenefits } from "@/components/KeyBenefits";
import { FeatureCards } from "@/components/features/FeatureCards";
import { ProcessSteps } from "@/components/features/ProcessSteps";
import { Compliance } from "@/components/about/Compliance";
import { ContactUs } from "@/components/ContactUs";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { DownloadBanner } from "@/components/DownloadBanner";
import { Footer } from "@/components/Footer";
import { EnhancedComparisonSection } from "@/components/comparison/EnhancedComparisonSection";
import { InvestSmarterSection } from "@/components/InvestSmarterSection";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroLanding />
        <section id="benefits">
          <KeyBenefits />
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
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="about">
          <Compliance />
          <ContactUs />
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

export default Landing;
