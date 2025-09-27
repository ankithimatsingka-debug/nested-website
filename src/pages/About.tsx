import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { OurMission } from "@/components/about/OurMission";
import { OurValues } from "@/components/about/OurValues";
import { Compliance } from "@/components/about/Compliance";
import { TeamSection } from "@/components/about/TeamSection";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AboutHero />
        <OurStory />
        <OurMission />
        <OurValues />
        <Compliance />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}