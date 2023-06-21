import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="*" element={<Error />} />
        <Route path="/" element={<Index />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route path="/product/:id" element={<Products />} />
        <Route path="/cart" element={<Cart />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

// return (
//   <Router>
//     <HeaderView />
//     <Routes>
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/signup" element={<SignupPage />} />
//     </Routes>
//     <section className="drawer-content">
//       {/* <Nav /> */}
//       <section className="main">
//         {/* <ProductList products={products} addToCart={addToCart} />
//     <Cart cart={cart} />
//     <Routes> */}
//         {/* <Route path="*" element={<ProductList />} /> */}
//         {/* <Route path="*" element={<Product />} /> */}
//         {/* <Route path="*" element={<Cart />} /> */}
//         {/* </Routes> */}
//       </section>
//       <Footer />
//     </section>
//   </Router>
// );
