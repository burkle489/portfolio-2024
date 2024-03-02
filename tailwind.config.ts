import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/images/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        jost: ["var(--font-jost)"],
      },
      colors: {
        primary: "", // Primary Buttons etc.
        secondary: "",
        tertiary: "",
        dark: "#1c1c1c",
        light: "rgb(248 247 255)",
        "island-blue": "#4E23F7",
        coral: "#DF4E60",
        orange: "#EC8D54",
        avocado: "#5EBF98",
        primrose: "#EDC57D",
        sapphire: "#3178F0",
        azure: "#4BE7DD",
        purple: "#A879DA",
        pink: "#FE79DE",
      },
    },
  },
  plugins: [],
}
export default config
