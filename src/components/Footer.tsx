import { Play, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import qrCode from "@/assets/qr-code.png";
import nestedLogo from "@/assets/nested-logo.png";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <img src={nestedLogo} alt="Nested" className="h-10" />
            </div>
            <p className="font-body text-muted-foreground mb-6 leading-relaxed">
              Funding dreams, one goal at a time. Smart mutual fund investing designed for Indian parents.
            </p>
            <img 
              src={qrCode} 
              alt="Scan QR code to download Nested app" 
              className="hidden lg:block w-20 h-20 border-2 border-border rounded-lg mb-3"
            />
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Play className="h-4 w-4 mr-2" />
                Play Store
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/#invest-smarter" className="font-body text-muted-foreground hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="/#testimonials" className="font-body text-muted-foreground hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/terms-and-conditions" className="font-body text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="font-body text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cancellation-refund-policy" className="font-body text-muted-foreground hover:text-primary transition-colors">Cancellation & Refund Policy</Link></li>
              <li><Link to="/information-security-policy" className="font-body text-muted-foreground hover:text-primary transition-colors">Information Security Policy</Link></li>
              <li><Link to="/account-data-deletion-policy" className="font-body text-muted-foreground hover:text-primary transition-colors">Account & Data Deletion Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-body text-muted-foreground">Email</div>
                  <div className="font-medium">support@nested.money</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-body text-muted-foreground">Phone</div>
                  <a 
                    href="https://wa.me/916305209273?text=Hello" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    +91 6305 209 273
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-body text-muted-foreground text-sm">
              © 2025 GoPlug Enterprises Pvt Ltd is a mutual fund distributor with ARN 348380.
            </div>
            <div className="font-body text-muted-foreground text-sm">
              Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing.<br />
              GoPlug Enterprises Private Limited ("Nested") is a SEBI-registered Mutual Fund Distributor. The "Nested" platform does not provide personalized investment advice, financial planning, risk profiling, or recommendations tailored to individual investors. All portfolio suggestions on the platform are based on predefined model portfolios only.<br />
              Investors should make their own decisions based on their individual financial situation, risk tolerance, and investment goals. Past performance of mutual funds does not guarantee future returns.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}