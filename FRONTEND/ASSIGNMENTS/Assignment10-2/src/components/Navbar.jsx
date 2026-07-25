import React, { useContext } from "react";
import { FiShoppingCart, FiLogOut } from "react-icons/fi";
import { BsLightningChargeFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router";
import { MyStore } from "../context/MyContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { setIsLoggedIn } = useContext(MyStore);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.setItem("isLoggedIn", false);

    setIsLoggedIn(false);

    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 h-18 border-b border-white/10 bg-[#0B0B0B]">
      <div className="mx-auto flex h-full max-w-[1550px] items-center justify-between px-8">
        <div className="flex items-center gap-3">
          <div onClick={()=>navigate('/home')} className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D7FF00]">
            <BsLightningChargeFill className="text-xl text-black" />
          </div>

          <h1 className="text-4xl font-bold">
            <span className="text-white">Sky</span>
            <span className="text-[#D7FF00]">Mart</span>
          </h1>
        </div>

        <div className="flex items-center gap-12 text-lg font-medium">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "text-[#D7FF00]"
                : "text-gray-400 hover:text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "text-[#D7FF00]"
                : "text-gray-400 hover:text-white"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#D7FF00]"
                : "text-gray-400 hover:text-white"
            }
          >
            About
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-12 items-center gap-3 rounded-2xl border border-white/10 bg-[#151515] px-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D7FF00] font-semibold text-black">
              {currentUser?.name?.charAt(0).toUpperCase()}
            </div>

            <span className="max-w-35 truncate text-white">
              {currentUser?.name}
            </span>
          </div>

          <button onClick={()=>navigate('/cart')} className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111] text-xl text-white hover:border-[#D7FF00] hover:text-[#D7FF00]">
            <FiShoppingCart />
          </button>

          <button
            onClick={logout}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111] text-xl text-white hover:border-red-500 hover:text-red-500"
          >
            <FiLogOut />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;