import { BarChart3, RefreshCw, Heart, Calculator } from "lucide-react";

const benefits = [
  {
    icon: BarChart3,
    title: "Personalized Asset Allocation",
    description: "Your investment mix is tailored to your child's age, your goals timeline, and risk preferences.",
    highlight: "Custom portfolios for every family"
  },
  {
    icon: RefreshCw,
    title: "Automatic Rebalancing",
    description: "We continuously monitor and adjust your portfolio to maintain optimal performance without you lifting a finger.",
    highlight: "Set it and forget it investing"
  },
  {
    icon: Heart,
    title: "Peace of Mind for Parents",
    description: "Sleep better knowing your child's future is secured with professional management and regular progress updates.",
    highlight: "Stress-free wealth building"
  }
];

export function KeyBenefits() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-2xl font-bold mb-6">
            Smart Investing Made <span className="text-secondary">Simple</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            While other apps leave you to figure it out alone, Nested provides intelligent automation 
            and personalization for busy parents.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => {
            const pastelColors = [
              'bg-[hsl(var(--pastel-lavender))]',
              'bg-[hsl(var(--pastel-mint))]', 
              'bg-[hsl(var(--pastel-peach))]'
            ];
            const iconColors = [
              'text-purple-600',
              'text-emerald-600',
              'text-orange-600'
            ];
            return (
              <div key={index} className="group">
                <div className="mb-8 flex justify-center lg:justify-start">
                  <div className={`w-14 h-14 rounded-3xl ${pastelColors[index]} flex items-center justify-center group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 shadow-sm border-2 border-white/50`}>
                    <benefit.icon className={`h-6 w-6 ${iconColors[index]} opacity-50`} strokeWidth={2.5} />
                  </div>
                </div>
                
                <div className="text-center lg:text-left">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-secondary bg-secondary/10 rounded-full mb-3">
                      {benefit.highlight}
                    </span>
                    <h3 className="font-heading text-2xl font-semibold">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="font-body text-muted-foreground text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}