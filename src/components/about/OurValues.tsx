import { Shield, Lightbulb, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function OurValues() {
  const values = [
    {
      icon: Shield,
      title: "Trust",
      description: "Your family's financial future is precious. We protect it with SEBI-compliant practices, transparent fees, and honest communication.",
      color: "text-primary"
    },
    {
      icon: Lightbulb,
      title: "Simplicity", 
      description: "Investing shouldn't require a finance degree. We make complex financial concepts easy to understand and act upon.",
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We're committed to growing your investments and growing your confidence. Every decision we make is focused on long-term success.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-2xl font-bold mb-6">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These three pillars guide everything we do at Nested. They're not just words on a wall - 
              they're promises we make to every family who trusts us with their dreams.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-border/50 hover:border-border transition-colors group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-background to-muted rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <value.icon className={`w-8 h-8 ${value.color} opacity-50`} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}