import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Index from "./components/Index";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MyPage from "./components/MyPage";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";

import Recommendations from "./categories/Recommendations";
import NewProducts from "./categories/NewProducts";
import BestProducts from "./categories/BestProducts";
import SpecialOffers from "./categories/SpecialOffers";

import ScrollButton from "./view/ScrollButton";
import { AuthProvider } from "./contexts/AuthContext";

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
          <Route path="/recommendation " element={<Recommendations />} />
          <Route path="/new" element={<NewProducts />} />
          <Route path="/best" element={<BestProducts />} />
          <Route path="/special" element={<SpecialOffers />} />

          {/* 동적 경로 */}
          <Route path="/:category/:productId" element={<ProductDetails />} />

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

// useEffect(() => {
//   const dataPath = `src/data/recommendation.json`;

//   fetch(dataPath)
//     .then((response) => response.json())
//     .then((data) => {
//       const selectedProduct = data.find(
//         (item) => item.id === parseInt(productId)
//       );
//       setProduct(selectedProduct);
//     })
//     .catch((error) => {
//       console.error("Error fetching product details:", error);
//     });
// }, [category, productId]);

// if (!product) {
//   return <div>Loading...</div>;
// }
