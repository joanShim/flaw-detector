import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        root: "12px",
        clamp: "clamp(1rem, 5vw, 3rem)",
        "clamp-sm": "clamp(0.4rem, 5vw, 1.5rem)",
        "clamp-md": "clamp(1.4rem, 5vw, 2.8rem)",
        "clamp-2xl": "clamp(2rem, 5vw, 3.75rem)",
        "clamp-3xl": "clamp(3.65rem, 5vw, 5rem)",
        "clamp-4xl": "clamp(4rem, 5vw, 6.5rem)",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          500: "#6100FF",
          400: "#883EFF",
          300: "#A66FFF",
          200: "#C9A8FF",
          100: "#E0CEFF",
          50: "#F2EBFF",
        },
        accent: {
          red: "#FF6D6D",
          blue: "#6DB0FF",
          orange: "#FFD542",
          green: "#00C308",
          cyan: "#17E0D4",
        },
        purple: {
          light: "#FAF8FF",
          dark: "#E3E1E7",
        },
        red: {
          light: "#FFEFEF",
        },
        gray: {
          default: "#595959",
          dark: "#3F3F3F",
          light: "#D6D6D6",
        },
        bggray: {
          light: "#F1F1F1",
          dark: "#C2C2C2",
        },
        neutral: {
          100: "#030303",
          90: "#1A1A1A",
          80: "#333333",
          70: "#4D4D4D",
          60: "#4D4D4D",
          50: "#808080",
          40: "#999999",
          30: "#B3B3B3",
          20: "#CCCCCC",
          10: "#E6E6E6",
          5: "#F3F3F3",
        },
        line: {
          default: "#C3C3C3",
          light: "#E6E6E6",
          dark: "#ADADAD",
        },
      },
      screens: {
        "1150": "71.875rem",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        roundClockwise: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        roundCounterClockwise: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        fadeUp: {
          "0%": {
            transform: "translate3d(0, 1.5rem, 0)",
            opacity: "0",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "scroll-left": "scrollLeft 10s linear infinite",
        "round-clockwise": "roundClockwise 1.7s infinite ease", // 시계 방향
        "round-counter-clockwise": "roundCounterClockwise 1.7s infinite ease", // 반시계 방향
        "fade-up": "fadeUp 0.9s ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
