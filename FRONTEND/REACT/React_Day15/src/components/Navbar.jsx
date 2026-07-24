import React, { useContext } from "react";
import { NavLink } from "react-router";

const Navbar = ({}) => {
  return (
    <div className=" flex items-center bg-gray-400 rounded justify-between p-5">
      <div>Logo</div>
      <div className="flex gap-10 text-xl">
        <NavLink to={'/home'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/products'}>products</NavLink>
      </div>
      <button>Loin</button>
    </div>
  );
};

export default Navbar;
