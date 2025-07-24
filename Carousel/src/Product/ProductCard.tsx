import React from 'react';
import '../index.css';

const ProductCard = ({ product, productHeader, productSubHeader }) => {
  return (
    <div className="group mx-auto flex flex-col mt-5 items-center w-full max-w-xs border border-gray-200 rounded-xl px-4 py-3 transition-shadow duration-300 hover:shadow-lg">

      <a href={product.productUrl}>
        <img
          src={product.imageSrc}
          alt={productHeader}
          className="mx-auto mt-6 w-24 h-24 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
      </a>

      <div className="mt-4 w-full max-w-xs text-center">
        <div className="text-lg font-semibold text-gray-800 uppercase">{productHeader}</div>
        <div className="text-sm font-medium text-gray-600 uppercase mt-1">{productSubHeader}</div>
        <div className="text-base font-bold text-gray-900 uppercase mt-2">£{product.price}</div>
      </div>

      <div className="flex justify-center mt-4 opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
        <a
          href={product.productUrl}
          className="flex items-center gap-2 py-1 px-4 text-white bg-purple-700 hover:bg-purple-900 border border-black rounded focus:ring-4 focus:outline-none font-medium"
        >
          View More
          <svg className="w-6 h-6 fill-white" viewBox="0 0 400 400">
            <path d="M351.9,329.5063H206.81l-3.0723-12.56H368.1614l26.63-116.019L177.5618,174.8861l-9.9526-58.0885h-50.4v21.945h31.8934l35.2332,191.2465a32.927,32.927,0,1,0,36.3628,21.4622H320.9431A32.8248,32.8248,0,1,0,351.9,329.5063ZM181.4272,197.4486l186.5106,22.3589-17.2592,75.194H198.9174Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
