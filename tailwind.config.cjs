module.exports = {
  content: ["./src/**/*.{svelte,css,html}"],
  daisyui: {
    themes: [
      {
        maybetheme: {
          "primary": "#3b82f6",
          "secondary": "#38bdf8",
          "accent": "#bfdbfe",
          "neutral": "#1c1917",
          "base-100": "#1c1917",
          "info": "#38bdf8",
          "success": "#65a30d",
          "warning": "#f59e0b",
          "error": "#dc2626",
        },
      },
    ],
  },
  darkMode: "class",
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
