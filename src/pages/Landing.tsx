import { HeroLanding } from "@/components/HeroLanding";
import { KeyBenefits } from "@/components/KeyBenefits";
import { FeatureCards } from "@/components/features/FeatureCards";
import { ProcessSteps } from "@/components/features/ProcessSteps";
import { Compliance } from "@/components/about/Compliance";
import { ContactUs } from "@/components/ContactUs";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { DownloadBanner } from "@/components/DownloadBanner";
import { FooterLanding } from "@/components/FooterLanding";
import { EnhancedComparisonSection } from "@/components/comparison/EnhancedComparisonSection";
import { InvestSmarterSection } from "@/components/InvestSmarterSection";
import { Helmet } from "react-helmet";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Nested Money: Building Nested Wealth for Your Child's Future</title>
        <meta name="description" content="Smart mutual fund investing designed for Indian parents. Goal-based planning, automatic rebalancing, and personalized asset allocation for your child's education." />
        <link rel="canonical" href="https://nested.money/" />
      </Helmet>
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
      <FooterLanding />
    </div>
  );
};

export default Landing;
