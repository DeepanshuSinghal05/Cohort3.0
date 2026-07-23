import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const ProductCard = ({ product, isInCart }) => {
  let { setCartItems, incrementQuantity, decrementQuantity } =
    useContext(MyStore);

  const addTocart = () => {
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    alert("Product Added into the cart");
  };

  return (
    <div className="max-w-sm overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-200">
      {/* Product Image */}
      <div className="flex h-72 items-center justify-center bg-gray-100 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Card Body */}
      <div className="p-5">
        {/* Category */}
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600 capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="mt-3 line-clamp-2 text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-3 text-sm text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 text-lg">⭐</span>

            <span className="font-semibold text-gray-700">
              {product.rating.rate}
            </span>

            <span className="text-sm text-gray-500">
              ({product.rating.count} reviews)
            </span>
          </div>

          {/* Price */}
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
        </div>

        {/* Button */}
        {isInCart ? (
          <div className="flex items-center gap-3">
            <button
              onClick={() => decrementQuantity(product.id)}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 text-lg font-bold hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-lg font-semibold">{isInCart.quantity}</span>
            <button
              onClick={() => incrementQuantity(product.id)}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 text-lg font-bold hover:bg-gray-300"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={addTocart}
            className="mt-5 w-full rounded-xl bg-black py-3 font-semibold text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
