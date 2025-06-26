export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        black_1: "#181818",
        grey_1: "#919191",
        grey_2: "#636363",
        grey_3: "#CFCFCF",
        grey_4: "#323232",
        orange: "#F2762E",
        blue_1: "#1B1C83",
        stroke_blue: "rgba(20, 22, 154, 0.25)",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        "8xl": "3200px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
