import { useState, useEffect, useMemo } from "react";
import { Calculator, TrendingUp, Target, Check, ChevronsUpDown, Search, Mail, Loader2, ChevronRight, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { validateEmail as validateEmailUtil } from "@/lib/emailValidation";
import { educationCostData, calculateFutureCost, CollegeCourse } from "@/data/educationCostData";
import { supabase } from "@/integrations/supabase/client";
import { motion, AnimatePresence } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

const rotatingTexts = [
  "Expert-designed portfolios",
  "Tailored for education goals",
  "Ideal allocation and automatic rebalancing",
  "Flexible SIPs"
];

const AGE_CHIPS = [0, 2, 5, 8, 10, 14];

export function HeroEducationCalculator() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Wizard state
  const [currentStep, setCurrentStep] = useState(1);
  const [childAge, setChildAge] = useState<string>("");
  const [ageError, setAgeError] = useState<string>("");
  const [targetAmount, setTargetAmount] = useState<string>("");
  const [selectedCollege, setSelectedCollege] = useState<CollegeCourse | null>(null);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [userHasEditedAmount, setUserHasEditedAmount] = useState(false);
  const [result, setResult] = useState<{
    monthlyInvestment: number;
    totalYears: number;
    totalInvestment: number;
  } | null>(null);
  
  // Email gate state
  const [emailUnlocked, setEmailUnlocked] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSparkle, setShowSparkle] = useState(false);

  // Animated counters
  const animatedSIP = useCountUp(result?.monthlyInvestment || 0, 1000, emailUnlocked && !!result);
  const animatedTotal = useCountUp(result?.totalInvestment || 0, 1000, emailUnlocked && !!result);
  const animatedTarget = useCountUp(targetAmount ? parseInt(targetAmount) : 0, 1000, emailUnlocked && !!result);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const filteredColleges = useMemo(() => {
    if (!searchQuery) return educationCostData;
    const query = searchQuery.toLowerCase();
    return educationCostData.filter(college => 
      college.name.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  useEffect(() => {
    if (selectedCollege && childAge && !userHasEditedAmount) {
      const age = parseInt(childAge);
      if (!isNaN(age) && age >= 0 && age < 18) {
        const futureCost = calculateFutureCost(selectedCollege, age);
        if (futureCost > 0) {
          const roundedCost = Math.round(futureCost / 10000) * 10000;
          setTargetAmount(roundedCost.toString());
        }
      }
    }
  }, [selectedCollege, childAge, userHasEditedAmount]);

  useEffect(() => {
    setUserHasEditedAmount(false);
  }, [selectedCollege]);

  // Rotating text
  useEffect(() => {
    if (prefersReducedMotion) return;
    let interval: ReturnType<typeof setInterval>;
    const startInterval = () => {
      interval = setInterval(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
          setIsVisible(true);
        }, 300);
      }, 3000);
    };
    const handleVisibilityChange = () => {
      if (document.hidden) { clearInterval(interval); } else { startInterval(); }
    };
    startInterval();
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => { clearInterval(interval); document.removeEventListener('visibilitychange', handleVisibilityChange); };
  }, [prefersReducedMotion]);

  // Auto-advance steps
  useEffect(() => {
    if (childAge && !ageError && currentStep === 1) {
      const age = parseInt(childAge);
      if (!isNaN(age) && age >= 0 && age <= 17) {
        const timer = setTimeout(() => setCurrentStep(2), 500);
        return () => clearTimeout(timer);
      }
    }
  }, [childAge, ageError, currentStep]);

  useEffect(() => {
    if (selectedCollege && currentStep === 2) {
      const timer = setTimeout(() => setCurrentStep(3), 500);
      return () => clearTimeout(timer);
    }
  }, [selectedCollege, currentStep]);

  const liveCostPreview = useMemo(() => {
    if (selectedCollege && childAge) {
      const age = parseInt(childAge);
      if (!isNaN(age) && age >= 0 && age < 18) {
        const futureCost = calculateFutureCost(selectedCollege, age);
        if (futureCost > 0) return Math.round(futureCost / 10000) * 10000;
      }
    }
    return null;
  }, [selectedCollege, childAge]);

  const handleTargetAmountChange = (value: string) => {
    setTargetAmount(value);
    setUserHasEditedAmount(true);
  };

  const getAnnualRate = (years: number): number => {
    if (years <= 2) return 0.09;
    if (years <= 5) return 0.12;
    return 0.14;
  };

  const getDisclaimerText = (years: number): string => {
    if (years <= 2) return "Assumes 9% annual returns from debt & equity mutual funds";
    if (years <= 5) return "Assumes 12% annual returns from debt & equity mutual funds";
    return "Assumes 14% annual returns from equity mutual funds";
  };

  const calculateInvestment = () => {
    if (!childAge || !targetAmount || !selectedCollege) return;
    const currentAge = parseInt(childAge);
    const target = parseInt(targetAmount);
    if (isNaN(currentAge) || isNaN(target) || currentAge >= 18) return;
    const displayYears = 18 - currentAge;
    const calculationYears = 20 - currentAge;
    const annualRate = getAnnualRate(calculationYears);
    const monthlyRate = annualRate / 12;
    const totalMonths = calculationYears * 12;
    const monthlyInvestment = target / (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate));
    setResult({
      monthlyInvestment: Math.round(monthlyInvestment),
      totalYears: displayYears,
      totalInvestment: Math.round(monthlyInvestment * totalMonths)
    });
  };

  const validateEmail = (emailValue: string): boolean => {
    const result = validateEmailUtil(emailValue);
    return result.isValid;
  };
  
  const getEmailError = (emailValue: string): string | null => {
    const result = validateEmailUtil(emailValue);
    return result.error;
  };

  const handleEmailSubmit = async () => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) { setEmailError("Please enter your email address"); return; }
    if (!validateEmail(trimmedEmail)) { setEmailError("Please enter a valid email address"); return; }
    setIsSubmitting(true);
    setEmailError("");
    try {
      const { error } = await supabase
        .from('education_calculator_leads')
        .insert({
          email: trimmedEmail,
          child_age: childAge ? parseInt(childAge) : null,
          selected_college: selectedCollege?.name || null,
          target_amount: targetAmount ? parseInt(targetAmount) : null,
          monthly_sip: result?.monthlyInvestment || null,
          total_investment: result?.totalInvestment || null,
          years_to_invest: result?.totalYears || null,
        });
      if (error) console.error('Error saving lead:', error);
      setEmailUnlocked(true);
      setShowSparkle(true);
      setTimeout(() => setShowSparkle(false), 1500);
    } catch (err) {
      console.error('Error saving lead:', err);
      setEmailUnlocked(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressPercent = currentStep === 1 ? 33 : currentStep === 2 ? 66 : 100;

  const stepVariants = {
    enter: { opacity: 0, x: 30 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-primary overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-50" aria-hidden="true" style={{ contain: 'layout paint' }}></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl opacity-50" aria-hidden="true" style={{ contain: 'layout paint' }}></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Calculator - Left Side */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <Card className="w-full max-w-md shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-5 space-y-4">
                {/* Progress Bar */}
                <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                {/* Step Dots */}
                <div className="flex justify-center gap-2">
                  {[1, 2, 3].map((step) => (
                    <button
                      key={step}
                      onClick={() => {
                        if (step < currentStep || (step === 2 && childAge && !ageError) || (step === 3 && selectedCollege)) {
                          setCurrentStep(step);
                        }
                      }}
                      className={cn(
                        "w-7 h-7 rounded-full text-xs font-semibold transition-all duration-300 flex items-center justify-center",
                        currentStep === step
                          ? "bg-primary text-primary-foreground scale-110"
                          : step < currentStep
                          ? "bg-primary/20 text-primary cursor-pointer hover:bg-primary/30"
                          : "bg-muted text-muted-foreground"
                      )}
                      aria-label={`Step ${step}`}
                      disabled={step > currentStep && !(step === 2 && childAge && !ageError) && !(step === 3 && selectedCollege)}
                    >
                      {step < currentStep ? <Check className="h-3 w-3" /> : step}
                    </button>
                  ))}
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full mb-2">
                    <Calculator className="h-4 w-4" />
                    <span className="font-medium text-sm">Education Calculator</span>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {/* Step 1: Age */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      <Label htmlFor="heroChildAge" className="text-sm font-medium">
                        Your child's current age
                      </Label>
                      <div className="flex flex-wrap gap-1.5">
                        {AGE_CHIPS.map((age) => (
                          <button
                            key={age}
                            onClick={() => { setChildAge(age.toString()); setAgeError(""); }}
                            className={cn(
                              "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border",
                              childAge === age.toString()
                                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                                : "bg-background border-border hover:border-primary/50 hover:bg-primary/5 text-foreground"
                            )}
                          >
                            {age} yrs
                          </button>
                        ))}
                      </div>
                      <Input
                        id="heroChildAge"
                        type="number"
                        placeholder="Or type age (0-17)"
                        value={childAge}
                        onChange={(e) => {
                          const value = e.target.value;
                          setChildAge(value);
                          const ageNum = parseInt(value);
                          if (!isNaN(ageNum) && ageNum > 17) {
                            setAgeError("Child's age cannot be more than 17");
                          } else {
                            setAgeError("");
                          }
                        }}
                        className={cn("h-10", ageError && "border-destructive")}
                        min="0"
                        max="17"
                      />
                      {ageError && <p className="text-xs text-destructive">{ageError}</p>}
                      {childAge && !ageError && (
                        <Button onClick={() => setCurrentStep(2)} className="w-full h-10" size="sm">
                          Next: Choose College <ChevronRight className="ml-1 h-3.5 w-3.5" />
                        </Button>
                      )}
                    </motion.div>
                  )}

                  {/* Step 2: College */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      <Label className="text-sm font-medium">Desired course/college</Label>
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-full h-10 justify-between text-left font-normal"
                          >
                            {selectedCollege ? (
                              <span className="truncate text-sm">{selectedCollege.name}</span>
                            ) : (
                              <span className="text-muted-foreground text-sm">Search for a college...</span>
                            )}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 bg-background border shadow-lg z-50" align="start">
                          <Command shouldFilter={false}>
                            <div className="flex items-center border-b px-3">
                              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                              <input
                                placeholder="Search colleges..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
                              />
                            </div>
                            <CommandList className="max-h-[250px] overflow-y-auto">
                              <CommandEmpty>No college found.</CommandEmpty>
                              {filteredColleges.map((college) => (
                                <CommandItem
                                  key={college.name}
                                  value={college.name}
                                  onSelect={() => {
                                    setSelectedCollege(college);
                                    setOpen(false);
                                    setSearchQuery("");
                                  }}
                                  className="cursor-pointer"
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      selectedCollege?.name === college.name ? "opacity-100" : "opacity-0"
                                    )}
                                  />
                                  <div className="flex flex-col">
                                    <span className="text-sm">{college.name}</span>
                                    {college.currentFee > 0 && (
                                      <span className="text-xs text-muted-foreground">
                                        Current: ₹{college.currentFee.toLocaleString('en-IN')}
                                      </span>
                                    )}
                                  </div>
                                </CommandItem>
                              ))}
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      {/* Live Cost Preview */}
                      {liveCostPreview && !result && (
                        <motion.p
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs text-muted-foreground"
                        >
                          Estimated future cost: <span className="font-semibold text-foreground">~₹{liveCostPreview.toLocaleString('en-IN')}</span>
                        </motion.p>
                      )}
                      {selectedCollege && (
                        <Button onClick={() => setCurrentStep(3)} className="w-full h-10" size="sm">
                          Next: Calculate <ChevronRight className="ml-1 h-3.5 w-3.5" />
                        </Button>
                      )}
                    </motion.div>
                  )}

                  {/* Step 3: Target + Calculate */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      <div className="flex flex-wrap gap-1.5 text-xs">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                          Age: {childAge} yrs
                        </span>
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full font-medium truncate max-w-[180px]">
                          {selectedCollege?.name}
                        </span>
                      </div>
                      <div>
                        <Label htmlFor="heroTargetAmount" className="text-sm font-medium">
                          Target amount needed (₹)
                        </Label>
                        <div className="relative">
                          <Input
                            id="heroTargetAmount"
                            type="text"
                            placeholder="e.g., 25,00,000"
                            value={emailUnlocked && targetAmount ? parseInt(targetAmount).toLocaleString('en-IN') : ""}
                            onChange={(e) => {
                              const rawValue = e.target.value.replace(/,/g, '');
                              if (rawValue === '' || /^\d+$/.test(rawValue)) {
                                handleTargetAmountChange(rawValue);
                              }
                            }}
                            className={cn(
                              "mt-1.5 h-10",
                              !emailUnlocked && targetAmount && "blur-md select-none pointer-events-none"
                            )}
                            disabled={!emailUnlocked && !!targetAmount}
                            readOnly={!emailUnlocked && !!targetAmount}
                          />
                          {!emailUnlocked && targetAmount && (
                            <div className="absolute inset-0 mt-1.5 flex items-center justify-center bg-muted/50 rounded-md">
                              <span className="text-sm text-muted-foreground font-medium">₹XX,XX,XXX</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <Button 
                        onClick={calculateInvestment}
                        size="sm"
                        className="w-full h-10 font-medium shadow-md hover:shadow-lg transition-all"
                        disabled={!childAge || !targetAmount || !selectedCollege || !!ageError}
                      >
                        <Calculator className="mr-2 h-4 w-4" />
                        Show My Investment Plan
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Results */}
                {result && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className={cn(
                      "bg-gradient-primary rounded-xl p-5 text-white mt-3 relative overflow-hidden",
                      showSparkle && "sparkle-burst"
                    )}
                  >
                    {showSparkle && (
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(4)].map((_, i) => (
                          <Sparkles
                            key={i}
                            className="absolute text-yellow-300 animate-ping"
                            style={{
                              top: `${20 + Math.random() * 60}%`,
                              left: `${10 + Math.random() * 80}%`,
                              animationDelay: `${i * 0.15}s`,
                              animationDuration: '0.8s',
                              width: 14,
                              height: 14,
                            }}
                          />
                        ))}
                      </div>
                    )}
                    <div className="text-center mb-3">
                      <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-90" />
                      <h3 className="font-heading text-lg font-bold">Your Investment Plan</h3>
                    </div>

                    <div className="space-y-3">
                      <div className="text-center">
                        <div className={cn(
                          "text-lg font-bold mb-1 transition-all duration-500",
                          !emailUnlocked && "blur-md select-none"
                        )}>
                          {emailUnlocked 
                            ? `₹${animatedSIP.toLocaleString('en-IN')}`
                            : "₹XX,XXX"
                          }
                        </div>
                        <div className="text-sm opacity-90">Monthly SIP Required</div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/20">
                        <div className="text-center">
                          <div className={cn(
                            "text-xl font-bold transition-all duration-500",
                            !emailUnlocked && "blur-md select-none"
                          )}>
                            {emailUnlocked 
                              ? `₹${(animatedTotal / 100000).toFixed(1)}L`
                              : "₹X.XL"
                            }
                          </div>
                          <div className="text-xs opacity-80">Total Investment</div>
                        </div>
                        <div className="text-center">
                          <div className={cn(
                            "text-xl font-bold transition-all duration-500",
                            !emailUnlocked && "blur-md select-none"
                          )}>
                            {emailUnlocked 
                              ? `₹${(animatedTarget / 100000).toFixed(1)}L`
                              : "₹XX.XL"
                            }
                          </div>
                          <div className="text-xs opacity-80">Estimated value in {result.totalYears} years</div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/20">
                        {!emailUnlocked ? (
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="h-4 w-4 text-yellow-300" />
                              <span className="font-bold text-yellow-300">
                                Enter your email to unlock
                              </span>
                            </div>
                            <div className="space-y-2">
                              <Input
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setEmail(value);
                                  const error = getEmailError(value);
                                  setEmailError(error || "");
                                }}
                                onBlur={() => {
                                  const error = getEmailError(email);
                                  if (error) setEmailError(error);
                                }}
                                className={cn(
                                  "bg-white/10 border-2 border-yellow-300 text-white placeholder:text-white/60 h-10 text-sm ring-2 ring-yellow-300/50",
                                  emailError && "border-red-300",
                                  email.trim() && validateEmail(email) && "border-green-400"
                                )}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' && validateEmail(email)) handleEmailSubmit();
                                }}
                              />
                              {emailError && (
                                <p className="text-xs text-red-200">{emailError}</p>
                              )}
                            </div>
                            <Button 
                              onClick={handleEmailSubmit}
                              size="sm"
                              className="w-full bg-white text-primary hover:bg-white/90 h-10"
                              disabled={isSubmitting || !email.trim() || !validateEmail(email)}
                            >
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />
                                  Unlocking...
                                </>
                              ) : (
                                "Unlock Your Plan"
                              )}
                            </Button>
                          </div>
                        ) : (
                          <>
                            <div className="flex items-center gap-2 text-xs opacity-90 mb-3">
                              <Target className="h-3.5 w-3.5" />
                              <span>{getDisclaimerText(result.totalYears)}</span>
                            </div>
                            <Button 
                              variant="secondary"
                              size="sm"
                              className="w-full bg-white text-primary hover:bg-white/90 h-10"
                              asChild
                            >
                              <a 
                                href="https://play.google.com/store/apps/details?id=com.nexted.app" 
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                Customise Plan In App
                              </a>
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Content - Right Side */}
          <div className="text-center lg:text-left space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Welcome to{" "}
                <span className="text-white/90">
                  Nested
                </span>
              </h1>
              <p className="font-body text-xl md:text-2xl text-white/80">
                Save for your child's education dreams
              </p>

              {/* Rotating Text */}
              <div className="h-16 min-h-[4rem] flex items-center justify-center lg:justify-start" aria-live="polite" aria-atomic="true">
                <p 
                  className={`font-body text-lg md:text-xl lg:[font-size:22px] text-white font-medium transition-opacity duration-300 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {rotatingTexts[currentTextIndex]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
