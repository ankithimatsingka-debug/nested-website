import { Card, CardContent } from "@/components/ui/card";
import { SmartPlanningAnimation } from "@/components/animations/SmartPlanningAnimation";
import { DedicatedAccountAnimation } from "@/components/animations/DedicatedAccountAnimation";
import { SafeSecureAnimation } from "@/components/animations/SafeSecureAnimation";

const features = [
  {
    animation: SmartPlanningAnimation,
    title: "Smart Planning",
    description: "Custom plans for your child's education goals with automated rebalancing suggestions",
    highlights: ["Goal-based portfolios", "Auto rebalancing"]
  },
  {
    animation: DedicatedAccountAnimation,
    title: "Dedicated Account",
    description: "Dedicated secure account for children's education fund",
    highlights: ["Child-focused", "Secure"]
  },
  {
    animation: SafeSecureAnimation,
    title: "Safe & Supported",
    description: "Your investments go directly to AMCs. Get expert support on WhatsApp",
    highlights: ["Direct to AMC", "Expert support"]
  }
];

export function FeatureCards() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Why Parents <span className="text-secondary block sm:inline">Choose Nested</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, safe, stress-free
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const AnimationComponent = feature.animation;
            const cardColors = [
              'hover:border-primary/30',
              'hover:border-secondary/30',
              'hover:border-primary/30'
            ];
            
            return (
              <div key={index} className="relative">
                {/* Vertical divider line for mobile */}
                {index > 0 && (
                  <div className="md:hidden absolute -top-4 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-transparent via-border to-transparent opacity-50" />
                )}
                <Card className={`h-full border-2 border-transparent shadow-md hover:shadow-lg transition-all duration-300 group ${cardColors[index]}`}>
                  <CardContent className="p-6 text-center">
                    {/* Animation */}
                    <div className="flex justify-center mb-6">
                      <div className="group-hover:scale-105 transition-transform duration-300">
                        <AnimationComponent />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-heading text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-body text-muted-foreground leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    
                    {/* Highlight badges */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {feature.highlights.map((highlight, hIndex) => (
                        <span 
                          key={hIndex}
                          className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
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
