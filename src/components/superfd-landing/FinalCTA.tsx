import { motion } from "framer-motion";
import gplayBadge from "@/assets/gplay.png";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="superfd-footer" className="px-6 py-16 md:py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
      
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-10 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl" 
      />
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-2xl" 
      />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-2"
        >
          See if SuperFD suits your goals
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-muted-foreground mb-8 flex items-center justify-center gap-2"
        >
          Takes less than 2 minutes
          <ArrowRight className="w-4 h-4" />
        </motion.p>

        {/* Play Store Button */}
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          href="https://play.google.com/store/apps/details?id=money.nested.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img
            src={gplayBadge}
            alt="Get it on Google Play"
            className="h-16 md:h-20 w-auto mx-auto drop-shadow-md"
          />
        </motion.a>
      </div>
    </section>
  );
};

export default FinalCTA;
