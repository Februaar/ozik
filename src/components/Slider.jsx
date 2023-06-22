import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  const items = [
    {
      name: "coffee",
      title: "스타벅스 커피",
      text: "이제는 집에서도 즐기세요.",
    },
    {
      name: "digital",
      title: "신속한 업무처리!",
      text: "다양한 디지털 상품을 둘러보세요.",
    },
    {
      name: "grocery",
      title: "신선한 식품!",
      text: "농장 직배송으로 더욱 신선한 식료품을 만나보세요.",
    },
  ];

  return (
    <Carousel
      // autoPlay
      showThumbs={false}
      interval={6000}
      showStatus={false}
      infiniteLoop={true}
    >
      {items.map((item) => (
        <div key={item.name}>
          <div>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <Link to={`/${item.name}`}>
              바로가기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M 10.293 5.293 a 1 1 0 0 1 1.414 0 l 4 4 a 1 1 0 0 1 0 1.414 l -4 4 a 1 1 0 0 1 -1.414 -1.414 L 12.586 11 H 5 a 1 1 0 1 1 0 -2 h 7.586 l -2.293 -2.293 a 1 1 0 0 1 0 -1.414 Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <img src={`/img_shop_${item.name}.jpeg`} alt={item.name} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
