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
        "details-text": "#8EC5FFB2",
        action: "#155DFC",
        "profile-bg": "#1c398e80",
        "bullet-icon": "#51A2FF",
        "bullet-text": "#CAD5E2",
        "badge-bg": "#16245680",
        "badge-border": "#193CB84D",
        "badge-font": "#BEDBFF",
      },
      backgroundImage: {
        "app-gradient":
          "linear-gradient(135deg, #0F172B 0%, #162456 50%, #000 100%)",
        "header-bg":
          "linear-gradient(90deg, rgba(28, 57, 142, 0.50) 0%, rgba(49, 44, 133, 0.50) 100%)",
        "action-gradient": "linear-gradient(90deg, #155DFC 0%, #4F39F6 100%)",
      },
    },
  },
  plugins: [],
};
