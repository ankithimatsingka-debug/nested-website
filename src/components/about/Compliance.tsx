import { Shield, CheckCircle, Lock, FileCheck } from "lucide-react";

export function Compliance() {
  const compliancePoints = [
    {
      icon: Shield,
      title: "SEBI Registered",
      description: "Fully registered and regulated by the Securities and Exchange Board of India"
    },
    {
      icon: Lock,
      title: "Bank-Grade Security",
      description: "Your personal and financial data is protected with industry-leading encryption"
    },
    {
      icon: FileCheck,
      title: "Transparent Reporting",
      description: "Regular portfolio reports and clear fee structures with no hidden charges"
    },
    {
      icon: CheckCircle,
      title: "Risk Management",
      description: "Professional risk assessment and diversification strategies for every portfolio"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-2xl font-bold mb-6">
              Compliance & Security
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              When it comes to your family's financial future, trust isn't just important - it's everything. 
              That's why we've built Nested on a foundation of regulatory compliance and security best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {compliancePoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
              Regulated & Trusted
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nested operates under strict SEBI guidelines, ensuring that every investment recommendation 
              follows professional standards for risk management and transparency. Your peace of mind is our priority.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="px-4 py-2 bg-muted/50 rounded-full">SEBI Registered</span>
              <span className="px-4 py-2 bg-muted/50 rounded-full">ISO 27001 Certified</span>
              <span className="px-4 py-2 bg-muted/50 rounded-full">256-bit Encryption</span>
              <span className="px-4 py-2 bg-muted/50 rounded-full">Regular Audits</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}