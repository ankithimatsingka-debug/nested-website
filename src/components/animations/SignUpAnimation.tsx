export function SignUpAnimation() {
  return (
    <div className="w-28 h-28 relative flex items-center justify-center">
      {/* Form card */}
      <div className="w-20 h-24 bg-background rounded-lg shadow-lg border border-border/50 p-2 relative overflow-hidden">
        {/* Form fields animating */}
        <div className="space-y-2">
          <div className="h-2 bg-muted rounded animate-[fill-field_2s_ease-out_infinite]" style={{ width: '100%' }} />
          <div className="h-2 bg-muted rounded animate-[fill-field_2s_ease-out_0.3s_infinite]" style={{ width: '80%' }} />
          <div className="h-2 bg-muted rounded animate-[fill-field_2s_ease-out_0.6s_infinite]" style={{ width: '90%' }} />
          <div className="h-2 bg-muted rounded animate-[fill-field_2s_ease-out_0.9s_infinite]" style={{ width: '70%' }} />
        </div>
        
        {/* Submit button */}
        <div className="absolute bottom-2 left-2 right-2">
          <div className="h-4 bg-primary/80 rounded animate-[pulse_2s_ease-in-out_infinite]" />
        </div>
        
        {/* Typing cursor */}
        <div className="absolute top-2 right-3 w-0.5 h-2 bg-primary animate-[blink_1s_step-end_infinite]" />
      </div>
      
      {/* Floating checkmark */}
      <div className="absolute -top-1 -right-1 animate-[scale-in_0.3s_ease-out_1.5s_forwards] opacity-0 scale-0">
        <div className="w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      
      {/* User avatar appearing */}
      <div className="absolute -bottom-1 -left-1 animate-[fade-in_0.5s_ease-out_1s_forwards] opacity-0">
        <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
