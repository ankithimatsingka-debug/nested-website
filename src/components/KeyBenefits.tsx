import { Link } from "react-router-dom";
import { AllocationAnimation } from "./animations/AllocationAnimation";
import { RebalancingAnimation } from "./animations/RebalancingAnimation";
import { PeaceOfMindAnimation } from "./animations/PeaceOfMindAnimation";

const benefits = [
  {
    animation: AllocationAnimation,
    title: "Right Asset Allocation",
    description: "Get portfolio categories based on child's education goals.",
    highlight: "Portfolio for every goal",
    hasReadMore: true
  },
  {
    animation: RebalancingAnimation,
    title: "Timely Rebalancing",
    description: "We monitor your portfolio and notify you when rebalancing is needed.",
    highlight: "Set it and forget it investing",
    hasReadMore: false
  },
  {
    animation: PeaceOfMindAnimation,
    title: "Peace of Mind for Parents",
    description: "Professional management with regular progress updates.",
    highlight: "Stress-free wealth building",
    hasReadMore: false
  }
];

export function KeyBenefits() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Smart Investing Made <span className="text-secondary block sm:inline">Simple</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Other apps leave you on your own. Nested automates for busy parents.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const AnimationComponent = benefit.animation;
            return (
              <div key={index} className="group">
                {/* Animation Container */}
                <div className="mb-6 flex justify-center lg:justify-center">
                  <div className="relative">
                    <AnimationComponent />
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="text-center">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-secondary bg-secondary/10 dark:text-primary dark:bg-primary/10 rounded-full mb-3">
                      {benefit.highlight}
                    </span>
                    <h3 className="font-heading text-2xl font-semibold">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="font-body text-muted-foreground text-lg leading-relaxed">
                    {benefit.description}
                    {benefit.hasReadMore && (
                      <>
                        {" "}
                        <Link to="/fund-selection" className="text-primary hover:text-primary/80 underline font-medium transition-colors text-xs">
                          Read More
                        </Link>
                      </>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
