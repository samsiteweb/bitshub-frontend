import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import prod3 from "../images/products/Dell-Inspiron-15-5000-5558-Silver-Version.jpg";
import prod4 from "../images/products/HPENVYx360m6__2_.jpg";

const ShopScreen = () => {
  return (
    <div>
      <Breadcrumbs />
      <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
          <div className="divide-y divide-gray-200 space-y-5">
            {/* categories */}
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
                  <input type="checkbox" id="cat-2" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                  <label htmlFor="cat-2" className="text-gray-600 ml-3 cursor-pointer">
                    Desktop
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(10)</div>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="cat-3" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                  <label htmlFor="cat-3" className="text-gray-600 ml-3 cursor-pointer">
                    Gaming
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(123)</div>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="cat-4" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                  <label htmlFor="cat-4" className="text-gray-600 ml-3 cursor-pointer">
                    Office
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(39)</div>
                </div>
              </div>
            </div>

            {/* Brand */}
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

            {/* Price */}
            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
              <div className="mt-4 flex items-center">
                <input
                  type="text"
                  className="w-full border-gray-300 focus:border-primary focu:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                  placeholder="min"
                />
                <span className="mx-3 text-gray-500">-</span>
                <input
                  type="text"
                  className="w-full border-gray-300 focus:border-primary focu:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                  placeholder="max"
                />
              </div>
            </div>

            {/* size */}
            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Size</h3>
              <div className="flex items-center gap-2">
                <div className="size-selector">
                  <input type="radio" name="size" className="hidden" id="size-mini" />
                  <label
                    htmlFor="size-mini"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    mini
                  </label>
                </div>
                <div className="size-selector">
                  <input type="radio" name="size" className="hidden" id="size-13" />
                  <label
                    htmlFor="size-13"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    13"
                  </label>
                </div>
                <div className="size-selector">
                  <input type="radio" name="size" className="hidden" id="size-15" />
                  <label
                    htmlFor="size-15"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    15"
                  </label>
                </div>
                <div className="size-selector">
                  <input type="radio" name="size" className="hidden" id="size-17" />
                  <label
                    htmlFor="size-17"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    17"
                  </label>
                </div>
              </div>
            </div>

            {/* color */}
            <div className="pt-4">
              <h3 className="text-xl-text-gray-800 mb-3 uppercase font-medium">Color</h3>
              <div className="flex items-center gap-2">
                <div className="color-selecter">
                  <input type="radio" name="color" className="hidden" id="color-grey" />
                  <label
                    htmlFor="color-grey"
                    className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                    style={{ backgroundColor: "grey" }}
                  ></label>
                </div>
                <div className="color-selecter">
                  <input type="radio" name="color" className="hidden" id="color-white" />
                  <label
                    htmlFor="color-white"
                    className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                    style={{ backgroundColor: "white" }}
                  ></label>
                </div>
                <div className="color-selecter">
                  <input type="radio" name="color" className="hidden" id="color-silver" />
                  <label
                    htmlFor="color-silver"
                    className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                    style={{ backgroundColor: "silver" }}
                  ></label>
                </div>
                <div className="color-selecter">
                  <input type="radio" name="color" className="hidden" id="color-pink" />
                  <label
                    htmlFor="color-pink"
                    className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                    style={{ backgroundColor: "pink" }}
                  ></label>
                </div>
                <div className="color-selecter">
                  <input type="radio" name="color" className="hidden" id="color-black" />
                  <label
                    htmlFor="color-black"
                    className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                    style={{ backgroundColor: "black" }}
                  ></label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <div className="flex items-center mb-4">
            <select
              name=""
              id=""
              className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus-border-primary"
            >
              <option value="">Newly uploaded</option>
              <option value="">Just arrived</option>
              <option value="">Refurblished</option>
              <option value="">Latest products</option>
            </select>
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
          <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-3 sm:grid-cols-2">
            <div className="bg-white rounded shadow overflow-hidden group">
              <div className="relative">
                <img src={prod4} alt="" className="w-full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href=""
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="fas fa-search"></i>
                  </a>
                  <a
                    href=""
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="far fa-heart"></i>
                  </a>
                </div>
              </div>
              <div className="pt-4 pb-3 px-4">
                <a href="">
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Lenovo YOGA
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                  <p className="text-xl text-primary font-semibold">$45.00</p>
                  <p className="text-sm text-gray-400 line-through">$45.00</p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    <span>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href=""
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                Add to cart
              </a>
            </div>
            <div className="bg-white rounded shadow overflow-hidden group">
              <div className="relative">
                <img src={prod3} alt="" className="w-full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href=""
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="fas fa-search"></i>
                  </a>
                  <a
                    href=""
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="far fa-heart"></i>
                  </a>
                </div>
              </div>
              <div className="pt-4 pb-3 px-4">
                <a href="">
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Lenovo YOGA
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                  <p className="text-xl text-primary font-semibold">$45.00</p>
                  <p className="text-sm text-gray-400 line-through">$45.00</p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    <span>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href=""
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                Add to cart
              </a>
            </div>
            <div className="bg-white rounded shadow overflow-hidden group">
              <div className="relative">
                <img src={prod4} alt="" className="w-full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href=""
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="fas fa-search"></i>
                  </a>
                  <a
                    href=""
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="far fa-heart"></i>
                  </a>
                </div>
              </div>
              <div className="pt-4 pb-3 px-4">
                <a href="">
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Lenovo YOGA
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                  <p className="text-xl text-primary font-semibold">$45.00</p>
                  <p className="text-sm text-gray-400 line-through">$45.00</p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    <span>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href=""
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                Add to cart
              </a>
            </div>
            <div className="bg-white rounded shadow overflow-hidden group">
              <div className="relative">
                <img src={prod3} alt="" className="w-full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href=""
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="fas fa-search"></i>
                  </a>
                  <a
                    href=""
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="far fa-heart"></i>
                  </a>
                </div>
              </div>
              <div className="pt-4 pb-3 px-4">
                <a href="">
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Lenovo YOGA
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                  <p className="text-xl text-primary font-semibold">$45.00</p>
                  <p className="text-sm text-gray-400 line-through">$45.00</p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    <span>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href=""
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                Add to cart
              </a>
            </div>

            <div className="bg-white rounded shadow overflow-hidden group">
              <div className="relative">
                <img src={prod3} alt="" className="w-full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href=""
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="fas fa-search"></i>
                  </a>
                  <a
                    href=""
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="far fa-heart"></i>
                  </a>
                </div>
              </div>
              <div className="pt-4 pb-3 px-4">
                <a href="">
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Lenovo YOGA
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                  <p className="text-xl text-primary font-semibold">$45.00</p>
                  <p className="text-sm text-gray-400 line-through">$45.00</p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    <span>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href=""
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                Add to cart
              </a>
            </div>

            <div className="bg-white rounded shadow overflow-hidden group">
              <div className="relative">
                <img src={prod3} alt="" className="w-full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href=""
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="fas fa-search"></i>
                  </a>
                  <a
                    href=""
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="far fa-heart"></i>
                  </a>
                </div>
              </div>
              <div className="pt-4 pb-3 px-4">
                <a href="">
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Lenovo YOGA
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                  <p className="text-xl text-primary font-semibold">$45.00</p>
                  <p className="text-sm text-gray-400 line-through">$45.00</p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    <span>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href=""
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopScreen;
