import { useState, useEffect } from "react";
import mobileMockup from "@/assets/mobile-mockup.png";
import qrCode from "@/assets/qr-code.png";
import appStoreBadge from "@/assets/app-store-badge.png";
import googlePlayBadge from "@/assets/google-play-badge.png";

const rotatingTexts = [
  "Expert-designed portfolios",
  "Tailored for education goals",
  "Ideal allocation and automatic rebalancing",
  "Flexible SIPs"
];

export function Hero() {
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mobile Mockup - Left Side */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 scale-75"></div>
              <img 
                src={mobileMockup} 
                alt="Nested app interface showing goal-based investing" 
                className="relative z-10 max-w-md w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="text-center lg:text-left space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Welcome to{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Nested
                </span>
              </h1>
              <p className="font-body text-xl md:text-2xl text-muted-foreground">
                Save for your children's dreams
              </p>

              {/* Rotating Text */}
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <p 
                  className={`font-body text-lg md:text-xl text-primary font-medium transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                  }`}
                >
                  {rotatingTexts[currentTextIndex]}
                </p>
              </div>
            </div>

            {/* QR Code for Desktop, Download Badges for Mobile */}
            <div className="flex flex-col items-center lg:items-start gap-6">
              {/* Desktop: QR Code */}
              <div className="hidden md:flex flex-col items-center lg:items-start gap-3">
                <p className="text-sm text-muted-foreground">Scan to download</p>
                <img 
                  src={qrCode} 
                  alt="QR code to download Nested app" 
                  className="w-40 h-40 border-4 border-background rounded-lg shadow-lg"
                />
              </div>

              {/* Mobile: Download Badges */}
              <div className="flex md:hidden flex-row gap-3 justify-center lg:justify-start">
                <a href="#" className="block w-24">
                  <img 
                    src={appStoreBadge} 
                    alt="Download on the App Store" 
                    className="w-full h-auto hover:opacity-80 transition-opacity"
                  />
                </a>
                <a href="#" className="block w-24">
                  <img 
                    src={googlePlayBadge} 
                    alt="Get it on Google Play" 
                    className="w-full h-auto hover:opacity-80 transition-opacity"
                  />
                </a>
              </div>
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
        </div>
      </div>
    </section>
  );
}