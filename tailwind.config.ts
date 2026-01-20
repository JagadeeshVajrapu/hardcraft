import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "Helvetica Neue", "sans-serif"],
      },
      

      /* ---------------- COLORS (PURE NEUTRAL – NO BLUE) ---------------- */
      colors: {
        /* Base */
        background: "#0A0A0A",
        foreground: "#FFFFFF",

        /* Borders & Inputs */
        border: "rgba(255,255,255,0.12)",
        input: "rgba(255,255,255,0.08)",
        ring: "rgba(255,255,255,0.25)",

        /* Primary Button (WHITE) */
        primary: {
          DEFAULT: "#FFFFFF",     // always white
          foreground: "#000000",
        },
        
        

        /* Secondary Button (OUTLINE) */
        secondary: {
          DEFAULT: "rgba(255,255,255,0.05)",
          foreground: "#FFFFFF",
        },

        /* Muted / Subtext (FIXED – NO BLUE) */
        muted: {
          DEFAULT: "#0A0A0A",
          foreground: "#9CA3AF",
        },

        /* Accent (NEUTRAL, NOT BLUE) */
        accent: {
          DEFAULT: "#1A1A1A",
          foreground: "#E5E7EB",
        },

        /* Cards / Sections (FIXED – NO BLUE) */
        card: {
          DEFAULT: "#0A0A0A",
          foreground: "#E5E7EB",
        },

        /* Destructive */
        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#FFFFFF",
        },

        /* Industry (NEUTRALIZED) */
        industry: {
          auto: "#0A0A0A",
          aerospace: "#0A0A0A",
          pharma: "#0A0A0A",
          media: "#0A0A0A",
        },
      },

      /* ---------------- BACKGROUND IMAGES (BLUE REMOVED) ---------------- */
      backgroundImage: {
        /* ❌ Removed blue gradients completely */
        "gradient-hero": "none",
        "gradient-primary": "none",
        "gradient-secondary": "none",

        /* Optional hover glow (neutral, safe) */
        "hover-glow":
          "radial-gradient(80% 40% at 50% -10%, rgba(255,255,255,0.06), transparent 60%)",
      },

      /* ---------------- SHADOWS ---------------- */
      boxShadow: {
        glow: "0 0 40px rgba(255,255,255,0.06)",
        card: "0 20px 40px rgba(0,0,0,0.7)",
        elevated: "0 30px 60px rgba(0,0,0,0.85)",
      },

      /* ---------------- TRANSITIONS ---------------- */
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },

      /* ---------------- RADIUS ---------------- */
      borderRadius: {
        lg: "16px",
        md: "12px",
        sm: "8px",
      },

      /* ---------------- ANIMATIONS ---------------- */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
