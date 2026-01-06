import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        heading: "var(--font-heading)",
        body: "var(--font-body)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          light: "hsl(var(--secondary-light))",
          dark: "hsl(var(--secondary-dark))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        ssy: {
          DEFAULT: "hsl(var(--ssy))",
          foreground: "hsl(var(--ssy-foreground))",
        },
        ulip: {
          DEFAULT: "hsl(var(--ulip))",
          foreground: "hsl(var(--ulip-foreground))",
        },
        fd: {
          DEFAULT: "hsl(var(--fd))",
          foreground: "hsl(var(--fd-foreground))",
        },
        mf: {
          DEFAULT: "hsl(var(--mf))",
          foreground: "hsl(var(--mf-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
          light: "hsl(var(--success-light))",
          bg: "hsl(var(--success-bg))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
          light: "hsl(var(--warning-light))",
          bg: "hsl(var(--warning-bg))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
          light: "hsl(var(--info-light))",
          bg: "hsl(var(--info-bg))",
        },
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-card': 'var(--gradient-card)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'glow': 'var(--shadow-glow)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        slideIn: {
          "0%": {
            transform: "scaleX(0)",
          },
          "50%": {
            transform: "scaleX(1)",
          },
          "100%": {
            transform: "scaleX(0)",
          },
        },
        draw: {
          "0%": {
            strokeDasharray: "300",
            strokeDashoffset: "300",
          },
          "50%": {
            strokeDasharray: "300",
            strokeDashoffset: "0",
          },
          "100%": {
            strokeDasharray: "300",
            strokeDashoffset: "-300",
          },
        },
        swing: {
          "0%, 100%": {
            transform: "rotate(-5deg)",
          },
          "50%": {
            transform: "rotate(5deg)",
          },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "draw-segment": {
          "0%": { strokeDashoffset: "251.2" },
          "100%": { strokeDashoffset: "0" },
        },
        "draw-circle": {
          "0%": { strokeDashoffset: "inherit" },
          "100%": { strokeDashoffset: "0" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "150" },
          "100%": { strokeDashoffset: "0" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "15%": { transform: "scale(1.15)" },
          "30%": { transform: "scale(1)" },
          "45%": { transform: "scale(1.1)" },
          "60%": { transform: "scale(1)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "fill-field": {
          "0%": { width: "0%", backgroundColor: "hsl(var(--muted))" },
          "50%": { width: "100%", backgroundColor: "hsl(var(--primary) / 0.3)" },
          "100%": { width: "100%", backgroundColor: "hsl(var(--muted))" },
        },
        "arrow-hit": {
          "0%": { opacity: "0", transform: "translate(-20px, -20px)" },
          "100%": { opacity: "1", transform: "translate(0, 0)" },
        },
        sparkle: {
          "0%": { opacity: "0", transform: "scale(0) rotate(0deg)" },
          "50%": { opacity: "1", transform: "scale(1.2) rotate(180deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(360deg)" },
        },
        "grow-stem": {
          "0%": { strokeDashoffset: "45" },
          "100%": { strokeDashoffset: "0" },
        },
        "grow-branch": {
          "0%": { opacity: "0", transform: "scale(0)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        bloom: {
          "0%": { opacity: "0", transform: "scale(0)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "float-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "30%": { opacity: "1" },
          "100%": { opacity: "1", transform: "translateY(-5px)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "50%": { opacity: "0.8" },
          "100%": { transform: "translateY(30px)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slideIn: "slideIn 1.5s ease-out infinite",
        draw: "draw 3s ease-in-out infinite",
        swing: "swing 2s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out forwards",
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
