import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import nestedLogo from "@/assets/nested-logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center" aria-label="Nested - Go to homepage">
            <img src={nestedLogo} alt="Nested logo" className="h-10" width="120" height="40" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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
          <div className="md:hidden border-t border-border/50 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="/" 
                className="font-body text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="/#steps" 
                className="font-body text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <Link 
                to="/fund-selection" 
                className="font-body text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Fund Selection
              </Link>
              <a 
                href="/#faq" 
                className="font-body text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQs
              </a>
              <a 
                href="/#testimonials" 
                className="font-body text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Stories
              </a>
              <a 
                href="/#calculator" 
                className="font-body text-muted-foreground hover:text-primary transition-colors"
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
  );
}