import { useState, useRef, useEffect, useMemo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Mail,
  Loader2,
  Search,
  TrendingUp,
  GraduationCap,
  Heart,
  AlertTriangle,
  Sparkles,
  Building2,
  Award,
  Globe,
  Stethoscope,
  Plane,
  TrendingDown,
  Baby,
} from "lucide-react";
import type { CollegeCourse } from "@/data/educationCostData";
import { educationCostData, calculateFutureCost } from "@/data/educationCostData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  useEducationCalculator,
  formatINR,
  formatLakhs,
  formatLakhsShort,
} from "@/hooks/useEducationCalculator";
import { useCountUp } from "@/hooks/useCountUp";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, ReferenceLine } from "recharts";
import { RevealPage } from "./RevealPage";

type Step = 1 | 2 | 3 | 4 | 5 | "reveal";

const TOTAL_STEPS = 5;

// Updated with user-provided data (2015 fee is historical reference, 2025 is currentFee)
const QUICK_PICK_COLLEGES: { label: string; icon: React.ElementType; color: string; iconColor: string; selectedBg: string; college: CollegeCourse & { fee2015: number } }[] = [
  { label: "IIT", icon: GraduationCap, color: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800", iconColor: "text-blue-600 dark:text-blue-400", selectedBg: "bg-blue-100 dark:bg-blue-900/50 border-blue-500", college: { name: "IIT", currentFee: 1200000, fee2015: 200000, increaseRateLessThan10: 0.10, increaseRateMoreThan10: 0.10 } },
  { label: "Tier 1 Private Engineering", icon: Building2, color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800", iconColor: "text-emerald-600 dark:text-emerald-400", selectedBg: "bg-emerald-100 dark:bg-emerald-900/50 border-emerald-500", college: { name: "Tier 1 Private Engineering", currentFee: 1500000, fee2015: 400000, increaseRateLessThan10: 0.10, increaseRateMoreThan10: 0.10 } },
  { label: "IIM", icon: Award, color: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800", iconColor: "text-amber-600 dark:text-amber-400", selectedBg: "bg-amber-100 dark:bg-amber-900/50 border-amber-500", college: { name: "IIM", currentFee: 3500000, fee2015: 1800000, increaseRateLessThan10: 0.08, increaseRateMoreThan10: 0.08 } },
  { label: "USA STEM", icon: Globe, color: "bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-800", iconColor: "text-sky-600 dark:text-sky-400", selectedBg: "bg-sky-100 dark:bg-sky-900/50 border-sky-500", college: { name: "USA STEM", currentFee: 30000000, fee2015: 15000000, increaseRateLessThan10: 0.07, increaseRateMoreThan10: 0.07 } },
  { label: "MBBS", icon: Stethoscope, color: "bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-800", iconColor: "text-red-600 dark:text-red-400", selectedBg: "bg-red-100 dark:bg-red-900/50 border-red-500", college: { name: "MBBS", currentFee: 10000000, fee2015: 4000000, increaseRateLessThan10: 0.10, increaseRateMoreThan10: 0.10 } },
  { label: "Pilot Course", icon: Plane, color: "bg-violet-50 dark:bg-violet-950/40 border-violet-200 dark:border-violet-800", iconColor: "text-violet-600 dark:text-violet-400", selectedBg: "bg-violet-100 dark:bg-violet-900/50 border-violet-500", college: { name: "Pilot Course", currentFee: 1600000, fee2015: 900000, increaseRateLessThan10: 0.06, increaseRateMoreThan10: 0.06 } },
  { label: "Ivy League MBA", icon: Award, color: "bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800", iconColor: "text-rose-600 dark:text-rose-400", selectedBg: "bg-rose-100 dark:bg-rose-900/50 border-rose-500", college: { name: "Ivy League MBA", currentFee: 25000000, fee2015: 13000000, increaseRateLessThan10: 0.07, increaseRateMoreThan10: 0.07 } },
];

const fade = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

export function EducationJourney({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState<Step>(1);
  const calc = useEducationCalculator();
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // On mobile, scroll to top of page when step changes
  useEffect(() => {
    if (isMobile && compact) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [step, isMobile, compact]);

  const animatedSIP = useCountUp(calc.result?.monthlyInvestment || 0, 1200, calc.emailUnlocked && !!calc.result);
  const animatedTotal = useCountUp(calc.result?.totalInvestment || 0, 1200, calc.emailUnlocked && !!calc.result);
  const animatedTarget = useCountUp(calc.result?.targetAmount || 0, 1200, calc.emailUnlocked && !!calc.result);

  useEffect(() => {
    if (step === 5 && !calc.result) {
      calc.calculate();
    }
  }, [step, calc.result, calc.calculate]);

  const goNext = () => {
    if (typeof step === "number" && step < TOTAL_STEPS) {
      setStep((step + 1) as Step);
    }
  };

  const goBack = () => {
    if (step === "reveal") {
      setStep(5);
    } else if (typeof step === "number" && step > 1) {
      setStep((step - 1) as Step);
    }
  };

  const handleEmailSubmitAndReveal = async () => {
    await calc.handleEmailSubmit();
    setStep("reveal");
  };

  const progressPercent = typeof step === "number" ? (step / TOTAL_STEPS) * 100 : 100;
  const childDisplay = calc.childName || "your child";

  const BackButton = () => (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        goBack();
      }}
      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors mb-1 relative z-10"
    >
      <ArrowLeft className="h-3 w-3" /> Back
    </button>
  );

  // Generate historical and future fee data for selected college
  const feeChartData = useMemo(() => {
    if (!calc.selectedCollege) return [];
    const currentYear = new Date().getFullYear();
    const data = [];
    
    // Check if this college has historical 2015 data (quick-pick colleges)
    const quickPick = QUICK_PICK_COLLEGES.find(qp => qp.college.name === calc.selectedCollege?.name);
    const fee2015 = quickPick?.college.fee2015;
    
    // Historical: 10 years back (use actual 2015 data if available, otherwise simulate)
    const avgRate = calc.selectedCollege.increaseRateLessThan10;
    for (let i = -10; i <= 0; i++) {
      let fee: number;
      if (fee2015 && i === -10) {
        // Use actual 2015 fee
        fee = fee2015;
      } else if (fee2015) {
        // Interpolate between 2015 and current
        const progress = (i + 10) / 10; // 0 at -10, 1 at 0
        fee = fee2015 + (calc.selectedCollege.currentFee - fee2015) * progress;
      } else {
        // Reverse compound for search results
        fee = calc.selectedCollege.currentFee / Math.pow(1 + avgRate, Math.abs(i));
      }
      data.push({
        year: currentYear + i,
        fee: Math.round(fee),
        type: i === 0 ? "current" : "historical",
      });
    }
    
    // Future: 15 years forward
    for (let i = 1; i <= 15; i++) {
      const rate = i < 10 ? calc.selectedCollege.increaseRateLessThan10 : calc.selectedCollege.increaseRateMoreThan10;
      const fee = calc.selectedCollege.currentFee * Math.pow(1 + rate, i);
      data.push({
        year: currentYear + i,
        fee: Math.round(fee),
        type: "projected",
      });
    }
    
    return data;
  }, [calc.selectedCollege]);

  return (
    <div ref={containerRef} className={cn("w-full max-w-lg mx-auto relative z-10", compact ? "px-0" : "px-4")}>
      <div className="bg-card rounded-2xl shadow-lg border border-border/50 overflow-hidden">
        {/* Progress bar */}
        <div className="w-full h-1.5 bg-muted">
          <motion.div
            className="h-full rounded-r-full"
            style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))" }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        </div>

        <div className={cn("p-8", compact && "p-6")}>
          <AnimatePresence mode="wait">

            {/* Step 1: Reality Moment */}
            {step === 1 && (
              <motion.div key="s1" variants={fade} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }} className="space-y-6">
                <div className="flex justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-red-100 dark:bg-red-950/50 flex items-center justify-center">
                    <AlertTriangle className="h-7 w-7 text-red-500 animate-pulse" />
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground leading-snug">
                    Your child's education will cost more than you think.
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    College fees in India have increased <span className="font-bold text-red-500">3–4X</span> in the last decade — and they continue to rise faster than inflation. They will continue to rise more than <span className="font-bold text-red-500">10% every year</span> in the next decade.
                  </p>
                </div>

                {/* Stat block */}
                <div className="bg-muted/50 rounded-xl p-4 border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <TrendingDown className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground">65 out of 100</p>
                      <p className="text-sm text-muted-foreground">parents say higher education has become a financial burden.</p>
                    </div>
                  </div>
                </div>

                {/* Reassurance line */}
                <div className="flex items-start gap-2 p-3 rounded-xl bg-primary/5 border border-primary/10">
                  <Sparkles className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-foreground">
                    With the right plan, small consistent savings today can protect your child's future choices tomorrow.
                  </p>
                </div>

                <div className="pt-2 space-y-3">
                  <Button onClick={goNext} className="w-full h-12 text-base bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 transition-opacity relative z-10">
                    See how fees have grown <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-[11px] text-muted-foreground text-center">Free · No signup required</p>
                </div>
              </motion.div>
            )}

            {/* Step 2: College Selection */}
            {step === 2 && (
              <motion.div key="s2" variants={fade} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }} className="space-y-5">
                <BackButton />
                <div className="flex justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-success/10 flex items-center justify-center">
                    <GraduationCap className="h-7 w-7 text-success" />
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Pick a dream college or course
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    See how fees have grown — and where they're headed.
                  </p>
                </div>

                {/* Quick-pick tiles */}
                <div className="grid grid-cols-2 gap-2">
                  {QUICK_PICK_COLLEGES.map((qp) => {
                    const Icon = qp.icon;
                    const isSelected = calc.selectedCollege?.name === qp.college.name;
                    const costLabel = qp.college.currentFee >= 10000000
                      ? `₹${(qp.college.currentFee / 10000000).toFixed(1)} Cr`
                      : `₹${(qp.college.currentFee / 100000).toFixed(0)} L`;
                    return (
                      <button
                        key={qp.label}
                        type="button"
                        onClick={() => {
                          calc.setSelectedCollege(qp.college);
                          calc.setSearchQuery("");
                          setShowSearchResults(false);
                          goNext();
                        }}
                        className={cn(
                          "flex items-start gap-2 border rounded-xl p-3 text-left transition-all hover:scale-[1.02] hover:shadow-sm",
                          isSelected ? qp.selectedBg : qp.color
                        )}
                      >
                        <div className={cn("h-7 w-7 rounded-lg flex items-center justify-center shrink-0", isSelected ? qp.selectedBg : qp.color)}>
                          <Icon className={cn("h-4 w-4 shrink-0", qp.iconColor)} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-medium text-foreground leading-tight">{qp.label}</p>
                          <p className={cn("text-[11px] font-semibold", qp.iconColor)}>{costLabel}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs text-muted-foreground">or search below</span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <div className="relative">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      ref={searchInputRef}
                      placeholder="e.g. IIT, BITS, Harvard…"
                      value={calc.selectedCollege ? calc.selectedCollege.name : calc.searchQuery}
                      onChange={(e) => {
                        if (calc.selectedCollege) {
                          calc.setSelectedCollege(null);
                        }
                        calc.setSearchQuery(e.target.value);
                        setShowSearchResults(true);
                      }}
                      onFocus={() => setShowSearchResults(true)}
                      className="h-12 pl-10 text-sm"
                    />
                  </div>
                  {showSearchResults && calc.filteredColleges.length > 0 && !calc.selectedCollege && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute z-10 w-full mt-1 bg-popover border border-border rounded-xl shadow-lg max-h-[300px] overflow-y-auto"
                    >
                      {calc.filteredColleges.map((college) => (
                        <button
                          key={college.name}
                          onClick={() => {
                            calc.setSelectedCollege(college);
                            calc.setSearchQuery("");
                            setShowSearchResults(false);
                            goNext();
                          }}
                          className="w-full text-left px-4 py-3 text-sm hover:bg-primary/5 transition-colors border-b border-border/30 last:border-0 flex items-center gap-2"
                        >
                          <GraduationCap className="h-3.5 w-3.5 text-primary/50 shrink-0" />
                          {college.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 3: Fee Visualization + Nested Story */}
            {step === 3 && calc.selectedCollege && (
              <motion.div key="s3" variants={fade} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }} className="space-y-5">
                <BackButton />
                
                {/* College header */}
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 text-success text-xs font-medium">
                    <GraduationCap className="h-3.5 w-3.5" />
                    {calc.selectedCollege.name}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Here's how fees have changed
                  </h3>
                </div>

                {/* Fee Chart - Full View */}
                <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl p-4 border border-border/50">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">10 years ago</p>
                      <p className="text-base font-bold text-foreground">{formatLakhs(feeChartData[0]?.fee || 0)}</p>
                    </div>
                    <TrendingUp className="h-5 w-5 text-destructive" />
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Today</p>
                      <p className="text-base font-bold text-primary">{formatLakhs(calc.selectedCollege.currentFee)}</p>
                    </div>
                  </div>
                  <div className="h-44 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={feeChartData}
                        margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient id="feeGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.2} />
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
                        <ReferenceLine x={new Date().getFullYear()} stroke="hsl(var(--primary))" strokeDasharray="3 3" />
                        <Area
                          type="monotone"
                          dataKey="fee"
                          stroke="hsl(var(--destructive))"
                          strokeWidth={2}
                          fill="url(#feeGrad)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/50">
                    <div>
                      <p className="text-xs text-muted-foreground">In 15 years</p>
                      <p className="text-base font-bold text-destructive">{formatLakhs(feeChartData[feeChartData.length - 1]?.fee || 0)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Growth</p>
                      <p className="text-base font-bold text-destructive">
                        {Math.round((calc.selectedCollege.increaseRateLessThan10) * 100)}% / year
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key insight */}
                <div className="bg-destructive/5 rounded-xl p-4 border border-destructive/20">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-foreground">
                        Fees have grown ~{Math.round(((calc.selectedCollege.currentFee / (feeChartData[0]?.fee || 1)) - 1) * 100)}% in the last 10 years
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        That's faster than most savings accounts or Fixed Deposits can keep up with.
                      </p>
                    </div>
                  </div>
                </div>

                {/* The Nested Way - Story Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <p className="text-sm font-semibold text-foreground">The Smarter Approach</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-4 border border-primary/10 space-y-3">
                    <p className="text-sm text-foreground leading-relaxed">
                      Most parents either <span className="font-semibold">don't plan</span> or park savings in FDs — which barely beat inflation and fall short of rising education costs.
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      <span className="font-bold text-primary">Nested</span> takes a smarter approach: we analyze <span className="font-semibold">2,000+ mutual funds</span>, design the right portfolio based on your child's age, and rebalance as they grow — so your money works harder for their future.
                    </p>
                    <div className="flex items-center gap-4 pt-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-xs text-muted-foreground">Goal-based</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                        <span className="text-xs text-muted-foreground">Age-appropriate</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-success" />
                        <span className="text-xs text-muted-foreground">Auto-rebalanced</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={goNext}
                  className="w-full h-12 bg-gradient-to-r from-primary to-primary-dark hover:opacity-90"
                >
                  Build a plan for this goal <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            )}

            {/* Step 4: Child's Name + Age + Customize Plan */}
            {step === 4 && (
              <motion.div key="s4" variants={fade} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }} className="space-y-6">
                <BackButton />
                <div className="flex justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Heart className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Who are we building this plan for?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Let's personalize this journey.
                  </p>
                </div>
                <div className="space-y-5">
                  {/* Child's Name Input */}
                  <div className="space-y-2">
                    <Label htmlFor="child-name" className="text-sm font-medium text-muted-foreground">Child's Name</Label>
                    <Input
                      id="child-name"
                      placeholder="Enter name"
                      value={calc.childName}
                      onChange={(e) => calc.setChildName(e.target.value)}
                      className="h-12 text-base text-center"
                    />
                  </div>

                  {/* Child's Age Slider */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                        <Baby className="h-4 w-4" />
                        Child's Age
                      </Label>
                      <span className="text-lg font-bold text-primary">{calc.equivalentAge} years</span>
                    </div>
                    <Slider
                      value={[calc.equivalentAge]}
                      onValueChange={(value) => calc.setYearsToGoal(18 - value[0])}
                      min={0}
                      max={17}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Newborn</span>
                      <span>17 years</span>
                    </div>
                  </div>

                  {calc.childName.trim() && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-3"
                    >
                      <p className="text-sm text-primary font-medium text-center flex items-center justify-center gap-1">
                        <Sparkles className="h-3.5 w-3.5" />
                        Planning for {calc.childName}'s future ({18 - calc.equivalentAge} years to goal)
                      </p>
                      <div className="bg-muted/50 rounded-xl p-4 border border-border/50">
                        <p className="text-sm text-foreground text-center">
                          Would you like us to create a <span className="font-semibold text-primary">customized investing plan</span> to help {calc.childName} reach their education goal in the most efficient way?
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
                <Button
                  onClick={goNext}
                  className="w-full h-12 bg-gradient-to-r from-primary to-primary-dark hover:opacity-90"
                  disabled={!calc.childName.trim()}
                >
                  Yes, create my plan <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            )}

            {/* Step 5: Email Collection + Show SIP Result */}
            {step === 5 && (
              <motion.div key="s5" variants={fade} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }} className="space-y-6">
                <BackButton />
                <div className="flex justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <Mail className="h-7 w-7 text-secondary" />
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Where should we send {childDisplay}'s plan?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Enter your email to see the complete savings snapshot.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={calc.email}
                      onChange={(e) => {
                        calc.setEmail(e.target.value);
                        calc.setEmailError("");
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && calc.isEmailValid) handleEmailSubmitAndReveal();
                      }}
                      className={cn(
                        "h-12 pl-10 text-sm",
                        calc.emailError && "border-destructive",
                        calc.email.trim() && calc.isEmailValid && "border-primary"
                      )}
                    />
                  </div>
                  {calc.emailError && (
                    <p className="text-xs text-destructive">{calc.emailError}</p>
                  )}
                </div>
                <Button
                  onClick={handleEmailSubmitAndReveal}
                  className="w-full h-12 bg-gradient-to-r from-primary to-primary-dark hover:opacity-90"
                  disabled={calc.isSubmitting || !calc.email.trim() || !calc.isEmailValid}
                >
                  {calc.isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Preparing…
                    </>
                  ) : (
                    <>Show {childDisplay}'s plan <Sparkles className="ml-2 h-4 w-4" /></>
                  )}
                </Button>
              </motion.div>
            )}

            {/* Reveal */}
            {step === "reveal" && calc.result && (
              <RevealPage
                childDisplay={childDisplay}
                animatedSIP={animatedSIP}
                animatedTotal={animatedTotal}
                animatedTarget={animatedTarget}
                chartData={calc.chartData}
                yearsToGoal={calc.yearsToGoal}
                onBack={goBack}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
