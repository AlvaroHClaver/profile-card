/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "card-bg": "#0F172BCC",
        "card-border": "#1C3984D",
        "primary-text": "#F1F5F9",
        action: "#155DFC",
      },
      backgroundImage: {
        "app-gradient":
          "linear-gradient(135deg, #0F172B 0%, #162456 50%, #000 100%)",
        "header-bg":
          "linear-gradient(90deg, rgba(28, 57, 142, 0.50) 0%, rgba(49, 44, 133, 0.50) 100%)",
      },
    },
  },
  plugins: [],
};
