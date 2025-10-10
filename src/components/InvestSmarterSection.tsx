import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, Bell, PieChart, Scale } from 'lucide-react';

interface SmartCard {
  title: string;
  subtext: string;
  icon: any;
  gradient: string;
  AnimationComponent: React.FC;
}

const PortfolioAnimation = () => (
  <div className="space-y-3 w-full">
    <div className="space-y-2">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Equity</span>
        <span>60%</span>
      </div>
      <div className="h-2 bg-background/50 rounded-full overflow-hidden">
        <div className="h-full w-[60%] bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-slideIn" />
      </div>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Debt</span>
        <span>30%</span>
      </div>
      <div className="h-2 bg-background/50 rounded-full overflow-hidden">
        <div className="h-full w-[30%] bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-slideIn [animation-delay:0.2s]" />
      </div>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Gold</span>
        <span>10%</span>
      </div>
      <div className="h-2 bg-background/50 rounded-full overflow-hidden">
        <div className="h-full w-[10%] bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full animate-slideIn [animation-delay:0.4s]" />
      </div>
    </div>
  </div>
);

const GraphAnimation = () => (
  <div className="relative w-full h-32">
    <svg viewBox="0 0 200 80" className="w-full h-full">
      <path
        d="M 0 60 Q 50 20, 100 40 T 200 30"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        className="animate-draw"
      />
      <circle cx="150" cy="35" r="3" fill="hsl(var(--primary))" className="animate-pulse" />
    </svg>
    <div className="absolute top-2 right-4 bg-destructive/90 text-destructive-foreground text-xs px-2 py-1 rounded animate-bounce">
      <Bell className="w-3 h-3 inline mr-1" />
      Alert
    </div>
  </div>
);

const PieChartAnimation = () => (
  <div className="relative w-32 h-32 mx-auto">
    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="20"
        strokeDasharray="150 251"
        className="animate-spin origin-center"
      />
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="hsl(var(--secondary))"
        strokeWidth="20"
        strokeDasharray="100 251"
        strokeDashoffset="-150"
        className="animate-spin origin-center"
      />
    </svg>
  </div>
);

const ScalesAnimation = () => (
  <div className="flex justify-center items-center">
    <Scale className="w-24 h-24 text-primary animate-swing" />
  </div>
);

const cards: SmartCard[] = [
  {
    title: "Build your personalized investment portfolio",
    subtext: "Your portfolio is customized based on your investment appetite and the year you'll need the funds.",
    icon: TrendingUp,
    gradient: "from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20",
    AnimationComponent: PortfolioAnimation,
  },
  {
    title: "Stay ahead of market changes",
    subtext: "We continuously monitor market movements and alert you in advance about potential volatility.",
    icon: Bell,
    gradient: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
    AnimationComponent: GraphAnimation,
  },
  {
    title: "Annual SIP allocation review",
    subtext: "We review your SIP allocation each year and suggest adjustments aligned with your child's goals.",
    icon: PieChart,
    gradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
    AnimationComponent: PieChartAnimation,
  },
  {
    title: "Timely portfolio rebalancing",
    subtext: "We prompt you to rebalance as your goal approaches or when market conditions change.",
    icon: Scale,
    gradient: "from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20",
    AnimationComponent: ScalesAnimation,
  },
];

export const InvestSmarterSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollProgress, setScrollProgress] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const viewportCenter = scrollY + windowHeight / 2;

      cardRefs.current.forEach((cardRef, index) => {
        if (!cardRef) return;

        const cardTop = cardRef.offsetTop + sectionTop;
        const cardHeight = cardRef.offsetHeight;
        const cardCenter = cardTop + cardHeight / 2;

        // Distance from viewport center
        const distance = Math.abs(cardCenter - viewportCenter);
        const maxDistance = windowHeight;
        const progress = Math.max(0, Math.min(1, 1 - distance / maxDistance));

        setScrollProgress((prev) => {
          const newProgress = [...prev];
          newProgress[index] = progress;
          return newProgress;
        });
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Nested Helps You Invest Smarter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Smart investing powered by technology and expertise
          </p>
        </div>

        <div className="pb-96">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const progress = scrollProgress[index];
            const scale = 1 - (1 - progress) * 0.05;
            const opacity = 0.8 + progress * 0.2;
            const topOffset = 80 + index * 20;
            
            // Dynamic z-index: cards that are more "in focus" (higher progress) get higher z-index
            // This allows lower cards to slide over upper cards when scrolling up
            const baseZIndex = 10 + index * 5;
            const progressBoost = Math.round(progress * 20);
            const zIndex = baseZIndex + progressBoost;

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="sticky mb-8"
                style={{
                  top: `${topOffset}px`,
                  zIndex,
                  transform: `scale(${scale})`,
                  opacity,
                  transition: 'transform 0.15s ease-out, opacity 0.15s ease-out, z-index 0s',
                }}
              >
                <Card
                  className={`p-8 md:p-12 bg-gradient-to-br ${card.gradient} border-none shadow-2xl overflow-hidden`}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-full bg-background/50">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {card.subtext}
                      </p>
                    </div>

                    {/* Animation */}
                    <div className="md:w-64 flex items-center justify-center p-8 bg-background/30 rounded-lg backdrop-blur-sm">
                      <card.AnimationComponent />
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
