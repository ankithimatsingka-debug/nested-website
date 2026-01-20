import { motion } from "framer-motion";

const PositioningSection = () => {
  return (
    <section className="px-6 py-16 md:py-24 relative overflow-hidden">
      {/* Pastel background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-10 md:mb-14"
        >
          Where does SuperFD fit?
        </motion.h2>

        {/* Risk-Return Spectrum Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-lg border border-white/50"
        >
          {/* Labels */}
          <div className="flex justify-between items-end mb-6">
            <div className="text-center">
              <span className="font-body text-xs md:text-sm text-amber-600 font-medium block mb-1">Lower Risk</span>
              <span className="font-heading text-base md:text-lg font-semibold text-amber-700">FD</span>
            </div>
            <motion.div 
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4, type: "spring", stiffness: 200 }}
              className="text-center transform -translate-y-2"
            >
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-2">
                Sweet Spot
              </div>
              <span className="font-heading text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">SuperFD</span>
            </motion.div>
            <div className="text-center">
              <span className="font-body text-xs md:text-sm text-red-500 font-medium block mb-1">Higher Risk</span>
              <span className="font-heading text-base md:text-lg font-semibold text-red-600">Equity</span>
            </div>
          </div>

          {/* Spectrum Bar */}
          <div className="relative h-4 rounded-full bg-gradient-to-r from-amber-200 via-blue-400 to-red-300 shadow-inner flex items-center">
            {/* SuperFD marker */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5, type: "spring", stiffness: 300 }}
              className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border-4 border-white shadow-lg" 
            />
          </div>

          {/* Return Labels */}
          <div className="flex justify-between mt-4">
            <span className="font-body text-xs md:text-sm text-amber-600 font-medium">~6% p.a.</span>
            <span className="font-body text-sm md:text-base text-blue-600 font-semibold">Up to 11% p.a.</span>
            <span className="font-body text-xs md:text-sm text-red-500 font-medium">Variable</span>
          </div>
        </motion.div>

        {/* Supporting Text */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-10"
        >
          SuperFD invests in mutual fund strategies designed to target better returns than fixed deposits without volatility of share market.
        </motion.p>
      </div>
    </section>
  );
};

export default PositioningSection;
