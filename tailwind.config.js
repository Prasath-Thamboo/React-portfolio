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
        sans: ["Barlow", ...defaultTheme.fontFamily.sans],
        cond: ['"Barlow Condensed"', "Barlow", ...defaultTheme.fontFamily.sans],
        stencil: ['"Big Shoulders Stencil Display"', '"Barlow Condensed"', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        cargo: {
          orange: "#E8602F",
          navy: "#14213D",
          yellow: "#F6C445",
          steel: "#5A6878",
          green: "#2E7D4F",
          concrete: "#ECEAE4",
        },
      },
      transitionTimingFunction: {
        crane: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },

  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: [
      {
        quai: {
          "primary": "#E8602F",
          "primary-content": "#14213D",
          "secondary": "#14213D",
          "secondary-content": "#FFFFFF",
          "accent": "#F6C445",
          "accent-content": "#14213D",
          "neutral": "#14213D",
          "neutral-content": "#ECEAE4",
          "base-100": "#ECEAE4",
          "base-200": "#FFFFFF",
          "base-300": "#D8D4CB",
          "base-content": "#14213D",
          "info": "#2F5D9E",
          "success": "#2E7D4F",
          "warning": "#F6C445",
          "error": "#C2361C",
          "--rounded-box": "0.25rem",
          "--rounded-btn": "0.125rem",
          "--rounded-badge": "0.125rem",
        },
      },
      {
        nuit: {
          "primary": "#E8602F",
          "primary-content": "#14213D",
          "secondary": "#ECEAE4",
          "secondary-content": "#0E1626",
          "accent": "#F6C445",
          "accent-content": "#14213D",
          "neutral": "#1C2A48",
          "neutral-content": "#ECEAE4",
          "base-100": "#0E1626",
          "base-200": "#16213A",
          "base-300": "#26344F",
          "base-content": "#ECEAE4",
          "info": "#7FA7E0",
          "success": "#2E7D4F",
          "warning": "#F6C445",
          "error": "#F0715A",
          "--rounded-box": "0.25rem",
          "--rounded-btn": "0.125rem",
          "--rounded-badge": "0.125rem",
        },
      },
    ],
    darkTheme: "nuit",
  },
}
