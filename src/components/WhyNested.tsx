import { Shield, Target, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

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
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollProgress, setScrollProgress] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) return; // Only on mobile
      
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const cardTop = rect.top;
          const cardHeight = rect.height;
          
          // Calculate progress: 0 when card enters viewport, 1 when it reaches stacking position
          const startPoint = windowHeight - cardHeight;
          const endPoint = 100 + (index * 60); // Stack position
          
          let progress = 0;
          if (cardTop < startPoint) {
            progress = Math.min(1, (startPoint - cardTop) / (startPoint - endPoint));
          }
          
          setScrollProgress(prev => {
            const newProgress = [...prev];
            newProgress[index] = progress;
            return newProgress;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
          {features.map((feature, index) => {
            const pastelColors = [
              'bg-[hsl(var(--pastel-sky))]',
              'bg-[hsl(var(--pastel-rose))]',
              'bg-[hsl(var(--pastel-lemon))]',
              'bg-[hsl(var(--pastel-mint))]'
            ];
            const iconColors = [
              'text-blue-600',
              'text-rose-600',
              'text-amber-600',
              'text-emerald-600'
            ];
            
            const progress = scrollProgress[index];
            const translateY = progress * -20; // Slide up effect
            const scale = 1 - (progress * 0.05); // Slight scale down
            const opacity = 1 - (progress * 0.3); // Fade slightly
            
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="md:relative"
                style={{
                  position: window.innerWidth < 768 ? 'sticky' : 'relative',
                  top: window.innerWidth < 768 ? `${100 + index * 60}px` : 'auto',
                  transform: window.innerWidth < 768 
                    ? `translateY(${translateY}px) scale(${scale})` 
                    : 'none',
                  opacity: window.innerWidth < 768 ? opacity : 1,
                  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-out',
                  zIndex: 10 - index,
                }}
              >
                <Card className="h-full border-0 shadow-md hover:shadow-glow transition-all duration-300 group md:shadow-lg">
                  <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className={`w-12 h-12 rounded-3xl ${pastelColors[index]} flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 border-2 border-white/50`}>
                      <feature.icon className={`h-5 w-5 ${iconColors[index]} opacity-50`} strokeWidth={2.5} />
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}