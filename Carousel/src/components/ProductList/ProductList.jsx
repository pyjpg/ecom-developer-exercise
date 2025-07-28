"use client"; 

import React, { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../ProductCard/ProductCard";
import useProductData from '../../hooks/useProductData';
import { parseProductTitle } from "../../utils/parseProductTitle";
import { SLIDER_CONFIG } from "../../constants/sliderConfig";

export const ProductList = memo(() => {

  const {products, loading, error, refetch } = useProductData();
  const sliderConfig = {
    ...SLIDER_CONFIG,
  };
 
  return (
    <div className="mx-auto px-4 py-6">
      <Slider {...sliderConfig}>
        {products.map((product, index) => {
          const { header, subHeader} = parseProductTitle(product.productTitle); 
          return (
            <div key={index}>
              <ProductCard
                product={product}
                productHeader={header}
                productSubHeader={subHeader}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
});
