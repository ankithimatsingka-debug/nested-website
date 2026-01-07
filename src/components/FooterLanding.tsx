import nestedLogo from "@/assets/nested-logo.png";

export function FooterLanding() {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          {/* Brand */}
          <div>
            <div className="flex items-center justify-center mb-6">
              <img src={nestedLogo} alt="Nested logo" height="40" className="h-10 w-auto" loading="lazy" decoding="async" />
            </div>
            <p className="font-body text-muted-foreground leading-relaxed">
              Funding dreams, one goal at a time. Smart mutual fund investing designed for Indian parents.
            </p>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="font-body text-muted-foreground text-sm">
              © 2025 GoPlug Enterprises Pvt Ltd is a mutual fund distributor with ARN 348380.
            </div>
            <div className="font-body text-muted-foreground text-sm max-w-4xl">
              Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing.<br />
              GoPlug Enterprises Private Limited ("Nested") is not a SEBI-registered Mutual Fund Distributor. The "Nested" platform does not provide personalized investment advice, financial planning, risk profiling, or recommendations tailored to individual investors. All portfolio suggestions on the platform are based on predefined model portfolios only.<br />
              Investors should make their own decisions based on their individual financial situation, risk tolerance, and investment goals. Past performance of mutual funds does not guarantee future returns.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
