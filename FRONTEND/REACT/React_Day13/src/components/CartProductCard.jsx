import React from "react";

const CartProductCard = ({ item }) => {
  return (
    <div className="flex items-center gap-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Product Image */}
      <div className="flex h-28 w-28 items-center justify-center rounded-lg bg-gray-100 p-3">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col">
        <span className="mb-2 w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-medium capitalize text-blue-600">
          {item.category}
        </span>

        <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
          {item.title}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm text-gray-500">
          {item.description}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-yellow-500">⭐</span>
          <span className="font-medium">{item.rating.rate}</span>
          <span className="text-sm text-gray-500">
            ({item.rating.count} Reviews)
          </span>
        </div>
      </div>

      {/* Price & Actions */}
      <div className="flex flex-col items-end gap-4">
        <h3 className="text-2xl font-bold text-green-600">${item.price}</h3>

        <div className="flex items-center gap-3">
          <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 text-lg font-bold hover:bg-gray-300">
            −
          </button>

          <span className="text-lg font-semibold">{item.quantity}</span>

          <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 text-lg font-bold hover:bg-gray-300">
            +
          </button>
        </div>

        <button className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
