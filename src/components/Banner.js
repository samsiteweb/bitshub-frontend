import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-flip";

// import required modules
import { Pagination, Navigation, Autoplay, EffectFlip } from "swiper";


const Banner = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[ Autoplay ]}
        className="mySwiper"
      >
        <SwiperSlide>
           <div
      className="bg-cover bg-no-repeat bg-center py-36 lg:py-48 h-[65h]"
      style={{
        backgroundImage: "url(/assets/img-13.webp)",
      }}
    >
      <div className="container ">
        <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
          best collection for <br />
          durable computers
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At <br /> velit saepe, error doloribus quisquam
          distinctio{" "}
        </p>
        <div className="mt-12 ">
          <Link
            to="/shop"
            href="none"
            className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
        </SwiperSlide> 
         <SwiperSlide className="bg-cover pt-0 pb-0 lg:pt-6 lg:pb-10  bg-no-repeat bg-center lg:px-32 h-[65h]"
      style={{
        backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/002/884/043/original/abstract-red-and-black-futuristic-gaming-background-in-livestream-free-vector.jpg)",
      }}
      >
          <div className="flex flex-col lg:flex-row justify-between items-center"
    >
      <div >
      <h1 className=" text-white mt-16 mb-20 text-4xl lg:text-7xl lg:my-36">
        Get Your <br /> <span className="text-rose-900">Affordable</span> <br /> Gaming Accesories <br /> From Us.
      </h1>
      </div>
      <div className="w-96 h-96"
      >
        <Swiper
        effect={"flip"}
        grabCursor={true}
        navigation={true}
        modules={[EffectFlip, Navigation]}
        className="mySwiper"
        
      >
        <SwiperSlide 
      >
          <div
          className="bg-cover bg-no-repeat h-96 w-96 bg-center lg:h-[50vh] relative  lg:l-[10vw]lg:w-[25vw] rounded-lg "
      style={{
        backgroundImage: "url(https://assets2.razerzone.com/images/pnx.assets/1c24459a93d55d03edd4d1a15c8cee08/blade15-11thgen-mobile.jpg)",
      }}
          >

          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div
          className="bg-cover bg-no-repeat bg-center h-96 w-96 rounded-lg"
      style={{
        backgroundImage: "url(https://assets2.razerzone.com/images/pnx.assets/1c24459a93d55d03edd4d1a15c8cee08/blade15-11thgen-mobile.jpg)",
      }}
          >

          </div>
 </SwiperSlide>
        <SwiperSlide>
          <div
          className="bg-cover bg-no-repeat bg-center h-96 w-96 rounded-lg "
      style={{
        backgroundImage: "url(https://i.ebayimg.com/images/g/jkoAAOSwdwlheUbC/s-l500.png)",
      }}
          >

          </div>
         </SwiperSlide>
        <SwiperSlide>
          <div
          className="bg-cover bg-no-repeat bg-center h-96 w-96 rounded-lg"
      style={{
        backgroundImage: "url(https://assets2.razerzone.com/images/pnx.assets/1c24459a93d55d03edd4d1a15c8cee08/blade15-11thgen-mobile.jpg)",
      }}
          >

          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide className="bg-black flex  items-center flex-col justify-center pb-12 lg:pb-0">
          <div className=" lg:h-[66vh] overflow-hidden h-[71.5vh]">
          <div className=" text-center  relative top-16 ">
        <p className="text-red-800 text-1xl mb-3 lg:text-2xl lg:mb-4">New</p>
        <h1 className="text-white text-4xl mb-3 lg:text-5xl lg:mb-8">MacBook Pro 13</h1>
        <div >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buy Now</button>
        </div>
          </div>
          <div>
          <img className=" lg:h-[50vh] lg:w-[50vw] mb-0 h-[50vh] w-[100%] " src="https://w0.peakpx.com/wallpaper/601/760/HD-wallpaper-apple-macbook-laptop-on-black-background-modern-technology-laptop-apple.jpg"/>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <div className="flex flex-col lg:flex-row item-center justify-between lg:px-48 lg:h-[66vh] h-[77vh] overflow-hidden">
            
            <div>
              <h1 className="text-slate-400 text-3xl mt-10 ml-6 leading-relaxed lg:text-6xl lg:mt-40 lg:leading-normal font-medium">GET UPTO <br /> <span className="text-slate-500">50% DISCOUNT OFF<br /><span className="text-slate-600"> YOUR FAVOURITE ACCESORIES</span></span></h1>
            </div>
            <div>
              <img className="lg:h-[65vh] mb-7 relative lg:mt-5" src='https://www.techspot.com/images2/news/bigimage/2019/11/2019-11-20-image-30.jpg' />
            </div>
            
          </div>
        </SwiperSlide>
      </Swiper>
      
    </div>
   
  );
};

export default Banner;
