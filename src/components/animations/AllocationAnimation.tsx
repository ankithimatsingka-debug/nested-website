import { useEffect, useState } from "react";

// Define allocation presets that the pie chart will cycle through
const allocations = [
  { equity: 50, debt: 30, gold: 20 }, // Aggressive
  { equity: 40, debt: 40, gold: 20 }, // Balanced
  { equity: 30, debt: 50, gold: 20 }, // Conservative
  { equity: 60, debt: 25, gold: 15 }, // Growth
  { equity: 35, debt: 35, gold: 30 }, // Gold-heavy
];

// Convert percentage to strokeDasharray values (circumference = 2 * π * 40 ≈ 251.2)
const circumference = 251.2;

export function AllocationAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allocation, setAllocation] = useState(allocations[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allocations.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setAllocation(allocations[currentIndex]);
  }, [currentIndex]);

  // Calculate stroke values
  const equityDash = (allocation.equity / 100) * circumference;
  const debtDash = (allocation.debt / 100) * circumference;
  const goldDash = (allocation.gold / 100) * circumference;
  
  const equityOffset = 0;
  const debtOffset = -equityDash;
  const goldOffset = -(equityDash + debtDash);

  return (
    <div className="w-32 h-32 relative" role="img" aria-label="Portfolio allocation animation showing equity, debt, and gold segments dynamically adjusting">
      {/* Animated Donut Chart */}
      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90" style={{ willChange: 'transform' }} aria-hidden="true">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth="12"
          className="opacity-30"
        />
        {/* Equity segment - Blue */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="12"
          strokeDasharray={`${equityDash} ${circumference}`}
          strokeDashoffset={equityOffset}
          className="transition-all duration-1000 ease-in-out"
          style={{ opacity: 0.9 }}
        />
        {/* Debt segment - Secondary */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="hsl(var(--secondary))"
          strokeWidth="12"
          strokeDasharray={`${debtDash} ${circumference}`}
          strokeDashoffset={debtOffset}
          className="transition-all duration-1000 ease-in-out"
          style={{ opacity: 0.8 }}
        />
        {/* Gold segment - Amber */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="hsl(45 93% 47%)"
          strokeWidth="12"
          strokeDasharray={`${goldDash} ${circumference}`}
          strokeDashoffset={goldOffset}
          className="transition-all duration-1000 ease-in-out"
          style={{ opacity: 0.85 }}
        />
      </svg>
      
      {/* Center text with dynamic percentage */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xs font-medium text-muted-foreground">Portfolio</div>
        </div>
      </div>
      
      {/* Floating labels positioned outside the chart */}
      <div className="absolute -right-10 top-0">
        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
          Equity
        </span>
      </div>
      <div className="absolute -left-8 top-2">
        <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
          Debt
        </span>
      </div>
      <div className="absolute -left-8 bottom-2">
        <span className="text-xs font-medium text-amber-600 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded-full">
          Gold
        </span>
      </div>
    </div>
  );
}
