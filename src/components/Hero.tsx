import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import toolImage from "@/assets/hero-image2.png";
import WaitlistDialog, { WaitlistFormData } from "./WaitlistDialog";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isWaitlistDialogOpen, setIsWaitlistDialogOpen] = useState(false);

  const rotatingTexts = [
    "Made Simple",
    "Streamline Management",
    "Procurement",
    "Compliance",
  ];

  const RotatingText: React.FC = () => (
    <div className="relative h-[90px] overflow-hidden">
      <div
        className="flex flex-col transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateY(-${currentTextIndex * 80}px)`,
        }}
      >
        {rotatingTexts.map((text, index) => (
          <div
            key={index}
            className="h-20 flex items-center justify-center text-foreground"
          >
            {text}
          </div>
        ))}
        <div className="h-20 flex items-center justify-center text-foreground">
          {rotatingTexts[0]}
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleWaitlistSubmit = async (formData: WaitlistFormData) => {
    try {
      console.log("Waitlist form submitted:", formData);
      // Here you can add API call to submit the form data
      // await submitWaitlistForm(formData);

      // Close the dialog after successful submission
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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

        {/* Large Glowing Purple-Pink Blob - Main Shape */}
        <motion.div
          className="absolute"
          style={{
            top: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.5) 0%, rgba(236, 72, 153, 0.4) 20%, rgba(168, 85, 247, 0.25) 40%, rgba(236, 72, 153, 0.15) 55%, rgba(168, 85, 247, 0.08) 70%, transparent 85%)",
            borderRadius: "50%",
            filter: "blur(80px)",
            opacity: 0.9,
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.9, 1, 0.9],
            x: ["-50%", "-49%", "-50%"],
            y: ["0%", "-1%", "0%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary blob layer for depth and softness */}
        <motion.div
          className="absolute"
          style={{
            top: "8%",
            left: "48%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle at center, rgba(236, 72, 153, 0.35) 0%, rgba(168, 85, 247, 0.3) 25%, rgba(236, 72, 153, 0.2) 45%, rgba(168, 85, 247, 0.1) 60%, transparent 80%)",
            borderRadius: "50%",
            filter: "blur(70px)",
            opacity: 0.75,
          }}
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.75, 0.9, 0.75],
            x: ["-50%", "-48%", "-50%"],
            y: ["0%", "2%", "0%"],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Tertiary subtle blob for extra glow */}
        <motion.div
          className="absolute"
          style={{
            top: "12%",
            left: "52%",
            width: "350px",
            height: "350px",
            background: "radial-gradient(circle at center, rgba(168, 85, 247, 0.25) 0%, rgba(236, 72, 153, 0.2) 35%, rgba(168, 85, 247, 0.12) 55%, transparent 75%)",
            borderRadius: "50%",
            filter: "blur(60px)",
            opacity: 0.6,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.75, 0.6],
            x: ["-50%", "-51%", "-50%"],
            y: ["0%", "-1.5%", "0%"],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center pointer-events-auto">
        <div className="mx-auto max-w-7xl pt-24 pb-8 space-y-4">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            {/* Badge - Animated Text */}
            <motion.div
              className="flex justify-center mb-[10px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <motion.div
                className="new-badge-pill"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              >
                <motion.span
                  className="new-badge-label"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    ease: "backOut",
                    delay: 0.4
                  }}
                >
                  New
                </motion.span>
                <motion.span
                  className="new-badge-text"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.6
                  }}
                >
                  {"Product Update".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.7 + index * 0.03,
                        duration: 0.3,
                        ease: "easeOut"
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Main Heading - Animated Text */}
            <motion.h1
              className="text-4xl font-semibold tracking-[-0.02em] leading-[1.2] sm:text-5xl lg:text-6xl text-white text-center"
              style={{
                color: '#FFFFFF',
                fontFamily: 'Inter, SF Pro Display, Helvetica Neue, sans-serif',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
              }}
              initial="hidden"
              animate="visible"
            >
              {"Hardware Development".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.3 + index * 0.04,
                        duration: 0.4,
                        ease: "easeOut"
                      }
                    }
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subheading - Animated Text */}
            <motion.p
              className="mx-auto max-w-[720px] text-lg sm:text-xl text-center"
              style={{
                color: '#A1A1A1',
                fontFamily: 'Inter, SF Pro Display, Helvetica Neue, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: 1.6,
              }}
              initial="hidden"
              animate="visible"
            >
              {"End-to-end product lifecycle management for hardware companies."
                .split(" ")
                .map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    style={{ display: "inline-block", marginRight: "0.25em" }}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: 1.2 + wordIndex * 0.04,
                          duration: 0.4,
                          ease: "easeOut"
                        }
                      }
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
            </motion.p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col gap-4 sm:flex-row sm:justify-center relative z-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 2.5 }}
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
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.7 }}
                >
                  Join Waitlist
                </motion.span>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 2.7 }}
            >
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
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.9 }}
                >
                  Schedule a Demo
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Image Section with Enhanced Fade-out Effect */}
        <motion.div
          className="isometric-container w-full relative"
          style={{
            perspective: "2000px",
            perspectiveOrigin: "center center",
            marginTop: "-40px",
            marginBottom: "40px",
            display: "flex",
            justifyContent: "center",
            overflow: "visible",
            transform: "translateX(100px)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          {/* Image with seamless fade-out */}
          <div className="relative" style={{ transformStyle: "preserve-3d" }}>
            <img
              src={toolImage}
              alt="Hardware development dashboard"
              className="isometric-image relative z-10"
            />
          </div>
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
