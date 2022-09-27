import React from "react";
import { Link } from "react-router-dom";

import game from "../images/gaming.png";
import office from "../images/office.png";
import personal from "../images/personal.png";
import workstation from "../images/workstation.png";
import sleek from "../images/sleek.png";
import component from "../images/components.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 hidden md:block">
      <div className="container flex">
        <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
          <span className="text-white">
            <i className="fas fa-bars"></i>
          </span>
          <span className="capitalize ml-2 text-white">All categories</span>
          <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible z-50">
            <a href="/" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
              <img src={game} alt="" className="w-5 h-5 object-contain text-color-red" />
              <span className="ml-6 text-gray-600 text-sm">Macbook</span>
            </a>
            <a href="/" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
              <img src={office} alt="" className="w-5 h-5 object-contain" />
              <span className="ml-6 text-gray-600 text-sm">Laptop</span>
            </a>
            <a href="/" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
              <img src={personal} alt="" className="w-5 h-5 object-contain" />
              <span className="ml-6 text-gray-600 text-sm">Desktop</span>
            </a>
            <a href="/" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
              <img src={workstation} alt="" className="w-5 h-5 object-contain" />
              <span className="ml-6 text-gray-600 text-sm">Monitor</span>
            </a>
            <a href="/" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
              <img src={sleek} alt="" className="w-5 h-5 object-contain" />
              <span className="ml-6 text-gray-600 text-sm">Gaming</span>
            </a>
            <a href="/" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
              <img src={component} alt="" className="w-5 h-5 object-contain" />
              <span className="ml-6 text-gray-600 text-sm">Accessories</span>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between flex-grow pl-12">
          <Link className="text-gray-200 hover:text-white transition" to="/blog">
            FAQ
          </Link>
          <div className="flex items-center space-x-6 capitalize">
            <Link className="text-gray-200 hover:text-white transition" to="/">
              Home
            </Link>
            <Link className="text-gray-200 hover:text-white transition" to="/shop">
              Shop
            </Link>

            <Link className="text-gray-200 hover:text-white transition" to="/about">
              About Us
            </Link>
            <Link className="text-gray-200 hover:text-white transition" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
