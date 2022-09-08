import React, { useState } from "react";
import { useSelector } from "react-redux";
import SideBarModal from "./modals/SideBarModal";
import SideNav from "./modals/SideNav";
import CategoriesNav from "./modals/CategoriesNav";
import FullModal from "./modals/FullModal";
import SearchModal from "./modals/SearchModal";
import CartModal from "./modals/CartModal";
const BottomBar = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const modalHandler = (target) => {
    if (target === "Menu") {
      setSideNavOpen(!sideNavOpen);
    } else if (target === "Categories") {
      setOpenCategories(!openCategories);
    } else if (target === "Search") {
      setOpenSearchBar(!openSearchBar);
    } else if (target === "Cart") {
      setOpenCart(!openCart);
    } else {
      setSideNavOpen(false);
      setOpenCategories(false);
      setOpenSearchBar(false);
      setOpenCart(false);
    }
  };
  return (
    <div className="flex justify-between items-center bg-white py-2 px-8">
      <div
        className="text-center text-gray-700 hover:text-primary transition relative"
        onClick={() => {
          modalHandler("Menu");
        }}
      >
        <div className="text-xl">
          <i className="fas fa-bars"></i>
        </div>
        <div className="text-xs leading-3">Menu</div>
      </div>
      <div
        className="text-center text-gray-700 hover:text-primary transition relative"
        onClick={() => {
          modalHandler("Categories");
        }}
      >
        <div className="text-xl">
          <i className="fas fa-bars"></i>
        </div>
        <div className="text-xs leading-3">Categories</div>
      </div>
      <div
        className="text-center text-gray-700 hover:text-primary transition relative"
        onClick={() => {
          modalHandler("Search");
        }}
      >
        <div className="text-xl">
          <i className="fas fa-search"></i>
        </div>
        <div className="text-xs leading-3">Search</div>
      </div>
      <div
        className="text-center text-gray-700 hover:text-primary transition relative"
        onClick={() => {
          modalHandler("Cart");
        }}
      >
        <div className="text-xl">
          <i className="fas fa-shopping-bag"></i>
        </div>
        <div className="text-xs leading-3">Cart</div>
        {cartItems.length > 0 && (
          <span className="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
            {cartItems.length}
          </span>
        )}
      </div>

      {sideNavOpen && (
        <SideBarModal modalHandler={modalHandler}>
          <SideNav modalHandler={modalHandler} />
        </SideBarModal>
      )}
      {openCategories && (
        <SideBarModal modalHandler={modalHandler}>
          <CategoriesNav modalHandler={modalHandler} />
        </SideBarModal>
      )}
      {openSearchBar && (
        <FullModal modalHandler={modalHandler}>
          <SearchModal modalHandler={modalHandler} />
        </FullModal>
      )}
      {openCart && (
        <SideBarModal modalHandler={modalHandler}>
          <CartModal modalHandler={modalHandler} />
        </SideBarModal>
      )}
    </div>
  );
};

export default BottomBar;
