import gplayBadge from "@/assets/gplay.png";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="px-6 py-16 md:py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-2xl" />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Title */}
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-2">
          See if SuperFD suits your goals
        </h2>
        
        <p className="font-body text-muted-foreground mb-8 flex items-center justify-center gap-2">
          Takes less than 2 minutes
          <ArrowRight className="w-4 h-4" />
        </p>

        {/* Play Store Button */}
        <a
          href="https://play.google.com/store/apps/details?id=money.nested.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transform hover:scale-105 transition-transform"
        >
          <img
            src={gplayBadge}
            alt="Get it on Google Play"
            className="h-16 md:h-20 w-auto mx-auto drop-shadow-md"
          />
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
