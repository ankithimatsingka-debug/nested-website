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
  Briefcase,
  Globe,
  Palette,
  BookOpen,
  Plane,
  TrendingDown,
} from "lucide-react";
import type { CollegeCourse } from "@/data/educationCostData";
import { educationCostData, calculateFutureCost } from "@/data/educationCostData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

type Step = 1 | 2 | 3 | 4 | "reveal";

const TOTAL_STEPS = 4;

const QUICK_PICK_COLLEGES: { label: string; icon: React.ElementType; color: string; iconColor: string; selectedBg: string; college: CollegeCourse }[] = [
  { label: "IIT", icon: GraduationCap, color: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800", iconColor: "text-blue-600 dark:text-blue-400", selectedBg: "bg-blue-100 dark:bg-blue-900/50 border-blue-500", college: { name: "IIT (Average)", currentFee: 2000000, increaseRateLessThan10: 0.15, increaseRateMoreThan10: 0.10 } },
  { label: "Tier 1 Private Engineering", icon: Building2, color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800", iconColor: "text-emerald-600 dark:text-emerald-400", selectedBg: "bg-emerald-100 dark:bg-emerald-900/50 border-emerald-500", college: { name: "Tier 1 Private Engineering", currentFee: 2500000, increaseRateLessThan10: 0.10, increaseRateMoreThan10: 0.08 } },
  { label: "IIM", icon: Award, color: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800", iconColor: "text-amber-600 dark:text-amber-400", selectedBg: "bg-amber-100 dark:bg-amber-900/50 border-amber-500", college: { name: "IIM (Average)", currentFee: 2500000, increaseRateLessThan10: 0.07, increaseRateMoreThan10: 0.06 } },
  { label: "Tier 1 MBA College", icon: Briefcase, color: "bg-violet-50 dark:bg-violet-950/40 border-violet-200 dark:border-violet-800", iconColor: "text-violet-600 dark:text-violet-400", selectedBg: "bg-violet-100 dark:bg-violet-900/50 border-violet-500", college: { name: "Tier 1 MBA College", currentFee: 2800000, increaseRateLessThan10: 0.07, increaseRateMoreThan10: 0.06 } },
  { label: "Masters in US", icon: Globe, color: "bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-800", iconColor: "text-sky-600 dark:text-sky-400", selectedBg: "bg-sky-100 dark:bg-sky-900/50 border-sky-500", college: { name: "Masters in US", currentFee: 5000000, increaseRateLessThan10: 0.08, increaseRateMoreThan10: 0.07 } },
  { label: "Design (NID, NIFT etc)", icon: Palette, color: "bg-pink-50 dark:bg-pink-950/40 border-pink-200 dark:border-pink-800", iconColor: "text-pink-600 dark:text-pink-400", selectedBg: "bg-pink-100 dark:bg-pink-900/50 border-pink-500", college: { name: "Design (NID, NIFT etc)", currentFee: 1800000, increaseRateLessThan10: 0.10, increaseRateMoreThan10: 0.08 } },
  { label: "ISB, XLRI, FMS & more", icon: BookOpen, color: "bg-orange-50 dark:bg-orange-950/40 border-orange-200 dark:border-orange-800", iconColor: "text-orange-600 dark:text-orange-400", selectedBg: "bg-orange-100 dark:bg-orange-900/50 border-orange-500", college: { name: "ISB, XLRI, FMS & more", currentFee: 2500000, increaseRateLessThan10: 0.07, increaseRateMoreThan10: 0.06 } },
  { label: "MBA in US", icon: Plane, color: "bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800", iconColor: "text-rose-600 dark:text-rose-400", selectedBg: "bg-rose-100 dark:bg-rose-900/50 border-rose-500", college: { name: "MBA in US", currentFee: 8000000, increaseRateLessThan10: 0.06, increaseRateMoreThan10: 0.05 } },
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
    if (step === 4 && !calc.result) {
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
      setStep(4);
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
    
    // Historical: 10 years back (simulated with reverse compound)
    const avgRate = calc.selectedCollege.increaseRateLessThan10;
    for (let i = -10; i <= 0; i++) {
      const fee = calc.selectedCollege.currentFee / Math.pow(1 + avgRate, Math.abs(i));
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

            {/* Step 2: College Fee Visualization */}
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
                    See how college fees have grown
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Pick a college category to visualize the trend.
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

                {/* Fee Visualization Chart */}
                {calc.selectedCollege && feeChartData.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-4 border border-primary/10">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="text-xs text-muted-foreground">Today's cost</p>
                          <p className="text-lg font-bold text-primary">{formatLakhs(calc.selectedCollege.currentFee)}</p>
                        </div>
                        <TrendingUp className="h-5 w-5 text-red-500" />
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">In 15 years</p>
                          <p className="text-lg font-bold text-red-500">{formatLakhs(feeChartData[feeChartData.length - 1]?.fee || 0)}</p>
                        </div>
                      </div>
                      <div className="h-40 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart
                            data={feeChartData}
                            margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
                          >
                            <defs>
                              <linearGradient id="feeGrad" x1="0" y1="0" x2="0" y2="1">
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
                            <ReferenceLine x={new Date().getFullYear()} stroke="hsl(var(--primary))" strokeDasharray="3 3" />
                            <Area
                              type="monotone"
                              dataKey="fee"
                              stroke="#ef4444"
                              strokeWidth={2}
                              fill="url(#feeGrad)"
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                      <p className="text-xs text-muted-foreground text-center mt-2">
                        <span className="text-red-500 font-semibold">
                          {Math.round(((feeChartData[feeChartData.length - 1]?.fee || 0) / calc.selectedCollege.currentFee - 1) * 100)}% increase
                        </span>{" "}
                        projected over 15 years
                      </p>
                    </div>
                  </motion.div>
                )}

                <Button
                  onClick={goNext}
                  className="w-full h-12 bg-gradient-to-r from-primary to-primary-dark hover:opacity-90"
                  disabled={!calc.selectedCollege}
                >
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            )}

            {/* Step 3: Child's Name + Customize Plan */}
            {step === 3 && (
              <motion.div key="s3" variants={fade} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }} className="space-y-6">
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
                <div className="space-y-3">
                  <Input
                    placeholder="Child's name"
                    value={calc.childName}
                    onChange={(e) => calc.setChildName(e.target.value)}
                    className="h-12 text-base text-center"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && calc.childName.trim()) goNext();
                    }}
                  />
                  {calc.childName.trim() && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-3"
                    >
                      <p className="text-sm text-primary font-medium text-center flex items-center justify-center gap-1">
                        <Sparkles className="h-3.5 w-3.5" />
                        Planning for {calc.childName}'s future
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

            {/* Step 4: Email Collection + Show SIP Result */}
            {step === 4 && (
              <motion.div key="s4" variants={fade} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }} className="space-y-6">
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
