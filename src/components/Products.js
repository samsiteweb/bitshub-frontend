import React from "react";
import prod3 from "../images/products/Dell-Inspiron-15-5000-5558-Silver-Version.jpg";
import prod4 from "../images/products/HPENVYx360m6__2_.jpg";

const Products = () => {
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
      <div className="grid grid-cols-4 gap-6">
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
      </div>
    </div>
  );
};

export default Products;
