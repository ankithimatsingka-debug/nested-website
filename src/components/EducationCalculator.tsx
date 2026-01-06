import { useState } from "react";
import { Calculator, TrendingUp, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function EducationCalculator() {
  const [childAge, setChildAge] = useState<string>("");
  const [targetAmount, setTargetAmount] = useState<string>("");
  const [course, setCourse] = useState<string>("");
  const [result, setResult] = useState<{
    monthlyInvestment: number;
    totalYears: number;
    totalInvestment: number;
  } | null>(null);

  const calculateInvestment = () => {
    if (!childAge || !targetAmount || !course) return;

    const currentAge = parseInt(childAge);
    const target = parseInt(targetAmount);
    
    // Assume college starts at 18
    const yearsToInvest = 18 - currentAge;
    
    // Assuming 12% annual return (typical for equity mutual funds)
    const monthlyRate = 0.12 / 12;
    const totalMonths = yearsToInvest * 12;
    
    // SIP calculation: PMT = FV / [((1 + r)^n - 1) / r]
    const monthlyInvestment = target / (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate));
    
    setResult({
      monthlyInvestment: Math.round(monthlyInvestment),
      totalYears: yearsToInvest,
      totalInvestment: Math.round(monthlyInvestment * totalMonths)
    });
  };

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
              <Calculator className="h-5 w-5" />
              <span className="font-medium">Interactive Tool</span>
            </div>
            <h2 className="font-heading text-2xl font-bold mb-6">
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
                    />
                  </div>

                  <div>
                    <Label htmlFor="course" className="text-base font-medium">
                      Desired course/college
                    </Label>
                    <Select value={course} onValueChange={setCourse}>
                      <SelectTrigger className="mt-2 h-12">
                        <SelectValue placeholder="Select course type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engineering">Engineering (IIT/NIT)</SelectItem>
                        <SelectItem value="medical">Medical (MBBS)</SelectItem>
                        <SelectItem value="mba">MBA (IIM/Top B-Schools)</SelectItem>
                        <SelectItem value="general">General Graduation</SelectItem>
                        <SelectItem value="abroad">Study Abroad</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="targetAmount" className="text-base font-medium">
                      Target amount needed (₹)
                    </Label>
                    <Input
                      id="targetAmount"
                      type="number"
                      placeholder="e.g., 2500000"
                      value={targetAmount}
                      onChange={(e) => setTargetAmount(e.target.value)}
                      className="mt-2 h-12"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      Tip: Engineering ~₹25L, Medical ~₹50L, MBA ~₹30L
                    </p>
                  </div>

                  <Button 
                    onClick={calculateInvestment}
                    size="lg"
                    className="w-full h-12 font-medium shadow-md hover:shadow-lg transition-all"
                    disabled={!childAge || !targetAmount || !course}
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
                          <span>Assumes 12% annual returns from equity mutual funds</span>
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