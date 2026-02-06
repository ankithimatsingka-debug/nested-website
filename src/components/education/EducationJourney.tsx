import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Mail,
  Loader2,
  Search,
  Shield,
  RefreshCw,
  BarChart3,
  TrendingUp,
  GraduationCap,
  Heart,
  Clock,
  AlertTriangle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import {
  useEducationCalculator,
  formatINR,
  formatLakhs,
  formatLakhsShort,
} from "@/hooks/useEducationCalculator";
import { useCountUp } from "@/hooks/useCountUp";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts";

type Step = 1 | 2 | 3 | 4 | 5 | "reveal";

const TOTAL_STEPS = 5;

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
      onClick={goBack}
      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors mb-1"
    >
      <ArrowLeft className="h-3 w-3" /> Back
    </button>
  );

  return (
    <div className={cn("w-full max-w-lg mx-auto", compact ? "px-0" : "px-4")}>
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

            {/* Step 1: Problem Awareness */}
            {step === 1 && (
              <motion.div key="s1" variants={fade} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }} className="space-y-6">
                <div className="flex justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <AlertTriangle className="h-7 w-7 text-secondary animate-pulse" />
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground leading-snug">
                    Most parents don't plan early.
                  </h2>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      For <span className="font-bold text-secondary">65 out of 100</span> families, college fees become a financial burden.
                    </p>
                    <div className="flex items-center justify-center gap-2 py-2">
                      <div className="flex -space-x-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div
                            key={i}
                            className={cn(
                              "w-3 h-3 rounded-full border-2 border-card",
                              i < 3 ? "bg-secondary" : "bg-muted"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Even <span className="font-semibold text-primary">₹50–₹300 a day</span>, saved consistently, compounds quietly.
                    </p>
                  </div>
                </div>

                <div className="pt-2 space-y-3">
                  <Button onClick={goNext} className="w-full h-12 text-base bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 transition-opacity">
                    Let's build a plan in 60 seconds <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-[11px] text-muted-foreground text-center">Free · No signup required</p>
                </div>
              </motion.div>
            )}

            {/* Step 2: Child Personalisation */}
            {step === 2 && (
              <motion.div key="s2" variants={fade} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }} className="space-y-6">
                <BackButton />
                <div className="flex justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Heart className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Who are we building this for?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    This plan will be created especially for your child.
                  </p>
                </div>
                <div className="space-y-3">
                  <Input
                    placeholder="Child's name"
                    value={calc.childName}
                    onChange={(e) => calc.setChildName(e.target.value)}
                    className="h-12 text-base text-center"
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && calc.childName.trim()) goNext();
                    }}
                  />
                  {calc.childName.trim() && (
                    <motion.p
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-sm text-primary font-medium text-center flex items-center justify-center gap-1"
                    >
                      <Sparkles className="h-3.5 w-3.5" />
                      Planning for {calc.childName}'s future
                    </motion.p>
                  )}
                </div>
                <Button
                  onClick={goNext}
                  className="w-full h-12 bg-gradient-to-r from-primary to-primary-dark hover:opacity-90"
                  disabled={!calc.childName.trim()}
                >
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            )}

            {/* Step 3: Timeline with Slider */}
            {step === 3 && (
              <motion.div key="s3" variants={fade} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }} className="space-y-6">
                <BackButton />
                <div className="flex justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-info/10 flex items-center justify-center">
                    <Clock className="h-7 w-7 text-info" />
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    When will {childDisplay} need this?
                  </h3>
                </div>

                {/* Years display */}
                <div className="text-center">
                  <div className="inline-flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-bold text-primary">{calc.yearsToGoal}</span>
                    <span className="text-lg text-muted-foreground">years from now</span>
                  </div>
                </div>

                {/* Slider */}
                <div className="px-2 space-y-3">
                  <Slider
                    value={[calc.yearsToGoal]}
                    onValueChange={([v]) => calc.setYearsToGoal(v)}
                    min={1}
                    max={20}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1 year</span>
                    <span>20 years</span>
                  </div>
                </div>

                {/* Or type */}
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs text-muted-foreground">or type</span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <Input
                  type="number"
                  min={1}
                  max={20}
                  value={calc.yearsToGoal}
                  onChange={(e) => {
                    const v = parseInt(e.target.value);
                    if (v >= 1 && v <= 20) calc.setYearsToGoal(v);
                  }}
                  className="h-10 text-center text-base w-24 mx-auto"
                />

                {/* Dynamic reassurance */}
                <motion.p
                  key={calc.yearsToGoal}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-muted-foreground italic text-center"
                >
                  {calc.yearsToGoal <= 3
                    ? "We prioritise safety for short-term goals."
                    : calc.yearsToGoal <= 8
                    ? "A balanced approach for medium-term goals."
                    : "We let time work in your child's favour."}
                </motion.p>

                <Button
                  onClick={goNext}
                  className="w-full h-12 bg-gradient-to-r from-primary to-primary-dark hover:opacity-90"
                >
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            )}

            {/* Step 4: Dream College */}
            {step === 4 && (
              <motion.div key="s4" variants={fade} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }} className="space-y-6">
                <BackButton />
                <div className="flex justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-success/10 flex items-center justify-center">
                    <GraduationCap className="h-7 w-7 text-success" />
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Is there a dream college?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Type a college or course name to see today's cost.
                  </p>
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
                      autoFocus
                    />
                  </div>
                  {showSearchResults && calc.filteredColleges.length > 0 && !calc.selectedCollege && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute z-10 w-full mt-1 bg-popover border border-border rounded-xl shadow-lg max-h-80 overflow-y-auto"
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

                {calc.selectedCollege && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-primary/5 rounded-xl p-4 border border-primary/10"
                  >
                    <p className="text-sm text-muted-foreground">
                      Typical cost today: <span className="font-bold text-primary text-base">{calc.currentCostDisplay}</span>
                    </p>
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

            {/* Step 5: Email Gate */}
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
                    Where should we send {childDisplay}'s savings snapshot?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    A simple, personalised view of how this could grow over time.
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
                      autoFocus
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
              <motion.div key="reveal" variants={fade} initial="enter" animate="center" exit="exit" transition={{ duration: 0.5 }} className="space-y-8">
                <BackButton />
                {/* Primary highlight */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="text-center space-y-3 p-6 rounded-2xl border-2 border-primary/20"
                  style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.05), hsl(var(--secondary) / 0.05))" }}
                >
                  <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Monthly saving for {childDisplay}
                  </p>
                  <p className="font-heading text-3xl md:text-4xl font-bold text-primary">
                    ₹{formatINR(animatedSIP)}
                    <span className="text-base font-normal text-muted-foreground"> /month</span>
                  </p>
                </motion.div>

                {/* Supporting metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-xl bg-muted/50 border border-border/50">
                    <p className="text-lg font-bold text-foreground">{formatLakhsShort(animatedTotal)}</p>
                    <p className="text-xs text-muted-foreground mt-1">Total invested</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-muted/50 border border-border/50">
                    <p className="text-lg font-bold text-foreground">{formatLakhsShort(animatedTarget)}</p>
                    <p className="text-xs text-muted-foreground mt-1">Estimated at goal</p>
                  </div>
                </div>

                {/* Chart with invested + FD comparison */}
                {calc.chartData.length > 1 && (
                  <div className="space-y-3">
                    <div className="h-52 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={calc.chartData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
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
                            label={{ value: "Years", position: "insideBottom", offset: -2, fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                          />
                          <YAxis
                            tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(v) => v >= 100000 ? `${(v / 100000).toFixed(0)}L` : `${(v / 1000).toFixed(0)}K`}
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
                          <Area
                            type="monotone"
                            dataKey="amount"
                            stroke="hsl(var(--primary))"
                            strokeWidth={2.5}
                            fill="url(#sipGrowth)"
                          />
                          <Area
                            type="monotone"
                            dataKey="fd"
                            stroke="hsl(var(--warning))"
                            strokeWidth={1.5}
                            strokeDasharray="6 3"
                            fill="none"
                          />
                          <Area
                            type="monotone"
                            dataKey="invested"
                            stroke="hsl(var(--muted-foreground))"
                            strokeWidth={1.5}
                            strokeDasharray="4 4"
                            fill="none"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="text-xs text-muted-foreground text-center italic">
                      This is how steady saving unlocks {childDisplay}'s education goal.
                    </p>
                  </div>
                )}

                {/* Trust & Differentiation */}
                <div className="space-y-4 pt-2">
                  <div className="space-y-3">
                    {[
                      { icon: Shield, color: "text-primary", bg: "bg-primary/10", text: `A separate account dedicated to ${childDisplay}` },
                      { icon: Sparkles, color: "text-secondary", bg: "bg-secondary/10", text: `Curated selection of mutual funds for ${childDisplay}'s needs` },
                      { icon: RefreshCw, color: "text-success", bg: "bg-success/10", text: "Portfolio rebalancing as the goal approaches" },
                      { icon: BarChart3, color: "text-info", bg: "bg-info/10", text: "Continuous tracking so parents stay on course without constant decisions" },
                    ].map(({ icon: Icon, color, bg, text }, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.15 }}
                        className="flex items-start gap-3"
                      >
                        <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", bg)}>
                          <Icon className={cn("h-4 w-4", color)} />
                        </div>
                        <p className="text-sm text-muted-foreground pt-1">{text}</p>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-sm text-foreground font-medium text-center pt-2">
                    You save regularly. <span className="text-primary">Nested</span> takes care of the rest.
                  </p>
                </div>

                {/* Final CTA */}
                <Button
                  className="w-full h-12 bg-gradient-to-r from-primary to-primary-dark hover:opacity-90"
                  asChild
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.nexted.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Customise plan with Nested MFs to reach goals faster <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
