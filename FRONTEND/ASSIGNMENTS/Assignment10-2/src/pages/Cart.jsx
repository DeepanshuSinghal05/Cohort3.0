import React, { useContext, useMemo } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import { MyStore } from "../context/MyContext";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
  ShieldCheck,
  Truck,
} from "lucide-react";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(MyStore);
  const navigate = useNavigate();

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) - 1) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = useMemo(
    () =>
      cartItems.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
      ),
    [cartItems]
  );

  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#0B0B0B]">
        <Navbar />
        <div className="mx-auto flex max-w-350 flex-col items-center justify-center px-8 py-32 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-900">
            <ShoppingBag size={32} className="text-gray-600" />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold text-white">
            Your cart is empty
          </h1>
          <p className="mt-2 text-gray-400">
            Looks like you haven't added anything yet.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="mt-6 rounded-full bg-lime-400 px-6 py-3 font-bold text-black transition-all duration-300 hover:bg-lime-300"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <Navbar />

      <div className="mx-auto max-w-350 px-8 py-10">
        <button
          onClick={() => navigate("/shop")}
          className="flex items-center gap-1 text-sm text-gray-500 hover:text-white"
        >
          <ArrowLeft size={14} />
          Continue Shopping
        </button>

        <h1 className="mt-4 text-4xl font-extrabold text-white">
          Shopping Cart
        </h1>
        <p className="mt-2 text-gray-400">
          {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in
          your cart
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart items */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-2xl border border-gray-800 p-4 sm:flex-row sm:items-center"
              >
                <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-white p-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  <span className="text-xs font-semibold capitalize text-lime-400">
                    {item.category}
                  </span>
                  <h3 className="mt-1 line-clamp-2 font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-lg font-bold text-lime-400">
                    ${item.price}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                  <div className="flex items-center gap-3 rounded-full border border-gray-700 px-3 py-1.5">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="text-gray-400 hover:text-lime-400"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-5 text-center font-semibold text-white">
                      {item.quantity || 1}
                    </span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="text-gray-400 hover:text-lime-400"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-400"
                  >
                    <Trash2 size={14} />
                    Remove
                  </button>
                </div>

                <div className="hidden w-24 text-right font-bold text-white sm:block">
                  ${(item.price * (item.quantity || 1)).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="h-fit rounded-2xl border border-gray-800 p-6">
            <h2 className="text-xl font-extrabold text-white">
              Order Summary
            </h2>

            <div className="mt-6 flex flex-col gap-3 text-sm">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span className="text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>
                <span className="text-white">
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Tax</span>
                <span className="text-white">${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-4 flex justify-between border-t border-gray-800 pt-4">
              <span className="font-bold text-white">Total</span>
              <span className="text-2xl font-extrabold text-lime-400">
                ${total.toFixed(2)}
              </span>
            </div>

            <button className="mt-6 w-full rounded-full bg-lime-400 py-3.5 font-bold text-black transition-all duration-300 hover:bg-lime-300">
              Proceed to Checkout
            </button>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-gray-800 p-3">
                <Truck size={16} className="text-lime-400" />
                <span className="text-xs text-gray-400">
                  Free shipping $50+
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-gray-800 p-3">
                <ShieldCheck size={16} className="text-lime-400" />
                <span className="text-xs text-gray-400">Secure checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-16 border-t border-gray-800 py-8 text-center">
        <p className="text-lg font-extrabold text-lime-400">SkyMart</p>
        <p className="mt-1 text-sm text-gray-500">
          © 2025 SkyMart • Built with React + Redux + TanStack Query
        </p>
      </footer>
    </div>
  );
};

export default Cart;