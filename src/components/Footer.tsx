import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, Globe } from "lucide-react";
import whiteLogo from "@/assets/White_icon_png.png";

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand + Mission */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={whiteLogo}
                alt="OpenPlan Logo"
                className="h-8 object-contain"
              />
              <span className="text-2xl font-semibold">OpenPlan</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Modern ops for hardware SaaS: unify planning, BOM, sourcing,
              builds, quality, and analytics in one place.
            </p>
            <div className="flex items-center gap-3 text-muted-foreground">
              <a
                aria-label="Open Twitter"
                href="#"
                className="hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                aria-label="Open GitHub"
                href="#"
                className="hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                aria-label="Open LinkedIn"
                href="#"
                className="hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                aria-label="Email us"
                href="#"
                className="hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-foreground">
              Product
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a className="hover:text-foreground" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a className="hover:text-foreground" href="#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a className="hover:text-foreground" href="#">
                  Roadmap
                </a>
              </li>
              <li>
                <a className="hover:text-foreground" href="#">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-foreground">
              Company
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a className="hover:text-foreground" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-foreground" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:text-foreground" href="#">
                  Customers
                </a>
              </li>
              <li>
                <a className="hover:text-foreground" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-foreground">
              Resources
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a className="hover:text-foreground" href="#">
                  Docs
                </a>
              </li>
              <li>
                <a className="hover:text-foreground" href="#">
                  Guides
                </a>
              </li>
              <li>
                <a className="hover:text-foreground" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="hover:text-foreground" href="#">
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 items-center rounded-xl border border-border/60 bg-card/40 p-6">
          <div className="md:col-span-2">
            <h5 className="text-base font-semibold">
              Subscribe for product updates
            </h5>
            <p className="mt-1 text-sm text-muted-foreground">
              Join our newsletter. We send the good stuff—no spam, unsubscribe
              anytime.
            </p>
          </div>
          <form className="flex gap-3">
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Work email
              </label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder="Work email"
                className="h-11 rounded-lg"
              />
            </div>
            <Button
              className="h-11 rounded-lg bg-gradient-primary"
              type="button"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} OpenPlan, Inc.</span>
            <span className="hidden md:inline">•</span>
            <a className="hover:text-foreground" href="#">
              Terms
            </a>
            <span>·</span>
            <a className="hover:text-foreground" href="#">
              Privacy
            </a>
            <span>·</span>
            <a className="hover:text-foreground" href="#">
              Security
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Globe className="h-4 w-4" />
            <span>English (US)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
