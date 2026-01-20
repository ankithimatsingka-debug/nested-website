import { TrendingDown, Activity, AlertCircle, Clock, Calculator, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProblemSection = () => {
  return (
    <section className="px-6 py-16 md:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground text-center mb-10 md:mb-14">
          The problem with traditional choices today
        </h2>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Fixed Deposits Card */}
          <Card className="p-6 md:p-8 bg-background border-border/50 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Fixed Deposits
              </h3>
            </div>
            <ul className="space-y-4 font-body text-muted-foreground">
              <li className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive/70 mt-0.5 flex-shrink-0" />
                <span>Low returns</span>
              </li>
              <li className="flex items-start gap-3">
                <Calculator className="w-5 h-5 text-destructive/70 mt-0.5 flex-shrink-0" />
                <span>10% TDS every year even before maturity</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-destructive/70 mt-0.5 flex-shrink-0" />
                <span>Penalty for pre-maturity</span>
              </li>
            </ul>
          </Card>

          {/* Share Market Card */}
          <Card className="p-6 md:p-8 bg-background border-border/50 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <Activity className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Share Market
              </h3>
            </div>
            <ul className="space-y-4 font-body text-muted-foreground">
              <li className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive/70 mt-0.5 flex-shrink-0" />
                <span>Short-term volatility</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-destructive/70 mt-0.5 flex-shrink-0" />
                <span>Requires timing & discipline</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-destructive/70 mt-0.5 flex-shrink-0" />
                <span>Not suitable for near-term goals</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
