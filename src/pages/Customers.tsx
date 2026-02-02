import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Customer data structure
interface LogoCompany {
  name: string;
  logo: string;
  description: string; // What they use the product for
  tag?: "Product team" | "Startup" | "Enterprise" | "Engineering";
}

interface FeaturedStory {
  company: string;
  logo: string;
  quote: string;
  person: string;
  role: string;
  avatar?: string;
}

interface Testimonial {
  company: string;
  logo: string;
  quote: string;
  person: string;
  role: string;
  avatar?: string;
}

// Logo wall companies (12+ companies)
const logoCompanies: LogoCompany[] = [
  { 
    name: "Nova", 
    logo: "Nova",
    description: "BOM management for hardware teams",
    tag: "Product team"
  },
  { 
    name: "Atlas", 
    logo: "Atlas",
    description: "Supply chain visibility & sourcing",
    tag: "Enterprise"
  },
  { 
    name: "Pixel", 
    logo: "Pixel",
    description: "Build tracking & quality workflows",
    tag: "Engineering"
  },
  { 
    name: "Orbit", 
    logo: "Orbit",
    description: "Multi-SKU production planning",
    tag: "Startup"
  },
  { 
    name: "Sync", 
    logo: "Sync",
    description: "Real-time analytics & reporting",
    tag: "Product team"
  },
  { 
    name: "Flux", 
    logo: "Flux",
    description: "Cross-team collaboration tools",
    tag: "Enterprise"
  },
  { 
    name: "Vertex", 
    logo: "Vertex",
    description: "Quality control & testing",
    tag: "Engineering"
  },
  { 
    name: "Nimbus", 
    logo: "Nimbus",
    description: "Inventory & warehouse ops",
    tag: "Startup"
  },
  { 
    name: "Horizon", 
    logo: "Horizon",
    description: "End-to-end production planning",
    tag: "Enterprise"
  },
  { 
    name: "Apex", 
    logo: "Apex",
    description: "Component sourcing & procurement",
    tag: "Product team"
  },
  { 
    name: "Prism", 
    logo: "Prism",
    description: "Design-to-manufacturing workflows",
    tag: "Engineering"
  },
  { 
    name: "Acme", 
    logo: "Acme",
    description: "Rapid prototyping & iteration",
    tag: "Startup"
  },
];

