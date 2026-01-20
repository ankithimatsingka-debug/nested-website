const PositioningSection = () => {
  return (
    <section className="px-6 py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-10 md:mb-14">
          Where does SuperFD fit?
        </h2>

        {/* Risk-Return Spectrum */}
        <div className="relative mb-10">
          {/* Labels */}
          <div className="flex justify-between items-end mb-4">
            <div className="text-center">
              <span className="font-body text-sm text-muted-foreground block mb-1">Lower Risk</span>
              <span className="font-heading text-base md:text-lg font-medium text-foreground">FD</span>
            </div>
            <div className="text-center">
              <span className="font-body text-xs text-primary font-medium block mb-1">Sweet Spot</span>
              <span className="font-heading text-lg md:text-xl font-bold text-primary">SuperFD</span>
            </div>
            <div className="text-center">
              <span className="font-body text-sm text-muted-foreground block mb-1">Higher Risk</span>
              <span className="font-heading text-base md:text-lg font-medium text-foreground">Equity</span>
            </div>
          </div>

          {/* Spectrum Bar */}
          <div className="relative h-3 rounded-full bg-gradient-to-r from-muted via-primary/60 to-muted overflow-hidden">
            {/* SuperFD marker */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg" />
          </div>

          {/* Return Labels */}
          <div className="flex justify-between mt-3">
            <span className="font-body text-xs text-muted-foreground">~6% p.a.</span>
            <span className="font-body text-xs text-primary font-medium">Up to 11% p.a.</span>
            <span className="font-body text-xs text-muted-foreground">Variable</span>
          </div>
        </div>

        {/* Supporting Text */}
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          SuperFD invests in mutual fund strategies designed to target better returns than fixed deposits without volatility of share market.
        </p>
      </div>
    </section>
  );
};

export default PositioningSection;
