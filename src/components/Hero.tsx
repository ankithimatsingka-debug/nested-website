import { Button } from "@/components/ui/button";
import { Download, Play, Apple, Smartphone } from "lucide-react";
import mobileMockup from "@/assets/mobile-mockup.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Funding dreams,{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  one goal at a time
                </span>
              </h1>
              <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl">
                Smart mutual fund investing designed for parents. Build your child's future with 
                goal-based planning, automatic rebalancing, and expert guidance.
              </p>
            </div>

            {/* Download CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="h-14 px-8 font-medium shadow-glow hover:shadow-lg transition-all"
              >
                <Apple className="mr-3 h-6 w-6" />
                App Store
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="h-14 px-8 font-medium border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <Play className="mr-3 h-6 w-6" />
                Google Play
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span>SEBI Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span>Bank Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span>50,000+ Parents Trust Us</span>
              </div>
            </div>
          </div>

          {/* Mobile Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 scale-75"></div>
              <img 
                src={mobileMockup} 
                alt="Nested app interface showing goal-based investing" 
                className="relative z-10 max-w-md w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}