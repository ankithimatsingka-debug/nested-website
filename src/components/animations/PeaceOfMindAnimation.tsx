export function PeaceOfMindAnimation() {
  return (
    <div className="w-32 h-32 relative flex items-center justify-center">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent rounded-full animate-[pulse_3s_ease-in-out_infinite]" />
      
      {/* Trend line */}
      <svg viewBox="0 0 120 80" className="absolute w-full h-full">
        {/* Grid lines */}
        <line x1="10" y1="70" x2="110" y2="70" stroke="hsl(var(--muted))" strokeWidth="0.5" opacity="0.3" />
        <line x1="10" y1="50" x2="110" y2="50" stroke="hsl(var(--muted))" strokeWidth="0.5" opacity="0.3" />
        <line x1="10" y1="30" x2="110" y2="30" stroke="hsl(var(--muted))" strokeWidth="0.5" opacity="0.3" />
        
        {/* Upward trend path */}
        <path
          d="M10 65 Q30 60, 40 55 T60 45 T80 30 T100 15"
          fill="none"
          stroke="url(#trendGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-[draw-line_2s_ease-out_forwards]"
          style={{ 
            strokeDasharray: 150,
            strokeDashoffset: 150,
            animation: 'draw-line 2s ease-out forwards'
          }}
        />
        
        {/* Gradient fill under line */}
        <path
          d="M10 65 Q30 60, 40 55 T60 45 T80 30 T100 15 L100 70 L10 70 Z"
          fill="url(#areaGradient)"
          className="animate-[fade-in_1s_ease-out_1s_forwards]"
          opacity="0"
        />
        
        <defs>
          <linearGradient id="trendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Heart icon with pulse */}
      <div className="absolute top-1 right-6 z-10">
        <div className="relative">
          <svg 
            viewBox="0 0 24 24" 
            className="w-8 h-8 text-rose-500 animate-[heartbeat_1.5s_ease-in-out_infinite]"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          {/* Pulse rings */}
          <div className="absolute inset-0 animate-ping">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-rose-400 opacity-30" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Checkmark badge */}
      <div className="absolute bottom-4 left-4 z-10 animate-[scale-in_0.5s_ease-out_1.5s_forwards] opacity-0 scale-0">
        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
