import { Clock, Wallet, Coins, Smartphone } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "No lock-in period",
    color: "from-blue-400 to-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Wallet,
    title: "Withdraw anytime",
    subtitle: "(subject to liquidity)",
    color: "from-purple-400 to-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Coins,
    title: "Start with ₹1,000",
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: Smartphone,
    title: "Fully digital tracking",
    color: "from-teal-400 to-teal-500",
    bgColor: "bg-teal-50",
  },
];

const FlexibilitySection = () => {
  return (
    <section className="px-6 py-16 md:py-24 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Title */}
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground text-center mb-10 md:mb-14">
          Designed for flexibility
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`text-center p-5 md:p-6 rounded-2xl ${feature.bgColor} border border-white/50 hover:shadow-md transition-shadow`}
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-4 shadow-sm`}>
                <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <p className="font-body text-sm md:text-base text-foreground font-medium">
                {feature.title}
              </p>
              {feature.subtitle && (
                <p className="font-body text-xs text-muted-foreground mt-1">
                  {feature.subtitle}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlexibilitySection;
