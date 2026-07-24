import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState({});

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setSingleProduct(res.data);
    } catch (error) {
      console.log("Error in Detail API", error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="mx-auto max-w-7xl rounded-3xl bg-white shadow-xl">
        <div className="grid grid-cols-1 gap-10 p-10 lg:grid-cols-2">
          <div className="flex items-center justify-center rounded-2xl bg-gray-100 p-10">
            <img
              src={singleProduct.image}
              alt={singleProduct.title}
              className="h-[450px] object-contain transition duration-300 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="w-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold capitalize text-blue-600">
              {singleProduct.category}
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-800">
              {singleProduct.title}
            </h1>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-2xl text-yellow-500">⭐</span>

              <span className="text-xl font-semibold text-gray-800">
                {singleProduct?.rating?.rate}
              </span>

              <span className="text-gray-500">
                ({singleProduct?.rating?.count} Reviews)
              </span>
            </div>

            <h2 className="mt-8 text-5xl font-bold text-green-600">
              ${singleProduct.price}
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              {singleProduct.description}
            </p>

            <div className="mt-10 flex gap-5">
              <button className="rounded-xl bg-black px-10 py-4 text-lg font-semibold text-white transition hover:bg-gray-800">
                Add to Cart
              </button>

              <button className="rounded-xl border-2 border-black px-10 py-4 text-lg font-semibold text-black transition hover:bg-black hover:text-white">
                Buy Now
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-5 border-t pt-8">
              <div className="rounded-xl bg-gray-100 p-5 text-center">
                <p className="text-sm text-gray-500">Delivery</p>
                <p className="mt-2 font-semibold text-gray-800">
                  3-5 Business Days
                </p>
              </div>

              <div className="rounded-xl bg-gray-100 p-5 text-center">
                <p className="text-sm text-gray-500">Return</p>
                <p className="mt-2 font-semibold text-gray-800">
                  7 Days Return
                </p>
              </div>

              <div className="rounded-xl bg-gray-100 p-5 text-center">
                <p className="text-sm text-gray-500">Payment</p>
                <p className="mt-2 font-semibold text-gray-800">
                  Secure Checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