// Featured customer stories
const featuredStories: FeaturedStory[] = [
  {
    company: "Nova",
    logo: "Nova",
    quote: "OpenPlan transformed how we manage our hardware supply chain. What used to take weeks now takes hours.",
    person: "Sarah Chen",
    role: "VP of Operations, Nova",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    company: "Atlas",
    logo: "Atlas",
    quote: "The visibility into our BOM and sourcing process is incredible. We've reduced costs by 30% in the first quarter.",
    person: "Michael Rodriguez",
    role: "Head of Supply Chain, Atlas",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    company: "Pixel",
    logo: "Pixel",
    quote: "Finally, a platform that understands hardware. The build tracking and quality management features are game-changing.",
    person: "Emily Watson",
    role: "Director of Engineering, Pixel",
    avatar: "https://i.pravatar.cc/150?img=45",
  },
  {
    company: "Orbit",
    logo: "Orbit",
    quote: "We've scaled from 10 to 100+ SKUs without adding headcount. OpenPlan handles the complexity so we can focus on innovation.",
    person: "David Kim",
    role: "CTO, Orbit",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
];

// Mini testimonial strip
const testimonials: Testimonial[] = [
  {
    company: "Sync",
    logo: "Sync",
    quote: "The analytics dashboard gives us insights we never had before. We can now make data-driven decisions in real-time.",
    person: "Lisa Park",
    role: "Operations Manager",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    company: "Flux",
    logo: "Flux",
    quote: "OpenPlan's integration with our existing tools was seamless. We were up and running in days, not months.",
    person: "James Taylor",
    role: "VP of Product",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    company: "Vertex",
    logo: "Vertex",
    quote: "The quality control workflows have helped us catch issues before they reach production. It's saved us thousands.",
    person: "Rachel Green",
    role: "Quality Assurance Lead",
    avatar: "https://i.pravatar.cc/150?img=44",
  },
];

// SVG-style logo component with visual icons
const CompanyLogo = ({ 
  name, 
  className = "", 
  variant = "default" 
}: { 
  name: string; 
  className?: string;
  variant?: "default" | "large" | "featured";
}) => {

  const size = variant === "default" ? 32 : variant === "large" ? 48 : 40;

  // Create unique, professional logo designs for each company
  const renderLogo = () => {
    const logoSize = 32;
    const logos: Record<string, JSX.Element> = {
      'Nova': <svg width={logoSize} height={logoSize} viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" /><circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" /><circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.8" /></svg>,
      'Atlas': <svg width={logoSize} height={logoSize} viewBox="0 0 32 32" fill="none"><rect x="6" y="8" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" /><path d="M16 8v16M6 16h20" stroke="currentColor" strokeWidth="1.5" opacity="0.6" /><circle cx="16" cy="16" r="2" fill="currentColor" opacity="0.8" /></svg>,
      'Pixel': <svg width={logoSize} height={logoSize} viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="10" height="10" rx="1" fill="currentColor" opacity="0.5" /><rect x="18" y="4" width="10" height="10" rx="1" fill="currentColor" opacity="0.5" /><rect x="4" y="18" width="10" height="10" rx="1" fill="currentColor" opacity="0.5" /><rect x="18" y="18" width="10" height="10" rx="1" fill="currentColor" opacity="0.5" /></svg>,
      'Orbit': <svg width={logoSize} height={logoSize} viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" /><circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" /><circle cx="16" cy="16" r="4" fill="currentColor" opacity="0.7" /><circle cx="24" cy="16" r="2" fill="currentColor" opacity="0.6" /></svg>,
      'Sync': <svg width={logoSize} height={logoSize} viewBox="0 0 32 32" fill="none"><path d="M8 16L14 10L20 16L14 22L8 16Z" fill="currentColor" opacity="0.5" /><path d="M12 10L18 4L24 10L18 16L12 10Z" fill="currentColor" opacity="0.3" /><path d="M12 22L18 16L24 22L18 28L12 22Z" fill="currentColor" opacity="0.3" /></svg>,
      'Flux': <svg width={logoSize} height={logoSize} viewBox="0 0 32 32" fill="none"><path d="M16 4L20 12L28 14L20 16L16 24L12 16L4 14L12 12L16 4Z" fill="currentColor" opacity="0.5" /><circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.8" /></svg>,
      'Vertex': <svg width={logoSize} height={logoSize} viewBox="0 0 32 32" fill="none"><polygon points="16,4 26,26 6,26" fill="currentColor" opacity="0.4" /><polygon points="16,10 22,24 10,24" fill="currentColor" opacity="0.6" /><circle cx="16" cy="18" r="2" fill="currentColor" opacity="0.9" /></svg>,
      'Nimbus': <svg width={logoSize} height={logoSize} viewBox="0 0 32 32" fill="none"><ellipse cx="10" cy="16" rx="6" ry="4" fill="currentColor" opacity="0.4" /><ellipse cx="22" cy="16" rx="6" ry="4" fill="currentColor" opacity="0.4" /><ellipse cx="16" cy="12" rx="4" ry="3" fill="currentColor" opacity="0.5" /><ellipse cx="16" cy="20" rx="4" ry="3" fill="currentColor" opacity="0.5" /></svg>,
      'Horizon': <svg width={logoSize} height={logoSize} viewBox="0 0 32 32" fill="none"><rect x="4" y="14" width="24" height="2" fill="currentColor" opacity="0.6" /><circle cx="8" cy="15" r="3" fill="currentColor" opacity="0.5" /><circle cx="16" cy="15" r="3" fill="currentColor" opacity="0.5" /><circle cx="24" cy="15" r="3" fill="currentColor" opacity="0.5" /><path d="M4 8 Q16 4 28 8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" /></svg>,
      'Apex': <svg width={logoSize} height={logoSize} viewBox="0 0 32 32" fill="none"><path d="M16 4L28 28H4L16 4Z" fill="currentColor" opacity="0.5" /><path d="M16 10L24 26H8L16 10Z" fill="currentColor" opacity="0.7" /><rect x="14" y="20" width="4" height="6" fill="currentColor" opacity="0.9" /></svg>,
      'Prism': <svg width={logoSize} height={logoSize} viewBox="0 0 32 32" fill="none"><polygon points="16,4 26,12 26,20 16,28 6,20 6,12" fill="currentColor" opacity="0.4" /><polygon points="16,8 22,12 22,20 16,24 10,20 10,12" fill="currentColor" opacity="0.6" /><circle cx="16" cy="16" r="2" fill="currentColor" opacity="0.9" /></svg>,
      'Acme': <svg width={logoSize} height={logoSize} viewBox="0 0 32 32" fill="none"><rect x="6" y="6" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" /><path d="M12 12L20 20M20 12L12 20" stroke="currentColor" strokeWidth="2" opacity="0.6" /><circle cx="16" cy="16" r="2" fill="currentColor" opacity="0.8" /></svg>,
    };
    return logos[name] || <svg width={logoSize} height={logoSize} viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" /><circle cx="16" cy="16" r="6" fill="currentColor" opacity="0.6" /></svg>;
  };

  const baseStyles = "flex items-center justify-center gap-3 font-semibold transition-all duration-[400ms] ease-out";
  const textSize = variant === "default" ? "1.1rem" : variant === "large" ? "1.75rem" : "1.5rem";
  
  return (
    <div className={`${baseStyles} text-white ${className}`}>
      <div style={{ color: 'white' }} className="flex-shrink-0">
        {renderLogo()}
      </div>
      <span 
        className="font-semibold text-white"
        style={{
          fontFamily: "system-ui, -apple-system, sans-serif",
          letterSpacing: "-0.02em",
          fontSize: textSize,
          color: 'white',
          fontWeight: 600,
        }}
      >
        {name}
      </span>
    </div>
  );
};

// Enhanced logo card with professional hover effects
const LogoCard = ({ company, index, isVisible }: { company: LogoCompany; index: number; isVisible: boolean }) => {
  return (
    <div
      className="group relative flex items-center justify-center min-h-[80px] md:min-h-[96px] cursor-pointer rounded-xl transition-all duration-[400ms] ease-out p-4"
      style={{
        animationDelay: `${index * 70}ms`,
        animation: isVisible ? "logoFadeInUp 600ms ease-out forwards" : "none",
        opacity: 0,
      }}
    >
      {/* Animated background glow on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/[0.02] group-hover:via-white/[0.015] group-hover:to-white/[0.02] transition-all duration-[400ms] ease-out" />
      <div className="absolute inset-0 rounded-xl border border-white/0 group-hover:border-white/10 transition-all duration-[400ms] ease-out" />
      
      {/* Logo with enhanced hover animation */}
      <div className="relative z-10 transform group-hover:scale-[1.05] group-hover:-translate-y-1 transition-all duration-[400ms] ease-out">
        <CompanyLogo
          name={company.logo}
          variant="default"
          className="opacity-90 group-hover:opacity-100 transition-all duration-[400ms] ease-out"
        />
      </div>
    </div>
  );
};

const Customers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when component mounts or route changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsVisible(true);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0A0A0A" }}>
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight hover:-translate-y-[1px] transition-all duration-[400ms] ease-out cursor-default"
            style={{
              animation: isVisible ? "heroFadeInUp 700ms ease-out forwards" : "none",
              opacity: 0,
            }}
          >
            Trusted by teams worldwide
          </h1>
          <p 
            className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto hover:-translate-y-[1px] transition-all duration-[400ms] ease-out cursor-default"
            style={{
              animation: isVisible ? "heroFadeInUp 700ms ease-out 120ms forwards" : "none",
              opacity: 0,
            }}
          >
            Thousands of teams use our platform to build faster and smarter.
          </p>
          
          {/* Stats Section - Inspired by Linear */}
          <div 
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            style={{
              animation: isVisible ? "heroFadeInUp 700ms ease-out 240ms forwards" : "none",
              opacity: 0,
            }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">2,500+</div>
              <div className="text-sm text-gray-500">Active teams</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">50K+</div>
              <div className="text-sm text-gray-500">Products shipped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">99.9%</div>
              <div className="text-sm text-gray-500">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-gray-500">Support</div>
            </div>
          </div>
        </section>

        {/* Logo Wall (Linear-style) */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Trusted by</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Teams building the future</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8">
            {logoCompanies.map((company, index) => (
              <LogoCard 
                key={company.name}
                company={company}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </section>

        {/* Usage Stats Section - Middle */}
        <section className="py-20 md:py-28" style={{ backgroundColor: "#0F0F0F" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-12">
                How teams use OpenPlan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-xl border border-white/10 bg-white/[0.01] hover:border-white/20 hover:bg-white/[0.02] transition-all duration-[400ms]">
                  <div className="text-4xl font-bold text-white mb-2">85%</div>
                  <div className="text-sm text-gray-400">Faster time to market</div>
                </div>
                <div className="text-center p-6 rounded-xl border border-white/10 bg-white/[0.01] hover:border-white/20 hover:bg-white/[0.02] transition-all duration-[400ms]">
                  <div className="text-4xl font-bold text-white mb-2">40%</div>
                  <div className="text-sm text-gray-400">Cost reduction</div>
                </div>
                <div className="text-center p-6 rounded-xl border border-white/10 bg-white/[0.01] hover:border-white/20 hover:bg-white/[0.02] transition-all duration-[400ms]">
                  <div className="text-4xl font-bold text-white mb-2">10x</div>
                  <div className="text-sm text-gray-400">Better visibility</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Customer Stories (Stripe-style cards) */}
        <section className="py-20 md:py-28" style={{ backgroundColor: "#0F0F0F" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {featuredStories.map((story, index) => (
                <div
                  key={story.company}
                  className="group relative rounded-xl border border-white/10 p-8 md:p-10 hover:border-white/15 hover:-translate-y-[0.5px] transition-all duration-[400ms] ease-out overflow-visible"
                  style={{
                    backgroundColor: "#0A0A0A",
                    animationDelay: `${index * 80}ms`,
                    animation: isVisible ? "fadeInUp 600ms ease-out forwards" : "none",
                    opacity: 0,
                  }}
                >
                  {/* Subtle background brighten on hover */}
                  <div className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/[0.01] transition-all duration-[400ms] ease-out -z-0" />
                  <div className="relative z-10">
                    <div className="mb-6">
                      <CompanyLogo
                        name={story.logo}
                        variant="featured"
                        className="text-2xl md:text-3xl font-bold mb-4 hover:-translate-y-[1px] transition-all duration-[400ms] ease-out"
                      />
                    </div>
                    <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 font-light hover:-translate-y-[1px] transition-all duration-[400ms] ease-out">
                      "{story.quote}"
                    </blockquote>
                    <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                      {story.avatar && (
                        <img
                          src={story.avatar}
                          alt={story.person}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white/10 hover:scale-[1.05] hover:border-white/25 transition-all duration-[400ms] ease-out"
                        />
                      )}
                      <div>
                        <p className="font-semibold text-white hover:-translate-y-[1px] transition-all duration-[400ms] ease-out">{story.person}</p>
                        <p className="text-sm text-gray-400 mt-1 hover:-translate-y-[1px] transition-all duration-[400ms] ease-out">{story.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mini Testimonial Strip (Notion-style) */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="space-y-16 md:space-y-20">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.company}
                className="group relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 max-w-4xl mx-auto p-6 rounded-lg transition-all duration-[400ms] ease-out"
                style={{
                  animationDelay: `${index * 80}ms`,
                  animation: isVisible ? "fadeInUp 600ms ease-out forwards" : "none",
                  opacity: 0,
                }}
              >
                {/* Subtle background brighten on hover */}
                <div className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/[0.008] transition-all duration-[400ms] ease-out" />
                <div className="flex-shrink-0 relative z-10">
                  <CompanyLogo
                    name={testimonial.logo}
                    variant="large"
                    className="text-3xl md:text-4xl font-bold group-hover:-translate-y-[1px] transition-all duration-[400ms] ease-out"
                  />
                </div>
                <div className="flex-1 text-center md:text-left relative z-10">
                  <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-4 font-light hover:-translate-y-[1px] transition-all duration-[400ms] ease-out">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4 justify-center md:justify-start">
                    {testimonial.avatar && (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.person}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white/10 hover:scale-[1.05] hover:border-white/25 transition-all duration-[400ms] ease-out"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-white hover:-translate-y-[1px] transition-all duration-[400ms] ease-out">{testimonial.person}</p>
                      <p className="text-sm text-gray-400 mt-1 hover:-translate-y-[1px] transition-all duration-[400ms] ease-out">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Customer Benefits Section - Bottom */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-12 hover:-translate-y-[1px] transition-all duration-[400ms] ease-out">
              Why teams choose OpenPlan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Unified Platform */}
              <div className="group relative p-8 rounded-xl border border-white/10 bg-white/[0.01] hover:border-white/25 hover:bg-gradient-to-br hover:from-white/[0.03] hover:via-white/[0.02] hover:to-white/[0.03] transition-all duration-[400ms] ease-out cursor-pointer overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/[0.05] group-hover:via-white/[0.03] group-hover:to-white/[0.05] transition-all duration-[400ms] ease-out" />
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] ease-out">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl" />
                </div>
                {/* Content */}
                <div className="relative z-10 transform group-hover:-translate-y-1 transition-all duration-[400ms] ease-out">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.08] group-hover:bg-white/[0.12] flex items-center justify-center transition-all duration-[400ms] ease-out group-hover:scale-110 group-hover:rotate-3">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white">
                        <rect x="4" y="4" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <path d="M8 8h4M8 12h4" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <div className="text-white font-semibold text-lg group-hover:tracking-wide transition-all duration-[400ms] ease-out">Unified Platform</div>
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-[400ms] ease-out">Everything from BOM to shipping in one place</div>
                </div>
              </div>

              {/* Real-time Collaboration */}
              <div className="group relative p-8 rounded-xl border border-white/10 bg-white/[0.01] hover:border-white/25 hover:bg-gradient-to-br hover:from-white/[0.03] hover:via-white/[0.02] hover:to-white/[0.03] transition-all duration-[400ms] ease-out cursor-pointer overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/[0.05] group-hover:via-white/[0.03] group-hover:to-white/[0.05] transition-all duration-[400ms] ease-out" />
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] ease-out">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl" />
                </div>
                {/* Content */}
                <div className="relative z-10 transform group-hover:-translate-y-1 transition-all duration-[400ms] ease-out">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.08] group-hover:bg-white/[0.12] flex items-center justify-center transition-all duration-[400ms] ease-out group-hover:scale-110 group-hover:rotate-3">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white">
                        <circle cx="10" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <path d="M4 16c0-3 2.5-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <circle cx="15" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <path d="M18 16c0-1.5 1-2.5 2-2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      </svg>
                    </div>
                    <div className="text-white font-semibold text-lg group-hover:tracking-wide transition-all duration-[400ms] ease-out">Real-time Collaboration</div>
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-[400ms] ease-out">Keep teams aligned across design, engineering, and ops</div>
                </div>
              </div>

              {/* Smart Automation */}
              <div className="group relative p-8 rounded-xl border border-white/10 bg-white/[0.01] hover:border-white/25 hover:bg-gradient-to-br hover:from-white/[0.03] hover:via-white/[0.02] hover:to-white/[0.03] transition-all duration-[400ms] ease-out cursor-pointer overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/[0.05] group-hover:via-white/[0.03] group-hover:to-white/[0.05] transition-all duration-[400ms] ease-out" />
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] ease-out">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl" />
                </div>
                {/* Content */}
                <div className="relative z-10 transform group-hover:-translate-y-1 transition-all duration-[400ms] ease-out">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.08] group-hover:bg-white/[0.12] flex items-center justify-center transition-all duration-[400ms] ease-out group-hover:scale-110 group-hover:rotate-3">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white">
                        <path d="M10 2v4M10 14v4M18 10h-4M6 10H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <path d="M10 7v6M7 10h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="text-white font-semibold text-lg group-hover:tracking-wide transition-all duration-[400ms] ease-out">Smart Automation</div>
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-[400ms] ease-out">Reduce manual work with intelligent workflows</div>
                </div>
              </div>

              {/* Enterprise Security */}
              <div className="group relative p-8 rounded-xl border border-white/10 bg-white/[0.01] hover:border-white/25 hover:bg-gradient-to-br hover:from-white/[0.03] hover:via-white/[0.02] hover:to-white/[0.03] transition-all duration-[400ms] ease-out cursor-pointer overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/[0.05] group-hover:via-white/[0.03] group-hover:to-white/[0.05] transition-all duration-[400ms] ease-out" />
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] ease-out">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl" />
                </div>
                {/* Content */}
                <div className="relative z-10 transform group-hover:-translate-y-1 transition-all duration-[400ms] ease-out">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.08] group-hover:bg-white/[0.12] flex items-center justify-center transition-all duration-[400ms] ease-out group-hover:scale-110 group-hover:rotate-3">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white">
                        <rect x="4" y="8" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <path d="M6 8V6a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <circle cx="10" cy="12" r="1" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="text-white font-semibold text-lg group-hover:tracking-wide transition-all duration-[400ms] ease-out">Enterprise Security</div>
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-[400ms] ease-out">SOC 2 compliant with end-to-end encryption</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust CTA Section */}
        <section className="py-20 md:py-28" style={{ backgroundColor: "#0F0F0F" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 hover:-translate-y-[1px] transition-all duration-[400ms] ease-out cursor-default">
              Join thousands of teams building with us
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Start building faster, smarter, and more efficiently. Join companies like Nova, Atlas, and Pixel.
            </p>
            <Button
              className="mt-8 px-8 py-6 text-base md:text-lg bg-white text-black hover:bg-gray-100 hover:scale-[1.02] transition-all duration-[400ms] rounded-lg font-medium shadow-sm hover:shadow-md"
              onClick={() => {
                // You can add navigation logic here, e.g., navigate to signup or open waitlist
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Get Started
            </Button>
            <p className="mt-6 text-xs text-gray-500">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes heroFadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes logoFadeInUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 0.9;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Customers;

