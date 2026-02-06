import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Loader2, Check, Search, Shield, RefreshCw, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  useEducationCalculator,
  TIME_HORIZONS,
  formatINR,
  formatLakhs,
  formatLakhsShort,
  type TimeHorizon,
} from "@/hooks/useEducationCalculator";
import { useCountUp } from "@/hooks/useCountUp";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7 | "reveal";

const TOTAL_STEPS = 7;

const fade = {
  enter: { opacity: 0, y: 16 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export function EducationJourney({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState<Step>(1);
  const calc = useEducationCalculator();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Animated counters for reveal
  const animatedSIP = useCountUp(calc.result?.monthlyInvestment || 0, 1200, calc.emailUnlocked && !!calc.result);
  const animatedTotal = useCountUp(calc.result?.totalInvestment || 0, 1200, calc.emailUnlocked && !!calc.result);
  const animatedTarget = useCountUp(calc.result?.targetAmount || 0, 1200, calc.emailUnlocked && !!calc.result);

  // Auto-calculate when reaching email step
  useEffect(() => {
    if (step === 7 && !calc.result) {
      calc.calculate();
    }
  }, [step, calc.result, calc.calculate]);

  const goNext = () => {
    if (typeof step === "number" && step < TOTAL_STEPS) {
      setStep((step + 1) as Step);
    }
  };

  const handleEmailSubmitAndReveal = async () => {
    await calc.handleEmailSubmit();
    setStep("reveal");
  };

  const progressPercent = typeof step === "number" ? (step / TOTAL_STEPS) * 100 : 100;

  const childDisplay = calc.childName || "your child";

  return (
    <div className={cn("w-full max-w-md mx-auto", compact ? "px-0" : "px-4")}>
      <div className="bg-card rounded-2xl shadow-lg border border-border/50 overflow-hidden">
        {/* Progress bar */}
        <div className="w-full h-1 bg-muted">
          <div
            className="h-full bg-primary rounded-r-full transition-all duration-700 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className={cn("p-6", compact && "p-5")}>
          <AnimatePresence mode="wait">
            {/* Step 1: Emotional Entry */}
            {step === 1 && (
              <motion.div key="s1" variants={fade} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }} className="text-center space-y-6">
                <div className="space-y-3">
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground leading-snug">
                    Small savings today.<br />Big freedom for your child tomorrow.
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Build a simple education plan in under 60 seconds.
                  </p>
                </div>
                <Button onClick={goNext} className="w-full h-12">
                  Let's start <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            )}

            {/* Step 2: Child Personalisation */}
            {step === 2 && (
              <motion.div key="s2" variants={fade} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Who are we building this for?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    This plan will be created especially for your child.
                  </p>
                </div>
                <div className="space-y-2">
                  <Input
                    placeholder="Child's name"
                    value={calc.childName}
                    onChange={(e) => calc.setChildName(e.target.value)}
                    className="h-12 text-base"
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && calc.childName.trim()) goNext();
                    }}
                  />
                  {calc.childName.trim() && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-primary font-medium"
                    >
                      Planning for {calc.childName}'s future ✨
                    </motion.p>
                  )}
                </div>
                <Button
                  onClick={goNext}
                  className="w-full h-12"
                  disabled={!calc.childName.trim()}
                >
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            )}

            {/* Step 3: Time Horizon */}
            {step === 3 && (
              <motion.div key="s3" variants={fade} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    When will you need this money for {childDisplay}?
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {TIME_HORIZONS.map((h) => (
                    <button
                      key={h.id}
                      onClick={() => {
                        calc.setSelectedHorizon(h);
                        setTimeout(goNext, 400);
                      }}
                      className={cn(
                        "text-left p-4 rounded-xl border-2 transition-all duration-200",
                        calc.selectedHorizon?.id === h.id
                          ? "border-primary bg-primary/5 shadow-sm"
                          : "border-border hover:border-primary/40 hover:bg-muted/50"
                      )}
                    >
                      <span className="font-medium text-foreground text-sm">{h.label}</span>
                    </button>
                  ))}
                </div>
                {calc.selectedHorizon && (
                  <motion.p
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-muted-foreground italic"
                  >
                    {calc.selectedHorizon.reassurance}
                  </motion.p>
                )}
              </motion.div>
            )}

            {/* Step 4: Education Goal Selection */}
            {step === 4 && (
              <motion.div key="s4" variants={fade} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    What are you planning for?
                  </h3>
                </div>
                <div className="relative">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      ref={searchInputRef}
                      placeholder="Type a college or course name…"
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
                    <div className="absolute z-10 w-full mt-1 bg-popover border border-border rounded-xl shadow-lg max-h-48 overflow-y-auto">
                      {calc.filteredColleges.map((college) => (
                        <button
                          key={college.name}
                          onClick={() => {
                            calc.setSelectedCollege(college);
                            calc.setSearchQuery("");
                            setShowSearchResults(false);
                          }}
                          className="w-full text-left px-4 py-3 text-sm hover:bg-muted/50 transition-colors border-b border-border/30 last:border-0"
                        >
                          {college.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {calc.selectedCollege && (
                  <motion.p
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-muted-foreground"
                  >
                    Typical cost today: <span className="font-semibold text-foreground">{calc.currentCostDisplay}</span>
                  </motion.p>
                )}
                <Button
                  onClick={goNext}
                  className="w-full h-12"
                  disabled={!calc.selectedCollege}
                >
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            )}

            {/* Step 5: Reality Nudge */}
            {step === 5 && (
              <motion.div key="s5" variants={fade} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }} className="space-y-6 text-center">
                <div className="space-y-4 py-4">
                  <p className="font-heading text-lg font-semibold text-foreground leading-snug">
                    Most parents don't plan early — and pay for it later.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    For <span className="font-semibold text-foreground">65 out of 100</span> families, education becomes a financial burden.
                  </p>
                </div>
                <Button onClick={goNext} className="w-full h-12">
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            )}

            {/* Step 6: Habit Framing */}
            {step === 6 && (
              <motion.div key="s6" variants={fade} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }} className="space-y-6 text-center">
                <div className="space-y-4 py-4">
                  <p className="font-heading text-lg font-semibold text-foreground leading-snug">
                    It doesn't start with big money.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Even <span className="font-semibold text-foreground">₹50–₹300 a day</span>, saved consistently, compounds quietly as {childDisplay} grows.
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    Consistency matters more than timing.
                  </p>
                </div>
                <Button onClick={goNext} className="w-full h-12">
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            )}

            {/* Step 7: Email Gate */}
            {step === 7 && (
              <motion.div key="s7" variants={fade} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }} className="space-y-5">
                <div className="space-y-1">
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
                  className="w-full h-12"
                  disabled={calc.isSubmitting || !calc.email.trim() || !calc.isEmailValid}
                >
                  {calc.isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Preparing…
                    </>
                  ) : (
                    <>Show {childDisplay}'s plan</>
                  )}
                </Button>
              </motion.div>
            )}

            {/* Reveal: Steps 8, 9, 10 combined */}
            {step === "reveal" && calc.result && (
              <motion.div key="reveal" variants={fade} initial="enter" animate="center" exit="exit" transition={{ duration: 0.5 }} className="space-y-6">
                {/* Step 8: Reward Reveal */}
                <div className="text-center space-y-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Monthly saving for {childDisplay}</p>
                    <p className="font-heading text-3xl md:text-4xl font-bold text-primary">
                      ₹{formatINR(animatedSIP)} <span className="text-base font-normal text-muted-foreground">/month</span>
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div className="text-center">
                      <p className="text-lg font-bold text-foreground">
                        {formatLakhsShort(animatedTotal)}
                      </p>
                      <p className="text-xs text-muted-foreground">Total amount invested</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-foreground">
                        {formatLakhsShort(animatedTarget)}
                      </p>
                      <p className="text-xs text-muted-foreground">Estimated value at goal</p>
                    </div>
                  </div>
                </div>

                {/* Step 9: Chart */}
                {calc.chartData.length > 1 && (
                  <div className="space-y-2">
                    <div className="h-44 w-full">
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
                            formatter={(value: number) => [formatLakhs(value), "Accumulated"]}
                            labelFormatter={(label) => `Year ${label}`}
                            contentStyle={{
                              background: "hsl(var(--card))",
                              border: "1px solid hsl(var(--border))",
                              borderRadius: "8px",
                              fontSize: "12px",
                            }}
                          />
                          <Area
                            type="monotone"
                            dataKey="amount"
                            stroke="hsl(var(--primary))"
                            strokeWidth={2}
                            fill="url(#sipGrowth)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="text-xs text-muted-foreground text-center italic">
                      This is how steady saving unlocks {childDisplay}'s education goal.
                    </p>
                  </div>
                )}

                {/* Step 10: Trust & Differentiation */}
                <div className="space-y-3 pt-2 border-t border-border">
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-3">
                      <Shield className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm text-muted-foreground">A separate account dedicated to {childDisplay}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <RefreshCw className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm text-muted-foreground">Risk automatically adjusted as the goal approaches</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <BarChart3 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm text-muted-foreground">Ongoing tracking so parents stay on course without constant decisions</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground font-medium text-center pt-1">
                    You save regularly. Nested takes care of the rest.
                  </p>
                </div>

                {/* Final CTA */}
                <Button
                  className="w-full h-12"
                  asChild
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.nexted.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Customise {childDisplay}'s plan in the app
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
