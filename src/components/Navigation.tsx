import React, { useState } from "react";
import { Link } from "react-router-dom";
import whiteLogo from "@/assets/White_icon_png.png";
import WaitlistDialog, { WaitlistFormData } from "./WaitlistDialog";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isWaitlistDialogOpen, setIsWaitlistDialogOpen] = useState(false);

  const handleWaitlistSubmit = async (formData: WaitlistFormData) => {
    console.log("Waitlist form submitted from Navigation:", formData);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Main Nav */}
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={whiteLogo}
                alt="OpenPlan"
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-semibold text-white">OpenPlan</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                Features
              </a>
              <a href="#industries" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                Industries
              </a>
              <a href="#pricing" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                Pricing
              </a>
              <Link to="/about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                About
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-2 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium"
            >
              Demo
            </Link>
            <Button
              onClick={() => setIsWaitlistDialogOpen(true)}
              className="px-6 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>

      <WaitlistDialog
        isOpen={isWaitlistDialogOpen}
        onClose={() => setIsWaitlistDialogOpen(false)}
        onSubmit={handleWaitlistSubmit}
      />
    </nav>
  );
};

export default Navigation;

