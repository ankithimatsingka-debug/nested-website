import { useState, useEffect, useMemo } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import qrCode from "@/assets/qr-code.png";
import appScreenHome from "@/assets/app-screen-home.png";
import appScreenSuperfd from "@/assets/app-screen-superfd.png";
import appScreenPortfolio from "@/assets/app-screen-portfolio.png";
import appScreenAccount from "@/assets/app-screen-account.png";

const appScreens = [
  { src: appScreenHome, alt: "Nested Money - Plan for any dream with goal-based portfolios" },
  { src: appScreenSuperfd, alt: "Outpace inflation with automatic corpus adjustment" },
  { src: appScreenPortfolio, alt: "Portfolio grows with your child through automated rebalancing" },
  { src: appScreenAccount, alt: "Built for Indian parents - start small, dream big" },
];

const rotatingTexts = [
  "Expert-designed portfolios",
  "Tailored for education goals",
  "Ideal allocation and automatic rebalancing",
  "Flexible SIPs"
];

export function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Check for reduced motion preference
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Auto-rotate app screens
  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const interval = setInterval(() => {
      setCurrentScreenIndex((prev) => (prev + 1) % appScreens.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    let interval: ReturnType<typeof setInterval>;
    
    const startInterval = () => {
      interval = setInterval(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
          setIsVisible(true);
        }, 300);
      }, 3000);
    };
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(interval);
      } else {
        startInterval();
      }
    };
    
    startInterval();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [prefersReducedMotion]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-primary overflow-hidden">
      {/* Decorative blur circles - lazy rendered for performance */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-50" aria-hidden="true" style={{ contain: 'layout paint' }}></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl opacity-50" aria-hidden="true" style={{ contain: 'layout paint' }}></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mobile Mockup - Left Side */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-75" aria-hidden="true"></div>
              {/* Phone frame container */}
              <div className="relative z-10 w-[220px] sm:w-[260px] md:w-[280px] lg:w-[320px] mx-auto lg:mx-0">
                {/* Phone frame */}
                <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-10" aria-hidden="true"></div>
                  <div className="relative bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                    {/* Skeleton loader while image loads */}
                    {!imageLoaded && (
                      <Skeleton className="absolute inset-0 w-full h-full" />
                    )}
                    {appScreens.map((screen, index) => (
                      <img 
                        key={index}
                        src={screen.src} 
                        alt={screen.alt}
                        width="320"
                        height="693"
                        fetchPriority={index === 0 ? "high" : "low"}
                        decoding={index === 0 ? "sync" : "async"}
                        onLoad={() => index === 0 && setImageLoaded(true)}
                        className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
                          currentScreenIndex === index ? 'opacity-100' : 'opacity-0'
                        } ${imageLoaded || index !== 0 ? '' : 'invisible'}`}
                      />
                    ))}
                  </div>
                </div>
                {/* Screen indicator dots - hidden on mobile */}
                <div className="hidden sm:flex justify-center gap-2 mt-4">
                  {appScreens.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentScreenIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentScreenIndex === index 
                          ? 'bg-white w-6' 
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                      aria-label={`View screen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="text-center lg:text-left space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Welcome to{" "}
                <span className="text-white/90">
                  Nested
                </span>
              </h1>
              <p className="font-body text-xl md:text-2xl text-white/80">
                Save for your child's education dreams
              </p>

              {/* Rotating Text - fixed height to prevent CLS */}
              <div className="h-16 min-h-[4rem] flex items-center justify-center lg:justify-start" aria-live="polite" aria-atomic="true">
                <p 
                  className={`font-body text-lg md:text-xl lg:[font-size:22px] text-white font-medium transition-opacity duration-300 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {rotatingTexts[currentTextIndex]}
                </p>
              </div>
            </div>

            {/* Download Buttons with QR Code */}
            <div className="flex gap-4 items-center justify-center lg:justify-start mb-4">
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary min-h-[44px]"
                  aria-label="Download Nested app from Google Play Store"
                  asChild
                >
                  <a href="https://play.google.com/store/apps/details?id=com.nexted.app" target="_blank" rel="noopener noreferrer">
                    <Play className="h-4 w-4 mr-2" aria-hidden="true" />
                    Play Store
                  </a>
                </Button>
              </div>
              <img 
                src={qrCode} 
                alt="Scan QR code to download Nested app" 
                width="80"
                height="80"
                loading="lazy"
                className="hidden lg:block w-20 h-20 border-2 border-white/40 rounded-lg"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
