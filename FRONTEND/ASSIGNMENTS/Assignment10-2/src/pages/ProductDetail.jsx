import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { MyStore } from "../context/MyContext";
import {
  ArrowLeft,
  Star,
  ShoppingCart,
  Heart,
  Truck,
  ShieldCheck,
  RotateCcw,
  ChevronRight,
} from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [singleProduct, setSingleProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { setCartItems } = useContext(MyStore);

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSingleProduct(res.data);

      // fetch related products from the same category
      const relatedRes = await axios.get(
        `https://fakestoreapi.com/products/category/${encodeURIComponent(
          res.data.category
        )}`
      );
      const filtered = relatedRes.data
        .filter((p) => p.id !== res.data.id)
        .slice(0, 5);
      setRelatedProducts(filtered);
    } catch (error) {
      console.log("Error in Detail API", error);
    }
  };

  const handleAddToCart = () => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === singleProduct.id);

      if (existing) {
        return prev.map((item) =>
          item.id === singleProduct.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }

      return [...prev, { ...singleProduct, quantity: 1 }];
    });

    alert(`${singleProduct.title} added to cart!`);
  };

  useEffect(() => {
    getSingleProduct();
    window.scrollTo(0, 0);
  }, [id]);

  if (!singleProduct.title) {
    return (
      <div className="min-h-screen bg-[#0B0B0B]">
        <Navbar />
        <div className="flex h-[60vh] items-center justify-center text-gray-500">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <Navbar />

      <div className="mx-auto max-w-350 px-8 py-10">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <button
            onClick={() => navigate("/shop")}
            className="flex items-center gap-1 hover:text-white"
          >
            <ArrowLeft size={14} />
            Products
          </button>
          <span>/</span>
          <span className="capitalize">{singleProduct.category}</span>
          <span>/</span>
          <span className="max-w-55 truncate text-white">
            {singleProduct.title}
          </span>
        </div>

        {/* Main content */}
        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Image */}
          <div className="flex items-center justify-center rounded-3xl bg-white p-10">
            <img
              src={singleProduct.image}
              alt={singleProduct.title}
              className="h-100 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <span className="w-fit rounded-full bg-lime-400/10 px-4 py-1.5 text-sm font-semibold capitalize text-lime-400">
              {singleProduct.category}
            </span>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl">
              {singleProduct.title}
            </h1>

            <div className="mt-4 flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < Math.round(singleProduct.rating?.rate)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-700 text-gray-700"
                    }
                  />
                ))}
              </div>
              <span className="font-semibold text-white">
                {singleProduct.rating?.rate}
              </span>
              <span className="text-sm text-gray-500">
                ({singleProduct.rating?.count} reviews)
              </span>
            </div>

            <div className="mt-6 border-b border-gray-800 pb-6">
              <p className="text-4xl font-extrabold text-lime-400">
                ${singleProduct.price}
              </p>
            </div>

            <p className="mt-6 leading-relaxed text-gray-400">
              {singleProduct.description}
            </p>

            {/* Actions */}
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={handleAddToCart}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-lime-400 py-4 font-bold text-black transition-all duration-300 hover:bg-lime-300"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>

              <button className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-lime-400 hover:text-lime-400">
                <Heart size={20} />
              </button>
            </div>

            {/* Feature boxes */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-gray-800 p-4 text-center">
                <Truck size={20} className="mx-auto text-lime-400" />
                <p className="mt-2 text-sm font-semibold text-white">
                  Free Delivery
                </p>
                <p className="mt-0.5 text-xs text-gray-500">On orders $50+</p>
              </div>

              <div className="rounded-2xl border border-gray-800 p-4 text-center">
                <ShieldCheck size={20} className="mx-auto text-lime-400" />
                <p className="mt-2 text-sm font-semibold text-white">
                  Secure Pay
                </p>
                <p className="mt-0.5 text-xs text-gray-500">256-bit SSL</p>
              </div>

              <div className="rounded-2xl border border-gray-800 p-4 text-center">
                <RotateCcw size={20} className="mx-auto text-lime-400" />
                <p className="mt-2 text-sm font-semibold text-white">
                  Easy Returns
                </p>
                <p className="mt-0.5 text-xs text-gray-500">30-day policy</p>
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={() => navigate(`/detail/${Number(id) + 1}`)}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-lime-400 py-4 font-bold text-black transition-all duration-300 hover:bg-lime-300"
            >
              Next
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-extrabold text-white">
              Related Products
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-800 py-8 text-center">
        <p className="text-lg font-extrabold text-lime-400">SkyMart</p>
        <p className="mt-1 text-sm text-gray-500">
          © 2025 SkyMart • Built with React + Redux + TanStack Query
        </p>
      </footer>
    </div>
  );
};

export default ProductDetail;