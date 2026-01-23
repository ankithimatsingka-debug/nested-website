import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Download } from "lucide-react";

export function FeaturesCTA() {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Download className="h-5 w-5" />
              <span className="font-medium">Ready to Start?</span>
            </div>
            
            <h2 className="font-heading text-2xl font-bold mb-6">
              Download Nested Now
            </h2>
            
            <p className="font-body text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of smart parents who are already securing their children's future. 
              Your child's dreams are just one download away.
            </p>
          </div>

          {/* Download button */}
          <div className="flex justify-center items-center mb-12">
            <Button 
              size="lg" 
              variant="secondary"
              className="h-16 px-8 text-lg font-semibold bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all group"
              asChild
            >
              <a href="https://play.google.com/store/apps/details?id=com.nexted.app" target="_blank" rel="noopener noreferrer">
                <Play className="mr-3 h-7 w-7" />
                <div className="text-left">
                  <div className="text-sm font-normal opacity-80">Get it on</div>
                  <div className="font-bold">Google Play</div>
                </div>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">50,000+</div>
              <div className="text-sm opacity-80">Happy Parents</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">₹100Cr+</div>
              <div className="text-sm opacity-80">Money Invested</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">4.8★</div>
              <div className="text-sm opacity-80">App Store Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">SEBI</div>
              <div className="text-sm opacity-80">Registered</div>
            </div>
          </div>

          {/* Final message */}
          <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <p className="font-body text-lg opacity-90">
              <strong>Free to download.</strong> No hidden charges. Start with just ₹500 per month. 
              Cancel anytime if you're not happy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}