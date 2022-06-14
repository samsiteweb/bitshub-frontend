import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";

const ShopScreen = () => {
  return (
    <div>
      <Breadcrumbs />
      <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
          <div className="divide-y divide-gray-200 space-y-5">
            <div>
              <h3 className="text-sl text-gray-800 mb-3 uppercase font-medium">Categories</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="cat-1" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                  <label htmlFor="cat-1" className="text-gray-600 ml-3 cursor-pointer">
                    Workstation
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(15)</div>
                </div>

                <div className="flex items-center">
                  <input type="checkbox" id="cat-1" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                  <label htmlFor="cat-1" className="text-gray-600 ml-3 cursor-pointer">
                    Desktop
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(10)</div>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="cat-1" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                  <label htmlFor="cat-1" className="text-gray-600 ml-3 cursor-pointer">
                    Gaming
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(123)</div>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="cat-1" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                  <label htmlFor="cat-1" className="text-gray-600 ml-3 cursor-pointer">
                    Office
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(39)</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-sl text-gray-800 mb-3 uppercase font-medium">Brands</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="cat-1" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                  <label htmlFor="cat-1" className="text-gray-600 ml-3 cursor-pointer">
                    Workstation
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(15)</div>
                </div>

                <div className="flex items-center">
                  <input type="checkbox" id="cat-1" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                  <label htmlFor="cat-1" className="text-gray-600 ml-3 cursor-pointer">
                    Desktop
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(10)</div>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="cat-1" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                  <label htmlFor="cat-1" className="text-gray-600 ml-3 cursor-pointer">
                    Gaming
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(123)</div>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="cat-1" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                  <label htmlFor="cat-1" className="text-gray-600 ml-3 cursor-pointer">
                    Office
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(39)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopScreen;
