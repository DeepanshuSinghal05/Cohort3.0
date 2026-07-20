import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Cart = () => {

  let {cartItems} = useContext(MyStore);



  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="rounded-xl bg-white p-10 text-center shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700">
              🛒 Your Cart is Empty
            </h2>
            <p className="mt-2 text-gray-500">
              Add some products to see them here.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Products */}
            <div className="space-y-5 lg:col-span-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-5 rounded-xl bg-white p-5 shadow-md transition hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="flex h-28 w-28 items-center justify-center rounded-lg bg-gray-100 p-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
                      {item.title}
                    </h2>

                    <p className="mt-1 text-sm capitalize text-gray-500">
                      {item.category}
                    </p>

                    <div className="mt-3 flex items-center gap-3">
                      <span className="rounded bg-yellow-100 px-2 py-1 text-sm font-medium text-yellow-700">
                        ⭐ {item.rating.rate}
                      </span>

                      <span className="text-sm text-gray-500">
                        ({item.rating.count} Reviews)
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">
                      ${item.price}
                    </p>

                    <button className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="h-fit rounded-xl bg-white p-6 shadow-md">
              <h2 className="mb-5 text-xl font-bold">
                Order Summary
              </h2>

              <div className="mb-3 flex justify-between text-gray-600">
                <span>Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="mb-3 flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="mb-3 flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <hr className="my-4" />

              <div className="mb-6 flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;