import React, { useContext, useMemo } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import { MyStore } from "../context/MyContext";
import {
  ArrowRight,
  Package,
  TrendingUp,
  Star,
  Tag,
  Laptop,
  Shirt,
  Sofa,
  Home as HomeIcon,
  Dumbbell,
  Watch,
  Box,
  ShoppingBag,
  Zap,
  Shield,
} from "lucide-react";

const categoryIcons = {
  electronics: Laptop,
  clothing: Shirt,
  furniture: Sofa,
  home: HomeIcon,
  sports: Dumbbell,
  accessories: Watch,
};

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "GOOD MORNING";
  if (hour < 17) return "GOOD AFTERNOON";
  return "GOOD EVENING";
};

const Home = () => {
  const navigate = useNavigate();
  const { productsData, cartItems, usersData } = useContext(MyStore);

  const userName = usersData?.name || "there";

  const cartValue = useMemo(
    () =>
      cartItems.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
      ),
    [cartItems]
  );

  const topProductsCount = useMemo(
    () => productsData.filter((p) => p.rating?.rate >= 4.5).length,
    [productsData]
  );

  const categories = useMemo(() => {
    const map = {};
    productsData.forEach((p) => {
      map[p.category] = (map[p.category] || 0) + 1;
    });
    return Object.entries(map).map(([name, count]) => ({ name, count }));
  }, [productsData]);

  const topRated = useMemo(
    () =>
      [...productsData]
        .sort((a, b) => b.rating?.rate - a.rating?.rate)
        .slice(0, 8),
    [productsData]
  );

  const newArrivals = useMemo(
    () => [...productsData].slice(-8).reverse(),
    [productsData]
  );

    console.log(usersData)

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <Navbar />

      <div className="mx-auto max-w-[1550px] px-8 py-10">
        {/* Hero */}
        <div className="grid grid-cols-1 gap-6 rounded-3xl border border-gray-800 p-10 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold tracking-wide text-lime-400">
              {getGreeting()} <span>👋</span>
            </p>

            <h1 className="mt-3 text-5xl font-extrabold leading-tight text-white">
              Welcome back,
              <br />
              <span className="text-lime-400">{userName}!</span>
            </h1>

            <p className="mt-4 max-w-md text-gray-400">
              Discover today's picks — hand-curated products across electronics,
              fashion, and more.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/shop")}
                className="flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 font-bold text-black transition-all duration-300 hover:bg-lime-300"
              >
                Shop Now
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => navigate("/shop")}
                className="rounded-full border border-gray-700 px-6 py-3 font-semibold text-white transition-colors hover:border-lime-400"
              >
                View All Products
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-lime-400/10 p-6 text-center">
              <p className="text-3xl font-extrabold text-lime-400">
                {productsData.length}+
              </p>
              <p className="mt-1 text-sm text-gray-300">Products Available</p>
            </div>
            <div className="rounded-2xl border border-gray-800 p-6 text-center">
              <p className="text-3xl font-extrabold text-white">Free</p>
              <p className="mt-1 text-sm text-gray-500">Delivery on ₹999+</p>
            </div>
          </div>
        </div>

        {/* Stat cards */}
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="flex items-center gap-4 rounded-2xl border border-gray-800 p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lime-400/10">
              <Package size={22} className="text-lime-400" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-white">
                {cartItems.length}
              </p>
              <p className="text-sm text-gray-400">Cart Items</p>
              <p className="text-xs text-gray-600">In your bag</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-gray-800 p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
              <TrendingUp size={22} className="text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-white">
                ${cartValue.toFixed(2)}
              </p>
              <p className="text-sm text-gray-400">Cart Value</p>
              <p className="text-xs text-gray-600">Ready to checkout</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-gray-800 p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10">
              <Star size={22} className="text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-white">
                {topProductsCount}
              </p>
              <p className="text-sm text-gray-400">Top Products</p>
              <p className="text-xs text-gray-600">Highly rated</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-gray-800 p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10">
              <Tag size={22} className="text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-white">
                {categories.length}
              </p>
              <p className="text-sm text-gray-400">Categories</p>
              <p className="text-xs text-gray-600">To explore</p>
            </div>
          </div>
        </div>

        {/* Shop by Category */}
        <div className="mt-16 flex items-center justify-between">
          <h2 className="text-3xl font-extrabold text-white">
            Shop by Category
          </h2>
          <button
            onClick={() => navigate("/shop")}
            className="flex items-center gap-1 font-semibold text-lime-400 hover:text-lime-300"
          >
            View All
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-4">
          {categories.map(({ name, count }) => {
            const Icon = categoryIcons[name.toLowerCase()] || Box;
            return (
              <button
                key={name}
                onClick={() => navigate(`/shop?category=${name}`)}
                className="rounded-2xl bg-white p-8 text-center transition-transform duration-300 hover:-translate-y-1"
              >
                <Icon size={32} className="mx-auto text-gray-800" />
                <p className="mt-4 text-lg font-bold capitalize text-gray-900">
                  {name}
                </p>
                <p className="mt-1 text-sm text-gray-500">{count} items</p>
              </button>
            );
          })}
        </div>

        {/* Top Rated & New Arrivals */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Top Rated */}
          <div className="rounded-2xl bg-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star size={20} className="fill-yellow-400 text-yellow-400" />
                <h3 className="text-xl font-extrabold text-gray-900">
                  Top Rated
                </h3>
              </div>
              <button
                onClick={() => navigate("/shop?sort=top-rated")}
                className="flex items-center gap-1 text-sm font-semibold text-lime-600 hover:text-lime-700"
              >
                See all
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="mt-4 flex flex-col divide-y divide-gray-100">
              {topRated.map((p) => (
                <div
                  key={p.id}
                  onClick={() => navigate(`/detail/${p.id}`)}
                  className="flex cursor-pointer items-center gap-4 py-3"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-contain p-1"
                    />
                  </div>
                  <p className="flex-1 truncate font-bold text-lime-600">
                    ${p.price}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/detail/${p.id}`);
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-100 text-lime-600 hover:bg-lime-200"
                  >
                    <ShoppingBag size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* New Arrivals */}
          <div className="rounded-2xl bg-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap size={20} className="fill-lime-500 text-lime-500" />
                <h3 className="text-xl font-extrabold text-gray-900">
                  New Arrivals
                </h3>
              </div>
              <button
                onClick={() => navigate("/shop")}
                className="flex items-center gap-1 text-sm font-semibold text-lime-600 hover:text-lime-700"
              >
                See all
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="mt-4 flex flex-col divide-y divide-gray-100">
              {newArrivals.map((p) => (
                <div
                  key={p.id}
                  onClick={() => navigate(`/detail/${p.id}`)}
                  className="flex cursor-pointer items-center gap-4 py-3"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-contain p-1"
                    />
                  </div>
                  <p className="flex-1 truncate font-bold text-lime-600">
                    ${p.price}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/detail/${p.id}`);
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-100 text-lime-600 hover:bg-lime-200"
                  >
                    <ShoppingBag size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature strip */}
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex items-center gap-4 rounded-2xl border border-gray-800 p-6">
            <Zap size={22} className="text-lime-400" />
            <div>
              <p className="font-bold text-white">Fast Delivery</p>
              <p className="text-sm text-gray-500">Same-day on select items</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-gray-800 p-6">
            <Shield size={22} className="text-blue-400" />
            <div>
              <p className="font-bold text-white">Secure Payments</p>
              <p className="text-sm text-gray-500">100% encrypted checkout</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-gray-800 p-6">
            <Tag size={22} className="text-green-400" />
            <div>
              <p className="font-bold text-white">Best Prices</p>
              <p className="text-sm text-gray-500">Price-match guarantee</p>
            </div>
          </div>
        </div>
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

export default Home;
