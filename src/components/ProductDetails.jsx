import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// 카테고리별 상품 상세페이지
const ProductDetails = () => {
  const { category, productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPath = `/src/data/${category}.json`;
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
    return (
      <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-14 rounded-xl bg-black bg-opacity-40 text-white text-center flex items-center justify-center z-10">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-check-lg mr-[15px]"
          viewBox="0 0 16 16"
        >
          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
        </svg> */}
        <p>로딩 중...</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className="product_title lg" data-v-a60468d2>
          <div data-v-a60468d2>
            <div className="title" data-v-a60468d2>
              {product.brand}
            </div>
            <div className="sub_title" data-v-a60468d2>
              {product.name}
            </div>
          </div>
        </div>
        <div className="w-56 h-32">{product.image}</div>
        <div className="flex w-72 h-36 b-2 border-gray-600 mx-auto">
          <div>{product.description}</div>
          <div>{product.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
