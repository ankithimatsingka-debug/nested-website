export function AllocationAnimation() {
  return (
    <div className="w-32 h-32 relative">
      {/* Animated Donut Chart */}
      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
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
          strokeDasharray="125.6 251.2"
          strokeDashoffset="0"
          className="animate-[draw-segment_1.5s_ease-out_forwards]"
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
          strokeDasharray="75.4 251.2"
          strokeDashoffset="-125.6"
          className="animate-[draw-segment_1.5s_ease-out_0.3s_forwards]"
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
          strokeDasharray="50.2 251.2"
          strokeDashoffset="-201"
          className="animate-[draw-segment_1.5s_ease-out_0.6s_forwards]"
          style={{ opacity: 0.85 }}
        />
      </svg>
      
      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xs font-medium text-muted-foreground">Portfolio</div>
        </div>
      </div>
      
      {/* Floating labels */}
      <div className="absolute -right-2 top-2 animate-[fade-in_0.5s_ease-out_1s_forwards] opacity-0">
        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">Equity</span>
      </div>
      <div className="absolute -left-2 top-1/2 animate-[fade-in_0.5s_ease-out_1.2s_forwards] opacity-0">
        <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">Debt</span>
      </div>
      <div className="absolute -right-1 bottom-4 animate-[fade-in_0.5s_ease-out_1.4s_forwards] opacity-0">
        <span className="text-xs font-medium text-amber-600 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded-full">Gold</span>
      </div>
    </div>
  );
}
