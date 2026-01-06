import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import nestedLogo from "@/assets/nested-logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Trap focus in mobile menu when open
  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
      const focusableElements = mobileMenuRef.current.querySelectorAll(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Skip Navigation Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Skip to main content
      </a>
      
      <header role="banner" className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo - with fixed dimensions to prevent CLS */}
            <a href="/" className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md" aria-label="Nested - Go to homepage">
              <img src={nestedLogo} alt="Nested logo" className="h-10 w-[120px]" width="120" height="40" loading="eager" decoding="async" />
            </a>

            {/* Desktop Navigation */}
            <nav role="navigation" aria-label="Main navigation" className="hidden md:flex items-center space-x-8">
            <a href="/" className="font-body text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/#steps" className="font-body text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <Link to="/fund-selection" className="font-body text-muted-foreground hover:text-primary transition-colors">
              Fund Selection
            </Link>
            <a href="/#faq" className="font-body text-muted-foreground hover:text-primary transition-colors">
              FAQs
            </a>
            <a href="/#testimonials" className="font-body text-muted-foreground hover:text-primary transition-colors">
              Stories
            </a>
            <a href="/#calculator" className="font-body text-muted-foreground hover:text-primary transition-colors">
              Calculator
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button size="sm" className="hidden md:inline-flex">
              Download App
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div 
              ref={mobileMenuRef}
              className="md:hidden border-t border-border/50 py-4"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <nav role="navigation" aria-label="Mobile navigation" className="flex flex-col space-y-4">
                <a 
                  href="/" 
                  className="font-body text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="/#steps" 
                  className="font-body text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <Link 
                  to="/fund-selection" 
                  className="font-body text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fund Selection
                </Link>
                <a 
                  href="/#faq" 
                  className="font-body text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQs
                </a>
                <a 
                  href="/#testimonials" 
                  className="font-body text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Stories
                </a>
                <a 
                  href="/#calculator" 
                  className="font-body text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Calculator
                </a>
                <Button size="sm" className="w-fit">
                  Download App
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}