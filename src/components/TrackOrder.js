import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import Breadcrumbs from "./Breadcrumbs";
import Axios from "axios";
import OrderCard from "./OrderCard";
import { useSelector } from "react-redux";
import LoadingBox from "./LoadingBox";
import MessageBox from "./modals/MessageBox";
import { toast } from 'react-toastify'
import InputField from "./InputField";

import CheckIcon from '@mui/icons-material/Check';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';

const TrackOrder = () => {

    const { userInfo } = useSelector((state) => state?.userSignin);
    const [myOrders, setMyOrders] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [paymentStatus, setPaymentStatus] = useState(false);
    const [isDelivered, setIsDelivered] = useState(false);
    const [isOrdered, setIsOrdered] = useState(false);
    const [orderDate, setOrderDate] = useState('')
    const [paymentDate, setPaymentDate] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('')
    const customId = "custom-id-yes";

    const errors = (values) => {
        const errors = {}
        if (!values.orderId) {
            errors.orderId = 'Required'
        }


        return errors
    }



    const initialValues = {
        orderId: ""
    }
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => getStatus(values.orderId),
        validate: (values) => errors(values)
    });

    const [inputStatus, setInputStatus] = useState(true);
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        const listOrderMine = async () => {
            try {
                const { data } = await Axios.get(`${BASE_URL}/api/orders/mine`, {
                    headers: {
                        authorization: `Bearer ${userInfo.token}`,
                    },
                });
                setLoading(false);
                setMyOrders(data);
            } catch (error) {
                setError(error);
            }
        };
        listOrderMine();
    }, [userInfo.token, userInfo]);
    function formatDate(str, store) {
        let timeStamp = '';
        const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        let spt = str.split("T");
        let dates = spt[0].split("-");
        let times = spt[1].split(".")[0].split(":");
        let hour = times[0];
        let minute = times[1]

        let date = dates[2]
        let year = dates[0]
        let month = months[dates[1] - 1];

        if (hour < 12) {
            timeStamp = 'am'
        } else {
            timeStamp = 'pm'
        }

        let output = `${date} ${month}, ${year}, ${hour}:${minute}${timeStamp}`;
        return output;
    }
    function getStatus(str) {
        let matchFound = 0;
        for (let i = 0; i < myOrders?.length; i++) {
            let currentObject = myOrders[i];
            if (str == currentObject._id) {
                setIsOrdered(true)

                setOrderDate(formatDate(currentObject.createdAt))
                setPaymentDate(formatDate(currentObject.PaidAt))

                matchFound++;
                setIsOrdered(true);
                if (currentObject.isPaid) {
                    setPaymentStatus(true)
                }
                if (currentObject.isDelivered) {
                    setDeliveryDate(formatDate(currentObject.deliveredAt));
                    setIsDelivered(true)
                }
            }
        }
        if (matchFound == 0) {
            toast.error("The ID you entered is invalid", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }
    }

    return (
        <div className="h-fit border w-full ">
            <div>
                <Breadcrumbs page="Tracking Order" />
            </div>
            <div className=" container w-full shadow-lg">
                <h1 className="text-2xl py-7 text-gray-700 font-medium">ORDER TRACKING</h1>
                <div className="row">
                    <div className="col-lg-5 mx-3">
                        <label for="first name" className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl font-medium text-slate-800">
                                Order ID
                            </span>
                        </label>
                        <form onSubmit={formik.handleSubmit}>
                            <InputField className="mt-2 px-12 py-3 bg-white border shadow-sm block w-full border-slate-300 rounded-md " name='orderId' id="orderId" type="text" onChange={formik.handleChange} value={formik.values.orderId} placeholder="Enter your order id" />
                            <div className="col-12 mt-6 mx-3">
                                <button className="bg-primary text-white hover:bg-transparent border border-primary hover:text-primary font-semibold px-5 py-3 rounded-md" type="submit">TRACK ORDER</button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* </form> */}
                <div className="mt-9 status_track">
                    <div className={` pt-2 pb-2 w-full ${isDelivered ? "bg-green-500" : "bg-red-700"
                        }`}>
                        <h2 className="text-1xl font-medium text-white text-center">{`${isDelivered ? "Delivered" : "Not Delivered"}`}</h2>
                    </div>
                </div>

                <div className="flex flex-col items-center pt-2 lg:pt-8 pb-12">
                    <div className="w-1 absolute border border-dashed border-slate-500 items-center justify-center">
                        <div className={`w-4 h-4 flex items-center justify-center sm:w-6 sm:h-6 lg:w-6 lg:h-6 md:w-6 md:h-6 rounded-full mt-12 lg:mb-20 md:mb-20 md:mt-12 sm:mt-12 lg:mt-16 relative right-2 sm:right-3 lg:right-3 md:right-3 bg-green-500 ${isDelivered ? "bg-green-500" : "bg-red-700"
                            }`}>
                            {isDelivered ? <CheckIcon className="text-xs lg:text-xl" style={{
                                color: "white"
                            }} /> : <CloseIcon className="text-xs lg:text-xl" style={{
                                color: "white"
                            }} />}
                        </div>
                        <div className={`w-4 h-4 sm:w-6 flex justify-center items-center sm:h-6 lg:w-6 lg:h-6 md:w-6 md:h-6 rounded-full mt-24 sm:mt-20 lg:mb-20 md:mb-16 relative right-2 sm:right-3 lg:right-3 md:right-3  ${isDelivered ? 'bg-green-500' :
                            isOrdered && !isDelivered && paymentStatus ? 'bg-yellow-500' : 'bg-red-700'
                            }`}>
                            {isDelivered ? <CheckIcon className="text-xs lg:text-xl" style={{
                                color: "white"
                            }} /> : isOrdered && !isDelivered && paymentStatus ? <MoreVertIcon className="text-xs lg:text-xl" style={{
                                color: "white"
                            }} /> : <CloseIcon className="text-xs lg:text-xl" style={{
                                color: "white"
                            }} />}
                        </div>
                        <div className={`w-4 h-4 sm:w-6 sm:h-6 flex justify-center items-center lg:w-6 lg:h-6 md:w-6 md:h-6 rounded-full mt-20 sm:mt-16 lg:mb-20 md:mb-16 relative right-2 sm:right-3 lg:right-3 md:right-3 bg-green-500 ${paymentStatus ? "bg-green-500" : "bg-red-700"
                            }`}>
                            {paymentStatus ? <CheckIcon className="text-xs lg:text-xl" style={{
                                color: "white"
                            }} /> : <CloseIcon className="text-xs lg:text-xl" style={{
                                color: "white"
                            }} />}
                        </div>
                        <div className={`w-4 h-4 sm:w-6 flex justify-center items-center sm:h-6 lg:w-6 lg:h-6 md:w-6 md:h-6 rounded-full mt-16 sm:mt-16 mb-8 sm:mb-12 lg:mb-12 md:mb-12 relative right-2 sm:right-3 lg:right-3 md:right-3 bg-green-500  ${isOrdered ? "bg-green-500" : "bg-red-700"
                            }`}>
                            {isOrdered ? <CheckIcon className="text-xs lg:text-xl" style={{
                                color: "white"
                            }} /> : <CloseIcon className="text-xs lg:text-xl" style={{
                                color: "white"
                            }} />}
                        </div>
                    </div>

                    <div className="w-[85vw] sm:w-[75vw] md:w-[70vw] lg:w-[45vw] flex justify-end mt-10">
                        <div className="flex flex-col  w-[40vw] sm:w-[32vw] md:w-[30vw] lg:w-[20vw] sm:px-6 px-1 border md:px-0 md:pl-4 h-[24] justify-center">
                            <h1 className="text-slate-700 font-bold  text-[12px] lg:text-[18px]">04. delivering</h1>
                            <p className="text-slate-500 font-thin  text-[9px] lg:text-[14px] lg:font-light mt-2">{isDelivered ? `${deliveryDate}` : 'Invalid'}</p>
                        </div>
                    </div>


                    <div className="lg:w-[45vw] w-[85vw] sm:w-[75vw] md:w-[70vw] mt-10">
                        <div className=" flex sm:px-6 px-1 sm:pr-6 lg:px-6 border md:w-[30vw] pl-1 md:pl-0 lg:pl-0 md:px-0 md:pr-4 place-items-end justify-center h-[24] w-[40vw] sm:w-[32vw] lg:w-[20vw] flex-col mt-4">
                            <h1 className="text-slate-700 font-bold text-[12px] lg:text-[18px] text-right">03. Shipping</h1>
                            <p className="text-slate-500 text-[9px] font-light lg:text-[14px] lg:font-light mt-2">{`${isDelivered ? 'Shipped' : isOrdered && !isDelivered ? 'Ongoing' : 'Invalid'}`}</p>
                        </div>


                    </div>
                    <div className="lg:w-[45vw] w-[85vw] sm:w-[75vw] md:w-[70vw] flex justify-end mt-10">
                        <div className="flex flex-col w-[40vw] sm:w-[32vw] lg:w-[20vw] md:px-0 md:pl-4 md:w-[30vw]  h-[24] justify-center border sm:px-6 px-0 pl-1 sm:pl-6 lg:px-6">
                            <h1 className="text-slate-700 font-bold text-[12px] lg:text-[18px]">02. Payment</h1>
                            <p className="text-slate-500 font-light text-[9px] lg:text-[14px] lg:font-light mt-2">{paymentStatus ? `${paymentDate}` : 'Invalid'}</p>
                        </div>

                    </div>
                    <div className="lg:w-[45vw] w-[85vw] sm:w-[75vw] md:w-[70vw] mt-10">
                        <div className=" flex sm:px-6 ml-0 pr-1 sm:pr-6 lg:px-6 md:w-[30vw] sm:pl-2 md:pl-0 lg:pl-0 md:px-0 md:pr-4 place-items-end w-[40vw] sm:w-[32vw] h-[24] border justify-center lg:w-[20vw] flex-col">
                            <h1 className="text-slate-700 font-bold text-[12px] lg:text-[18px] text-right">01. Order Placement</h1>
                            <p className="text-slate-500 font-light text-[9px] lg:text-[14px] lg:font-light mt-2">{isOrdered ? `${orderDate}` : 'Invalid'}</p>
                        </div>


                    </div>


                </div>

            </div>
        </div>

    )
}

export default TrackOrder;