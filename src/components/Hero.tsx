import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-hardware.jpg";
import toolImage from "@/assets/hero-image1.png";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const rotatingTexts = [
    "Made Simple",
    "Streamline Management",
    "Procurement",
    "Compliance",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Hardware Development
              </span>
              <br />
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
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground sm:text-xl">
              End-to-end product lifecycle management for hardware companies.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="h-12  rounded-full px-6 text-lg font-semibold bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12  rounded-full  px-6 text-lg font-semibold border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
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
    </section>
  );
};

export default Hero;
