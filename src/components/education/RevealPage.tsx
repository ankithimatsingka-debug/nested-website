import { useEffect } from "react";
import { ConfettiCanvas } from "./ConfettiCanvas";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Shield,
  RefreshCw,
  BarChart3,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { formatINR, formatLakhs, formatLakhsShort } from "@/hooks/useEducationCalculator";
import { useCelebrationChime } from "@/hooks/useCelebrationChime";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

interface RevealPageProps {
  childDisplay: string;
  animatedSIP: number;
  animatedTotal: number;
  animatedTarget: number;
  chartData: { year: number; amount: number; invested: number; fd: number }[];
  yearsToGoal: number;
  onBack: () => void;
}

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { delay: 0.15 + i * 0.12, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
});

const BENEFIT_TILES = [
  {
    icon: Shield,
    title: "Dedicated Account",
    gradient: "from-blue-500 to-indigo-600",
    bgGlow: "bg-blue-500/10",
    iconAnim: "animate-[pulse_2s_ease-in-out_infinite]",
    getText: (name: string) => `A separate account dedicated to ${name}`,
  },
  {
    icon: Sparkles,
    title: "Curated Funds",
    gradient: "from-amber-500 to-orange-600",
    bgGlow: "bg-amber-500/10",
    iconAnim: "animate-[bounce_1.5s_ease-in-out_infinite]",
    getText: (name: string) => `Curated selection of mutual funds for ${name}'s needs`,
  },
  {
    icon: RefreshCw,
    title: "Auto Rebalancing",
    gradient: "from-emerald-500 to-teal-600",
    bgGlow: "bg-emerald-500/10",
    iconAnim: "animate-[spin_3s_linear_infinite]",
    getText: () => "Portfolio rebalancing as the goal approaches",
  },
  {
    icon: BarChart3,
    title: "Smart Tracking",
    gradient: "from-violet-500 to-purple-600",
    bgGlow: "bg-violet-500/10",
    iconAnim: "animate-[pulse_2s_ease-in-out_infinite_0.5s]",
    getText: () => "Continuous tracking so parents stay on course",
  },
];

