/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "card-bg": "var(--color-card-bg)",
        "card-border": "var(--color-card-border)",
        "primary-text": "var(--color-primary-text)",
        "details-text": "var(--color-details-text)",
        action: "var(--color-action)",
        "profile-bg": "var(--color-profile-bg)",
        "bullet-icon": "var(--color-bullet-icon)",
        "bullet-text": "var(--color-bullet-text)",
        "badge-bg": "var(--color-badge-bg)",
        "badge-border": "var(--color-badge-border)",
        "badge-font": "var(--color-badge-font)",
      },
      backgroundImage: {
        "app-gradient": "var(--gradient-app)",
        "header-bg": "var(--gradient-header)",
        "action-gradient": "var(--gradient-action)",
      },
    },
  },
  plugins: [],
};
