import React from "react";
import OrderCard from "./OrderCard";
import { OrderData } from "../data/orderData";

const Returns = () => {
  const items = [
    {
      id: 1,
      imageLink: '../assets/img1.jpg',
      productName: 'Hp Elitebook 840 g3',
      price: '₦180,000',
      status: 'Successful',
      orderId: '4397fbo84f'
    },
    {
      id: 2,
      imageLink: '../assets/img1.webp',
      productName: 'Macook 20 pro',
      price: '₦780,000',
      status: 'Proccessing',
      orderId: 'd4o348h3948'
    },
    {
      id: 3,
      imageLink: '../assets/img3.webp',
      productName: 'Hp Envy 7',
      price: '₦480,000',
      status: 'Declined',
      orderId: '4397fbo84f'
    },
    {
      id: 4,
      imageLink: '../assets/img4.webp',
      productName: 'Alienware 23 pro',
      price: '₦980,000',
      status: 'Successful',
      orderId: '4397fbo84f'
    },
    {
      id: 5,
      imageLink: '../assets/img5.jpg',
      productName: 'Dell inspiron 1 lite',
      price: '₦380,000',
      status: 'Proccessing',
      orderId: '4397fbo84f'
    },
    {
      id: 5,
      imageLink: '../assets/img5.jpg',
      productName: 'Dell inspiron 1 lite',
      price: '₦380,000',
      status: 'Proccessing',
      orderId: '4397fbo84f'
    },
    {
      id: 5,
      imageLink: '../assets/img5.jpg',
      productName: 'Dell inspiron 1 lite',
      price: '₦380,000',
      status: 'Declined',
      orderId: '4397fbo84f'
    },
    {
      id: 5,
      imageLink: '../assets/img5.jpg',
      productName: 'Dell inspiron 1 lite',
      price: '₦380,000',
      status: 'Proccessing',
      orderId: '4397fbo84f'
    },
  ]
  return (
    <div className="col-span-12 lg:col-span-9 space-y-4 h-full">
      <p className="ml-1 font-semibold text-gray-800">Order History</p>
      <div className="lg:h-[50vh] h-[55vh] px-1   overflow-y-scroll ">
        {items?.map((item) => {
          return (
            <div className=" flex lg:flex-row md:flex-row flex-col px-3 lg:items-center md:items-center py-6 gap-9 shadow-md pl-8" >
              <div className="flex items-center gap-2 w-64">
                <img className="w-24 h-16" src={item.imageLink} id={item.id} />
                <div className="">
                  <h1 className="font-normal mb-2 lg:text-[16px] md:text-[14px] text-[12px]">{item.productName}</h1>
                  <h3 className="font-light">{item.price}</h3>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="">
                  <h1 className="font-normal mb-2 lg:text-[16px] md:text-[14px] text-[12px]">Order Number</h1>
                  <h3 className="font-light">{item.orderId}</h3>
                </div>
                <div className="">
                  <h1 className="font-normal mb-2 lg:text-[16px] md:text-[14px] text-[12px]">Return Status</h1>
                  <h3 className={`font-light ${item.status == "Successful" ? 'text-green-500' : item.status == "Proccessing" ? 'text-yellow-500' : 'text-red-500'}`}>{item.status}</h3>
                </div>
                <button className="bg-transparent h-10 w-24 hover:bg-orange-600 font-medium text-orange-500 text-[12px] hover:text-white border border-orange-500 hover:border-transparent rounded">View Order</button>
              </div>
            </div >
          )
        })}
      </div>

    </div >
  );
};

export default Returns;
