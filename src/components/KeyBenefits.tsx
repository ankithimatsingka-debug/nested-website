import { BarChart3, RefreshCw, Heart, Calculator } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    icon: BarChart3,
    title: "Personalized Asset Allocation",
    description: "Your investment mix is tailored to your child's age, your goals timeline, and risk preferences.",
    highlight: "Custom portfolios for every family"
  },
  {
    icon: RefreshCw,
    title: "Timely Rebalancing",
    description: "We continuously monitor your portfolio and notify rebalancing to maintain optimal performance without you sweating about it.",
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
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollProgress, setScrollProgress] = useState<number[]>([0, 0, 0]);

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
          const endPoint = 100 + (index * 80); // Stack position
          
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

        <div className="grid lg:grid-cols-3 gap-12 md:gap-12">
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
            
            const progress = scrollProgress[index];
            const translateY = progress * -20; // Slide up effect
            const scale = 1 - (progress * 0.05); // Slight scale down
            const opacity = 1 - (progress * 0.3); // Fade slightly
            
            return (
              <div 
                key={index} 
                ref={(el) => (cardsRef.current[index] = el)}
                className="group md:relative"
                style={{
                  position: window.innerWidth < 768 ? 'sticky' : 'relative',
                  top: window.innerWidth < 768 ? `${100 + index * 80}px` : 'auto',
                  transform: window.innerWidth < 768 
                    ? `translateY(${translateY}px) scale(${scale})` 
                    : 'none',
                  opacity: window.innerWidth < 768 ? opacity : 1,
                  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-out',
                  zIndex: 10 - index,
                }}
              >
               <div className="md:shadow-sm">
                <div className="mb-8 flex justify-center lg:justify-start">
                  <div className={`w-14 h-14 rounded-3xl ${pastelColors[index]} flex items-center justify-center group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 shadow-sm border-2 border-white/50`}>
                    <benefit.icon className={`h-6 w-6 ${iconColors[index]} opacity-50`} strokeWidth={2.5} />
                  </div>
                </div>
                
                <div className="text-center lg:text-left">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-secondary bg-secondary/10 dark:text-primary dark:bg-primary/10 rounded-full mb-3">
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}