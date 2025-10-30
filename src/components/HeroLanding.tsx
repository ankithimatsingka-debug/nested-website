import { useState, useEffect } from "react";
import { Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import qrCode from "@/assets/qr-code.png";

const rotatingTexts = [
  "Expert-designed portfolios",
  "Tailored for education goals",
  "Ideal allocation and automatic rebalancing",
  "Flexible SIPs"
];

export function HeroLanding() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Content - Centered */}
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Welcome to{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Nested
                </span>
              </h1>
              <p className="font-body text-xl md:text-2xl text-muted-foreground">
                Save for your child's education dreams
              </p>

              {/* Rotating Text */}
              <div className="h-16 flex items-center justify-center">
                <p 
                  className={`font-body text-lg md:text-xl lg:text-2xl text-primary font-medium transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                  }`}
                >
                  {rotatingTexts[currentTextIndex]}
                </p>
              </div>
            </div>

            {/* App Launching Soon Banner */}
            <div className="relative py-12">
              <div className="inline-block">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-30"></div>
                <div className="relative bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl px-12 py-8">
                  <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    App Launching Soon
                  </h2>
                  <p className="mt-4 text-muted-foreground text-lg">
                    Get ready to start your child's education journey
                  </p>
                </div>
              </div>
            </div>

            {/* Download Buttons with QR Code */}
            <div className="flex gap-4 items-center justify-center mb-4">
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  <Apple className="h-4 w-4 mr-2" />
                  App Store
                </Button>
                <Button variant="outline" size="sm">
                  <Play className="h-4 w-4 mr-2" />
                  Play Store
                </Button>
              </div>
              <img 
                src={qrCode} 
                alt="Scan QR code to download Nested app" 
                className="hidden lg:block w-20 h-20 border-2 border-border rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
