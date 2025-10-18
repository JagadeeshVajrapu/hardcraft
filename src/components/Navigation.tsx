import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navigation = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsAtTop(scrollTop <= 10); // Consider "at top" when scroll is 10px or less
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] 
      rounded-full transition-all duration-300 ${
        isAtTop
          ? "bg-transparent border-0 shadow-none backdrop-blur-none"
          : "bg-background/80 shadow-card backdrop-blur-lg"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">𝔒</span>
            </div>
            <span className="text-2xl font-regular">OpenPlan</span>
          </div>

          {/* Desktop Navigation - Right after logo */}
          <div className="hidden md:flex items-center gap-8 ml-10">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#industries"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Industries
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
          </div>

          {/* CTA Buttons - At the right end */}
          <div className="hidden md:flex items-center gap-4 ml-auto">
            <Button
              variant="ghost"
              className="text-muted-foreground border rounded-full hover:text-foreground"
            >
              Sign In
            </Button>
            <Button className="bg-gradient-primary border rounded-full hover:shadow-glow transition-all duration-300">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
