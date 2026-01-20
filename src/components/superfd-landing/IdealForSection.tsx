import { Check } from "lucide-react";

const criteria = [
  "You want better returns than FD",
  "You prefer lower volatility than equities",
  "You're investing for 3+ months",
  "You value professional fund management",
];

const IdealForSection = () => {
  return (
    <section className="px-6 py-16 md:py-24 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground text-center mb-10 md:mb-14">
          SuperFD is ideal for you if…
        </h2>

        {/* Checklist */}
        <div className="space-y-5 md:space-y-6">
          {criteria.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <p className="font-body text-base md:text-lg text-foreground">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdealForSection;
