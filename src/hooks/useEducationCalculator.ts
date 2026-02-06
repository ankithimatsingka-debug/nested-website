import { useState, useMemo, useCallback } from "react";
import { validateEmail as validateEmailUtil } from "@/lib/emailValidation";
import { educationCostData, calculateFutureCost, CollegeCourse } from "@/data/educationCostData";
import { supabase } from "@/integrations/supabase/client";

export type TimeHorizon = {
  id: string;
  label: string;
  years: number;
  equivalentAge: number;
  reassurance: string;
};

export const TIME_HORIZONS: TimeHorizon[] = [
  { id: "short", label: "In the next few years", years: 3, equivalentAge: 15, reassurance: "We prioritise safety." },
  { id: "school", label: "During school years", years: 8, equivalentAge: 10, reassurance: "A balanced approach for medium-term goals." },
  { id: "college", label: "For college", years: 13, equivalentAge: 5, reassurance: "We let time work in your child's favour." },
  { id: "longterm", label: "For long-term dreams", years: 18, equivalentAge: 0, reassurance: "We let time work in your child's favour." },
];

export type CalculatorResult = {
  monthlyInvestment: number;
  totalYears: number;
  totalInvestment: number;
  targetAmount: number;
};

export type ChartDataPoint = {
  year: number;
  amount: number;
  invested: number;
  fd: number;
  goal: number;
};

export function formatINR(amount: number): string {
  return amount.toLocaleString("en-IN");
}

export function formatLakhs(amount: number): string {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)} Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)} Lakhs`;
  return `₹${formatINR(amount)}`;
}

export function formatLakhsShort(amount: number): string {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)} Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(0)}L`;
  return `₹${formatINR(amount)}`;
}

function getAnnualRate(years: number): number {
  if (years <= 2) return 0.09;
  if (years <= 5) return 0.12;
  return 0.14;
}

const FD_ANNUAL_RATE = 0.07;

export function useEducationCalculator() {
  const [childName, setChildName] = useState("");
  const [yearsToGoal, setYearsToGoal] = useState(13);
  const [selectedHorizon, setSelectedHorizon] = useState<TimeHorizon | null>(null);
  const [selectedCollege, setSelectedCollege] = useState<CollegeCourse | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailUnlocked, setEmailUnlocked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<CalculatorResult | null>(null);

  // Derive equivalentAge from yearsToGoal
  const equivalentAge = useMemo(() => Math.max(0, 18 - yearsToGoal), [yearsToGoal]);

  const filteredColleges = useMemo(() => {
    if (!searchQuery || searchQuery.length < 1) return [];
    const query = searchQuery.toLowerCase();
    return educationCostData
      .filter((c) => c.name.toLowerCase().includes(query))
      .slice(0, 15);
  }, [searchQuery]);

  const currentCostDisplay = useMemo(() => {
    if (!selectedCollege) return null;
    return formatLakhs(selectedCollege.currentFee);
  }, [selectedCollege]);

  const calculate = useCallback(() => {
    if (!selectedCollege) return;

    const futureCost = calculateFutureCost(selectedCollege, equivalentAge);
    const target = Math.round(futureCost / 10000) * 10000;

    const calculationYears = 20 - equivalentAge;
    const displayYears = 18 - equivalentAge;
    const annualRate = getAnnualRate(calculationYears);
    const monthlyRate = annualRate / 12;
    const totalMonths = calculationYears * 12;
    const monthlyInvestment = target / ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);

    setResult({
      monthlyInvestment: Math.round(monthlyInvestment),
      totalYears: displayYears,
      totalInvestment: Math.round(monthlyInvestment * totalMonths),
      targetAmount: target,
    });
  }, [selectedCollege, equivalentAge]);

  const chartData = useMemo((): ChartDataPoint[] => {
    if (!result) return [];
    const calculationYears = 20 - equivalentAge;
    const annualRate = getAnnualRate(calculationYears);
    const monthlyRate = annualRate / 12;
    const fdMonthlyRate = FD_ANNUAL_RATE / 12;
    const data: ChartDataPoint[] = [];

    for (let year = 0; year <= result.totalYears; year++) {
      const months = year * 12;
      const amount = result.monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
      const invested = result.monthlyInvestment * months;
      const fd = result.monthlyInvestment * ((Math.pow(1 + fdMonthlyRate, months) - 1) / fdMonthlyRate);
      data.push({
        year,
        amount: Math.round(amount),
        invested: Math.round(invested),
        fd: Math.round(fd),
        goal: result.targetAmount,
      });
    }
    return data;
  }, [result, equivalentAge]);

  const handleEmailSubmit = useCallback(async () => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setEmailError("Please enter your email address");
      return;
    }
    const validation = validateEmailUtil(trimmedEmail);
    if (!validation.isValid) {
      setEmailError(validation.error || "Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setEmailError("");

    try {
      await supabase.from("education_calculator_leads").insert({
        email: trimmedEmail,
        child_age: equivalentAge,
        selected_college: selectedCollege?.name || null,
        target_amount: result?.targetAmount || null,
        monthly_sip: result?.monthlyInvestment || null,
        total_investment: result?.totalInvestment || null,
        years_to_invest: result?.totalYears || null,
      });
    } catch (err) {
      console.error("Error saving lead:", err);
    } finally {
      setIsSubmitting(false);
      setEmailUnlocked(true);
    }
  }, [email, equivalentAge, selectedCollege, result]);

  const isEmailValid = useMemo(() => {
    return validateEmailUtil(email.trim()).isValid;
  }, [email]);

  return {
    childName,
    setChildName,
    yearsToGoal,
    setYearsToGoal,
    equivalentAge,
    selectedHorizon,
    setSelectedHorizon,
    selectedCollege,
    setSelectedCollege,
    searchQuery,
    setSearchQuery,
    filteredColleges,
    currentCostDisplay,
    email,
    setEmail,
    emailError,
    setEmailError,
    emailUnlocked,
    isSubmitting,
    isEmailValid,
    result,
    chartData,
    calculate,
    handleEmailSubmit,
  };
}
