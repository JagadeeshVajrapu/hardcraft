import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import toolImage from "@/assets/hero-image2.png";
import WaitlistDialog, { WaitlistFormData } from "./WaitlistDialog";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [isWaitlistDialogOpen, setIsWaitlistDialogOpen] = useState(false);

  const handleWaitlistSubmit = async (formData: WaitlistFormData) => {
    try {
      console.log("Waitlist form submitted:", formData);
      // Here you can add API call to submit the form data
      // await submitWaitlistForm(formData);

      // Close the dialog after successful submission`
      setIsWaitlistDialogOpen(false);
    } catch (error) {
      console.error("Error submitting waitlist form:", error);
      // Keep dialog open on error so user can retry
    }
  };

  // Generate small white dots that rotate around themselves
  const dots = useMemo(() => {
    const dotArray = [];

    for (let i = 0; i < 200; i++) {
      dotArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1, // Small dot size (1-3px)
        duration: Math.random() * 20 + 15, // Rotation duration (15-35 seconds)
        delay: Math.random() * 5,
        initialRotation: Math.random() * 360,
        opacity: Math.random() * 0.4 + 0.6, // 0.6-1.0 opacity
      });
    }
    return dotArray;
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#000000', overflow: 'visible', position: 'relative', zIndex: 1 }}>
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, overflow: "visible", backgroundColor: 'transparent', position: 'absolute' }}>
        {/* Orbital field so dots drift in a subtle circular motion */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "50% 50%" }}
        >
          {dots.map((dot) => (
            <motion.div
              key={dot.id}
              className="absolute rounded-full bg-white"
              style={{
                left: `${dot.x}%`,
                top: `${dot.y}%`,
                width: `${dot.size}px`,
                height: `${dot.size}px`,
                transform: "translate(-50%, -50%)",
                opacity: dot.opacity,
                boxShadow: `0 0 ${dot.size * 2}px rgba(255, 255, 255, 0.8)`,
              }}
              animate={{
                rotate: [dot.initialRotation, dot.initialRotation + 360],
              }}
              transition={{
                duration: dot.duration,
                repeat: Infinity,
                ease: "linear",
                delay: dot.delay,
              }}
            />
          ))}
        </motion.div>
      </div>
      
      {/* Animation Layer - This allows animations to extend across entire hero section */}
      {/* Add any animations here (z-index: 15) - they will be visible above text, buttons, and below the image */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 15, overflow: "visible" }}>
        {/* 
          Example: Add animations here that should be visible across the entire hero section
          - Text background animations
          - Floating elements
          - Decorative circles or shapes
          - Any content that needs to extend above and below the image
        */}
      </div>
      
      {/* Content */}
      <div className="container relative z-30 mx-auto px-4 text-center pointer-events-auto" style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', boxShadow: 'none', position: 'relative', overflow: 'visible' }}>
        <div className="mx-auto max-w-7xl pt-24 pb-0 space-y-8" style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', boxShadow: 'none', position: 'relative', marginBottom: '0', overflow: 'visible' }}>
          <motion.div
            className="space-y-4 relative z-30"
            style={{ zIndex: 30, backgroundColor: 'transparent', border: 'none', outline: 'none', boxShadow: 'none', position: 'relative', overflow: 'visible' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge (UNCHANGED) */}
            <div className="flex justify-center mb-[10px]">
              <div className="new-badge-pill">
                <span className="new-badge-label">New</span>
                <span className="new-badge-text">Product Update</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1
              className="text-4xl font-semibold tracking-[-0.02em] leading-[1.2] sm:text-5xl lg:text-6xl text-white text-center relative z-30"
              style={{
                color: '#FFFFFF',
                fontFamily: 'Inter, SF Pro Display, Helvetica Neue, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                textShadow: '0 2px 16px rgba(0, 0, 0, 0.8), 0 4px 32px rgba(0, 0, 0, 0.6), 0 8px 48px rgba(0, 0, 0, 0.4)',
                zIndex: 30,
                backgroundColor: 'transparent',
                position: 'relative',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
              }}
            >
              Hardware Development
            </h1>

            {/* Subheading */}
            <p
              className="mx-auto max-w-[720px] text-lg sm:text-xl text-center relative z-20"
              style={{
                color: '#F5F5F5',
                fontFamily: 'Inter, SF Pro Display, Helvetica Neue, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: 1.7,
                textShadow: '0 1px 6px rgba(0, 0, 0, 0.5), 0 2px 12px rgba(0, 0, 0, 0.3)',
                zIndex: 20,
                backgroundColor: 'transparent',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.01em',
              }}
            >
              End-to-end product lifecycle management for hardware companies.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col gap-4 sm:flex-row sm:justify-center relative z-20"
            style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', overflow: 'visible' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Button
              size="lg"
              type="button"
              className="h-12 rounded-full px-6 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer relative z-20"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsWaitlistDialogOpen(true);
              }}
            >
              Join Waitlist
            </Button>
            <Button
              variant="outline"
              size="lg"
              type="button"
              className="h-12 rounded-full px-6 text-lg font-semibold border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer relative z-20"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                navigate("/contact");
              }}
            >
              Schedule a Demo
            </Button>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          className="isometric-container w-full"
          style={{
            marginTop: "0px",
            marginBottom: "0px",
            marginLeft: "-1rem",
            marginRight: "-1rem",
            padding: "0",
            width: "calc(100% + 2rem)",
            display: "flex",
            justifyContent: "center",
            overflow: "visible",
            position: "relative",
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
            zIndex: 10,
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <img
            src={toolImage}
            alt="Hardware development dashboard"
            className="isometric-image"
          />
        </motion.div>
      </div>

      {/* Waitlist Dialog (UNCHANGED) */}
      <WaitlistDialog
        isOpen={isWaitlistDialogOpen}
        onClose={() => setIsWaitlistDialogOpen(false)}
        onSubmit={handleWaitlistSubmit}
      />
    </section>
  );
};

export default Hero;
