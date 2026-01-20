import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToReturns = () => {
    const element = document.getElementById("returns-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 py-12 md:py-20 pt-20 relative overflow-hidden">
      {/* Pastel gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      {/* Decorative blur shapes */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-20 right-10 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-20 left-10 w-48 h-48 bg-purple-100/40 rounded-full blur-3xl" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-50/30 rounded-full blur-3xl" 
      />

      {/* Decorative SVG elements */}
      <motion.svg
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-32 left-4 md:left-16 w-16 h-16 md:w-24 md:h-24 text-blue-300"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" />
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.3" />
      </motion.svg>

      <motion.svg
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute top-48 right-4 md:right-20 w-20 h-20 md:w-32 md:h-32 text-indigo-300"
        viewBox="0 0 100 100"
        fill="none"
      >
        <rect x="10" y="10" width="80" height="80" rx="8" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
        <rect x="25" y="25" width="50" height="50" rx="4" stroke="currentColor" strokeWidth="2" />
        <rect x="40" y="40" width="20" height="20" fill="currentColor" opacity="0.3" rx="2" />
      </motion.svg>

      <motion.svg
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-32 left-8 md:left-24 w-14 h-14 md:w-20 md:h-20 text-purple-300"
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon points="50,5 95,75 5,75" stroke="currentColor" strokeWidth="2" fill="none" />
        <polygon points="50,25 75,65 25,65" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2" />
      </motion.svg>

      <motion.svg
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-40 right-8 md:right-32 w-12 h-12 md:w-16 md:h-16 text-teal-300"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path d="M50 5 L61 40 L95 40 L68 62 L79 95 L50 75 L21 95 L32 62 L5 40 L39 40 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2" />
      </motion.svg>

      <motion.svg
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 0.3, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.9 }}
        className="absolute top-1/3 right-1/4 w-10 h-10 md:w-14 md:h-14 text-amber-300"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="3" />
        <line x1="50" y1="10" x2="50" y2="30" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="70" x2="50" y2="90" stroke="currentColor" strokeWidth="2" />
        <line x1="10" y1="50" x2="30" y2="50" stroke="currentColor" strokeWidth="2" />
        <line x1="70" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2" />
      </motion.svg>

      <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
        >
          FD returns are falling
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          Your money deserves better returns without stock-market risk.
        </motion.p>

        {/* Value Proposition */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-2"
        >
          <p className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Meet <span className="text-primary">SuperFD</span>
          </p>
          <p className="font-body text-base md:text-lg text-muted-foreground">
            Better than FD, Safer than share market.
          </p>
        </motion.div>

        {/* Primary CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-4"
        >
          <Button
            onClick={scrollToReturns}
            size="lg"
            className="font-body text-base md:text-lg px-8 py-6 h-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl shadow-lg shadow-blue-200/50"
          >
            Check returns & risks
          </Button>
        </motion.div>

        {/* Trust Bullets */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 pt-6 text-sm md:text-base text-muted-foreground font-body"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
