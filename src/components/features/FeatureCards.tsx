import { Target, BarChart3, Clock, Shield, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Target,
    title: "Plans Made Just for You",
    description: "Tell us your child's college goal and timeline - we'll craft a custom investment plan just for it.",
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
    title: "Safe & Secure",
    description: "Your investments are made directly with AMCs through payment gateway of BSE/NSE.",
    highlight: "SEBI compliant"
  },
  {
    icon: Zap,
    title: "Start with Just ₹500",
    description: "Start your child's future with just ₹500 p.m. for tomorrow's big opportunities.",
    highlight: "Low minimum investment"
  },
  {
    icon: Users,
    title: "Dedicated Expert",
    description: "A certified expert will personally guide you through all your MF investments.",
    highlight: "Hands-on support"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
              <div key={index} className="relative">
                {/* Vertical divider line for mobile */}
                {index > 0 && (
                  <div className="md:hidden absolute -top-3 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-transparent via-border to-transparent opacity-50" />
                )}
                <Card className="h-full border-0 shadow-md hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 flex-shrink-0 rounded-3xl ${pastelColors[index]} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border-2 border-white/50`}>
                      <feature.icon className={`h-5 w-5 ${iconColors[index]} opacity-50`} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-semibold leading-tight mb-2">
                        {feature.title}
                      </h3>
                      <span className="inline-block px-3 py-1 text-sm font-medium text-secondary bg-secondary/10 dark:text-primary dark:bg-primary/10 rounded-full">
                        {feature.highlight}
                      </span>
                    </div>
                  </div>
                  
                  <p className="font-body text-muted-foreground leading-snug">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}