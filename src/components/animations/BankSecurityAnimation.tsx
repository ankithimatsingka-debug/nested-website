export function BankSecurityAnimation() {
  return (
    <div className="w-20 h-20 relative flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Vault door background */}
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="hsl(var(--muted))"
          stroke="hsl(var(--border))"
          strokeWidth="3"
        />
        
        {/* Vault door inner ring */}
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="4"
          opacity="0.3"
        />
        
        {/* Rotating dial marks */}
        <g className="animate-[spin_10s_linear_infinite]" style={{ transformOrigin: '50px 50px' }}>
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
            <line
              key={i}
              x1="50"
              y1="24"
              x2="50"
              y2={i % 3 === 0 ? "28" : "26"}
              stroke="hsl(var(--primary))"
              strokeWidth={i % 3 === 0 ? "2" : "1"}
              opacity="0.5"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
        </g>
        
        {/* Lock icon center */}
        <g className="animate-[pulse_3s_ease-in-out_infinite]">
          {/* Lock body */}
          <rect
            x="40"
            y="48"
            width="20"
            height="16"
            rx="3"
            fill="hsl(var(--primary))"
          />
          {/* Lock shackle */}
          <path
            d="M44 48 V42 A6 6 0 0 1 56 42 V48"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Keyhole */}
          <circle cx="50" cy="54" r="2" fill="hsl(var(--primary-foreground))" />
          <rect x="49" y="54" width="2" height="5" fill="hsl(var(--primary-foreground))" />
        </g>
        
        {/* Scanning line effect */}
        <line
          x1="20"
          y1="50"
          x2="80"
          y2="50"
          stroke="hsl(var(--secondary))"
          strokeWidth="1"
          opacity="0.5"
          className="animate-[scan-line_2s_ease-in-out_infinite]"
        />
      </svg>
      
      {/* Security pulse rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-16 h-16 rounded-full border border-primary/30 animate-ping" style={{ animationDuration: '3s' }} />
      </div>
    </div>
  );
}
