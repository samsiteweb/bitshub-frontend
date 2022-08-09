import React from "react";
import { Link } from "react-router-dom";

const SideNav = (props) => {
  return (
    <div>
      <div className="text-white text-xl font-semibold text-center p-3 bg-primary">
        <span>Menu</span>
        <span
          className="pl-[60%]"
          onClick={() => {
            props.setSideModalOpen(!props.sideModalOpen);
          }}
        >
          X
        </span>
      </div>
      <div>
        <Link to="/">
          <p className="text-gray-700 hover:bg-gray-200 border-b border-dashed transition p-3">Home</p>
        </Link>
        <Link to="/shop">
          <p className="text-gray-700 hover:bg-gray-200 border-b border-dashed transition p-3">Shop</p>
        </Link>
        <Link to="/account">
          <p className="text-gray-700 hover:bg-gray-200 border-b border-dashed transition p-3">My Account</p>
        </Link>
        <Link to="/about">
          <p className="text-gray-700 hover:bg-gray-200 border-b border-dashed transition p-3">About Us</p>
        </Link>
        <Link to="/contact">
          <p className="text-gray-700 hover:bg-gray-200 border-b border-dashed transition p-3">Contact Us</p>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
