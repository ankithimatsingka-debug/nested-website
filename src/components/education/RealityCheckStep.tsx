import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  Users,
  CreditCard,
  Sparkles,
  Target,
  Brain,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { formatLakhs } from "@/hooks/useEducationCalculator";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

function getAnnualRate(years: number): number {
  if (years <= 2) return 0.09;
  if (years <= 5) return 0.12;
  return 0.14;
}

interface RealityCheckStepProps {
  childName: string;
  currentFee: number;
  yearsToGoal: number;
  onNext: () => void;
  onBack: () => void;
}

const DAILY_OPTIONS = [50, 100, 200, 300];

export function RealityCheckStep({
  childName,
  currentFee,
  yearsToGoal,
  onNext,
  onBack,
}: RealityCheckStepProps) {
  const [selectedDaily, setSelectedDaily] = useState(300);
  const childDisplay = childName || "your child";
  const currentYear = new Date().getFullYear();

  // Chart data for education cost inflation
  const costChartData = useMemo(() => {
    const points = [];
    const startYear = currentYear - 10;
    const endYear = currentYear + 10;
    const startCost = currentFee / 2.5;
    const endCost = currentFee * 2.5;
    const totalYears = endYear - startYear;

    for (let y = startYear; y <= endYear; y++) {
      const t = (y - startYear) / totalYears;
      // Exponential interpolation
      const cost = startCost * Math.pow(endCost / startCost, t);
      points.push({ year: y, cost: Math.round(cost) });
    }
    return points;
  }, [currentFee, currentYear]);

  // Interactive calculator
  const savingsCalc = useMemo(() => {
    const annualRate = getAnnualRate(yearsToGoal);
    const monthlyRate = annualRate / 12;
    const totalMonths = yearsToGoal * 12;
    const monthlyContribution = (selectedDaily * 365) / 12;
    const futureValue =
      monthlyContribution *
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
    const totalInvested = selectedDaily * 365 * yearsToGoal;
    return {
      futureValue: Math.round(futureValue),
      totalInvested: Math.round(totalInvested),
    };
  }, [selectedDaily, yearsToGoal]);

  return (
    <motion.div
      key="s5-reality"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
    >
      {/* Top nav */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-3 w-3" /> Back
        </button>
        <Button
          size="sm"
          onClick={onNext}
          className="bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 text-xs h-8 px-3"
        >
          See {childDisplay}'s Plan <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
      </div>

      {/* Section 1: The Reality Check */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-950/50 flex items-center justify-center">
            <AlertCircle className="h-4 w-4 text-red-500" />
          </div>
          <h3 className="text-sm font-semibold text-red-600 dark:text-red-400">
            The Reality Check
          </h3>
        </div>
        <h2 className="font-heading text-lg font-bold text-foreground leading-snug">
          Education costs are rising faster than you think
        </h2>

        {/* Line chart */}
        <div className="h-44 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={costChartData}
              margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="costGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="year"
                tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
                interval="preserveStartEnd"
              />
              <YAxis
                tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) =>
                  v >= 10000000
                    ? `${(v / 10000000).toFixed(1)}Cr`
                    : v >= 100000
                    ? `${(v / 100000).toFixed(0)}L`
                    : `${(v / 1000).toFixed(0)}K`
                }
                width={40}
              />
              <Area
                type="monotone"
                dataKey="cost"
                stroke="#ef4444"
                strokeWidth={2.5}
                fill="url(#costGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-muted-foreground text-center italic">
          College fees have doubled in the last 10 years
        </p>
      </div>

      {/* Section 2: Insight Card */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border/50">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Users className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="text-base font-bold text-foreground">65 out of 100</p>
          <p className="text-sm text-muted-foreground mt-0.5">
            parents find higher education a financial burden, leading to
            education loans or compromises.
          </p>
        </div>
      </div>

      {/* Section 3: Warning Card */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50">
        <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/50 flex items-center justify-center shrink-0">
          <CreditCard className="h-5 w-5 text-red-500" />
        </div>
        <p className="text-sm text-red-700 dark:text-red-300">
          Without planning, education becomes a debt trap that follows your
          child into their career.
        </p>
      </div>

      {/* Section 4: The Nested Way */}
      <div className="space-y-4 pt-2">
        <div className="text-center space-y-1">
          <div className="flex items-center justify-center gap-1.5">
            <Sparkles className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-semibold text-primary">
              The Nested Way
            </h3>
          </div>
          <p className="font-heading text-lg font-bold text-foreground">
            A smarter way to save for {childDisplay}
          </p>
        </div>

        <div className="space-y-3">
          {[
            {
              icon: Target,
              color: "text-primary",
              bg: "bg-primary/10",
              title: "Smart Tracking & Rebalancing",
              desc: "We automatically adjust your portfolio based on risk and time horizon to keep you on track.",
            },
            {
              icon: Brain,
              color: "text-secondary",
              bg: "bg-secondary/10",
              title: "Research-Backed Framework",
              desc: "Our experts do the heavy lifting—research, analysis, and fund selection—so you can relax.",
            },
            {
              icon: TrendingUp,
              color: "text-success",
              bg: "bg-success/10",
              title: "Power of Small Savings",
              desc: "Even ₹50/day compounds into lakhs over your child's growing years.",
            },
          ].map(({ icon: Icon, color, bg, title, desc }, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 rounded-xl border border-border/50 bg-card"
            >
              <div
                className={cn(
                  "w-9 h-9 rounded-lg flex items-center justify-center shrink-0",
                  bg
                )}
              >
                <Icon className={cn("h-4.5 w-4.5", color)} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 5: Interactive Calculator */}
      <div className="rounded-2xl p-5 text-white space-y-4 bg-gradient-primary">
        <p className="text-sm font-medium opacity-90">
          See how small daily savings grow for {childDisplay}
        </p>

        {/* Pills */}
        <div className="flex gap-2 flex-wrap">
          {DAILY_OPTIONS.map((amt) => (
            <button
              key={amt}
              type="button"
              onClick={() => setSelectedDaily(amt)}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                selectedDaily === amt
                  ? "bg-white text-gray-900 shadow-md"
                  : "bg-white/20 text-white hover:bg-white/30"
              )}
            >
              ₹{amt}/day
            </button>
          ))}
        </div>

        <div className="space-y-1">
          <p className="text-xs opacity-80">
            In {yearsToGoal} years, this becomes
          </p>
          <p className="text-3xl font-bold">
            {formatLakhs(savingsCalc.futureValue)}
          </p>
          <p className="text-xs opacity-80">
            From just {formatLakhs(savingsCalc.totalInvested)} invested
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <Button
        onClick={onNext}
        className="w-full h-12 bg-gradient-to-r from-primary to-primary-dark hover:opacity-90"
      >
        See {childDisplay}'s Plan <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </motion.div>
  );
}
