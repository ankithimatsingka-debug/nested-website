import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToReturns = () => {
    const element = document.getElementById("returns-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 py-12 md:py-20 bg-background">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        {/* Main Headline */}
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          FD returns are falling
        </h1>

        {/* Sub-headline */}
        <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
          Your money deserves better returns without stock-market risk.
        </p>

        {/* Value Proposition */}
        <p className="font-body text-base md:text-lg text-foreground font-medium">
          Meet SuperFD. Better than FD, Safer than share market.
        </p>

        {/* Primary CTA */}
        <div className="pt-4">
          <Button
            onClick={scrollToReturns}
            size="lg"
            className="font-body text-base md:text-lg px-8 py-6 h-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg"
          >
            Check returns & risks
          </Button>
        </div>

        {/* Trust Bullets */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-6 text-sm md:text-base text-muted-foreground font-body">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            No lock-in
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Start with ₹1,000
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Fully digital
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
