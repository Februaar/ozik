import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dataUrl = "/public/data/slider.json";

    fetch(dataUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [category]);

  return (
    <Carousel
      autoPlay
      showThumbs={false}
      interval={6000}
      showStatus={false}
      infiniteLoop={true}
      className="carousel-container"
    >
      {products.map((product) => (
        <div key={product.name} className="carousel-slide">
          <div className="carousel-description absolute left-auto right-auto bottom-1/3 mb-10 w-full lg:container px-4 md:px-10 text-left ">
            <h2 className="text-2xl lg:text-4xl font-bold text-white">
              {product.type}
            </h2>
            <p className="my-2 text-white">{product.text}</p>
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
          <img src={product.image} alt={product.name} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
