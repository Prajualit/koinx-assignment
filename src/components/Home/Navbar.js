import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import navbar from "@/assets/navbar.png";

const Navbar = () => {
  return (
    <div className="z-20 h-[80px] flex items-center justify-between px-12 font-[600] bg-white shadow-md">
      <Image width={96} height={24} src={logo} alt="" />
      <div className="flex space-x-10 max-sm:hidden">
        <button className="hover:underline-offset-4 hover:underline transition-all ">
          Crypto Taxes
        </button>
        <button className="hover:underline-offset-4 hover:underline transition-all ">
          Free Tools
        </button>
        <button className="hover:underline-offset-4 hover:underline transition-all ">
          Resource Center
        </button>
        <button className="px-4 py-1 rounded-[8px] bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] text-white transition-transform hover:scale-105">
          Get Started
        </button>
      </div>
      <button className="lg:hidden">
        <Image className="w-[50px] h-[50px] " src={navbar} alt="" />
      </button>
    </div>
  );
};

export default Navbar;
