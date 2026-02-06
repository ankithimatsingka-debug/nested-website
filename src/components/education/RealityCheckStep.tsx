import { useState, useMemo, useEffect, useRef } from "react";
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
  PartyPopper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { formatLakhs } from "@/hooks/useEducationCalculator";
import {
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

// Stagger children animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring" as const, stiffness: 200 } },
};

// Celebration sound as a tiny base64 chime (web-safe)
function playCelebrationSound() {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5 E5 G5 C6
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.15, ctx.currentTime + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.12);
      osc.stop(ctx.currentTime + i * 0.12 + 0.4);
    });
  } catch {
    // Audio not supported, silently ignore
  }
}

export function RealityCheckStep({
  childName,
  currentFee,
  yearsToGoal,
  onNext,
  onBack,
}: RealityCheckStepProps) {
  const [selectedDaily, setSelectedDaily] = useState(300);
  const hasPlayedSound = useRef(false);
  const childDisplay = childName || "your child";
  const currentYear = new Date().getFullYear();

  // Play celebration sound on mount
  useEffect(() => {
    if (!hasPlayedSound.current) {
      hasPlayedSound.current = true;
      const timer = setTimeout(playCelebrationSound, 600);
      return () => clearTimeout(timer);
    }
  }, []);

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
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, y: -16 }}
      className="space-y-6"
    >
      {/* Top nav */}
      <motion.div variants={item} className="flex items-center justify-between">
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
          See {childDisplay}'s customised plan <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
      </motion.div>

      {/* Section 1: The Reality Check */}
      <motion.div variants={item} className="space-y-4 p-4 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/20 border border-red-200/60 dark:border-red-800/40">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: [0, -10, 10, -5, 0] }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center shadow-md shadow-red-200 dark:shadow-red-900/30"
          >
            <AlertCircle className="h-5 w-5 text-white" />
          </motion.div>
          <h3 className="text-sm font-bold text-red-600 dark:text-red-400 tracking-wide uppercase">
            The Reality Check
          </h3>
        </div>
        <h2 className="font-heading text-lg font-bold text-foreground leading-snug">
          Education costs are rising faster than you think
        </h2>

        {/* Line chart */}
        <div className="h-44 w-full rounded-xl bg-white/60 dark:bg-white/5 p-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={costChartData}
              margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="costGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0} />
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
                stroke="hsl(var(--destructive))"
                strokeWidth={2.5}
                fill="url(#costGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-muted-foreground text-center italic">
          College fees have doubled in the last 10 years
        </p>
      </motion.div>

      {/* Section 2: Insight Card */}
      <motion.div
        variants={scaleIn}
        className="flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 border border-blue-200/60 dark:border-blue-800/40 shadow-sm"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shrink-0 shadow-md shadow-blue-200 dark:shadow-blue-900/30"
        >
          <Users className="h-5 w-5 text-white" />
        </motion.div>
        <div>
          <p className="text-lg font-bold text-foreground">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">65 out of 100</span>
          </p>
          <p className="text-sm text-muted-foreground mt-0.5">
            parents find higher education a financial burden, leading to
            education loans or compromises.
          </p>
        </div>
      </motion.div>

      {/* Section 3: Warning Card */}
      <motion.div
        variants={item}
        whileHover={{ scale: 1.01 }}
        className="flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/20 border border-rose-300/60 dark:border-rose-800/40 shadow-sm"
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
          className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shrink-0 shadow-md shadow-rose-200 dark:shadow-rose-900/30"
        >
          <CreditCard className="h-5 w-5 text-white" />
        </motion.div>
        <p className="text-sm text-foreground font-medium pt-1">
          Without planning, education becomes a <span className="text-rose-600 dark:text-rose-400 font-bold">debt trap</span> that follows your
          child into their career.
        </p>
      </motion.div>

      {/* Section 4: The Nested Way */}
      <motion.div variants={item} className="space-y-4 pt-2">
        <div className="text-center space-y-1">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="inline-flex items-center justify-center gap-1.5"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-bold text-primary tracking-wide uppercase">
              The Nested Way
            </h3>
            <Sparkles className="h-4 w-4 text-secondary" />
          </motion.div>
          <p className="font-heading text-lg font-bold text-foreground">
            A smarter way to save for {childDisplay}
          </p>
        </div>

        <div className="space-y-3">
          {[
            {
              icon: Target,
              gradient: "from-primary to-blue-500",
              shadowColor: "shadow-blue-200 dark:shadow-blue-900/30",
              cardBg: "from-blue-50/80 to-sky-50/80 dark:from-blue-950/20 dark:to-sky-950/20",
              borderColor: "border-blue-200/50 dark:border-blue-800/30",
              title: "Smart Tracking & Rebalancing",
              desc: "We automatically adjust your portfolio based on risk and time horizon to keep you on track.",
            },
            {
              icon: Brain,
              gradient: "from-secondary to-amber-500",
              shadowColor: "shadow-orange-200 dark:shadow-orange-900/30",
              cardBg: "from-orange-50/80 to-amber-50/80 dark:from-orange-950/20 dark:to-amber-950/20",
              borderColor: "border-orange-200/50 dark:border-orange-800/30",
              title: "Research-Backed Framework",
              desc: "Our experts do the heavy lifting—research, analysis, and fund selection—so you can relax.",
            },
            {
              icon: TrendingUp,
              gradient: "from-emerald-400 to-green-500",
              shadowColor: "shadow-emerald-200 dark:shadow-emerald-900/30",
              cardBg: "from-emerald-50/80 to-green-50/80 dark:from-emerald-950/20 dark:to-green-950/20",
              borderColor: "border-emerald-200/50 dark:border-emerald-800/30",
              title: "Power of Small Savings",
              desc: "Even ₹50/day compounds into lakhs over your child's growing years.",
            },
          ].map(({ icon: Icon, gradient, shadowColor, cardBg, borderColor, title, desc }, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className={cn(
                "flex items-start gap-3 p-3.5 rounded-xl border bg-gradient-to-br",
                cardBg,
                borderColor
              )}
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center shrink-0 shadow-md",
                  gradient,
                  shadowColor
                )}
              >
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Section 5: Interactive Calculator */}
      <motion.div
        variants={scaleIn}
        className="rounded-2xl p-5 text-white space-y-4 bg-gradient-primary relative overflow-hidden"
      >
        {/* Decorative circles */}
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 blur-md" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/10 blur-md" />

        <p className="text-sm font-medium opacity-90 relative z-10">
          See how small daily savings grow for {childDisplay}
        </p>

        {/* Pills */}
        <div className="flex gap-2 flex-wrap relative z-10">
          {DAILY_OPTIONS.map((amt) => (
            <motion.button
              key={amt}
              type="button"
              onClick={() => setSelectedDaily(amt)}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-sm font-medium transition-all",
                selectedDaily === amt
                  ? "bg-white text-foreground shadow-lg"
                  : "bg-white/20 text-white hover:bg-white/30"
              )}
            >
              ₹{amt}/day
            </motion.button>
          ))}
        </div>

        <div className="space-y-1 relative z-10">
          <p className="text-xs opacity-80">
            In {yearsToGoal} years, this becomes
          </p>
          <motion.p
            key={savingsCalc.futureValue}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-3xl font-bold"
          >
            {formatLakhs(savingsCalc.futureValue)}
          </motion.p>
          <p className="text-xs opacity-80">
            From just {formatLakhs(savingsCalc.totalInvested)} invested
          </p>
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div variants={item}>
        <Button
          onClick={onNext}
          className="w-full h-12 bg-gradient-to-r from-primary to-primary-dark hover:opacity-90"
        >
          See {childDisplay}'s customised plan <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
