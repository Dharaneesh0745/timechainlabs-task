/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      spacing: {
        "vh-98": "98vh",
        "vh-99": "99vh",
      },
    },
  },
  plugins: [],
};
