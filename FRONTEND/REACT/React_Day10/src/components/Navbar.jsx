import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-100 shadow-sm"
            src="https://imgs.search.brave.com/uOXYM5A5Mz10fX46b25hVQ26PAwSZalwvm6as3E3pFM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y1LzQ3/L2Q4L2Y1NDdkODAw/NjI1YWY5MDU2ZDYy/ZWZlODk2OWFlZWEw/LmpwZw"
            alt="Logo"
          />

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              User Manager
            </h1>
            <p className="text-sm text-gray-500">
              Manage your users efficiently
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-gray-600 font-medium hover:text-blue-600 transition-colors duration-300"
          >
            Home
          </a>

          <a
            href="#"
            className="text-gray-600 font-medium hover:text-blue-600 transition-colors duration-300"
          >
            About
          </a>

          <a
            href="#"
            className="text-gray-600 font-medium hover:text-blue-600 transition-colors duration-300"
          >
            Contact
          </a>
        </nav>

        <button
          onClick={() => setToggle((prev) => !prev)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        >
          + Create User
        </button>
      </div>
    </header>
  );
};

export default Navbar;