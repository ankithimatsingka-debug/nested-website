import { UserPlus, Target, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "Step 1",
    title: "Sign Up",
    description: "Create your account in 2 minutes. Add basic details and complete quick KYC from your phone.",
    time: "2 minutes"
  },
  {
    icon: Target,
    step: "Step 2", 
    title: "Plan Your Goal",
    description: "Tell us about your child's dream - college, marriage, or anything else. We'll create a perfect plan.",
    time: "5 minutes"
  },
  {
    icon: TrendingUp,
    step: "Step 3",
    title: "Invest with Confidence",
    description: "Start your monthly investment. We handle everything else - just watch your child's future grow.",
    time: "Ongoing"
  }
];

export function ProcessSteps() {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-2xl font-bold mb-6">
            Get Started in <span className="text-primary">3 Simple Steps</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            No paperwork, no office visits, no complex forms. Just three easy steps to secure your child's future.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-background rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center relative z-10">
                  <div className="mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
                      {step.step}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-2xl font-semibold mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground leading-relaxed mb-4">
                    {step.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-secondary">
                    <span>{step.time}</span>
                  </div>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <ArrowRight className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-background rounded-2xl shadow-md">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">7</div>
              <div className="text-sm text-muted-foreground">minutes total</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">₹500</div>
              <div className="text-sm text-muted-foreground">minimum start</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Lifetime</div>
              <div className="text-sm text-muted-foreground">of support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}