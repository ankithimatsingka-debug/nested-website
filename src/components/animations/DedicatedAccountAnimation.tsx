export function DedicatedAccountAnimation() {
  return (
    <div className="w-24 h-24 relative flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Book/Account base */}
        <rect
          x="20"
          y="25"
          width="60"
          height="55"
          rx="4"
          fill="hsl(var(--primary)/0.15)"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
        />
        
        {/* Book spine */}
        <rect
          x="20"
          y="25"
          width="8"
          height="55"
          fill="hsl(var(--primary)/0.3)"
        />
        
        {/* Graduation cap on top */}
        <g transform="translate(50, 18)">
          {/* Cap base */}
          <polygon
            points="-18,0 18,0 12,-8 -12,-8"
            fill="hsl(var(--secondary))"
            className="animate-[pulse_2s_ease-in-out_infinite]"
          />
          {/* Cap top */}
          <rect
            x="-8"
            y="-12"
            width="16"
            height="4"
            fill="hsl(var(--secondary))"
          />
          {/* Tassel */}
          <line
            x1="12"
            y1="-8"
            x2="20"
            y2="2"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeLinecap="round"
            className="animate-[swing_1.5s_ease-in-out_infinite]"
          />
          <circle
            cx="20"
            cy="4"
            r="3"
            fill="hsl(var(--primary))"
            className="animate-[swing_1.5s_ease-in-out_infinite]"
          />
        </g>
        
        {/* Child icon in book */}
        <g transform="translate(50, 52)">
          {/* Head */}
          <circle 
            cx="0" 
            cy="-8" 
            r="8" 
            fill="hsl(var(--secondary))"
          />
          {/* Body */}
          <path
            d="M-10 8 L-6 0 L6 0 L10 8 L6 16 L-6 16 Z"
            fill="hsl(var(--secondary))"
          />
        </g>
        
        {/* Coin dropping animation */}
        <g className="animate-[coinDrop_2s_ease-in-out_infinite]">
          <circle
            cx="70"
            cy="15"
            r="6"
            fill="hsl(var(--primary))"
            stroke="hsl(var(--primary)/0.5)"
            strokeWidth="1"
          />
          <text
            x="70"
            y="18"
            textAnchor="middle"
            fontSize="8"
            fill="hsl(var(--primary-foreground))"
            fontWeight="bold"
          >₹</text>
        </g>
        
        {/* Sparkles */}
        <circle 
          cx="75" 
          cy="40" 
          r="2" 
          fill="hsl(var(--secondary))"
          className="animate-[ping_2s_ease-in-out_infinite]"
          opacity="0.6"
        />
        <circle 
          cx="28" 
          cy="35" 
          r="2" 
          fill="hsl(var(--primary))"
          className="animate-[ping_2s_ease-in-out_0.5s_infinite]"
          opacity="0.5"
        />
      </svg>
      
      <style>{`
        @keyframes swing {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        @keyframes coinDrop {
          0%, 100% { opacity: 0; transform: translateY(-10px); }
          20% { opacity: 1; transform: translateY(0); }
          80% { opacity: 1; transform: translateY(0); }
          95% { opacity: 0; transform: translateY(10px); }
        }
      `}</style>
    </div>
  );
}
