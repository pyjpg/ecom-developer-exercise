import React, { useState, useEffect, memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";

export const ProductList = memo(() => {
  const settings = {
    lazyLoad: "ondemand",
    accessibility: true,
    dots: false,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    cssEase: "ease-in-out",
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24">
            <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
          </svg>
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="next-slick-arrow rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24">
            <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
          </svg>
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/recommendations.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.productData);
      })
      .catch((err) => console.error("Failed to load product data:", err));
  }, []);

  return (
    <div className="mx-auto px-4 py-6">
      <Slider {...settings}>
        {products.map((product, index) => {
          const [productHeader, productSubHeader = ""] = product.productTitle.split(" - ");
          console.log(`Product header: ${productHeader}, Product subHeader: ${productSubHeader}`);
          return (
            <div key={index}>
              <ProductCard
                product={product}
                productHeader={productHeader}
                productSubHeader={productSubHeader}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
});
