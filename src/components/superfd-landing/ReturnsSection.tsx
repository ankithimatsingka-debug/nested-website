import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const ReturnsSection = () => {
  return (
    <section id="returns-section" className="px-6 py-16 md:py-24 bg-gradient-to-b from-white to-green-50/50">
      <div className="max-w-2xl mx-auto text-center">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-10 md:mb-14"
        >
          What kind of returns can you expect?
        </motion.h2>

        {/* Returns Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative p-8 md:p-12 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border border-emerald-100 shadow-lg"
        >
          {/* Decorative icon */}
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg"
          >
            <TrendingUp className="w-6 h-6 text-white" />
          </motion.div>
          
          <p className="font-body text-sm text-emerald-600 uppercase tracking-wide mb-3 mt-2">
            Targeting
          </p>
          <motion.p 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 150 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4"
          >
            Up to 11% p.a.*
          </motion.p>
          <p className="font-body text-sm md:text-base text-muted-foreground">
            Returns are based on 20+ years of data. But may vary in future.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ReturnsSection;
