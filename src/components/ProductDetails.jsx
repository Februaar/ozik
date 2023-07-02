import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Error from "../view/Error.jsx";

// 카테고리별 상품 상세페이지
const ProductDetails = () => {
  const { category, productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPath = `/public/data/${category}.json`;
        const response = await fetch(dataPath);
        const data = await response.json();

        const selectedProduct = data.find(
          (item) => item.id === parseInt(productId)
        );

        setProduct(selectedProduct);
      } catch (error) {
        console.error(
          "상품 상세 정보를 불러오는 중 오류가 발생했습니다:",
          error
        );
      }
    };

    fetchData();
  }, [category, productId]);

  if (!product) {
    return <Error />;
  }

  return (
    <>
      <div className="content_container">
        <div className="content">
          <div className="column_bind">
            <div className="column">
              <img src={product.image} alt="{product.name}" />
            </div>
            <div className="column">
              <div className="column_box">
                <div className="column_top">
                  <div className="detail_main_title">
                    <div className="main_title_box">
                      <div className="brand">{product.brand}</div>
                      <p className="title">{product.name}</p>
                      <p className="description">{product.description}</p>
                    </div>
                  </div>
                  <div className="product_info_wrap">
                    <h3 className="detail_title">구독정보</h3>
                    <div className="detail_product_wrap">
                      <dl className="detail_product">
                        <div className="detail_box">
                          <dt className="product_title">2주일 간격</dt>
                          <dd className="product_info">{product.price}</dd>
                        </div>
                        <div className="detail_box">
                          <dt className="product_title">3주일 간격</dt>
                          <dd className="product_info">{product.price}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                  <div className="btn_wrap">
                    <div className="division_btn_box">
                      <a href="/error" className="btn_division wish_list">
                        <strong className="title">고민해볼게요</strong>
                      </a>
                      <a href="/error" className="btn_division subscribe">
                        <strong className="title">구독할래요</strong>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
