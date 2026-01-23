import { Shield, TrendingUp, Coins, Clock, Wallet, PiggyBank, Star, BarChart3, PieChart, Landmark, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import googlePlayBadge from "@/assets/gplay.png";

const RiskIndicator = ({ level }: { level: "Low" | "Medium" | "Medium-High" }) => {
  const segments = level === "Low" ? 2 : level === "Medium" ? 4 : 5;
  const color = level === "Low" ? "bg-emerald-500" : level === "Medium" ? "bg-amber-500" : "bg-orange-500";
  
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className={`w-2 h-3 rounded-sm transition-colors ${
              i <= segments ? color : "bg-muted"
            }`}
          />
        ))}
      </div>
      <span className="text-xs text-muted-foreground font-medium">{level} volatility</span>
    </div>
  );
};

const products = [
  {
    title: "Secure Money",
    tagline: "Best for 3+ months",
    icon: Shield,
    heroMetric: "Up to 7.50%",
    heroLabel: "per year",
    riskLevel: "Low" as const,
    themeColor: "teal",
    gradientFrom: "from-teal-500/10",
    gradientTo: "to-teal-600/5",
    borderColor: "border-teal-500/30",
    iconBg: "bg-gradient-to-br from-teal-400 to-teal-600",
    uniqueFeatures: [
      "Stable, predictable returns",
      "Lowest daily fluctuation",
      "Ideal for emergency funds",
    ],
    minInvestment: "₹500",
    isPopular: false,
  },
  {
    title: "Gold & Silver Basket",
    tagline: "Best for 6+ months",
    icon: Coins,
    heroMetric: "Precious",
    heroLabel: "metals growth",
    riskLevel: "Medium" as const,
    themeColor: "amber",
    gradientFrom: "from-amber-500/10",
    gradientTo: "to-amber-600/5",
    borderColor: "border-amber-500/30",
    iconBg: "bg-gradient-to-br from-amber-400 to-amber-600",
    uniqueFeatures: [
      "Earn from Gold & Silver both",
      "Hedge against inflation",
      "Portfolio diversification",
    ],
    minInvestment: "₹500",
    isPopular: false,
  },
  {
    title: "Grow Money",
    tagline: "Best for 12+ months",
    icon: TrendingUp,
    heroMetric: "Up to 11%",
    heroLabel: "per year",
    riskLevel: "Medium-High" as const,
    themeColor: "purple",
    gradientFrom: "from-purple-500/10",
    gradientTo: "to-purple-600/5",
    borderColor: "border-purple-500/30",
    iconBg: "bg-gradient-to-br from-purple-400 to-purple-600",
    uniqueFeatures: [
      "Higher growth potential",
      "Balanced risk-reward",
      "Long-term wealth building",
    ],
    minInvestment: "₹1,000",
    isPopular: true,
  },
];

const sharedFeatures = [
  { icon: Clock, text: "No lock-in period" },
  { icon: PiggyBank, text: "Add any amount" },
  { icon: Wallet, text: "Withdraw anytime" },
  { icon: BarChart3, text: "AI developed over 20+ years of data" },
  { icon: PieChart, text: "Nil or low share market risk" },
  { icon: Landmark, text: "Flexibility to withdraw from the Nested app or directly from the AMC" },
];

export function SuperFDSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            <span className="text-secondary">SuperFD</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Save for your short-term needs
          </p>
          <p className="text-base md:text-lg text-muted-foreground mt-1 font-semibold">
            Better than bank FD, safer than share market
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <Card
                key={product.title}
                className={`relative overflow-hidden bg-gradient-to-br ${product.gradientFrom} ${product.gradientTo} border ${product.borderColor} p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Popular Badge */}
                {product.isPopular && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-secondary/10 text-secondary px-2.5 py-1 rounded-full text-xs font-semibold">
                    <Star className="w-3 h-3 fill-secondary" />
                    Popular
                  </div>
                )}

                {/* Header with Icon */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl ${product.iconBg} flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-foreground">{product.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{product.tagline}</p>
                  </div>
                </div>

                {/* Hero Metric */}
                <div className="mb-6 p-4 bg-background/60 rounded-xl border border-border/50">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">{product.heroMetric}</span>
                    <span className="text-sm text-muted-foreground">{product.heroLabel}</span>
                  </div>
                  <div className="mt-3">
                    <RiskIndicator level={product.riskLevel} />
                  </div>
                </div>

                {/* Unique Features */}
                <ul className="space-y-2.5 mb-6">
                  {product.uniqueFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm text-foreground/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Minimum Investment Badge */}
                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Start from</span>
                    <span className="font-semibold text-foreground">{product.minInvestment}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Shared Features Strip */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-4 md:p-6">
            <p className="text-xs text-muted-foreground text-center mb-4 font-medium uppercase tracking-wide">
              All SuperFD MFs include
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {sharedFeatures.map((feature, idx) => {
                const FeatureIcon = feature.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                    <FeatureIcon className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">Start investing in SuperFD today</p>
          <a 
            href="https://play.google.com/store/apps/details?id=com.nexted.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img 
              src={googlePlayBadge} 
              alt="Get it on Google Play" 
              className="h-14 hover:opacity-90 transition-opacity"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
