import { useState, useEffect, useMemo } from "react";
import { Calculator, TrendingUp, Target, Check, ChevronsUpDown, Search } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { educationCostData, calculateFutureCost, CollegeCourse } from "@/data/educationCostData";

export function EducationCalculator() {
  const [childAge, setChildAge] = useState<string>("");
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
      if (!isNaN(age) && age > 0 && age < 18) {
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
    
    // Assume college starts at 18
    const yearsToInvest = 18 - currentAge;
    
    // Get rate based on investment horizon
    const annualRate = getAnnualRate(yearsToInvest);
    const monthlyRate = annualRate / 12;
    const totalMonths = yearsToInvest * 12;
    
    // SIP calculation: PMT = FV / [((1 + r)^n - 1) / r]
    const monthlyInvestment = target / (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate));
    
    setResult({
      monthlyInvestment: Math.round(monthlyInvestment),
      totalYears: yearsToInvest,
      totalInvestment: Math.round(monthlyInvestment * totalMonths)
    });
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
              Education Cost <span className="text-primary">Calculator</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Begin planning your child's future
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
                      onChange={(e) => setChildAge(e.target.value)}
                      className="mt-2 h-12"
                      min="0"
                      max="17"
                    />
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
                          className="w-full mt-2 h-12 justify-between text-left font-normal"
                        >
                          {selectedCollege ? (
                            <span className="truncate">{selectedCollege.name}</span>
                          ) : (
                            <span className="text-muted-foreground">Search for a college or course...</span>
                          )}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
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
                    <Input
                      id="targetAmount"
                      type="number"
                      placeholder="e.g., 2500000"
                      value={targetAmount}
                      onChange={(e) => handleTargetAmountChange(e.target.value)}
                      className="mt-2 h-12"
                    />
                    {selectedCollege && childAge && yearsUntilCollege > 0 && selectedCollege.currentFee > 0 && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Projected cost in {yearsUntilCollege} years • Feel free to adjust
                      </p>
                    )}
                    {(!selectedCollege || !childAge) && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Select a college and enter age to auto-calculate
                      </p>
                    )}
                  </div>

                  <Button 
                    onClick={calculateInvestment}
                    size="lg"
                    className="w-full h-12 font-medium shadow-md hover:shadow-lg transition-all"
                    disabled={!childAge || !targetAmount || !selectedCollege}
                  >
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculate My Plan
                  </Button>
                </div>

                {result && (
                  <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                    <div className="text-center mb-6">
                      <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-90" />
                      <h3 className="font-heading text-2xl font-bold">Your Investment Plan</h3>
                    </div>

                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-xl font-bold mb-2">
                          ₹{result.monthlyInvestment.toLocaleString('en-IN')}
                        </div>
                        <div className="text-lg opacity-90">Monthly SIP Required</div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                        <div className="text-center">
                          <div className="text-2xl font-bold">{result.totalYears}</div>
                          <div className="text-sm opacity-80">Years to Invest</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">
                            ₹{(result.totalInvestment / 100000).toFixed(1)}L
                          </div>
                          <div className="text-sm opacity-80">Total Investment</div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/20">
                        <div className="flex items-center gap-2 text-sm opacity-90 mb-4">
                          <Target className="h-4 w-4" />
                          <span>{getDisclaimerText(result.totalYears)}</span>
                        </div>
                        <Button 
                          variant="secondary"
                          size="lg"
                          className="w-full bg-white text-primary hover:bg-white/90"
                        >
                          Start Investing Today
                        </Button>
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
