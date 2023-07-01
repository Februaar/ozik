import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Index from "./components/Index";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MyPage from "./components/MyPage";
import Customer from "./components/Customer";
import SubScription from "./components/SubScription";

import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import SearchPage from "./components/SearchPage";

import Recommendations from "./categories/Recommendations";
import NewProducts from "./categories/NewProducts";
import BestProducts from "./categories/BestProducts";
import SpecialOffers from "./categories/SpecialOffers";

import ScrollButton from "./view/ScrollButton";
import Error from "./view/Error";
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
          <Route path="/customer-service" element={<Customer />} />
          <Route path="/subscription" element={<SubScription />} />

          {/* 카테고리 별 경로 */}
          <Route path="/recommendation " element={<Recommendations />} />
          <Route path="/newData" element={<NewProducts />} />
          <Route path="/best" element={<BestProducts />} />
          <Route path="/special" element={<SpecialOffers />} />

          {/* 동적 경로 */}
          <Route path="/:category/:productId" element={<ProductDetails />} />

          {/* Search 페이지 */}
          <Route path="/search" element={<SearchPage />} />

          {/* 에러 페이지 */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        <ScrollButton />
      </Router>
    </AuthProvider>
  );
};

export default App;
