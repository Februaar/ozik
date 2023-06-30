import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SpecialOffers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("src/data/special.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching special offers:", error);
      });
  }, []);

  return (
    <>
      {/* <h2>특가상품</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}></li>
        ))}
      </ul> */}
      <div className="home_products">
        <div className="product_title lg" data-v-a60468d2>
          <div data-v-a60468d2>
            <div className="title" data-v-a60468d2>
              Recommendation
            </div>
            <div className="sub_title" data-v-a60468d2>
              추천 상품
            </div>
          </div>
        </div>
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

export default SpecialOffers;
