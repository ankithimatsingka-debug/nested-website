import { ArrowRight } from "lucide-react";
import { SignUpAnimation } from "@/components/animations/SignUpAnimation";
import { PlanGoalAnimation } from "@/components/animations/PlanGoalAnimation";
import { GrowthAnimation } from "@/components/animations/GrowthAnimation";

const steps = [
  {
    animation: SignUpAnimation,
    step: "Step 1",
    title: "Sign Up",
    description: "Complete onboarding in under 5 minutes.",
    time: "Quick"
  },
  {
    animation: PlanGoalAnimation,
    step: "Step 2", 
    title: "Plan Your Goal",
    description: "Share your child's education goals. We'll create the perfect plan.",
    time: "Easy"
  },
  {
    animation: GrowthAnimation,
    step: "Step 3",
    title: "Invest with Confidence",
    description: "Start investing. We handle the rest.",
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
              const boxHeights = ['md:h-[320px]', 'md:h-[320px]', 'md:h-[320px]'];
              const AnimationComponent = step.animation;
              
              return (
                <div key={index} className={`relative ${boxWidths[index]}`}>
                  {/* Step Card */}
                  <div className={`bg-background rounded-2xl p-6 md:p-5 ${boxHeights[index]} shadow-md hover:shadow-lg transition-all duration-300 text-center relative z-10 flex flex-col`}>
                    {/* Animation */}
                    <div className="flex justify-center mb-4">
                      <AnimationComponent />
                    </div>
                    
                    {/* Step badge */}
                    <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mx-auto mb-3">
                      {step.step}
                    </span>
                    
                    <h3 className="font-heading text-2xl font-semibold mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="font-body text-muted-foreground leading-relaxed mb-3 flex-grow">
                      {step.description}
                    </p>
                    
                    <div className="flex justify-center items-center gap-2 text-sm font-medium text-secondary">
                      <span>{step.time}</span>
                    </div>
                  </div>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-[160px] -right-9 z-20">
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
