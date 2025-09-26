import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyNested } from "@/components/WhyNested";
import { KeyBenefits } from "@/components/KeyBenefits";
import { Testimonials } from "@/components/Testimonials";
import { EducationCalculator } from "@/components/EducationCalculator";
import { DownloadBanner } from "@/components/DownloadBanner";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <section id="why-nested">
          <WhyNested />
        </section>
        <section id="benefits">
          <KeyBenefits />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="calculator">
          <EducationCalculator />
        </section>
        <DownloadBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
