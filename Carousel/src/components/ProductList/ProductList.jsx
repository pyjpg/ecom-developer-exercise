"use client";
import React, { memo, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../ProductCard/ProductCard";
import useProductData from '../../hooks/useProductData';
import { parseProductTitle } from "../../utils/parseProductTitle";
import { SLIDER_CONFIG } from "../../constants/sliderConfig";

export const ProductList = memo(() => {
  const { products, loading, error, refetch } = useProductData();
  
  useEffect(() => {
    const styleId = 'product-slider-styles';
    
    if (document.getElementById(styleId)) return;
    
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .slick-track {
        display: flex !important;
        align-items: stretch;
      }
      
      .slick-slide {
        height: auto;
        padding: 0 8px;
      }
      
      .slick-slide > div {
        height: 100%;
      }
      
      .slick-arrow {
        transition: all 0.2s ease-in-out;
      }
      
      .slick-arrow:hover {
        transform: scale(1.1);
      }
      
      .slick-list {
        overflow: hidden;
      }
      
      .slick-track {
        will-change: transform;
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);
  
  const sliderConfig = {
    ...SLIDER_CONFIG,
  };

  return (
    <div className="mx-auto px-4 py-6">
      <Slider {...sliderConfig}>
        {products.map((product, index) => {
          const { header, subHeader } = parseProductTitle(product.productTitle);
          return (
            <div key={`product-${product.productUrl || index}`} className="px-2">
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