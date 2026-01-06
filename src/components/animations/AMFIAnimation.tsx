export function AMFIAnimation() {
  return (
    <div className="w-20 h-20 relative flex items-center justify-center">
      {/* Certificate/badge */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Outer ring with rotating dash */}
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeDasharray="8 4"
          className="animate-[spin_20s_linear_infinite]"
          opacity="0.3"
        />
        
        {/* Shield body */}
        <path
          d="M50 12 L80 25 L80 45 Q80 70 50 88 Q20 70 20 45 L20 25 Z"
          fill="url(#amfiGradient)"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
        />
        
        {/* Inner pattern */}
        <path
          d="M50 22 L70 32 L70 44 Q70 62 50 76 Q30 62 30 44 L30 32 Z"
          fill="none"
          stroke="hsl(var(--primary-foreground))"
          strokeWidth="1"
          opacity="0.3"
        />
        
        {/* Checkmark */}
        <path
          d="M38 48 L46 56 L62 38"
          fill="none"
          stroke="hsl(var(--primary-foreground))"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-[draw-line_1.5s_ease-out_forwards]"
          style={{
            strokeDasharray: 40,
            strokeDashoffset: 40
          }}
        />
        
        <defs>
          <linearGradient id="amfiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Floating stars */}
      <div className="absolute -top-1 right-0 animate-[sparkle_2s_ease-in-out_infinite]">
        <svg viewBox="0 0 24 24" className="w-3 h-3 text-amber-400" fill="currentColor">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" />
        </svg>
      </div>
      <div className="absolute bottom-1 -left-1 animate-[sparkle_2s_ease-in-out_0.7s_infinite]">
        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-amber-400" fill="currentColor">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" />
        </svg>
      </div>
    </div>
  );
}
