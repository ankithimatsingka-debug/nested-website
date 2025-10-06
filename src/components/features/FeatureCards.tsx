import { Target, BarChart3, Clock, Shield, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Target,
    title: "Plans Made Just for You",
    description: "Tell us your goal - your child's college, wedding, or any dream. We create a special investment plan that fits your exact needs and timeline.",
    highlight: "Personal recommendations"
  },
  {
    icon: BarChart3,
    title: "Smart Money Management",
    description: "We monitor your investment and prompt you to rebalance to keep your investment healthy.",
    highlight: "Automatic rebalancing"
  },
  {
    icon: Clock,
    title: "Quick 5-Minute Setup",
    description: "Complete your onboarding process in just 5 minutes. Rebalance portfolios with a single click.",
    highlight: "Fast digital KYC"
  },
  {
    icon: Shield,
    title: "AMFI Compliant",
    description: "Your investments are made directly with AMCs through payment gateway of BSE/NSE.",
    highlight: "SEBI compliant"
  },
  {
    icon: Zap,
    title: "Start with Just ₹500",
    description: "Begin your child's future with as little as ₹500 monthly SIP. No huge amounts needed - small steps can build big dreams over time.",
    highlight: "Low minimum investment"
  },
  {
    icon: Users,
    title: "Made for Indian Parents",
    description: "We understand Indian families, Indian goals, and Indian dreams. Everything is designed keeping your needs and values in mind.",
    highlight: "Parent-focused design"
  }
];

export function FeatureCards() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-2xl font-bold mb-6">
            Why Parents Choose <span className="text-secondary">Nested</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Each feature is carefully designed to make investing simple, safe, and stress-free for busy parents like you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const pastelColors = [
              'bg-[hsl(var(--pastel-lavender))]',
              'bg-[hsl(var(--pastel-peach))]',
              'bg-[hsl(var(--pastel-sky))]',
              'bg-[hsl(var(--pastel-mint))]',
              'bg-[hsl(var(--pastel-lemon))]',
              'bg-[hsl(var(--pastel-rose))]'
            ];
            const iconColors = [
              'text-purple-600',
              'text-orange-600',
              'text-blue-600',
              'text-emerald-600',
              'text-amber-600',
              'text-rose-600'
            ];
            return (
              <Card key={index} className="h-full border-0 shadow-md hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-3xl ${pastelColors[index]} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-4 border-2 border-white/50`}>
                      <feature.icon className={`h-5 w-5 ${iconColors[index]}`} strokeWidth={2.5} />
                    </div>
                    <span className="inline-block px-3 py-1 text-sm font-medium text-secondary bg-secondary/10 rounded-full">
                      {feature.highlight}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}