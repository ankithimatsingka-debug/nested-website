export function TransparentReportAnimation() {
  return (
    <div className="w-20 h-20 relative flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Document background */}
        <rect
          x="20"
          y="10"
          width="60"
          height="75"
          rx="4"
          fill="hsl(var(--background))"
          stroke="hsl(var(--border))"
          strokeWidth="2"
        />
        
        {/* Document fold corner */}
        <path
          d="M65 10 L80 10 L80 25 Z"
          fill="hsl(var(--muted))"
          stroke="hsl(var(--border))"
          strokeWidth="1"
        />
        <path
          d="M65 10 L65 25 L80 25"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="2"
        />
        
        {/* Document lines - animated */}
        <rect x="28" y="30" width="35" height="4" rx="2" fill="hsl(var(--primary))" opacity="0.6" className="animate-[fade-in_0.5s_ease-out_0.2s_forwards]" style={{ opacity: 0 }} />
        <rect x="28" y="40" width="44" height="3" rx="1.5" fill="hsl(var(--muted))" className="animate-[fade-in_0.5s_ease-out_0.4s_forwards]" style={{ opacity: 0 }} />
        <rect x="28" y="48" width="40" height="3" rx="1.5" fill="hsl(var(--muted))" className="animate-[fade-in_0.5s_ease-out_0.6s_forwards]" style={{ opacity: 0 }} />
        <rect x="28" y="56" width="36" height="3" rx="1.5" fill="hsl(var(--muted))" className="animate-[fade-in_0.5s_ease-out_0.8s_forwards]" style={{ opacity: 0 }} />
        
        {/* Chart/graph at bottom */}
        <g className="animate-[fade-in_0.5s_ease-out_1s_forwards]" style={{ opacity: 0 }}>
          <rect x="30" y="72" width="6" height="8" fill="hsl(var(--primary))" opacity="0.5" />
          <rect x="40" y="68" width="6" height="12" fill="hsl(var(--primary))" opacity="0.7" />
          <rect x="50" y="65" width="6" height="15" fill="hsl(var(--secondary))" opacity="0.8" />
          <rect x="60" y="62" width="6" height="18" fill="hsl(var(--secondary))" />
        </g>
      </svg>
      
      {/* Magnifying glass for transparency */}
      <div className="absolute -bottom-1 -right-1 animate-[scale-in_0.5s_ease-out_1.2s_forwards]" style={{ opacity: 0, transform: 'scale(0)' }}>
        <div className="w-7 h-7 bg-background rounded-full border-2 border-secondary flex items-center justify-center shadow-md">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </div>
      </div>
      
      {/* Checkmark badge */}
      <div className="absolute -top-1 -right-2 animate-[scale-in_0.3s_ease-out_1.4s_forwards]" style={{ opacity: 0, transform: 'scale(0)' }}>
        <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
