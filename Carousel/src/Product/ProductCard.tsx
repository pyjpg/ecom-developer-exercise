import React from 'react';
import '../index.css';

const ProductCard = ({ product, productHeader, productSubHeader }) => {
  return (
    <div className="group mx-auto flex flex-col mt-5 items-center w-full max-w-xs px-4 py-3 transition-shadow duration-300 h-[350px]">
      {/* Image container with fixed height for alignment */}
      <div className="flex items-center justify-center h-[130px] w-full mb-2">
        <a href={product.productUrl} className="block">
          <img
            src={product.imageSrc}
            alt={productHeader}
            className="max-w-[120px] max-h-[120px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>
      </div>

      {/* Content container that grows to fill space */}
      <div className="flex flex-col flex-grow w-full text-center">
        {/* Product header with fixed height */}
        <div className="h-[30px] flex items-center justify-center">
          <div className="text-lg font-semibold text-gray-800 uppercase leading-tight">
            {productHeader}
          </div>
        </div>

        {/* Product subheader with fixed height */}
        <div className="h-[20px] flex items-start justify-center mt-1">
          <div className="text-sm font-medium text-gray-600 uppercase line-clamp-3 leading-tight">
            {productSubHeader}
          </div>
        </div>

        {/* Price pushed to bottom area */}
        <div >
          <div className="text-base font-bold text-gray-900 uppercase">
            £{product.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;