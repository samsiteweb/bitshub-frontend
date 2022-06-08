import React from "react";
import lenovo from "../images/products/lenoYOGApro3_2.jpg";
import lenovo2 from "../images/products/1646_Lenovo-Yoga-3-Pro-Repair_1.jpg";

const Categories = () => {
  return (
    <div className="container py-16">
      <h2 className="text-3xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
      <div className="grid grid-cols-3 gap-3">
        <div className="relative rounded-sm overflow-hidden group">
          <img src={lenovo} alt="" className="w-full" />
          <a
            href=""
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition"
          >
            Workstation
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img src={lenovo2} alt="" className="w-full" />
          <a
            href=""
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition"
          >
            Workstation
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img src={lenovo} alt="" className="w-full" />
          <a
            href=""
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition"
          >
            Workstation
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img src={lenovo2} alt="" className="w-full" />
          <a
            href=""
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition"
          >
            Workstation
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img src={lenovo} alt="" className="w-full" />
          <a
            href=""
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition"
          >
            Workstation
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img src={lenovo2} alt="" className="w-full" />
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
