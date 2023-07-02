import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  const items = [
    {
      name: "coffee",
      title: "illy 커피",
      text: "이제 집에서도 즐기세요",
    },
    {
      name: "snack",
      title: "사무실 간식 꾸러미",
      text: "매달 새로운 간식을 맛보세요",
    },
    {
      name: "vegetable",
      title: "무농약 채소",
      text: "아이들에게는 신선한 채소를 소개해보세요",
    },
  ];

  return (
    <Carousel
      autoPlay
      showThumbs={false}
      interval={6000}
      showStatus={false}
      infiniteLoop={true}
      className="carousel-container"
    >
      {items.map((item, index) => (
        <div key={item.name} className="carousel-slide">
          <div className="carousel-description absolute left-auto right-auto bottom-1/3 mb-10 w-full lg:container px-4 md:px-10 text-left ">
            <h2 className="text-2xl lg:text-4xl font-bold text-white">
              {item.title}
            </h2>
            <p className="my-2 text-white">{item.text}</p>
            <Link
              to="recommendation/2"
              className="inline-flex items-center rounded-md btn btn-sm lg:btn-md mt-3 bg-black text-white py-2 px-3"
            >
              지금 구독하기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
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
          <img src={`/images/${item.name}.jpg`} alt={item.name} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
