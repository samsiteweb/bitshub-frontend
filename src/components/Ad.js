import React from "react";

const Ad = () => {
  return (
    <div className="container pb-16">
      <div id="carouselExampleSlidesOnly" className="carousel slide relative" data-bs-ride="carousel">
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <a href="advert">
              <img className="h-[250px] w-full" src="../assets/ad1.webp" alt="" />
            </a>
          </div>
          {/* <div className="carousel-item active relative float-left w-full">
            <a href="advert">
              <img className="h-[250px] w-full" src="../assets/ad1.webp" alt="" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Ad;
