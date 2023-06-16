import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <BrowserRouter>
      <Header />
      <section className="drawer-content">
        {/* <Nav /> */}
        <section className="main">
          {/* <ProductList products={products} addToCart={addToCart} />
          <Cart cart={cart} />
          <Routes> */}
          {/* <Route path="*" element={<ProductList />} /> */}
          {/* <Route path="*" element={<Product />} /> */}
          {/* <Route path="*" element={<Cart />} /> */}
          {/* </Routes> */}
        </section>
        {/* <Footer /> */}
      </section>
    </BrowserRouter>
  );
};

export default App;
