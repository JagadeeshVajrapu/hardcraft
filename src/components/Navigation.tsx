import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import WaitlistDialog, { WaitlistFormData } from "./WaitlistDialog";
import whiteLogo from "@/assets/White_icon_png.png";

const Navigation = () => {
  const navigate = useNavigate();
  const [isAtTop, setIsAtTop] = useState(true);
  const [isWaitlistDialogOpen, setIsWaitlistDialogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsAtTop(scrollTop <= 10); // Consider "at top" when scroll is 10px or less
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when viewport becomes medium and above
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll and optionally blur background contextually handled by overlay
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow || "";
    }
    return () => {
      document.body.style.overflow = originalOverflow || "";
    };
  }, [isMobileMenuOpen]);

  const handleWaitlistSubmit = async (formData: WaitlistFormData) => {
    // Handle form submission here
    console.log("Waitlist form submitted from Navigation:", formData);
    // You can add API call here to submit the form data
    // Example: await submitWaitlistForm(formData);
  };

  return (
    <>
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
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src={whiteLogo}
                alt="OpenPlan Logo"
                className="h-8 object-contain"
              />
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
                Demo
              </Button>
              <Button
                className="bg-gradient-primary border rounded-full hover:shadow-glow transition-all duration-300"
                onClick={() => setIsWaitlistDialogOpen(true)}
              >
                Join Waitlist
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden ml-auto"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Waitlist Dialog */}
        <WaitlistDialog
          isOpen={isWaitlistDialogOpen}
          onClose={() => setIsWaitlistDialogOpen(false)}
          onSubmit={handleWaitlistSubmit}
        />
      </nav>

      {/* Screen Overlay for Mobile Menu (rendered outside nav to avoid transform containment) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel (rendered outside nav for full-viewport positioning) */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed right-4 left-4 top-20 z-[60]">
          <div className="bg-background/95 border rounded-2xl shadow-xl backdrop-blur-lg p-4 flex flex-col gap-3">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#industries"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Industries
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <div className="h-px bg-border my-2" />
            <div className="flex flex-col gap-2">
              <Button
                variant="ghost"
                className="text-muted-foreground border rounded-full hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demo
              </Button>
              <Button
                className="bg-gradient-primary border rounded-full hover:shadow-glow transition-all duration-300"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsWaitlistDialogOpen(true);
                }}
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
