import React from "react";
import { Link } from "react-router-dom";

import game from "../../images/gaming.png";
import office from "../../images/office.png";
import personal from "../../images/personal.png";
import workstation from "../../images/workstation.png";
import sleek from "../../images/sleek.png";
import component from "../../images/components.png";

const CategoriesNav = ({ modalHandler }) => {
  return (
    <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
      <span className="text-white">All categories</span>
      <span
        className="font-normal text-white ml-auto cursor-pointer"
        onClick={() => {
          modalHandler();
        }}
      >
        X
      </span>
      <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed transition duration-300">
        <a href="" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
          <img src={game} alt="" className="w-5 h-5 object-contain text-color-red" />
          <span className="ml-6 text-gray-600 text-sm">Macbook</span>
        </a>
        <a href="" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
          <img src={office} alt="" className="w-5 h-5 object-contain" />
          <span className="ml-6 text-gray-600 text-sm">Laptop</span>
        </a>
        <a href="" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
          <img src={personal} alt="" className="w-5 h-5 object-contain" />
          <span className="ml-6 text-gray-600 text-sm">Desktop</span>
        </a>
        <a href="" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
          <img src={workstation} alt="" className="w-5 h-5 object-contain" />
          <span className="ml-6 text-gray-600 text-sm">Monitor</span>
        </a>
        <a href="" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
          <img src={sleek} alt="" className="w-5 h-5 object-contain" />
          <span className="ml-6 text-gray-600 text-sm">Gaming</span>
        </a>
        <a href="" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
          <img src={component} alt="" className="w-5 h-5 object-contain" />
          <span className="ml-6 text-gray-600 text-sm">Accessories</span>
        </a>
      </div>
    </div>
  );
};

export default CategoriesNav;
