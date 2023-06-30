import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contents = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dataUrl = `src/data/${category}.json`;

    fetch(dataUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [category]);

  return (
    <>
      <div className="home_products">
        <div className="product_list_wrap lg" data-v-7681b766>
          <div
            className="product_list list_first horizontal_product_colletction"
            data-v-7681b766
          >
            {products.map((product) => (
              <div
                className="product_item"
                key={product.id}
                data-v-34d98ac3
                data-v-7681b766
              >
                <Link to={product.link} className="item_inner" data-v-34d98ac3>
                  <div className="thumb_box" data-v-34d98ac3>
                    <div
                      className="product"
                      style={{ backgroundColor: "#f4f4f4" }}
                      data-v-4309a8a2
                      data-v-34d98ac3
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="picture product_img"
                        data-v-1913df4e
                        data-v-4309a8a2
                      />
                    </div>
                  </div>
                  <div className="info_box" data-v-34d98ac3>
                    <div className="brand brand-text" data-v-34d98ac3>
                      {product.brand}
                    </div>
                    <p className="name" data-v-34d98ac3>
                      {product.name}
                    </p>
                    <div className="price" data-v-34d98ac3>
                      <div className="amount lg">
                        <em className="num">{product.price}</em>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contents;
