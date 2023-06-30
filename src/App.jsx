import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Index from "./components/Index";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MyPage from "./components/MyPage";
import Footer from "./components/Footer";
import ScrollButton from "./view/ScrollButton";
import { AuthProvider } from "./contexts/AuthContext";

import Recommendations from "./categories/Recommendations";
import NewProducts from "./categories/NewProducts";
import BestProducts from "./categories/BestProducts";
import SpecialOffers from "./categories/SpecialOffers";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          {/* 기본 경로 */}
          <Route path="/" element={<Index />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/my-page" element={<MyPage />} />

          {/* <Route path="/cart" element={<Cart />} /> */}

          {/* 카테고리 별 경로 */}
          {/* <Route path="/product/:id" element={<Products />} /> */}
          <Route path="/recommendation" element={<Recommendations />} />
          <Route path="/new" element={<NewProducts />} />
          <Route path="/best" element={<BestProducts />} />
          <Route path="/special" element={<SpecialOffers />} />

          {/* 에러 페이지 */}
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
        <Footer />
        <ScrollButton />
      </Router>
    </AuthProvider>
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
