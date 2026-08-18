import React from "react";
import { Star, ShoppingCart, Eye } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Product Image */}
      <div className="relative h-64 bg-gray-50 flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />

        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-indigo-100 text-indigo-600 text-xs font-semibold px-3 py-1.5 rounded-full capitalize">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-14">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />

            <span className="text-sm font-semibold text-gray-700">
              {product.rating.rate}
            </span>
          </div>

          <span className="text-xs text-gray-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-4">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">
          <button className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium transition">
            <ShoppingCart size={18} />
            Add to Cart
          </button>

          <button className="w-12 flex items-center justify-center border border-gray-200 hover:bg-gray-100 rounded-xl transition">
            <Eye size={19} className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
