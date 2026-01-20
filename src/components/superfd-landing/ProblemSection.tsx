import { motion } from "framer-motion";
import { TrendingDown, Activity, AlertCircle, Clock, Calculator, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProblemSection = () => {
  return (
    <section className="px-6 py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-heading text-2xl md:text-3xl font-semibold text-foreground text-center mb-10 md:mb-14"
        >
          The problem with traditional choices today
        </motion.h2>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Fixed Deposits Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="p-6 md:p-8 bg-gradient-to-br from-orange-50 to-amber-50 border-orange-100 shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Fixed Deposits
                </h3>
              </div>
              <ul className="space-y-4 font-body text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                  </div>
                  <span>Low returns</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Calculator className="w-4 h-4 text-orange-500" />
                  </div>
                  <span>10% TDS every year even before maturity</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-orange-500" />
                  </div>
                  <span>Penalty for pre-maturity</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Share Market Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 md:p-8 bg-gradient-to-br from-red-50 to-rose-50 border-red-100 shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Share Market
                </h3>
              </div>
              <ul className="space-y-4 font-body text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                  </div>
                  <span>Short-term volatility</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="w-4 h-4 text-red-500" />
                  </div>
                  <span>Requires timing & discipline</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-red-500" />
                  </div>
                  <span>Not suitable for near-term goals</span>
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
