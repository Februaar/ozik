/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx",
    "./src/components/Header.jsx",
    "./src/components/Login.jsx",
    "./src/components/Email.jsx",
    "./src/components/Password.jsx",
    "./src/components/SocialLogin.jsx",
    "./src/components/Signup.jsx",

    "./src/components/Index.jsx",
    "./src/components/Category.jsx",
    "./src/components/ProductList.jsx",
    "./src/components/ProductDetails.jsx",
    "./src/components/Slider.jsx",
    "./src/components/Footer.jsx",
    "./src/components/Search.jsx",

    "./src/categories/BestProducts.jsx",
    "./src/categories/NewProducts.jsx",
    "./src/categories/Recommendations.jsx",
    "./src/categories/SpecialOffers.jsx",

    "./src/view/ScrollButton.jsx",
    "./src/view/Error.jsx",

    // 미완성
    "./src/components/MyPage.jsx",
    "./src/components/Customer.jsx",
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
