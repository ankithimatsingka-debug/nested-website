export function GrowthAnimation() {
  return (
    <div className="w-28 h-28 relative flex items-center justify-center overflow-hidden">
      {/* Ground */}
      <div className="absolute bottom-3 left-0 right-0 h-3 bg-gradient-to-t from-emerald-800/30 to-emerald-600/10 rounded-full" />
      
      {/* Growing tree/plant */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Trunk/stem */}
        <line
          x1="50"
          y1="85"
          x2="50"
          y2="40"
          stroke="hsl(152 60% 30%)"
          strokeWidth="4"
          strokeLinecap="round"
          className="animate-[grow-stem_1.5s_ease-out_forwards]"
          style={{
            strokeDasharray: 45,
            strokeDashoffset: 45
          }}
        />
        
        {/* Left branch */}
        <line
          x1="50"
          y1="55"
          x2="35"
          y2="45"
          stroke="hsl(152 60% 35%)"
          strokeWidth="2"
          strokeLinecap="round"
          className="animate-[grow-branch_0.5s_ease-out_1s_forwards]"
          style={{ opacity: 0 }}
        />
        
        {/* Right branch */}
        <line
          x1="50"
          y1="50"
          x2="65"
          y2="40"
          stroke="hsl(152 60% 35%)"
          strokeWidth="2"
          strokeLinecap="round"
          className="animate-[grow-branch_0.5s_ease-out_1.2s_forwards]"
          style={{ opacity: 0 }}
        />
        
        {/* Leaves/foliage - multiple circles for tree crown */}
        <circle cx="50" cy="30" r="15" fill="hsl(var(--primary))" className="animate-[bloom_0.5s_ease-out_1.5s_forwards] opacity-0" />
        <circle cx="38" cy="38" r="10" fill="hsl(var(--primary))" className="animate-[bloom_0.5s_ease-out_1.6s_forwards] opacity-0" style={{ opacity: 0.8 }} />
        <circle cx="62" cy="35" r="12" fill="hsl(var(--primary))" className="animate-[bloom_0.5s_ease-out_1.7s_forwards] opacity-0" style={{ opacity: 0.9 }} />
        <circle cx="45" cy="22" r="8" fill="hsl(var(--secondary))" className="animate-[bloom_0.5s_ease-out_1.8s_forwards] opacity-0" style={{ opacity: 0.7 }} />
        <circle cx="58" cy="25" r="9" fill="hsl(var(--secondary))" className="animate-[bloom_0.5s_ease-out_1.9s_forwards] opacity-0" style={{ opacity: 0.75 }} />
      </svg>
      
      {/* Coins/money growing */}
      <div className="absolute top-4 left-6 animate-[float-up_2s_ease-out_2s_forwards] opacity-0">
        <div className="w-4 h-4 bg-amber-400 rounded-full border-2 border-amber-500 flex items-center justify-center text-[8px] font-bold text-amber-800">₹</div>
      </div>
      <div className="absolute top-6 right-5 animate-[float-up_2s_ease-out_2.2s_forwards] opacity-0">
        <div className="w-3 h-3 bg-amber-400 rounded-full border border-amber-500 flex items-center justify-center text-[6px] font-bold text-amber-800">₹</div>
      </div>
      <div className="absolute top-2 right-10 animate-[float-up_2s_ease-out_2.4s_forwards] opacity-0">
        <div className="w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-amber-500 flex items-center justify-center text-[7px] font-bold text-amber-800">₹</div>
      </div>
      
      {/* Upward arrow indicator */}
      <div className="absolute bottom-0 right-2 animate-[fade-in_0.5s_ease-out_2.5s_forwards] opacity-0">
        <div className="flex items-center gap-0.5 text-emerald-500">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
          <span className="text-xs font-bold">12%</span>
        </div>
      </div>
    </div>
  );
}
