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
        yellow: "#F2762E",
        stroke_blue: "rgba(20, 22, 154, 0.25)",
      },
      fontFamily: {
        sans: ["var(--font-main)"],
      },
      screens: {
        "8xl": "3200px",
      },
    },
  },
  plugins: [],
};