export function RevealPage({
  childDisplay,
  animatedSIP,
  animatedTotal,
  animatedTarget,
  chartData,
  yearsToGoal,
  onBack,
}: RevealPageProps) {
  useCelebrationChime(true);

  return (
    <motion.div
      key="reveal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="space-y-6 relative"
    >
      <ConfettiCanvas />
      {/* Back */}
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-3 w-3" /> Back
      </button>

      {/* Primary highlight — gradient border with glow */}
      <motion.div
        {...stagger(0)}
        className="relative text-center space-y-3 p-6 rounded-2xl border-2 border-primary/30 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--primary) / 0.08), hsl(var(--secondary) / 0.08))",
        }}
      >
        {/* Decorative glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-secondary/10 blur-2xl pointer-events-none" />

        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5 relative z-10">
          <TrendingUp className="h-4 w-4 text-primary animate-[bounce_2s_ease-in-out_infinite]" />
          Monthly saving for {childDisplay}
        </p>
        <motion.p
          key={animatedSIP}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="font-heading text-3xl md:text-4xl font-bold text-primary relative z-10"
        >
          ₹{formatINR(animatedSIP)}
          <span className="text-base font-normal text-muted-foreground"> /month</span>
        </motion.p>
      </motion.div>

      {/* Supporting metrics — colorful gradient tiles */}
      <div className="grid grid-cols-2 gap-3">
        <motion.div
          {...stagger(1)}
          className="text-center p-4 rounded-xl border border-emerald-200 dark:border-emerald-800/50 overflow-hidden relative"
          style={{
            background:
              "linear-gradient(135deg, hsl(142 71% 95%), hsl(142 71% 90%))",
          }}
        >
          <div className="dark:hidden absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(142 71% 95%), hsl(142 71% 90%))" }} />
          <div className="hidden dark:block absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(142 71% 15%), hsl(142 71% 20%))" }} />
          <motion.p
            key={animatedTotal}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="text-lg font-bold text-emerald-700 dark:text-emerald-300 relative z-10"
          >
            {formatLakhsShort(animatedTotal)}
          </motion.p>
          <p className="text-xs text-emerald-600/80 dark:text-emerald-400/80 mt-1 relative z-10">
            Total invested
          </p>
        </motion.div>
        <motion.div
          {...stagger(2)}
          className="text-center p-4 rounded-xl border border-blue-200 dark:border-blue-800/50 overflow-hidden relative"
          style={{
            background:
              "linear-gradient(135deg, hsl(221 83% 95%), hsl(221 83% 90%))",
          }}
        >
          <div className="dark:hidden absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(221 83% 95%), hsl(221 83% 90%))" }} />
          <div className="hidden dark:block absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(221 83% 15%), hsl(221 83% 20%))" }} />
          <motion.p
            key={animatedTarget}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="text-lg font-bold text-blue-700 dark:text-blue-300 relative z-10"
          >
            {formatLakhsShort(animatedTarget)}
          </motion.p>
          <p className="text-xs text-blue-600/80 dark:text-blue-400/80 mt-1 relative z-10">
            Estimated at goal
          </p>
        </motion.div>
      </div>

      {/* Chart */}
      {chartData.length > 1 && (
        <motion.div {...stagger(3)} className="space-y-3">
          <div className="h-52 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData.map((d) => ({
                  ...d,
                  year: new Date().getFullYear() + d.year,
                }))}
                margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="sipGrowth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="year"
                  tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) =>
                    v >= 100000
                      ? `${(v / 100000).toFixed(0)}L`
                      : `${(v / 1000).toFixed(0)}K`
                  }
                  width={40}
                />
                <Tooltip
                  formatter={(value: number, name: string) => {
                    const labels: Record<string, string> = {
                      amount: "With Nested",
                      invested: "Amount Invested",
                      fd: "Fixed Deposit (7%)",
                    };
                    return [formatLakhs(value), labels[name] || name];
                  }}
                  labelFormatter={(label) => `Year ${label}`}
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Legend
                  iconType="line"
                  wrapperStyle={{ fontSize: "11px" }}
                  formatter={(value) => {
                    const labels: Record<string, string> = {
                      amount: "With Nested",
                      invested: "Invested",
                      fd: "Fixed Deposit",
                    };
                    return labels[value] || value;
                  }}
                />
                <Area type="monotone" dataKey="amount" stroke="hsl(var(--primary))" strokeWidth={2.5} fill="url(#sipGrowth)" />
                <Area type="monotone" dataKey="fd" stroke="hsl(var(--warning))" strokeWidth={1.5} strokeDasharray="6 3" fill="none" />
                <Area type="monotone" dataKey="invested" stroke="hsl(var(--muted-foreground))" strokeWidth={1.5} strokeDasharray="4 4" fill="none" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-muted-foreground text-center italic">
            This is how steady saving unlocks {childDisplay}'s education goal.
          </p>
        </motion.div>
      )}

      {/* Benefit tiles — colorful gradient cards */}
      <div className="space-y-3 pt-2">
        {BENEFIT_TILES.map((tile, i) => {
          const Icon = tile.icon;
          return (
            <motion.div
              key={i}
              {...stagger(4 + i)}
              className="flex items-start gap-3 p-3.5 rounded-xl border border-border/40 bg-card hover:shadow-md transition-shadow"
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br",
                  tile.gradient
                )}
              >
                <Icon className={cn("h-5 w-5 text-white", tile.iconAnim)} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{tile.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {tile.getText(childDisplay)}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        {...stagger(8)}
        className="text-sm text-foreground font-medium text-center pt-1"
      >
        You save regularly. <span className="text-primary">Nested</span> takes care of the rest.
      </motion.p>

      {/* Final CTA with tap feedback */}
      <motion.div {...stagger(9)} className="space-y-1.5">
        <Button
          className="w-full h-12 bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 active:scale-[0.97] transition-transform"
          asChild
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.nexted.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Upgrade your plan with Nested MFs
          </a>
        </Button>
        <p className="text-xs text-muted-foreground text-center">Start for free</p>
      </motion.div>
    </motion.div>
  );
}
