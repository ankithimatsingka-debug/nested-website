import { Clock, Wallet, Coins, Smartphone } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "No lock-in period",
  },
  {
    icon: Wallet,
    title: "Withdraw anytime",
    subtitle: "(subject to liquidity)",
  },
  {
    icon: Coins,
    title: "Start with ₹1,000",
  },
  {
    icon: Smartphone,
    title: "Fully digital tracking",
  },
];

const FlexibilitySection = () => {
  return (
    <section className="px-6 py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground text-center mb-10 md:mb-14">
          Designed for flexibility
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
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
