export function RebalancingAnimation() {
  return (
    <div className="w-32 h-32 relative flex items-center justify-center">
      {/* Outer rotating ring */}
      <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeDasharray="8 12"
            className="opacity-30"
          />
        </svg>
      </div>
      
      {/* Counter-rotating inner ring */}
      <div className="absolute inset-4 animate-[spin_6s_linear_infinite_reverse]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="hsl(var(--secondary))"
            strokeWidth="2"
            strokeDasharray="6 10"
            className="opacity-40"
          />
        </svg>
      </div>
      
      {/* Center sync icon */}
      <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
        <svg 
          viewBox="0 0 24 24" 
          className="w-7 h-7 text-primary animate-[pulse_2s_ease-in-out_infinite]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
          <path d="M16 16h5v5" />
        </svg>
      </div>
      
      {/* Notification dot */}
      <div className="absolute top-2 right-4 w-4 h-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
        <span className="relative inline-flex h-4 w-4 rounded-full bg-secondary"></span>
      </div>
      
      {/* Floating arrows */}
      <div className="absolute top-6 left-4 animate-[bounce_2s_ease-in-out_infinite]">
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary/60" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </div>
      <div className="absolute bottom-6 right-4 animate-[bounce_2s_ease-in-out_infinite_0.5s]">
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-secondary/60" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </div>
  );
}
