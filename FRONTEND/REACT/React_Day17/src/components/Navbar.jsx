import React from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useContext(Auth);
  const navigate = useNavigate();

  return (
    <div className="border-r border-gray-500 flex flex-col  p-3 justify-between">
      <div className="flex flex-col gap-10 ">
        <h1 className="text-3xl font-semibold ">E-Comm</h1>
        <div className="flex flex-col gap-6 ml-5 ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-asemibold text-red-500 border-b border-gray-500"
                : "text-black border-b border-gray-500"
            }
            to={"/main"}
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-asemibold text-red-500 border-b border-gray-500"
                : "text-black border-b border-gray-500"
            }
            to={"/main/users"}
          >
            users
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-asemibold text-red-500 border-b border-gray-500"
                : "text-black border-b border-gray-500"
            }
            to={"/main/products"}
          >
            Products
          </NavLink>
        </div>
      </div>
      <button
        onClick={() => {
          logout();
          navigate("/");
        }}
        className="py-3 bg-red-600 text-white rounded cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
