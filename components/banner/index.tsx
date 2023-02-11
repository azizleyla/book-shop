import Image from "next/image";
import React from "react";
import { SlBasket } from "react-icons/sl";
import Img from "../Data/Img";

const Banner = () => {
  return (
    <div className="bg-[#FCFBFF] py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div>
            <h1 className="mb-12 text-4xl md:text-7xl font-bold">
              Get Your New
              <br />
              Book Collections
            </h1>
            <p className="text-[#333] text-lg mb-5">
              There are many variations of passages of Lorem Ipsum
              available, but
              <br />
              the majority have suffered alteration in some formr.
            </p>
            <button className="bg-[#111] text-white py-4 px-10 rounded-[50px] flex items-center gap-2">
              Ətraflı oxu
              <SlBasket className="text-xl" />
            </button>
          </div>
          <div className="w-80 h-80 lg:w-auto lg:h-max">
            <Image className="w-full h-full" src={Img.bannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
