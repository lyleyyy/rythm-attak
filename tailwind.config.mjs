/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        noto: ["Noto Sans TC", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ig: "linear-gradient(to right,#833ab4,#fd1d1d,#fcb045)",
        theme: "linear-gradient(135deg,  #8e44ad, #4a90e2)",
      },
      backgroundImage: {
        theme: "linear-gradient(135deg,  #8e44ad, #4a90e2)",
        ig: "linear-gradient(to right,#833ab4,#fd1d1d,#fcb045)",
      },
      fontSize: {
        base: "16px",
      },
      colors: {
        white: "#fff",
        "gray-dark": "#273444",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
