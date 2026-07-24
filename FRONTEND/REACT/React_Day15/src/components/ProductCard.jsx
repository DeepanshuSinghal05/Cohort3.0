import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {

    let navigate = useNavigate()

  return (
    <div className="max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex h-72 items-center justify-center bg-gray-100 p-6">
        <img onClick={()=>navigate(`/detail/${product.id}`)}
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="p-5">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold capitalize text-blue-600">
          {product.category}
        </span>

        <h2 className="mt-3 line-clamp-2 text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        <p className="mt-2 line-clamp-3 text-sm text-gray-500">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg text-yellow-500">⭐</span>

            <span className="font-semibold text-gray-700">
              {product.rating.rate}
            </span>

            <span className="text-sm text-gray-500">
              ({product.rating.count} reviews)
            </span>
          </div>

          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
        </div>

        <button className="mt-5 w-full rounded-xl bg-black py-3 font-semibold text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;