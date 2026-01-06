import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { KeyBenefits } from "@/components/KeyBenefits";
import { Footer } from "@/components/Footer";

// Lazy load heavy below-the-fold components
const FeatureCards = lazy(() => import("@/components/features/FeatureCards").then(m => ({ default: m.FeatureCards })));
const ProcessSteps = lazy(() => import("@/components/features/ProcessSteps").then(m => ({ default: m.ProcessSteps })));
const EducationCalculator = lazy(() => import("@/components/EducationCalculator").then(m => ({ default: m.EducationCalculator })));
const Testimonials = lazy(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
const Compliance = lazy(() => import("@/components/about/Compliance").then(m => ({ default: m.Compliance })));
const TeamSection = lazy(() => import("@/components/about/TeamSection").then(m => ({ default: m.TeamSection })));
const EnhancedComparisonSection = lazy(() => import("@/components/comparison/EnhancedComparisonSection").then(m => ({ default: m.EnhancedComparisonSection })));
const FAQ = lazy(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })));
const DownloadBanner = lazy(() => import("@/components/DownloadBanner").then(m => ({ default: m.DownloadBanner })));
const InvestSmarterSection = lazy(() => import("@/components/InvestSmarterSection").then(m => ({ default: m.InvestSmarterSection })));
const SuperFDSection = lazy(() => import("@/components/SuperFDSection").then(m => ({ default: m.SuperFDSection })));

// Simple section loader
const SectionLoader = () => (
  <div className="py-16 flex items-center justify-center">
    <div className="animate-pulse text-muted-foreground">Loading...</div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <section id="benefits">
          <KeyBenefits />
        </section>
        <Suspense fallback={<SectionLoader />}>
          <section id="calculator">
            <EducationCalculator />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <section id="steps">
            <ProcessSteps />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <section id="features">
            <FeatureCards />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <section id="invest-smarter">
            <InvestSmarterSection />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <section id="superfd">
            <SuperFDSection />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <section id="testimonials">
            <Testimonials />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <section id="about">
            <Compliance />
            <TeamSection />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <EnhancedComparisonSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <section id="faq">
            <FAQ />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <DownloadBanner />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
