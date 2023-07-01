import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/public/data/products.json");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>상품 목록</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}원
            <button onClick={() => addToCart(product)}>장바구니에 담기</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;
