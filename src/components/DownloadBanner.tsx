import { Button } from "@/components/ui/button";
import { Apple, Play, ArrowRight, Sparkles } from "lucide-react";

export function DownloadBanner() {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="h-5 w-5" />
              <span className="font-medium">Join 50,000+ Parents</span>
            </div>
            
            <h2 className="font-heading text-2xl font-bold mb-6">
              Start Investing Today for Your Child's Future
            </h2>
            
            <p className="font-body text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
              Don't wait for the "perfect time." Every month you delay is a month of potential growth lost. 
              Your child's dreams are worth starting today.
            </p>
          </div>

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              variant="secondary"
              className="h-16 px-8 text-lg font-semibold bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all group"
            >
              <Apple className="mr-3 h-7 w-7" />
              <div className="text-left">
                <div className="text-sm font-normal opacity-80">Download on the</div>
                <div className="font-bold">App Store</div>
              </div>
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="h-16 px-8 text-lg font-semibold border-white/30 text-white hover:bg-white/10 hover:border-white shadow-xl hover:shadow-2xl transition-all group"
            >
              <Play className="mr-3 h-7 w-7" />
              <div className="text-left">
                <div className="text-sm font-normal opacity-80">Get it on</div>
                <div className="font-bold">Google Play</div>
              </div>
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Social proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">₹500+</div>
              <div className="text-lg opacity-80">Minimum Monthly Investment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5 Min</div>
              <div className="text-lg opacity-80">Quick Setup Process</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-80">Expert Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}