import { Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import qrCode from "@/assets/qr-code.png";

export function FooterLanding() {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          {/* Brand */}
          <div>
            <div className="flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg mr-3"></div>
              <span className="font-heading text-2xl font-bold">Nested</span>
            </div>
            <p className="font-body text-muted-foreground mb-6 leading-relaxed">
              Funding dreams, one goal at a time. Smart mutual fund investing designed for Indian parents.
            </p>
            <div className="flex justify-center mb-6">
              <img 
                src={qrCode} 
                alt="Scan QR code to download Nested app" 
                className="w-20 h-20 border-2 border-border rounded-lg"
              />
            </div>
            <div className="flex gap-3 justify-center">
              <Button variant="outline" size="sm">
                <Apple className="h-4 w-4 mr-2" />
                App Store
              </Button>
              <Button variant="outline" size="sm">
                <Play className="h-4 w-4 mr-2" />
                Play Store
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="font-body text-muted-foreground text-sm">
              © 2025 GoPlug Enterprises Pvt Ltd is a mutual fund distributor with ARN xxxxxx.
            </div>
            <div className="font-body text-muted-foreground text-sm max-w-4xl">
              Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing.<br />
              GoPlug Enterprises Private Limited ("Nested") is not a SEBI-registered Investment Adviser (RIA). The "Nested" platform does not provide personalized investment advice, financial planning, risk profiling, or recommendations tailored to individual investors. All portfolio suggestions on the platform are based on predefined model portfolios only.<br />
              Investors should make their own decisions based on their individual financial situation, risk tolerance, and investment goals. Past performance of mutual funds does not guarantee future returns.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
