/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx",
    "./src/components/Header.jsx",
    "./src/components/Footer.jsx",
    "./src/components/Main.jsx",
    "./src/components/Login.jsx",
    "./src/components/Signup.jsx",
    "./src/components/Email.jsx",
    "./src/components/Password.jsx",
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
