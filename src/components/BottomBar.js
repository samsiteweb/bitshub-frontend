import React from "react";

const BottomBar = () => {
  return (
    <div className="flex justify-between items-center bg-white p-3">
      <div className="text-center text-gray-700 hover:text-primary transition relative">
        <div className="text-2xl">
          <i className="fas fa-bars"></i>
        </div>
        <div className="text-xs leading-3">Menu</div>
      </div>
      <div className="text-center text-gray-700 hover:text-primary transition relative">
        <div className="text-2xl">
          <i className="fas fa-bars"></i>
        </div>
        <div className="text-xs leading-3">Categories</div>
      </div>
      <div className="text-center text-gray-700 hover:text-primary transition relative">
        <div className="text-2xl">
          <i className="fas fa-search"></i>
        </div>
        <div className="text-xs leading-3">Search</div>
      </div>
      <div className="text-center text-gray-700 hover:text-primary transition relative">
        <div className="text-2xl">
          <i className="fas fa-shopping-bag"></i>
        </div>
        <div className="text-xs leading-3">Cart</div>
        <span className="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          8
        </span>
      </div>
    </div>
  );
};

export default BottomBar;
