/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/Header.jsx",
    "./src/components/Footer.jsx",
    "./src/components/LoginPage.jsx",
    "./src/components/EmailInput.jsx",
    "./src/components/PasswordInput.jsx",
    "./src/components/SocialLogin.jsx",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "12px",
        base: "14px",
        lg: "16px",
        xl: "20px",
      },
      colors: {
        mainBlue: "#646cff",
      },
    },
  },
  plugins: [],
};
