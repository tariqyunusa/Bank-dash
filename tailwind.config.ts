import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "120" : "28rem",
        "400" : "85.00rem",
        "150" : "26.875rem"
      },
      height: {
        "200" : "42.55rem",
        "70" : "15rem"
      },
      backgroundColor:{
        rings: "#F5F7FA",
        primaryCard: "#4C49ED"
      },
      colors: {
        settings: "#718EBF",
        secondary: "#FE5C73",
        auxilary: "#B1B1B1",
        secondary1: "#2D60FF",
        secondary2: "#343C6A",

      },
      linearGradientColors: {
        'ash-blue' : ["#4C49ED","#0A06F4"]
      }
    },
  },
  plugins: [],
};
export default config;
