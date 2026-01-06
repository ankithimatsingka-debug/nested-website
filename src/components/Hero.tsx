import { useState, useEffect } from "react";
import { Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import appScreen1 from "@/assets/app-screen-1.jpg";
import appScreen2 from "@/assets/app-screen-2.jpg";
import appScreen3 from "@/assets/app-screen-3.jpg";
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

  useEffect(() => {
    const screenInterval = setInterval(() => {
      setCurrentScreenIndex((prev) => (prev + 1) % appScreens.length);
    }, 4000);

    return () => clearInterval(screenInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-primary overflow-hidden">
      {/* Decorative blur circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mobile Mockup - Left Side */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-75"></div>
              <div className="relative z-10 max-w-[280px] w-full">
                {appScreens.map((screen, index) => (
                  <img 
                    key={index}
                    src={screen} 
                    alt={`Nested app screen ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-auto rounded-3xl shadow-2xl transition-opacity duration-500 ${
                      index === currentScreenIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                <img 
                  src={appScreen1} 
                  alt="Nested app interface"
                  className="w-full h-auto rounded-3xl shadow-2xl opacity-0"
                />
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

              {/* Rotating Text */}
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <p 
                  className={`font-body text-lg md:text-xl lg:[font-size:22px] text-white font-medium transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
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
                  className="bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white/20"
                >
                  <Apple className="h-4 w-4 mr-2" />
                  App Store
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white/20"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Play Store
                </Button>
              </div>
              <img 
                src={qrCode} 
                alt="Scan QR code to download Nested app" 
                className="hidden lg:block w-20 h-20 border-2 border-white/40 rounded-lg"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}