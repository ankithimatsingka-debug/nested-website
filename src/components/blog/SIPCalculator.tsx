import { useState, useMemo } from "react";
import { Calculator, TrendingUp, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

function formatCurrency(amount: number): string {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(1)} crore`;
  }
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)} lakh`;
  }
  return `₹${amount.toLocaleString("en-IN")}`;
}

function formatSIP(amount: number): string {
  return `₹${Math.round(amount).toLocaleString("en-IN")}`;
}

function calculateFutureCost(currentCost: number, inflationRate: number, years: number): number {
  return currentCost * Math.pow(1 + inflationRate / 100, years);
}

function calculateSIP(targetAmount: number, annualReturn: number, years: number): number {
  const monthlyRate = annualReturn / 100 / 12;
  const months = years * 12;
  if (monthlyRate === 0) return targetAmount / months;
  return targetAmount * monthlyRate / (Math.pow(1 + monthlyRate, months) - 1);
}

export function SIPCalculator() {
  const [childAge, setChildAge] = useState(2);
  const [startAge, setStartAge] = useState(18);
  const [currentCost, setCurrentCost] = useState(2500000); // ₹25 lakh
  const [inflation, setInflation] = useState(8);
  const [expectedReturn, setExpectedReturn] = useState(12);

  const results = useMemo(() => {
    const years = Math.max(startAge - childAge, 1);
    const futureCost = calculateFutureCost(currentCost, inflation, years);
    const monthlySIP = calculateSIP(futureCost, expectedReturn, years);
    return { years, futureCost, monthlySIP };
  }, [childAge, startAge, currentCost, inflation, expectedReturn]);

  const costOptions = [
    { label: "₹10L", value: 1000000 },
    { label: "₹25L", value: 2500000 },
    { label: "₹50L", value: 5000000 },
    { label: "₹1Cr", value: 10000000 },
  ];

  return (
    <section className="my-10 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
          <Calculator className="h-5 w-5 text-primary" />
        </div>
        <h3 className="font-heading text-xl font-bold text-foreground">SIP Calculator</h3>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-5">
          {/* Child Age */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-foreground">Child's Current Age</label>
              <span className="text-sm font-semibold text-primary">{childAge} years</span>
            </div>
            <Slider
              value={[childAge]}
              onValueChange={([v]) => setChildAge(v)}
              min={0}
              max={15}
              step={1}
            />
          </div>

          {/* Education Start Age */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-foreground">Education Start Age</label>
              <span className="text-sm font-semibold text-primary">{startAge} years</span>
            </div>
            <Slider
              value={[startAge]}
              onValueChange={([v]) => setStartAge(v)}
              min={Math.max(childAge + 1, 15)}
              max={25}
              step={1}
            />
          </div>

          {/* Current Cost */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-foreground">Current Education Cost</label>
              <span className="text-sm font-semibold text-primary">{formatCurrency(currentCost)}</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {costOptions.map((opt) => (
                <Button
                  key={opt.value}
                  variant={currentCost === opt.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentCost(opt.value)}
                  className="text-xs"
                >
                  {opt.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Inflation */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-foreground">Education Inflation</label>
              <span className="text-sm font-semibold text-primary">{inflation}%</span>
            </div>
            <Slider
              value={[inflation]}
              onValueChange={([v]) => setInflation(v)}
              min={5}
              max={12}
              step={0.5}
            />
          </div>

          {/* Expected Return */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-foreground">Expected Annual Return</label>
              <span className="text-sm font-semibold text-primary">{expectedReturn}%</span>
            </div>
            <Slider
              value={[expectedReturn]}
              onValueChange={([v]) => setExpectedReturn(v)}
              min={8}
              max={15}
              step={0.5}
            />
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col justify-center gap-4">
          <div className="rounded-xl bg-muted/50 p-5 text-center">
            <p className="text-sm text-muted-foreground mb-1">Future Education Cost</p>
            <p className="text-2xl font-heading font-bold text-foreground">{formatCurrency(results.futureCost)}</p>
            <p className="text-xs text-muted-foreground mt-1">in {results.years} years at {inflation}% inflation</p>
          </div>

          <div className="rounded-xl bg-primary/5 border border-primary/20 p-5 text-center">
            <p className="text-sm text-muted-foreground mb-1">Monthly SIP Required</p>
            <div className="flex items-center justify-center gap-1">
              <IndianRupee className="h-5 w-5 text-primary" />
              <p className="text-3xl font-heading font-bold text-primary">{Math.round(results.monthlySIP).toLocaleString("en-IN")}</p>
            </div>
            <p className="text-xs text-muted-foreground mt-1">at {expectedReturn}% expected return</p>
          </div>

          <div className="rounded-xl bg-muted/50 p-5 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Investment Period</p>
            </div>
            <p className="text-2xl font-heading font-bold text-foreground">{results.years} years</p>
          </div>

          <Button size="lg" asChild className="mt-2">
            <a href="https://play.google.com/store/apps/details?id=com.nexted.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
              Plan Your Child's Education Fund
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
