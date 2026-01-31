export function DedicatedAccountAnimation() {
  return (
    <div className="w-24 h-24 relative flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Shield background */}
        <path
          d="M50 10 L85 25 L85 50 C85 70 70 85 50 95 C30 85 15 70 15 50 L15 25 Z"
          fill="hsl(var(--primary)/0.1)"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          className="animate-[pulse_3s_ease-in-out_infinite]"
        />
        
        {/* Inner shield glow */}
        <path
          d="M50 18 L78 30 L78 50 C78 66 66 78 50 86 C34 78 22 66 22 50 L22 30 Z"
          fill="hsl(var(--primary)/0.05)"
          stroke="none"
        />
        
        {/* Child silhouette */}
        <g transform="translate(50, 52)">
          {/* Head */}
          <circle 
            cx="0" 
            cy="-18" 
            r="10" 
            fill="hsl(var(--secondary))"
            className="animate-[pulse_2s_ease-in-out_infinite]"
          />
          {/* Body */}
          <path
            d="M-12 0 L-8 -8 L8 -8 L12 0 L8 15 L-8 15 Z"
            fill="hsl(var(--secondary))"
            className="animate-[pulse_2s_ease-in-out_0.2s_infinite]"
          />
        </g>
        
        {/* Lock icon at bottom */}
        <g transform="translate(50, 75)">
          <rect 
            x="-6" 
            y="-4" 
            width="12" 
            height="10" 
            rx="2" 
            fill="hsl(var(--primary))"
          />
          <path
            d="M-4 -4 L-4 -8 C-4 -12 4 -12 4 -8 L4 -4"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="0" cy="1" r="2" fill="hsl(var(--background))" />
        </g>
        
        {/* Sparkle effects */}
        <circle 
          cx="75" 
          cy="35" 
          r="3" 
          fill="hsl(var(--secondary))"
          className="animate-[ping_2s_ease-in-out_infinite]"
          opacity="0.6"
        />
        <circle 
          cx="25" 
          cy="40" 
          r="2" 
          fill="hsl(var(--primary))"
          className="animate-[ping_2s_ease-in-out_0.5s_infinite]"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
