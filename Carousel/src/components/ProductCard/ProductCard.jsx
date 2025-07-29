import React from 'react';

const ProductCard = ({ product, productHeader, productSubHeader }) => {
  const getFormattedPrice = (price) => {
    if (!price || price === '' || isNaN(parseFloat(price))) {
      return 'Price on request';
    }
    return `£${parseFloat(price).toFixed(2)}`;
  };

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  };

  const getProductUrl = (url) => {
    if (!url || url === '') {
      return '#'; 
    }
    return url;
  };

  const getProductHeader = (header) => {
    if (!header || header.trim() === '') {
      return 'Product Name Unavailable';
    }
    return header;
  };

  const getProductSubHeader = (subHeader) => {
    if (!subHeader || subHeader.trim() === '') {
      return 'Description not available';
    }
    return subHeader;
  };

  return (
    <div className="group mx-auto flex flex-col mt-5 items-center w-full max-w-xs px-4 py-3 transition-shadow duration-300 h-[350px]">
      {/* Image container with fixed height for alignment */}
      <div className="flex items-center justify-center h-[130px] w-full mb-2">
        <a 
          href={getProductUrl(product.productUrl)} 
          className="block focus:outline-none active:scale-95 transition-transform duration-150"
          onClick={(e) => {
            // Prevent navigation if no valid URL
            if (!product.productUrl || product.productUrl === '' || product.productUrl === '#') {
              e.preventDefault();
            }
          }}
        >
          <img
            src={product.imageSrc}
            alt={getProductHeader(productHeader)}
            className="max-w-[120px] max-h-[120px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
            onError={handleImageError}
            style={{ display: product.imageSrc ? 'block' : 'none' }}
          />

          {/* Fallback div for broken/missing images */}
          <div 
            className="w-[120px] h-[120px] bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500"
            style={{ display: product.imageSrc ? 'none' : 'flex' }}
          >
            <div className="text-2xl mb-1">📦</div>
            <div className="text-xs font-medium">IMAGE</div>
            <div className="text-xs">N/A</div>
          </div>
        </a>
      </div>

      {/* Content container that grows to fill space */}
      <div className="flex flex-col flex-grow w-full text-center">
        {/* Product header with fixed height */}
        <div className="h-[30px] flex items-center justify-center">
          <div className="text-lg font-semibold text-gray-800 uppercase leading-tight">
            {getProductHeader(productHeader)}
          </div>
        </div>

        {/* Product subheader with fixed height */}
        <div className="h-[20px] flex items-start justify-center mt-1">
          <div className="text-[10.5px] md:text-[11px] font-small text-gray-600 uppercase line-clamp-3 mb-2">
            {getProductSubHeader(productSubHeader)}
          </div>
        </div>

        {/* Price pushed to bottom area */}
        <div>
          <div className={`text-base font-bold uppercase ${
            !product.price || product.price === '' 
              ? 'text-gray-500 italic' 
              : 'text-gray-900'
          }`}>
            {getFormattedPrice(product.price)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;