import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import { BsLightningChargeFill } from "react-icons/bs";
import { FiShoppingCart, FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const { currentUser } = useContext(MyStore);

  return (
    <header className="sticky top-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/20">
      <div className="max-w-[1550px] mx-auto h-20 px-10 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-12 h-12 rounded-2xl bg-[#D7FF00] flex items-center justify-center transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
            <BsLightningChargeFill className="text-black text-xl" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-white">Sky</span>
            <span className="text-[#D7FF00]">Mart</span>
          </h1>
        </div>

        <nav>
          <ul className="flex items-center gap-12">
            <li className="text-gray-400 font-medium cursor-pointer transition-all duration-300 hover:text-white">
              Home
            </li>
            <li className="text-[#D7FF00] font-semibold cursor-pointer relative">
              Shop
              <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-[#D7FF00] rounded-full"></span>
            </li>
            <li className="text-gray-400 font-medium cursor-pointer transition-all duration-300 hover:text-white">
              About
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-[#171717] border border-white/10 rounded-2xl h-12 px-4 cursor-pointer transition-all duration-300 hover:border-[#D7FF00] hover:bg-[#1d1d1d]">
            <div className="w-8 h-8 rounded-xl bg-[#D7FF00] text-black flex items-center justify-center text-sm font-bold">
              {currentUser?.name?.charAt(0)?.toUpperCase() || "D"}
            </div>
            <p className="text-gray-200 font-medium max-w-35 truncate">
              {currentUser?.name || "Deepanshu Singhal"}
            </p>
          </div>

          <button className="w-12 h-12 rounded-2xl bg-[#171717] border border-white/10 flex items-center justify-center text-gray-300 transition-all duration-300 hover:bg-[#D7FF00] hover:text-black hover:border-[#D7FF00] hover:scale-105 active:scale-95">
            <FiShoppingCart size={22} />
          </button>

          <button className="w-12 h-12 rounded-2xl bg-[#171717] border border-white/10 flex items-center justify-center text-gray-300 transition-all duration-300 hover:bg-red-500 hover:text-white hover:border-red-500 hover:scale-105 active:scale-95">
            <FiLogOut size={22} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;