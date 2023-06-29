/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx",
    "./src/components/Header.jsx",
    "./src/components/Footer.jsx",
    "./src/components/Index.jsx",
    "./src/components/Login.jsx",
    "./src/components/Signup.jsx",
    "./src/components/Email.jsx",
    "./src/components/Password.jsx",
    "./src/components/SocialLogin.jsx",
    "./src/components/CategoryList.jsx",
    "./src/components/Slider.jsx",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "12px",
        base: "14px",
        lg: "16px",
        xl: "20px",
      },
    },
  },
  plugins: [],
};
