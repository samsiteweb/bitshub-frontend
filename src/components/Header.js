import React from "react";
import { Link } from "react-router-dom";
import bitshub from "../images/bitshub.jpeg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <div className="py-4 shadow-sm bg-white">
        <div className="container flex items-center justify-between">
          <a href="">
            <img src={bitshub} alt="bitshub-img" className="w-32" />
          </a>
          <div className="w-full max-w-xl relative flex">
            <span className="absolute left-4 top-3 text-lg text-gray-400">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              name=""
              id=""
              className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="search"
            />
            <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
              Search
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <a href="" className="text-center text-gray-700 hover:text-primary transition relative">
              <div className="text-2xl">
                <i className="far fa-heart"></i>
              </div>
              <div className="text-xs leading-3">Wish list</div>
              <span className="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                8
              </span>
            </a>
            <a href="" className="text-center text-gray-700 hover:text-primary transition relative">
              <div className="text-2xl">
                <i className="fas fa-shopping-bag"></i>
              </div>
              <div className="text-xs leading-3">Cart</div>
              <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                8
              </span>
            </a>

            <Link to="/account" className="text-center text-gray-700 hover:text-primary transition relative">
              <div className="text-2xl">
                <i className="far fa-user"></i>
              </div>
              <div className="text-xs leading-3">Account</div>
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
