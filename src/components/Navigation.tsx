import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
              <motion.img
                src={whiteLogo}
                alt="OpenPlan"
                className="w-8 h-8 object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              <motion.span 
                className="text-xl font-semibold text-white"
                initial="hidden"
                animate="visible"
              >
                {"OpenPlan".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: -10 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: 0.1 + index * 0.05,
                          duration: 0.3,
                          ease: "easeOut"
                        }
                      }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {["Features", "Industries", "Pricing"].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut" 
                  }}
                >
                  {link}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.5,
                  ease: "easeOut" 
                }}
              >
                <Link to="/about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </motion.div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
            >
              <Link
                to="/contact"
                className="px-6 py-2 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium"
              >
                Demo
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
            >
              <Button
                onClick={() => setIsWaitlistDialogOpen(true)}
                className="px-6 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                Join Waitlist
              </Button>
            </motion.div>
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

