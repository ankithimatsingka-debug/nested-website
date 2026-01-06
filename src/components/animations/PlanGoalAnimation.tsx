export function PlanGoalAnimation() {
  return (
    <div className="w-28 h-28 relative flex items-center justify-center">
      {/* Target circles */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Outer ring */}
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          className="opacity-20"
        />
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeDasharray="264"
          strokeDashoffset="264"
          className="animate-[draw-circle_1s_ease-out_forwards]"
        />
        
        {/* Middle ring */}
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="hsl(var(--secondary))"
          strokeWidth="2"
          className="opacity-20"
        />
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="hsl(var(--secondary))"
          strokeWidth="2"
          strokeDasharray="188"
          strokeDashoffset="188"
          className="animate-[draw-circle_1s_ease-out_0.3s_forwards]"
        />
        
        {/* Inner ring */}
        <circle
          cx="50"
          cy="50"
          r="18"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          className="opacity-20"
        />
        <circle
          cx="50"
          cy="50"
          r="18"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeDasharray="113"
          strokeDashoffset="113"
          className="animate-[draw-circle_1s_ease-out_0.6s_forwards]"
        />
        
        {/* Center dot / bullseye */}
        <circle
          cx="50"
          cy="50"
          r="6"
          fill="hsl(var(--secondary))"
          className="animate-[scale-in_0.3s_ease-out_1.2s_forwards] opacity-0"
          style={{ transformOrigin: '50px 50px' }}
        />
      </svg>
      
      {/* Arrow hitting target */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full animate-[arrow-hit_1.5s_ease-out_0.5s_forwards]"
          style={{ opacity: 0 }}
        >
          {/* Arrow */}
          <line x1="20" y1="20" x2="46" y2="46" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" />
          <polygon points="50,50 42,44 44,42" fill="hsl(var(--foreground))" />
          {/* Arrow feathers */}
          <line x1="20" y1="20" x2="25" y2="15" stroke="hsl(var(--foreground))" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="20" y1="20" x2="15" y2="25" stroke="hsl(var(--foreground))" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      
      {/* Success sparkles */}
      <div className="absolute top-2 right-2 animate-[sparkle_1s_ease-out_1.5s_forwards] opacity-0">
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-amber-400" fill="currentColor">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" />
        </svg>
      </div>
      <div className="absolute bottom-3 left-3 animate-[sparkle_1s_ease-out_1.7s_forwards] opacity-0">
        <svg viewBox="0 0 24 24" className="w-3 h-3 text-amber-400" fill="currentColor">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" />
        </svg>
      </div>
    </div>
  );
}
