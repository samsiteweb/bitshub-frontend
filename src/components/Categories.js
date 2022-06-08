import React from "react";
import prod1 from "../images/products/lenoYOGApro3_2.jpg";
import prod2 from "../images/products/1646_Lenovo-Yoga-3-Pro-Repair_1.jpg";
import prod3 from "../images/products/1525204196_635_latitude-3450.png";
import prod4 from "../images/products/57343505b5f6d71b4fb89a419c98e47101341a14700c93a0b67f1aab668a86e6__95181.1575523312.jpg";
import prod5 from "../images/products/81nde-rFKzL._AC_SL1500_.jpg";
import prod6 from "../images/products/A60G_131554151661089309JJQPvR7NVX.jpg";

const Categories = () => {
  return (
    <div className="container py-16">
      <h2 className="text-3xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
      <div className="grid grid-cols-3 gap-3">
        <div className="relative rounded-sm overflow-hidden group">
          <img src={prod1} alt="" className="w-full" />
          <a
            href=""
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition"
          >
            Workstation
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img src={prod2} alt="" className="w-full" />
          <a
            href=""
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition"
          >
            Workstation
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img src={prod3} alt="" className="w-full" />
          <a
            href=""
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition"
          >
            Workstation
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img src={prod4} alt="" className="w-full" />
          <a
            href=""
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition"
          >
            Workstation
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img src={prod5} alt="" className="w-full" />
          <a
            href=""
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition"
          >
            Workstation
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img src={prod6} alt="" className="w-full" />
          <a
            href=""
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition"
          >
            Workstation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
