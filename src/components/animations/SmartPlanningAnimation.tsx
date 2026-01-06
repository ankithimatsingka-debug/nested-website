export function SmartPlanningAnimation() {
  return (
    <div className="w-24 h-24 relative flex items-center justify-center">
      {/* Lightbulb with gears */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Rotating gear - large */}
        <g className="animate-[spin_8s_linear_infinite]" style={{ transformOrigin: '30px 35px' }}>
          <circle cx="30" cy="35" r="12" fill="hsl(var(--primary))" opacity="0.2" />
          <circle cx="30" cy="35" r="8" fill="hsl(var(--primary))" opacity="0.4" />
          {/* Gear teeth */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <rect
              key={i}
              x="28"
              y="21"
              width="4"
              height="6"
              fill="hsl(var(--primary))"
              opacity="0.3"
              transform={`rotate(${angle} 30 35)`}
            />
          ))}
        </g>
        
        {/* Rotating gear - small */}
        <g className="animate-[spin_6s_linear_infinite_reverse]" style={{ transformOrigin: '70px 65px' }}>
          <circle cx="70" cy="65" r="8" fill="hsl(var(--secondary))" opacity="0.2" />
          <circle cx="70" cy="65" r="5" fill="hsl(var(--secondary))" opacity="0.4" />
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <rect
              key={i}
              x="69"
              y="55"
              width="3"
              height="4"
              fill="hsl(var(--secondary))"
              opacity="0.3"
              transform={`rotate(${angle} 70 65)`}
            />
          ))}
        </g>
        
        {/* Lightbulb */}
        <g className="animate-[pulse_3s_ease-in-out_infinite]">
          <ellipse cx="50" cy="40" rx="18" ry="20" fill="hsl(45 93% 70%)" opacity="0.3" />
          <ellipse cx="50" cy="40" rx="14" ry="16" fill="hsl(45 93% 60%)" opacity="0.5" />
          <ellipse cx="50" cy="40" rx="10" ry="12" fill="hsl(45 93% 50%)" opacity="0.7" />
          {/* Bulb base */}
          <rect x="44" y="56" width="12" height="8" rx="2" fill="hsl(var(--muted))" />
          <rect x="46" y="64" width="8" height="3" rx="1" fill="hsl(var(--muted-foreground))" opacity="0.5" />
        </g>
        
        {/* Light rays */}
        <g className="animate-[pulse_2s_ease-in-out_infinite]">
          <line x1="50" y1="12" x2="50" y2="18" stroke="hsl(45 93% 50%)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <line x1="28" y1="25" x2="33" y2="29" stroke="hsl(45 93% 50%)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <line x1="72" y1="25" x2="67" y2="29" stroke="hsl(45 93% 50%)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        </g>
      </svg>
      
      {/* Floating sparkle */}
      <div className="absolute top-0 right-2 animate-[sparkle_2s_ease-in-out_infinite]">
        <svg viewBox="0 0 24 24" className="w-3 h-3 text-amber-400" fill="currentColor">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" />
        </svg>
      </div>
    </div>
  );
}
