import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        <div className="px-8 py-4 bg-primary flex items-center cursor-pointer">
          <span className="text-white">
            <i className="fas fa-bars"></i>
          </span>
          <span className="capitalize ml-2 text-white">All categories</span>
        </div>
        <div className="flex items-center justify-between flex-grow pl-12">
          <div className="flex items-center space-x-6 capitalize">
            <a href="" className="text-gray-200 hover:text-white transition">
              Home
            </a>
            <a href="" className="text-gray-200 hover:text-white transition">
              Shop
            </a>
            <a href="" className="text-gray-200 hover:text-white transition">
              About Us
            </a>
            <a href="" className="text-gray-200 hover:text-white transition">
              Contact us
            </a>
          </div>
          <a href="" className="text-gray-200 hover:text-white transition">
            Login/Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
