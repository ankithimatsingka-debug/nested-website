import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToReturns = () => {
    const element = document.getElementById("returns-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 py-12 md:py-20 relative overflow-hidden">
      {/* Pastel gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-purple-100/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-50/30 rounded-full blur-3xl" />

      <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
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
          Meet <span className="text-primary font-semibold">SuperFD</span>. Better than FD, Safer than share market.
        </p>

        {/* Primary CTA */}
        <div className="pt-4">
          <Button
            onClick={scrollToReturns}
            size="lg"
            className="font-body text-base md:text-lg px-8 py-6 h-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl shadow-lg shadow-blue-200/50"
          >
            Check returns & risks
          </Button>
        </div>

        {/* Trust Bullets */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-6 text-sm md:text-base text-muted-foreground font-body">
          <span className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            No lock-in
          </span>
          <span className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Start with ₹1,000
          </span>
          <span className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Fully digital
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
