import React from "react";

const Footer = () => {
  return (
    <footer className="w-full min-h-screen bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">
            Footer Lid
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end product lifecycle management for hardware companies.
          </p>
        </div>
      </div>
      <div className="border-t border-border/50" />
      <div className="container mx-auto h-[50px] px-4 py-24">
        <div className="text-center">
          <h1 className="text-[200px] font-bold text-foreground mb-8">
            OpenPlan
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
