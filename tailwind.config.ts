import type { Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        grey_1: "#919191",
        grey_2: "#636363",
        grey_3: "#CFCFCF",
        grey_4: "#323232",
        yellow: "#F2762E",
      },
      fontFamily: {
        sans: ["var(--font-main)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
