import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-hardware.jpg";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
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
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
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
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground sm:text-2xl">
              End-to-end product lifecycle management for hardware companies.
              Streamline project management, inventory, procurement, and
              compliance in one powerful platform.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="h-14 px-8 text-lg font-semibold bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 text-lg font-semibold border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          <div className="pt-8">
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by hardware teams at innovative companies
            </p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded bg-industry-auto/20 flex items-center justify-center">
                  <span className="text-industry-auto text-sm font-bold">
                    A
                  </span>
                </div>
                <span className="text-sm font-medium">Automotive</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded bg-industry-aerospace/20 flex items-center justify-center">
                  <span className="text-industry-aerospace text-sm font-bold">
                    A
                  </span>
                </div>
                <span className="text-sm font-medium">Aerospace</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded bg-industry-pharma/20 flex items-center justify-center">
                  <span className="text-industry-pharma text-sm font-bold">
                    P
                  </span>
                </div>
                <span className="text-sm font-medium">Pharma</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded bg-industry-media/20 flex items-center justify-center">
                  <span className="text-industry-media text-sm font-bold">
                    M
                  </span>
                </div>
                <span className="text-sm font-medium">Media</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
