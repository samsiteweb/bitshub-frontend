import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import TeamCard from "../components/TeamCard";
import { TeamData } from "../data/teamData";

const AboutScreen = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url(/assets/img-13.webp)",
        }}
      >
        <div className="flex flex-col items-center bg-black bg-opacity-50 py-28">
          <p className="text-white text-3xl font-semibold">About Us</p>
          <div>
            <Breadcrumbs page="About" secondary />
          </div>
        </div>
      </div>
      <div className="bg-[#E5E5E5]">
        <div className="container flex flex-col md:flex-row items-center py-12 gap-4 ">
          <div className="w-full md:w-[55%]">
            <p className="uppercase text-primary font-medium text-base">Our history</p>
            <p className="text-2xl text-gray-600 font-medium uppercase py-4">We are indeed the Hub of bits...</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate earum nam temporibus sed aliquam
              accusamus impedit optio error iste, asperiores quasi quae aliquid vero iusto! Obcaecati harum, sit nemo
              fugit ullam..
            </p>
            <div className="flex justify-between items-center">
              <div className="py-12 text-center">
                <p className="text-primary text-4xl font-semibold">12</p>
                <p>Years Experience</p>
              </div>
              <div className="py-12 text-center">
                <p className="text-primary text-4xl font-semibold">1k</p>
                <p>Happy Customers</p>
              </div>
              <div className="py-12 text-center">
                <p className="text-primary text-4xl font-semibold">95%</p>
                <p>Clients satisfaction</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[45%] border-primary border">
            <img className="w-full h-full" src="../assets/img-11.webp" alt="" />
          </div>
        </div>
      </div>
      <div className="my-16 px-16 flex flex-col md:flex-row items-center gap-8 md:container">
        <div className="w-full md:w-[45%] h-full">
          <img className="w-full" src="../assets/img-14.jpeg" alt="" />
        </div>
        <div className="w-full md:w-[55%]">
          <p className="uppercase text-primary font-medium text-base">Our vision</p>
          <p className="text-2xl text-gray-600 font-medium uppercase py-4">
            OUR VISION IS SIMPLE - WE EXIST TO ACCELERATE OUR CUSTOMERS’ PROGRESS
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis placeat ipsum quisquam nulla dolorem
            dignissimos cum numquam harum aliquam recusandae praesentium similique cupiditate, deleniti, quo fugiat
            incidunt nemo voluptates quam!
          </p>
          <ul>
            <li>
              <i className="fas fa-chevron-right text-sm text-primary pr-4 py-2"></i>We build strong relationships
            </li>
            <li>
              <i className="fas fa-chevron-right text-sm text-primary pr-4 py-2"></i>We encourage initiative and provide
              opportunity
            </li>
            <li>
              <i className="fas fa-chevron-right text-sm text-primary pr-4 py-2"></i>We embrace change and creativity
            </li>
            <li>
              <i className="fas fa-chevron-right text-sm text-primary pr-4 py-2"></i>We build strong relationships
            </li>
            <li>
              <i className="fas fa-chevron-right text-sm text-primary pr-4 py-2"></i>We champion an environment of
              honesty
            </li>
          </ul>
        </div>
      </div>
      <div className="container text-center">
        <p className="text-2xl text-gray-600 font-medium uppercase py-4">Meet with our team</p>
        <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-3 sm:grid-cols-2">
          {TeamData.teams.map((item) => {
            return <TeamCard item={item} key={item.id} />;
          })}
        </div>
      </div>
      <div className="container my-8 text-center">
        <p className="text-2xl text-gray-600 font-medium uppercase py-4">Our partners</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="text-primary font-semibold text-base">Zaron Cosmetics</div>
          <div className="text-primary font-semibold text-base">Advanced Waste Projects</div>
          <div className="text-primary font-semibold text-base">Laptop Clinic</div>
          <div className="text-primary font-semibold text-base">lorem Ipsum</div>
          <div className="text-primary font-semibold text-base">Zaron Cosmetics</div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
