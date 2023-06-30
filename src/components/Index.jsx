import { useRef } from "react";
import { useParams } from "react-router-dom";

import Slider from "../components/Slider";
import CategoryList from "../components/CategoryList";
import Contents from "../components/Contents";

const Index = () => {
  const { category } = useParams();

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

  return (
    <div>
      <CategoryList scrollToCategory={scrollToCategory} />
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
      <Contents category="recommendation" />
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
      <Contents category="new" />
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
      <Contents category="best" />
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
      <Contents category="special" />
    </div>
  );
};

export default Index;
