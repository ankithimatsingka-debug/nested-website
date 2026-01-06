export function SafeSecureAnimation() {
  return (
    <div className="w-24 h-24 relative flex items-center justify-center">
      {/* Shield */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Outer glow */}
        <path
          d="M50 10 L85 25 L85 50 Q85 75 50 90 Q15 75 15 50 L15 25 Z"
          fill="hsl(var(--primary))"
          opacity="0.1"
          className="animate-[pulse_3s_ease-in-out_infinite]"
        />
        
        {/* Shield body */}
        <path
          d="M50 15 L80 28 L80 48 Q80 70 50 85 Q20 70 20 48 L20 28 Z"
          fill="url(#shieldGradient)"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
        />
        
        {/* Inner shield highlight */}
        <path
          d="M50 22 L72 32 L72 46 Q72 62 50 74 Q28 62 28 46 L28 32 Z"
          fill="hsl(var(--primary))"
          opacity="0.2"
        />
        
        {/* Checkmark */}
        <path
          d="M35 50 L45 60 L65 38"
          fill="none"
          stroke="hsl(var(--primary-foreground))"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-[draw-line_1.5s_ease-out_forwards]"
          style={{
            strokeDasharray: 50,
            strokeDashoffset: 50
          }}
        />
        
        <defs>
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--primary-dark, var(--primary)))" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Lock icon */}
      <div className="absolute bottom-1 right-1 animate-[scale-in_0.5s_ease-out_1s_forwards] opacity-0">
        <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-secondary-foreground" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
      </div>
      
      {/* Security sparkles */}
      <div className="absolute top-2 left-2 animate-[sparkle_2s_ease-in-out_infinite]">
        <div className="w-2 h-2 bg-primary rounded-full opacity-60" />
      </div>
      <div className="absolute top-4 right-3 animate-[sparkle_2s_ease-in-out_0.5s_infinite]">
        <div className="w-1.5 h-1.5 bg-secondary rounded-full opacity-60" />
      </div>
    </div>
  );
}
