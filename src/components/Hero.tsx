import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hardware.jpg";
import toolImage from "@/assets/hero-image2.png";
import WaitlistDialog, { WaitlistFormData } from "./WaitlistDialog";

const Hero = () => {
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
        {/* Original texts */}
        {rotatingTexts.map((text, index) => (
          <div
            key={index}
            className="h-20 flex items-center justify-center text-foreground"
          >
            {text}
          </div>
        ))}
        {/* Duplicate first text for seamless loop */}
        <div className="h-20 flex items-center justify-center text-foreground">
          {rotatingTexts[0]}
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleWaitlistSubmit = async (formData: WaitlistFormData) => {
    // Handle form submission here
    console.log("Waitlist form submitted:", formData);
    // You can add API call here to submit the form data
    // Example: await submitWaitlistForm(formData);
  };

  return (
    <section className="relative h-auto flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* <img
          src={heroImage}
          alt="Modern hardware development workspace"
          className="w-full h-full object-cover opacity-20"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto mt-16 px-4 text-center">
        <div className="mx-auto max-w-7xl mt-24 space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-clip-text text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground text-transparent sm:text-6xl">
                Hardware Development
              </span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Made Simple
              </span>

              {/* <RotatingText /> */}
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground sm:text-xl">
              End-to-end product lifecycle management for hardware companies.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="h-12  rounded-full px-6 text-lg font-semibold bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
              onClick={() => setIsWaitlistDialogOpen(true)}
            >
              Join Waitlist
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12  rounded-full  px-6 text-lg font-semibold border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              Schedule a Demo
            </Button>
          </div>

          <div className="flex justify-center items-center mt-16">
            <img
              src={toolImage}
              alt="Modern hardware development workspace"
              className="max-w-full object-contain rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Waitlist Dialog */}
      <WaitlistDialog
        isOpen={isWaitlistDialogOpen}
        onClose={() => setIsWaitlistDialogOpen(false)}
        onSubmit={handleWaitlistSubmit}
      />
    </section>
  );
};

export default Hero;
