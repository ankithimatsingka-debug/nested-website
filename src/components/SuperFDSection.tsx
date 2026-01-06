import { ShieldCheck, Umbrella, PiggyBank } from "lucide-react";
import { Card } from "@/components/ui/card";

const WavyLine = ({ color, volatility }: { color: string; volatility: "Low" | "Medium" }) => {
  // Low: fewer zigzags, upward trend
  // Medium: more zigzags, upward trend
  const path = volatility === "Low" 
    ? "M2 14C10 10 18 12 26 8C34 4 42 6 50 2" // 2 waves, trending up
    : "M2 14C6 12 10 14 14 10C18 6 22 12 26 8C30 4 34 10 38 6C42 2 46 6 50 2"; // 4 waves, trending up

  return (
    <svg width="54" height="16" viewBox="0 0 54 16" fill="none" className="inline-block ml-1">
      <path
        d={path}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

const products = [
  {
    title: "Gold & Silver Basket",
    subtitle: null,
    icon: ShieldCheck,
    themeColor: "amber",
    borderColor: "border-l-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-950/20",
    iconBg: "bg-amber-100 dark:bg-amber-900/40",
    iconColor: "text-amber-600 dark:text-amber-400",
    wavyColor: "#F59E0B",
    features: [
      { emoji: "💰", text: "Earn from Gold and Silver both" },
      { emoji: "🔓", text: "No lock-in — withdraw anytime" },
      { emoji: "🔄", text: "Flexible — add any amount any time" },
      { emoji: "▶️", text: "Start from ₹500 ; SIP ₹200/month" },
      { emoji: "⏳", text: "Ideal for at least 6+ months" },
    ],
    volatility: "Medium",
  },
  {
    title: "Secure Money",
    subtitle: "Upto 7.50% p.a.",
    icon: Umbrella,
    themeColor: "teal",
    borderColor: "border-l-teal-400",
    bgColor: "bg-teal-50 dark:bg-teal-950/20",
    iconBg: "bg-teal-100 dark:bg-teal-900/40",
    iconColor: "text-teal-600 dark:text-teal-400",
    wavyColor: "#14B8A6",
    features: [
      { emoji: "💰", text: "Earn upto 7.50%/year" },
      { emoji: "🔓", text: "No lock-in — withdraw anytime" },
      { emoji: "🔄", text: "Flexible — add any amount any time" },
      { emoji: "▶️", text: "Start from ₹500 ; SIP ₹200/month" },
      { emoji: "⏳", text: "Ideal for at least 6+ months" },
    ],
    volatility: "Low",
  },
  {
    title: "Grow Money",
    subtitle: "Upto 11.00% p.a.",
    icon: PiggyBank,
    themeColor: "purple",
    borderColor: "border-l-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    iconBg: "bg-purple-100 dark:bg-purple-900/40",
    iconColor: "text-purple-600 dark:text-purple-400",
    wavyColor: "#8B5CF6",
    features: [
      { emoji: "💰", text: "Earn upto 11%/year" },
      { emoji: "🔓", text: "No lock-in — withdraw anytime" },
      { emoji: "🔄", text: "Flexible — add any amount any time" },
      { emoji: "▶️", text: "Start from ₹1000 ; SIP ₹200/month" },
      { emoji: "⏳", text: "Ideal for at least 12+ months" },
    ],
    volatility: "Medium",
  },
];

export function SuperFDSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            SuperFD
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Save for your short-term needs
          </p>
          <p className="text-base md:text-lg text-muted-foreground mt-1">
            Better than bank FD, safer than share market
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <Card
                key={product.title}
                className={`relative overflow-hidden border-l-4 ${product.borderColor} ${product.bgColor} p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-full ${product.iconBg} flex items-center justify-center`}>
                    <IconComponent className={`w-6 h-6 ${product.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{product.title}</h3>
                    {product.subtitle && (
                      <p className="text-sm text-muted-foreground">{product.subtitle}</p>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-5">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/90">
                      <span className="text-base leading-none mt-0.5">{feature.emoji}</span>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-2 text-sm text-foreground/90">
                    <span className="text-base leading-none mt-0.5">📊</span>
                    <span className="flex items-center">
                      {product.volatility} daily up & down
                      <WavyLine color={product.wavyColor} volatility={product.volatility as "Low" | "Medium"} />
                    </span>
                  </li>
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
