import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { category, productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 카테고리에 해당하는 JSON 파일을 가져옵니다.
        const dataPath = `/src/data/${category}.json`;
        const response = await fetch(dataPath);
        const data = await response.json();

        // productId와 일치하는 상품을 찾습니다.
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
    return <div>로딩 중...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <a href={product.link}>자세히 보기</a>
    </div>
  );
};

export default ProductDetails;
