/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/Header.jsx"],
  theme: {
    extend: {
      fontSize: {
        sm: "12px",
        base: "14px",
        lg: "16px",
      },
      colors: {
        mainBlue: "#646cff",
      },
    },
  },
  plugins: [],
};
