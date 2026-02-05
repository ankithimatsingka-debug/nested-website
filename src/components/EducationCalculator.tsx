import { useState, useEffect, useMemo } from "react";
import { Calculator, TrendingUp, Target, Check, ChevronsUpDown, Search, Mail, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { validateEmail as validateEmailUtil } from "@/lib/emailValidation";
import { educationCostData, calculateFutureCost, CollegeCourse } from "@/data/educationCostData";
import { supabase } from "@/integrations/supabase/client";

export function EducationCalculator() {
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

  // Filter colleges based on search query
  const filteredColleges = useMemo(() => {
    if (!searchQuery) return educationCostData;
    const query = searchQuery.toLowerCase();
    return educationCostData.filter(college => 
      college.name.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Auto-populate target amount when college or age changes
  useEffect(() => {
    if (selectedCollege && childAge && !userHasEditedAmount) {
      const age = parseInt(childAge);
      if (!isNaN(age) && age >= 0 && age < 18) {
        const futureCost = calculateFutureCost(selectedCollege, age);
        if (futureCost > 0) {
          // Round to nearest 10,000
          const roundedCost = Math.round(futureCost / 10000) * 10000;
          setTargetAmount(roundedCost.toString());
        }
      }
    }
  }, [selectedCollege, childAge, userHasEditedAmount]);

  // Reset userHasEditedAmount when college changes
  useEffect(() => {
    setUserHasEditedAmount(false);
  }, [selectedCollege]);

  const handleTargetAmountChange = (value: string) => {
    setTargetAmount(value);
    setUserHasEditedAmount(true);
  };

  // Get annual rate based on years to invest
  const getAnnualRate = (years: number): number => {
    if (years <= 2) return 0.09;
    if (years <= 5) return 0.12;
    return 0.14;
  };

  // Get disclaimer text based on years to invest
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
    
    // Display years (for "Estimated cost in X years")
    const displayYears = 18 - currentAge;
    
    // Calculation years (for SIP computation)
    const calculationYears = 20 - currentAge;
    
    // Get rate based on investment horizon
    const annualRate = getAnnualRate(calculationYears);
    const monthlyRate = annualRate / 12;
    const totalMonths = calculationYears * 12;
    
    // SIP calculation: PMT = FV / [((1 + r)^n - 1) / r]
    const monthlyInvestment = target / (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate));
    
    setResult({
      monthlyInvestment: Math.round(monthlyInvestment),
      totalYears: displayYears,
      totalInvestment: Math.round(monthlyInvestment * totalMonths)
    });
  };

  // Email validation using shared utility
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
    if (!trimmedEmail) {
      setEmailError("Please enter your email address");
      return;
    }
    if (!validateEmail(trimmedEmail)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    setEmailError("");
    
    try {
      // Save lead to database
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
      
      if (error) {
        console.error('Error saving lead:', error);
        // Still unlock even if save fails - don't block user
      }
      
      setEmailUnlocked(true);
    } catch (err) {
      console.error('Error saving lead:', err);
      // Still unlock even if save fails
      setEmailUnlocked(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const yearsUntilCollege = childAge ? 18 - parseInt(childAge) : 0;

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
              <Calculator className="h-5 w-5" />
              <span className="font-medium">Interactive Tool</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Education Cost <span className="text-primary block sm:inline">Calculator</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Estimate your child's education cost
            </p>
          </div>

          <Card className="shadow-glow border-0">
            <CardHeader className="pb-8">
            </CardHeader>
            <CardContent className="space-y-8">
              <div className={result ? "grid md:grid-cols-2 gap-8" : "max-w-md mx-auto"}>
                <div className="space-y-6">
                  {/* Child's Age - First */}
                  <div>
                    <Label htmlFor="childAge" className="text-base font-medium">
                      Your child's current age
                    </Label>
                    <Input
                      id="childAge"
                      type="number"
                      placeholder="e.g., 5"
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
                      className={cn("mt-2 h-12", ageError && "border-destructive")}
                      min="0"
                      max="17"
                      aria-describedby={ageError ? "age-error" : "age-hint"}
                      aria-invalid={!!ageError}
                    />
                    <p id="age-hint" className="sr-only">Enter your child's current age between 0 and 17 years</p>
                    {ageError && (
                      <p id="age-error" className="text-sm text-destructive mt-1" role="alert">{ageError}</p>
                    )}
                  </div>

                  {/* Searchable College Dropdown - Second */}
                  <div>
                    <Label className="text-base font-medium">
                      Desired course/college
                    </Label>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={open}
                          aria-haspopup="listbox"
                          aria-label={selectedCollege ? `Selected: ${selectedCollege.name}. Click to change.` : "Search for a college or course"}
                          className="w-full mt-2 h-12 justify-between text-left font-normal"
                        >
                          {selectedCollege ? (
                            <span className="truncate">{selectedCollege.name}</span>
                          ) : (
                            <span className="text-muted-foreground">Search for a college or course...</span>
                          )}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" aria-hidden="true" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 bg-background border shadow-lg z-50" align="start">
                        <Command shouldFilter={false}>
                          <div className="flex items-center border-b px-3">
                            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                            <input
                              placeholder="Search colleges and courses..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
                            />
                          </div>
                          <CommandList className="max-h-[300px] overflow-y-auto">
                            <CommandEmpty>No college or course found.</CommandEmpty>
                            <CommandGroup>
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
                                    <span>{college.name}</span>
                                    {college.currentFee > 0 && (
                                      <span className="text-xs text-muted-foreground">
                                        Current: ₹{college.currentFee.toLocaleString('en-IN')}
                                      </span>
                                    )}
                                  </div>
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Target Amount - Third (Auto-populated but editable) */}
                  <div>
                    <Label htmlFor="targetAmount" className="text-base font-medium">
                      Target amount needed (₹)
                    </Label>
                    <div className="relative">
                      <Input
                        id="targetAmount"
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
                          "mt-2 h-12",
                          !emailUnlocked && targetAmount && "blur-md select-none pointer-events-none"
                        )}
                        aria-describedby="target-hint"
                        disabled={!emailUnlocked && !!targetAmount}
                        readOnly={!emailUnlocked && !!targetAmount}
                      />
                      {!emailUnlocked && targetAmount && (
                        <div className="absolute inset-0 mt-2 flex items-center justify-center bg-muted/50 rounded-md">
                          <span className="text-sm text-muted-foreground font-medium">₹XX,XX,XXX</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <Button 
                    onClick={calculateInvestment}
                    size="lg"
                    className="w-full h-12 font-medium shadow-md hover:shadow-lg transition-all min-h-[44px]"
                    disabled={!childAge || !targetAmount || !selectedCollege || !!ageError}
                    aria-describedby="calculate-hint"
                  >
                    <Calculator className="mr-2 h-5 w-5" aria-hidden="true" />
                    Show My Investment Plan
                  </Button>
                  <p id="calculate-hint" className="sr-only">
                    {!childAge || !targetAmount || !selectedCollege 
                      ? "Please fill in all fields to calculate your investment plan"
                      : "Click to calculate your monthly investment plan"
                    }
                  </p>
                </div>

                {result && (
                  <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                    <div className="text-center mb-6">
                      <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-90" />
                      <h3 className="font-heading text-2xl font-bold">Your Investment Plan</h3>
                    </div>

                    <div className="space-y-6">
                      <div className="text-center">
                        <div className={cn(
                          "text-xl font-bold mb-2 transition-all duration-500 animate-pulse",
                          !emailUnlocked && "blur-md select-none"
                        )}>
                          {emailUnlocked 
                            ? `₹${result.monthlyInvestment.toLocaleString('en-IN')}`
                            : "₹XX,XXX"
                          }
                        </div>
                        <div className="text-lg opacity-90">Monthly SIP Required</div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                        <div className="text-center">
                          <div className={cn(
                            "text-2xl font-bold transition-all duration-500",
                            !emailUnlocked && "blur-md select-none"
                          )}>
                            {emailUnlocked 
                              ? `₹${(result.totalInvestment / 100000).toFixed(1)}L`
                              : "₹X.XL"
                            }
                          </div>
                          <div className="text-sm opacity-80">Total Investment</div>
                        </div>
                        <div className="text-center">
                          <div className={cn(
                            "text-2xl font-bold transition-all duration-500",
                            !emailUnlocked && "blur-md select-none"
                          )}>
                            {emailUnlocked 
                              ? `₹${(parseInt(targetAmount) / 100000).toFixed(1)}L`
                              : "₹XX.XL"
                            }
                          </div>
                          <div className="text-sm opacity-80">Estimated value in {result.totalYears} years</div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/20">
                        {!emailUnlocked ? (
                          <div className="space-y-4">
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="h-4 w-4 text-yellow-300" />
                              <span className="font-bold text-yellow-300">
                                Enter your email to unlock your personalized plan
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
                                  // Real-time validation with disposable email check
                                  const error = getEmailError(value);
                                  setEmailError(error || "");
                                }}
                                onBlur={() => {
                                  // Validate on blur if field has content
                                  const error = getEmailError(email);
                                  if (error) setEmailError(error);
                                }}
                                className={cn(
                                  "bg-white/10 border-2 border-yellow-300 text-white placeholder:text-white/60 h-12 ring-2 ring-yellow-300/50",
                                  emailError && "border-red-300",
                                  email.trim() && validateEmail(email) && "border-green-400"
                                )}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' && validateEmail(email)) handleEmailSubmit();
                                }}
                              />
                              {emailError && (
                                <p className="text-sm text-red-200">{emailError}</p>
                              )}
                            </div>
                            <Button 
                              onClick={handleEmailSubmit}
                              size="lg"
                              className="w-full bg-white text-primary hover:bg-white/90"
                              disabled={isSubmitting || !email.trim() || !validateEmail(email)}
                            >
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                  Unlocking...
                                </>
                              ) : (
                                "Unlock Your Plan"
                              )}
                            </Button>
                          </div>
                        ) : (
                          <>
                            <div className="flex items-center gap-2 text-sm opacity-90 mb-4">
                              <Target className="h-4 w-4" />
                              <span>{getDisclaimerText(result.totalYears)}</span>
                            </div>
                            <Button 
                              variant="secondary"
                              size="lg"
                              className="w-full bg-white text-primary hover:bg-white/90"
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
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
