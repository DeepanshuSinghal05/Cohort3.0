import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Star, ShoppingCart } from "lucide-react";
import { MyStore } from "../context/MyContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { setCartItems } = useContext(MyStore);

  const handleAddToCart = (e) => {
    e.stopPropagation();

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });

    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#141414] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-56 bg-white p-4">
        <span className="absolute left-3 top-3 z-10 rounded-full bg-black/70 px-3 py-1 text-xs font-medium capitalize text-white">
          {product.category}
        </span>
        <img
          onClick={() => navigate(`/detail/${product.id}`)}
          src={product.image}
          alt={product.title}
          className="h-full w-full cursor-pointer object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <p className="text-sm capitalize text-gray-400">{product.category}</p>

        <h2 className="mt-1 line-clamp-2 text-lg font-bold text-white">
          {product.title}
        </h2>

        <div className="mt-2 flex items-center gap-1.5">
          <Star size={16} className="fill-lime-400 text-lime-400" />
          <span className="text-sm text-gray-300">{product.rating?.rate}</span>
          <span className="text-sm text-gray-500">
            ({product.rating?.count})
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-gray-800 pt-4">
          <span className="text-xl font-bold text-lime-400">
            ${product.price}
          </span>

          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 rounded-full bg-lime-400 px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:bg-lime-300"
          >
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;