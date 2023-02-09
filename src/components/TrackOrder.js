import React from "react";

import Breadcrumbs from "./Breadcrumbs";


const TrackOrder = () => {
    return (
    <div className=" container h-screen w-full ">
                <div>
        <Breadcrumbs page="Tracking Order" />
    </div>
        <div className=" container w-full h-screen shadow-lg ">
        <h1 className="text-2xl py-7 text-gray-700 font-medium">ORDER TRACKING</h1>
        <form action="">
            <div className="row">
                <div className="col-lg-5 mx-3">
                    <label for="first name" className="block">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl font-medium text-slate-800">
                        Order ID
                    </span>
                    </label>
                    <input className="mt-2 px-12 py-3 bg-white border shadow-sm block w-full border-slate-300 rounded-md" id="first_name" type="text" />
                </div>
            </div>
            <div className="col-12 mt-6 mx-3">
                <button className="bg-primary text-white hover:bg-transparent border border-primary hover:text-primary font-semibold px-5 py-3 rounded-md" type="submit">TRACK ORDER</button>
            </div>
        </form>
        <div className="mt-9 status_track">
        <div className=" pt-2 pb-2 w-full bg-green-600">
            <h2 className="text-1xl font-medium text-white text-center">DELIVERED</h2>
            </div>
        </div>



        {/* <div className="container track_steps flex w-full max-h-full">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-9 py-10">

             Stack 1
             <div className="col-span-4 w-full h-full"></div>
             <div className="relative col-span-1 w-full flex justify-center items-center">
                    <div className=" h-full w-1 bg-gray-300 justify-center items-center"></div>
                    <div className="absolute w-7 h-7 rounded-full bg-green-600 z-10 text-white text-center">1</div>
                </div>
                <div className="col-span-4 w-full h-full">
                    <div className="w-80 h-24 bg-white leading-loose text-slate-800 border shadow-sm rounded-md md:pl-4">
                    <h5 className="text-lg font-medium py-3">01. Order Placement</h5>
                    <p className="text-md sm:text-md">23 January, 2023, 13:09 PM</p>
                </div>
            </div>

             Stack 2
             <div className="col-span-4 w-full h-full pl-20">
                <div className="w-80 h-24 bg-white leading-loose text-slate-800 border shadow-sm rounded-md md:pl-4">
                    <h5 className="text-lg font-medium py-3">02. Shipping</h5>
                    <p className="text-md sm:text-md">23 January, 2023, 13:09 PM</p>
                </div>
            </div>
        <div className="relative col-span-1 w-full flex justify-center items-center">
        <div className=" h-full w-1 bg-gray-300 justify-center items-center"></div>
            <div className="absolute w-7 h-7 rounded-full bg-green-600 z-10 text-white text-center">2</div>
            </div>
                <div className="col-span-4 w-full h-full"></div>


             Stack 3
             <div className="col-span-4 w-full h-full"></div>
                <div className="relative col-span-1 w-full flex justify-center items-center">
                    <div className=" h-full w-1 bg-gray-300 justify-center items-center"></div>
                    <div className="absolute w-7 h-7 rounded-full bg-green-600 z-10 text-white text-center">3</div>
                </div>
            <div className="col-span-4 w-full h-full">
            <div className="w-80 h-24 bg-white leading-loose text-slate-800 border shadow-sm rounded-md md:pl-4">
                <h5 className="text-lg font-medium py-3">03. Delivery</h5>
                <p className="text-md sm:text-md">23 January, 2023, 13:09 PM</p>
                   </div>
               </div>
            </div>

        </div> */}







         <div className="flex flex-col items-center pt-2 lg:pt-8 ">
                <div className="w-[75vw] md:w-[70vw] lg:w-[45vw] flex justify-end mt-10">
                    <div className="flex flex-col  w-[32vw] md:w-[30vw] lg:w-[20vw] px-6 border md:px-0 md:pl-4 h-[8vh] justify-center">
                    <h1 className="text-slate-700 font-bold text-[13px] lg:text-[18px]">01. Order Placement</h1>
                    <p className="text-slate-500 font-thin text-[10px] lg:text-[14px] lg:font-light mt-3">30 January, 2021, 8:37 AM</p>
                    </div>
                </div>
                <div className="lg:w-[45vw] w-[75vw] md:w-[70vw] mt-10">
                    <div className=" flex px-0 pr-6 lg:px-6 border md:w-[30vw] md:px-0 md:pr-4 place-items-end justify-center h-[8vh] w-[32vw] lg:w-[20vw] flex-col mt-4">
                        <h1 className="text-slate-700 font-bold text-[13px] lg:text-[18px] text-right">02. Processing</h1>
                        <p className="text-slate-500 text-[10px] font-light mt-3">30 january, 2021, 8:37 AM</p>
                    </div>
                    
                    
                </div>
                <div className="lg:w-[45vw] w-[75vw] md:w-[70vw] flex justify-end mt-10">
                    <div className="flex flex-col w-[32vw] lg:w-[20vw] md:px-0 md:pl-4 md:w-[30vw] h-[8vh] justify-center border px-0 pl-6 lg:px-6">
                        <h1 className="text-slate-700 font-bold text-[13px] lg:text-[18px]">03. Shipping</h1>
                        <p className="text-slate-500 font-light text-[10px] mt-3">30 january, 2021, 8:37 AM</p>
                    </div>
                    
                </div>
                <div className="lg:w-[45vw] w-[75vw] md:w-[70vw] mt-10">
                    <div className=" flex px-0 ml-0 pr-6 lg:px-6 md:w-[30vw] md:px-0 md:pr-4 place-items-end w-[32vw] h-[8vh] border justify-center lg:w-[20vw] flex-col">
                        <h1 className="text-slate-700 font-bold text-[13px] lg:text-[18px] text-right">04. delivering</h1>
                        <p className="text-slate-500 font-light text-[10px] mt-3">30 january, 2021, 8:37 AM</p>
                    </div>
                    
                    
                </div>
                
                <div className="w-1 relative bottom-[50vh] lg:bottom-[50vh] border border-dashed border-slate-500 items-center justify-center">
                    <div className="w-6 h-6 rounded-full lg:mb-28 mb-28 md:mb- md:mt-16 mt-16 lg:mt-16 relative right-3 bg-green-500"></div>
                    <div className="w-6 h-6 rounded-full mb-20 lg:mb-24 md:mb-24 relative right-3 bg-green-500"></div>
                    <div className="w-6 h-6 rounded-full mb-24 lg:mb-20 md:mb-24 relative right-3 bg-green-500"></div>
                    <div className="w-6 h-6 rounded-full mb-12 lg:mb-12 md:mb-16 relative right-3 bg-green-500"></div>
                </div>
            </div>
        
    </div>
</div>

    )
}

export default TrackOrder;