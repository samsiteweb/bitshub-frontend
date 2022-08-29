import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="hidden md:block border-b border-gray-200 ">
      <div className="px-6 container flex justify-between items-center py-3 text-gray-600">
        <a href="/" className="text-sm hover:text-primary transition">
          support@bitshubsolutions.com
        </a>
        <div className="flex items-center justify-center gap-8">
          <Link to="/account/order-history" className="text-sm hover:text-primary transition">
            Become a vendor
          </Link>
          <Link to="/account/order-history" className="text-sm hover:text-primary transition">
            Track my order
          </Link>
          <p className="text-sm hover:text-primary transition">
            <span className="text-sm pr-1">
              <i className="fas fa-phone"></i>
            </span>
            call: 08103431851
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
