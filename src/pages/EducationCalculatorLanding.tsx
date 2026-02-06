import { lazy, Suspense, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroEducationCalculator } from "@/components/HeroEducationCalculator";
import { KeyBenefits } from "@/components/KeyBenefits";
import { Footer } from "@/components/Footer";

// Lazy load heavy below-the-fold components
const FeatureCards = lazy(() => import("@/components/features/FeatureCards").then(m => ({ default: m.FeatureCards })));
const ProcessSteps = lazy(() => import("@/components/features/ProcessSteps").then(m => ({ default: m.ProcessSteps })));
const Testimonials = lazy(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
const Compliance = lazy(() => import("@/components/about/Compliance").then(m => ({ default: m.Compliance })));
const TeamSection = lazy(() => import("@/components/about/TeamSection").then(m => ({ default: m.TeamSection })));
const TalkToUs = lazy(() => import("@/components/TalkToUs").then(m => ({ default: m.TalkToUs })));
const EnhancedComparisonSection = lazy(() => import("@/components/comparison/EnhancedComparisonSection").then(m => ({ default: m.EnhancedComparisonSection })));
const FAQ = lazy(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })));
const DownloadBanner = lazy(() => import("@/components/DownloadBanner").then(m => ({ default: m.DownloadBanner })));
const InvestSmarterSection = lazy(() => import("@/components/InvestSmarterSection").then(m => ({ default: m.InvestSmarterSection })));
const SuperFDSection = lazy(() => import("@/components/SuperFDSection").then(m => ({ default: m.SuperFDSection })));

// Skeleton section loader
const SectionLoader = ({ height = "400px" }: { height?: string }) => (
  <div 
    className="flex items-center justify-center bg-background"
    style={{ minHeight: height }}
  >
    <div className="animate-pulse text-muted-foreground">Loading...</div>
  </div>
);

const EducationCalculatorLanding = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" role="main">
        <HeroEducationCalculator />
        <section id="benefits" aria-label="Key Benefits">
          <KeyBenefits />
        </section>
        <Suspense fallback={<SectionLoader height="500px" />}>
          <section id="steps" aria-label="How It Works" className="section-lazy">
            <ProcessSteps />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader height="400px" />}>
          <section id="features" aria-label="Features" className="section-lazy">
            <FeatureCards />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader height="500px" />}>
          <section id="invest-smarter" aria-label="Invest Smarter" className="section-lazy">
            <InvestSmarterSection />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader height="400px" />}>
          <section id="superfd" aria-label="Super FD" className="section-lazy">
            <SuperFDSection />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader height="400px" />}>
          <section id="testimonials-section" aria-label="Testimonials" className="section-lazy">
            <Testimonials />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader height="300px" />}>
          <section id="about" aria-label="About Us" className="section-lazy">
            <Compliance />
            <TalkToUs />
            <TeamSection />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader height="500px" />}>
          <section aria-label="Investment Comparison" className="section-lazy">
            <EnhancedComparisonSection />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader height="400px" />}>
          <section id="faq" aria-label="Frequently Asked Questions" className="section-lazy">
            <FAQ />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader height="300px" />}>
          <section aria-label="Download App" className="section-lazy">
            <DownloadBanner />
          </section>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default EducationCalculatorLanding;