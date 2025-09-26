import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg mr-3"></div>
            <span className="font-heading text-2xl font-bold text-foreground">Nested</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#why-nested" className="font-body text-muted-foreground hover:text-primary transition-colors">
              Why Nested
            </a>
            <a href="#benefits" className="font-body text-muted-foreground hover:text-primary transition-colors">
              Benefits
            </a>
            <a href="#testimonials" className="font-body text-muted-foreground hover:text-primary transition-colors">
              Stories
            </a>
            <a href="#calculator" className="font-body text-muted-foreground hover:text-primary transition-colors">
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
                href="#why-nested" 
                className="font-body text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Nested
              </a>
              <a 
                href="#benefits" 
                className="font-body text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefits
              </a>
              <a 
                href="#testimonials" 
                className="font-body text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Stories
              </a>
              <a 
                href="#calculator" 
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