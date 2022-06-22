import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import Products from "./Products";
import Rating from "./Rating";

const ProductDetails = () => {
  return (
    <div>
      <div>
        <Breadcrumbs page="Product view" />
        <div className="container grid grid-cols-2 gap-6">
          <div>
            <img src="../assets/products/HPENVYx360m6__2_.jpg" alt="" />
            <div className="grid grid-cols-5 gap-4 mt-4">
              <img
                src="../assets/products/HPENVYx360m6__2_.jpg"
                alt=""
                className="w-full cursor-pointer border border-primary"
              />
              <img src="../assets/products/HPENVYx360m6__2_.jpg" alt="" className="w-full cursor-pointer border" />
              <img src="../assets/products/HPENVYx360m6__2_.jpg" alt="" className="w-full cursor-pointer border" />
              <img src="../assets/products/HPENVYx360m6__2_.jpg" alt="" className="w-full cursor-pointer border" />
              <img src="../assets/products/HPENVYx360m6__2_.jpg" alt="" className="w-full cursor-pointer border" />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-medium uppercase mb-2">Italian L shape sofa</h3>
            <div className="flex items-center mb-4">
              <Rating />
              <div className="text xs text-gray-500 ml-3">(150 Reviews)</div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-800 font-semi-bold space-x-2">
                <span>Availability:</span>
                <span className="text-green-600">In stock</span>
              </p>
              <p className="space-x-2">
                <span className="text-gray-800 font-semibold">Brand:</span>
                <span className="text-gray-600">Apex</span>
              </p>
              <p className="space-x-2">
                <span className="text-gray-800 font-semibold">Category:</span>
                <span className="text-gray-600">Workstation</span>
              </p>
              <p className="space-x-2">
                <span className="text-gray-800 font-semibold">SKU:</span>
                <span className="text-gray-600">78DH9BBV</span>
              </p>
            </div>
            <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
              <p className="text-2xl text-primary font-semibold">$120,000</p>
              <p className="text-base text-gray-400 line-through">$124,000</p>
            </div>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius commodi voluptates nostrum dignissimos ut
              harum.
            </p>
            {/* size */}
            <div className="pt-4">
              <h3 className="text-sm text-gray-800 uppercase mb-1">Size</h3>
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
              <h3 className="text-sm text-gray-800 uppercase mb-1">Color</h3>
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

            {/* Quantity */}
            <div className="mt-4">
              <h3 className="text-sm text-gray-800 uppercase mb-1">Color</h3>
              <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                <input className="h-8 w-8 text-base flex items-center justify-center" value="4" />
                <div className="h-8 w-8 text-xl">+</div>
              </div>
            </div>

            <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
              <a
                href=""
                className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
              >
                <i className="fas fa-shopping-bag"></i> Add to cart
              </a>
              <a
                href=""
                className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
              >
                <i className="fas fa-heart"></i> Wish list
              </a>
            </div>

            <div className="flex gap-3 mt-4">
              <a
                href=""
                className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href=""
                className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href=""
                className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="container pb-16">
          <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">Product details</h3>

          <div className="w-3/5 pt-6">
            <div className="text-gray-600 space-y-3">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam sunt facere in consequatur voluptas
                quaerat nisi minus perferendis at vero ipsa eaque quos porro, reprehenderit omnis ea suscipit, et
                ratione.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam sunt facere in consequatur voluptas
                quaerat nisi minus perferendis at vero ipsa eaque quos porro, reprehenderit omnis ea suscipit, et
                ratione.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam sunt facere in consequatur voluptas
                quaerat nisi minus perferendis at vero ipsa eaque quos porro, reprehenderit omnis ea suscipit, et
                ratione.
              </p>
            </div>
          </div>
          <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
            <tr>
              <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Color</th>
              <td className="py-2 px-4 border border-gray-300">Black, Brown, red</td>
            </tr>
            <tr>
              <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Size</th>
              <td className="py-2 px-4 border border-gray-300">13 inches</td>
            </tr>
            <tr>
              <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Weight</th>
              <td className="py-2 px-4 border border-gray-300">3.5kg</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">related products</h2>
        <Products />
      </div>
    </div>
  );
};

export default ProductDetails;
