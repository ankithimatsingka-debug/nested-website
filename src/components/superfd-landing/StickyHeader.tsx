import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import nestedLogo from "@/assets/nested-logo.png";

const StickyHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToReturns = () => {
    const element = document.getElementById("returns-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <img
          src={nestedLogo}
          alt="Nested"
          className="h-8 w-auto"
        />

        {/* CTA Button */}
        <button
          onClick={scrollToReturns}
          className={`font-body text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-lg"
              : "bg-white/80 backdrop-blur-sm text-foreground border border-slate-200 hover:bg-white"
          }`}
        >
          Get Started
        </button>
      </div>
    </motion.header>
  );
};

export default StickyHeader;
