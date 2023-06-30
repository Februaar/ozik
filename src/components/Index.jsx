import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Slider from "../components/Slider";
import Category from "../components/Category";
import ProductList from "../components/ProductList";

// 메인페이지에 렌더링되는
// 카테고리별 상품 목록
const Index = () => {
  const navigate = useNavigate();

  const categoryRefs = {
    recommendation: useRef(null),
    new: useRef(null),
    best: useRef(null),
    special: useRef(null),
  };

  const scrollToCategory = (category) => {
    const categoryRef = categoryRefs[category];
    if (categoryRef && categoryRef.current) {
      const offsetTop = categoryRef.current.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleProductClick = (productId, link) => {
    navigate(link);
  };

  return (
    <div>
      <Category scrollToCategory={scrollToCategory} />
      <Slider />
      <div ref={categoryRefs.recommendation}>
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
      </div>
      <ProductList
        category="recommendation"
        onProductClick={handleProductClick}
      />
      <div ref={categoryRefs.new}>
        <div className="product_title lg" data-v-a60468d2>
          <div data-v-a60468d2>
            <div className="title" data-v-a60468d2>
              New
            </div>
            <div className="sub_title" data-v-a60468d2>
              신상품
            </div>
          </div>
        </div>
      </div>
      <ProductList category="new" onProductClick={handleProductClick} />
      <div ref={categoryRefs.best}>
        <div className="product_title lg" data-v-a60468d2>
          <div data-v-a60468d2>
            <div className="title" data-v-a60468d2>
              Best
            </div>
            <div className="sub_title" data-v-a60468d2>
              인기 상품
            </div>
          </div>
        </div>
      </div>
      <ProductList category="best" onProductClick={handleProductClick} />
      <div ref={categoryRefs.special}>
        <div className="product_title lg" data-v-a60468d2>
          <div data-v-a60468d2>
            <div className="title" data-v-a60468d2>
              Special
            </div>
            <div className="sub_title" data-v-a60468d2>
              특가 상품
            </div>
          </div>
        </div>
      </div>
      <ProductList category="special" onProductClick={handleProductClick} />
    </div>
  );
};

export default Index;
