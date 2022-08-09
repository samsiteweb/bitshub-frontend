import React, { useState } from "react";
import SideBarModal from "./modal/SideBarModal";

const BottomBar = () => {
  const [sideModalOpen, setSideModalOpen] = useState(false);
  return (
    <div className="flex justify-between items-center bg-white py-2 px-8">
      <div
        className="text-center text-gray-700 hover:text-primary transition relative"
        onClick={() => {
          setSideModalOpen(!sideModalOpen);
          console.log(sideModalOpen);
        }}
      >
        <div className="text-xl">
          <i className="fas fa-bars"></i>
        </div>
        <div className="text-xs leading-3">Menu</div>
      </div>
      <div className="text-center text-gray-700 hover:text-primary transition relative">
        <div className="text-xl">
          <i className="fas fa-bars"></i>
        </div>
        <div className="text-xs leading-3">Categories</div>
      </div>
      <div className="text-center text-gray-700 hover:text-primary transition relative">
        <div className="text-xl">
          <i className="fas fa-search"></i>
        </div>
        <div className="text-xs leading-3">Search</div>
      </div>
      <div className="text-center text-gray-700 hover:text-primary transition relative">
        <div className="text-xl">
          <i className="fas fa-shopping-bag"></i>
        </div>
        <div className="text-xs leading-3">Cart</div>
        <span className="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          8
        </span>
      </div>

      {sideModalOpen ? <SideBarModal setSideModalOpen={setSideModalOpen} sideModalOpen={sideModalOpen} /> : ""}
    </div>
  );
};

export default BottomBar;
