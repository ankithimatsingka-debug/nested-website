import { AMFIAnimation } from "@/components/animations/AMFIAnimation";
import { BankSecurityAnimation } from "@/components/animations/BankSecurityAnimation";
import { TransparentReportAnimation } from "@/components/animations/TransparentReportAnimation";

export function Compliance() {
  const compliancePoints = [
    {
      animation: AMFIAnimation,
      title: "AMFI Registered",
      description: "Fully compliant and regulated by AMFI."
    },
    {
      animation: BankSecurityAnimation,
      title: "Bank-Grade Security",
      description: "Industry-leading encryption for your personal and financial data."
    },
    {
      animation: TransparentReportAnimation,
      title: "Transparent Reporting",
      description: "No hidden charges. Regular reports. Fully Transparent."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              <span className="text-secondary">Compliance</span> & Security
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your investments are protected
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {compliancePoints.map((point, index) => {
              const AnimationComponent = point.animation;
              return (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:shadow-lg transition-all duration-300 group">
                  {/* Animation */}
                  <div className="mb-4 group-hover:scale-105 transition-transform duration-300">
                    <AnimationComponent />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-heading font-semibold text-foreground mb-2">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
