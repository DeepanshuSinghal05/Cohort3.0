import React, { useContext, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { MyStore } from "../context/MyContext";
import { Search, ChevronDown } from "lucide-react";

const Shop = () => {
  const { productsData } = useContext(MyStore);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const categories = useMemo(() => {
    const unique = [...new Set(productsData.map((p) => p.category))];
    return unique;
  }, [productsData]);

  const filteredProducts = useMemo(() => {
    let result = [...productsData];

    // Search filter
    if (search.trim()) {
      const query = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description?.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "top-rated":
        result.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case "low-rated":
        result.sort((a, b) => a.rating.rate - b.rating.rate);
        break;
      default:
        // "featured" - keep original order
        break;
    }

    return result;
  }, [productsData, search, category, sortBy]);

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <Navbar />

      <div className="mx-auto max-w-[1550px] px-8 py-10">
        <h1 className="text-4xl font-extrabold text-white">All Products</h1>
        <p className="mt-2 text-gray-400">
          {filteredProducts.length} products found
        </p>

        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-gray-800 p-4 md:flex-row md:items-center">
          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-full border border-gray-700 bg-transparent py-3 pl-11 pr-4 text-white placeholder-gray-500 outline-none focus:border-lime-400"
            />
          </div>

          {/* Category */}
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full appearance-none rounded-full border border-gray-700 bg-transparent px-5 py-3 pr-10 capitalize text-white outline-none focus:border-lime-400 md:w-auto"
            >
              <option className="bg-[#0B0B0B]" value="all">
                All Categories
              </option>
              {categories.map((cat) => (
                <option className="bg-[#0B0B0B] capitalize" key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full appearance-none rounded-full border border-gray-700 bg-transparent px-5 py-3 pr-10 text-white outline-none focus:border-lime-400 md:w-auto"
            >
              <option className="bg-[#0B0B0B]" value="featured">
                Featured
              </option>
              <option className="bg-[#0B0B0B]" value="price-low">
                Price: Low to High
              </option>
              <option className="bg-[#0B0B0B]" value="price-high">
                Price: High to Low
              </option>
              <option className="bg-[#0B0B0B]" value="top-rated">
                Top Rated
              </option>
              <option className="bg-[#0B0B0B]" value="low-rated">
                Low Rated
              </option>
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="mt-16 text-center text-gray-500">
            No products match your filters.
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;