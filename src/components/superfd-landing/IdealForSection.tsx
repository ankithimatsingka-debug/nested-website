import { motion } from "framer-motion";
import { Check } from "lucide-react";

const criteria = [
  "You want better returns than FD",
  "You prefer lower volatility than equities",
  "You're investing for 3+ months",
  "You value professional fund management",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  },
};

const IdealForSection = () => {
  return (
    <section className="px-6 py-16 md:py-24 relative overflow-hidden">
      {/* Pastel gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50" />
      
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-heading text-2xl md:text-3xl font-semibold text-foreground text-center mb-10 md:mb-14"
        >
          SuperFD is ideal for you if…
        </motion.h2>

        {/* Checklist Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-purple-100"
        >
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-5 md:space-y-6"
          >
            {criteria.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="flex items-center gap-4"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1, type: "spring", stiffness: 300 }}
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-sm"
                >
                  <Check className="w-5 h-5 text-white" strokeWidth={3} />
                </motion.div>
                <p className="font-body text-base md:text-lg text-foreground">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IdealForSection;
