import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Filter from "../components/Filter";
import Product from "../components/Product";
import Products from "../components/Products";
import ProductData from "../data/productData";

const ShopScreen = () => {
  const [showFilter, setShowFilter] = useState(false);

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };
  return (
    <div className="">
      <Breadcrumbs page="Shop" />
      <div className="container grid lg:grid-cols-4 gap-6 md:grid-cols-3 sm:grid-cols-1 pt-4 pb-16 items-start">
        <div className="hidden lg:block transition duration-300 ">
          <Filter />
        </div>

        <div className="col-span-3">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center">
              <div className="py-2 items-center cursor-pointer relative pr-12">
                <div>
                  <button
                    onClick={() => {
                      handleFilter();
                    }}
                    type="submit"
                    className="lg:hidden bg-primary border border-primary text-white mr-4 px-12 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition text-sm text-center"
                  >
                    {showFilter ? "Close" : "Filter"}
                  </button>
                </div>
                <div
                  className={
                    showFilter
                      ? "absolute w-full left-0 top-full bg-white shadow-md py-3 divide-dashed transition duration-300 visible z-50"
                      : "invisible hidden"
                  }
                >
                  <Filter />
                </div>
              </div>

              <select
                name=""
                id=""
                className="hidden md:block w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
              >
                <option value="">Default sorting</option>
                <option value="">Newly uploaded</option>
                <option value="">Just arrived</option>
                <option value="">Refurblished</option>
                <option value="">Latest products</option>
              </select>
            </div>

            <div className="flex gap-2 ml-auto">
              <div className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                <i className="fas fa-th"></i>
              </div>
              <div className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
                <i className="fas fa-list"></i>
              </div>
            </div>
          </div>

          {/* Products */}

          {/* <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-3 sm:grid-cols-2">
            {ProductData.products.map((item) => {
              return <Product item={item} key={item._id} />;
            })}
          </div> */}
          <Products />
        </div>
      </div>
    </div>
  );
};

export default ShopScreen;
