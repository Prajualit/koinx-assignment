'use client'
import React from "react";
import Image from "next/image";
import getstarted from "@/assets/getstarted.png";
import arrow from "@/assets/arrow.png";
import Trendingcoins from "./Trendingcoins";


const Getstarted = () => {
  return (
    <div className="hidden sm:px-12 px-3 py-12 max-lg:flex flex-col w-full space-y-5">
      <div className="h-auto text-white rounded-[8px] bg-[#0052FE] p-10 flex flex-col justify-start items-center space-y-5">
        <h1 className="font-[700] text-[24px] leading-[40p] text-center">
          Get Started with KoinX for FREE
        </h1>
        <p className="text-center text-[14px] leading-[24px]">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <Image
          width={178.66}
          height={166.22}
          src={getstarted}
          alt="Get started"
        />
        <button className="text-black font-[600] leading-[28px] text-[16px] flex justify-between items-center bg-white px-5 py-[6px] rounded-[8px] hover:scale-105 transition-transform">
          <span>Get Started for FREE</span>
          <Image width={20} height={20} src={arrow} alt="Arrow icon" />
        </button>
      </div>
      <Trendingcoins />
    </div>
  );
};

export default Getstarted;
