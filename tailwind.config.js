import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        "spin-slow": "spin-slow 12s linear infinite",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
    },
  },

  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: [
      {
        devopsdark: {
          "primary": "#3DA9FC",
          "secondary": "#2EE6A8",
          "accent": "#3DA9FC",
          "neutral": "#1B232D",
          "base-100": "#0A0E14",
          "base-200": "#10151C",
          "base-300": "#1B232D",
          "info": "#3DA9FC",
          "success": "#2EE6A8",
          "warning": "#F0B429",
          "error": "#F85149",
          "--rounded-box": "1rem",
          "--rounded-btn": "0.6rem",
        },
      },
      {
        devopslight: {
          "primary": "#2563EB",
          "secondary": "#059669",
          "accent": "#2563EB",
          "neutral": "#E3E8EF",
          "base-100": "#F7F9FC",
          "base-200": "#FFFFFF",
          "base-300": "#E3E8EF",
          "info": "#2563EB",
          "success": "#059669",
          "warning": "#D97706",
          "error": "#DC2626",
          "--rounded-box": "1rem",
          "--rounded-btn": "0.6rem",
        },
      },
    ],
    darkTheme: "devopsdark",
  },
}
