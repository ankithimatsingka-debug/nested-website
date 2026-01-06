export function EasyFastAnimation() {
  return (
    <div className="w-24 h-24 relative flex items-center justify-center">
      {/* Stopwatch */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Watch body */}
        <circle cx="50" cy="55" r="35" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="3" />
        <circle cx="50" cy="55" r="30" fill="none" stroke="hsl(var(--muted))" strokeWidth="1" opacity="0.3" />
        
        {/* Time markers */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
          <line
            key={i}
            x1="50"
            y1="28"
            x2="50"
            y2={i % 3 === 0 ? "32" : "30"}
            stroke="hsl(var(--foreground))"
            strokeWidth={i % 3 === 0 ? "2" : "1"}
            opacity="0.5"
            transform={`rotate(${angle} 50 55)`}
          />
        ))}
        
        {/* Top button */}
        <rect x="46" y="12" width="8" height="10" rx="2" fill="hsl(var(--primary))" />
        
        {/* Side button */}
        <rect x="82" y="50" width="6" height="10" rx="1" fill="hsl(var(--secondary))" />
        
        {/* Animated hand */}
        <line
          x1="50"
          y1="55"
          x2="50"
          y2="32"
          stroke="hsl(var(--secondary))"
          strokeWidth="2"
          strokeLinecap="round"
          className="animate-[spin_4s_linear_infinite]"
          style={{ transformOrigin: '50px 55px' }}
        />
        
        {/* Center dot */}
        <circle cx="50" cy="55" r="3" fill="hsl(var(--primary))" />
        
        {/* 5 min text */}
        <text x="50" y="72" textAnchor="middle" fontSize="10" fill="hsl(var(--foreground))" fontWeight="bold" opacity="0.7">
          5m
        </text>
      </svg>
      
      {/* Speed lines */}
      <div className="absolute -right-1 top-1/2 -translate-y-1/2 space-y-1">
        <div className="w-4 h-0.5 bg-primary/40 rounded animate-[fade-in_0.5s_ease-out_infinite]" />
        <div className="w-3 h-0.5 bg-primary/30 rounded animate-[fade-in_0.5s_ease-out_0.2s_infinite]" />
        <div className="w-2 h-0.5 bg-primary/20 rounded animate-[fade-in_0.5s_ease-out_0.4s_infinite]" />
      </div>
      
      {/* Lightning bolt */}
      <div className="absolute -top-1 -left-1 animate-[pulse_1.5s_ease-in-out_infinite]">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber-400" fill="currentColor">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      </div>
    </div>
  );
}
