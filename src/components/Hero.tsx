import { useState, useEffect, useMemo } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import appScreen1 from "@/assets/app-screen-1.webp";
import appScreen2 from "@/assets/app-screen-2.webp";
import appScreen3 from "@/assets/app-screen-3.webp";
import qrCode from "@/assets/qr-code.png";

const rotatingTexts = [
  "Expert-designed portfolios",
  "Tailored for education goals",
  "Ideal allocation and automatic rebalancing",
  "Flexible SIPs"
];

const appScreens = [appScreen1, appScreen2, appScreen3];

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

  // Preload next image for smooth transitions
  const nextScreenIndex = useMemo(() => (currentScreenIndex + 1) % appScreens.length, [currentScreenIndex]);

  useEffect(() => {
    const img = new Image();
    img.src = appScreens[nextScreenIndex];
  }, [nextScreenIndex]);

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

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    let screenInterval: ReturnType<typeof setInterval>;
    
    const startScreenInterval = () => {
      screenInterval = setInterval(() => {
        setCurrentScreenIndex((prev) => (prev + 1) % appScreens.length);
      }, 4000);
    };
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(screenInterval);
      } else {
        startScreenInterval();
      }
    };
    
    startScreenInterval();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(screenInterval);
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
              {/* Fixed aspect ratio container to prevent CLS */}
              <div className="relative z-10 w-[280px] aspect-[280/560]">
                {/* Skeleton loader while image loads */}
                {!imageLoaded && (
                  <Skeleton className="absolute inset-0 w-full h-full rounded-3xl" />
                )}
                {/* Preload first image with high priority */}
                {currentScreenIndex === 0 ? (
                  <img 
                    src={appScreen1} 
                    alt="Nested app screen showing investment features"
                    width="280"
                    height="560"
                    fetchPriority="high"
                    decoding="sync"
                    onLoad={() => setImageLoaded(true)}
                    className={`absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  />
                ) : (
                  <img 
                    key={currentScreenIndex}
                    src={appScreens[currentScreenIndex]} 
                    alt={`Nested app screen ${currentScreenIndex + 1} showing investment features`}
                    width="280"
                    height="560"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
                  />
                )}
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
                >
                  <Play className="h-4 w-4 mr-2" aria-hidden="true" />
                  Play Store
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
