import { EducationJourney } from "@/components/education/EducationJourney";

export function HeroEducationCalculator() {
  return (
    <section className="relative min-h-screen flex items-start lg:items-center justify-center bg-gradient-primary overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-50 pointer-events-none" aria-hidden="true" style={{ contain: "layout paint" }} />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl opacity-50 pointer-events-none" aria-hidden="true" style={{ contain: "layout paint" }} />

      <div className="container mx-auto px-4 pt-20 pb-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
          {/* Headline - show first on mobile */}
          <div className="text-center lg:text-left space-y-4 lg:space-y-6 order-1 lg:order-2">
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Welcome to{" "}
              <span className="text-white/90">Nested</span>
            </h1>
            <p className="font-body text-lg md:text-2xl text-white/80">
              Save for your child's education dreams
            </p>
          </div>

          {/* Journey Card */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <EducationJourney compact />
          </div>
        </div>
      </div>
    </section>
  );
}
