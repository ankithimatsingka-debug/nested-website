import { Check } from "lucide-react";

const criteria = [
  "You want better returns than FD",
  "You prefer lower volatility than equities",
  "You're investing for 3+ months",
  "You value professional fund management",
];

const IdealForSection = () => {
  return (
    <section className="px-6 py-16 md:py-24 relative overflow-hidden">
      {/* Pastel gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50" />
      
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Title */}
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground text-center mb-10 md:mb-14">
          SuperFD is ideal for you if…
        </h2>

        {/* Checklist Card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-purple-100">
          <div className="space-y-5 md:space-y-6">
            {criteria.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Check className="w-5 h-5 text-white" strokeWidth={3} />
                </div>
                <p className="font-body text-base md:text-lg text-foreground">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdealForSection;
