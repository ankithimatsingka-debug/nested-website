import { UserPlus, Target, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "Step 1",
    title: "Sign Up",
    description: "Add basic details and complete onboarding in less than five minutes from your phone.",
    time: "Quick"
  },
  {
    icon: Target,
    step: "Step 2", 
    title: "Plan Your Goal",
    description: "Tell us about your child's dream college or education. We'll create a perfect plan.",
    time: "Easy"
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
            Just three easy steps to secure your child's future.
          </p>
        </div>

        <div className="max-w-[950px] mx-auto">
          <div className="grid md:flex gap-8 md:gap-6 md:justify-center md:items-start">
            {steps.map((step, index) => {
              const boxWidths = ['md:w-[270px]', 'md:w-[300px]', 'md:w-[330px]'];
              const boxHeights = ['md:h-[500px]', 'md:h-[520px]', 'md:h-[550px]'];
              
              const pastelColors = [
                'bg-[hsl(var(--pastel-mint))]',
                'bg-[hsl(var(--pastel-peach))]',
                'bg-[hsl(var(--pastel-lavender))]'
              ];
              const iconColors = [
                'text-emerald-600',
                'text-orange-600',
                'text-purple-600'
              ];
              return (
                <div key={index} className={`relative ${boxWidths[index]}`}>
                  {/* Step Card */}
                  <div className={`bg-background rounded-2xl p-6 md:p-7 ${boxHeights[index]} shadow-md hover:shadow-lg transition-all duration-300 text-center relative z-10 flex flex-col justify-between`}>
                    <div className="mb-6">
                      <div className={`w-14 h-14 rounded-3xl ${pastelColors[index]} flex items-center justify-center mx-auto mb-4 group hover:scale-105 hover:-rotate-6 transition-all duration-300 border-2 border-white/50`}>
                        <step.icon className={`h-6 w-6 ${iconColors[index]} opacity-50`} strokeWidth={2.5} />
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
                    <div className="hidden md:block absolute top-[250px] -right-9 z-20">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <ArrowRight className="h-5 w-5 text-primary opacity-50" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}