import { Shield, Target, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Safety First",
    description: "SEBI-registered mutual funds with bank-grade security. Your money is protected by the same standards as top financial institutions."
  },
  {
    icon: Target,
    title: "Goal-Based Planning",
    description: "Not one-size-fits-all. Create specific goals for your child's education, marriage, or any dream, with personalized investment strategies."
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "No DIY confusion. Our certified financial advisors help you make informed decisions for your family's future."
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "Trusted by 50,000+ Indian parents. Join families who've already started building their children's futures."
  }
];

export function WhyNested() {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-2xl font-bold mb-6">
            Why Choose <span className="text-primary">Nested</span>?
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            We understand that investing for your child's future isn't just about returns—it's about 
            trust, safety, and having the right plan for your family's unique dreams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="h-full border-0 shadow-md hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-4">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}