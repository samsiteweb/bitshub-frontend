import React from "react";

import Breadcrumbs from "./Breadcrumbs";


const TrackOrder = () => {
    return (
    <div className=" container h-screen w-full">
                <div>
        <Breadcrumbs page="Tracking Order" />
    </div>
        <div className=" container w-full h-screen shadow-lg">
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

        <div className="container track_steps flex w-full max-h-full">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-9 py-10">

             {/* Stack 1 */}
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

             {/* Stack 2 */}
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


             {/* Stack 3 */}
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

        </div>
    </div>
</div>

    )
}

export default TrackOrder;