const PositioningSection = () => {
  return (
    <section className="px-6 py-16 md:py-24 relative overflow-hidden">
      {/* Pastel background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Title */}
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-10 md:mb-14">
          Where does SuperFD fit?
        </h2>

        {/* Risk-Return Spectrum Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-lg border border-white/50">
          {/* Labels */}
          <div className="flex justify-between items-end mb-6">
            <div className="text-center">
              <span className="font-body text-xs md:text-sm text-amber-600 font-medium block mb-1">Lower Risk</span>
              <span className="font-heading text-base md:text-lg font-semibold text-amber-700">FD</span>
            </div>
            <div className="text-center transform -translate-y-2">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-2">
                Sweet Spot
              </div>
              <span className="font-heading text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">SuperFD</span>
            </div>
            <div className="text-center">
              <span className="font-body text-xs md:text-sm text-red-500 font-medium block mb-1">Higher Risk</span>
              <span className="font-heading text-base md:text-lg font-semibold text-red-600">Equity</span>
            </div>
          </div>

          {/* Spectrum Bar */}
          <div className="relative h-4 rounded-full bg-gradient-to-r from-amber-200 via-blue-400 to-red-300 overflow-visible shadow-inner">
            {/* SuperFD marker */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border-4 border-white shadow-lg" />
          </div>

          {/* Return Labels */}
          <div className="flex justify-between mt-4">
            <span className="font-body text-xs md:text-sm text-amber-600 font-medium">~6% p.a.</span>
            <span className="font-body text-sm md:text-base text-blue-600 font-semibold">Up to 11% p.a.</span>
            <span className="font-body text-xs md:text-sm text-red-500 font-medium">Variable</span>
          </div>
        </div>

        {/* Supporting Text */}
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-10">
          SuperFD invests in mutual fund strategies designed to target better returns than fixed deposits without volatility of share market.
        </p>
      </div>
    </section>
  );
};

export default PositioningSection;
