import React from "react";

const CartModal = ({ modalHandler }) => {
  return (
    <div>
      <div className="text-white font-semibold text-center p-3 bg-primary">
        <span>Cart</span>
        <span
          className="ml-[60%] font-normal cursor-pointer"
          onClick={() => {
            modalHandler();
          }}
        >
          X
        </span>
      </div>
      <div className="p-3 space-y-2">
        <p className="text-gray-700 font-medium border-b border-solid transition pt-4 pb-2">Total 2 Items</p>

        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <div className="w-20">
              <img className="w-full" src="../assets/products/81nde-rFKzL._AC_SL1500_.jpg" alt="cart item" />
            </div>
            <div>
              <p className="text-gray-700 font-medium text-sm hover:text-primary">Lenovo Yoga Y6</p>
              <p className="text-gray-700 text-xs">#200,000</p>
            </div>
          </div>
          <div className="text-gray-600 cursor-pointer hover:text-primary mr-4">
            <i className="fas fa-trash"></i>
          </div>
        </div>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <div className="w-20">
              <img className="w-full" src="../assets/products/81nde-rFKzL._AC_SL1500_.jpg" alt="cart item" />
            </div>
            <div>
              <p className="text-gray-700 font-medium text-sm hover:text-primary">Lenovo Yoga Y6</p>
              <p className="text-gray-700 text-xs">#200,000</p>
            </div>
          </div>
          <div className="text-gray-600 cursor-pointer hover:text-primary mr-4">
            <i className="fas fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
