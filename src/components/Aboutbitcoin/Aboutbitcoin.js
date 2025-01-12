import React from "react";
import Image from "next/image";
import aboutbitcoin1 from "@/assets/aboutbitcoin1.png";
import aboutbitcoin2 from "@/assets/aboutbitcoin2.png";

const Aboutbitcoin = () => {
  return (
    <div className="sm:px-12 px-3 xl:pr-[68px] sm:pb-12 pb-3">
      <div className=" w-full xl:w-[70%] bg-white rounded-[8px] p-[24px] px-[28px] flex flex-col space-y-12">
        <div className="flex flex-col space-y-6 items-start">
          <h1 className="text-[24px] font-[600] leading-[28.8px]">
            About Bitcoin
          </h1>
          <div className="flex flex-col space-y-3">
            <h1 className="text-[18px] font-[600] leading-[21.6px] text-[#0B1426] ">
              What is Bitcoin?
            </h1>
            <p className="text-[#3E424A] font-[500] leading-[25.6px] text-[16px]">
              Bitcoin’s price today is US$16,951.82, with a 24-hour trading
              volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
              currently -7.70% from its 7-day all-time high of $18,366.66, and
              3.40% from its 7-day all-time low of $16,394.75. BTC has a
              circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
            </p>
          </div>
          <div className="bg-[#DEE1E6] h-[1px] w-[100%] "></div>
          <div className="flex flex-col space-y-3">
            <h1 className="text-[18px] font-[600] leading-[21.6px] text-[#0B1426] ">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="text-[#3E424A] font-[500] leading-[25.6px] text-[16px]">
              Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
              lobortis tristique pharetra. Diam id et lectus urna et tellus
              aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
              sed. Quam scelerisque fermentum sapien morbi sodales odio sed
              rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut
              sed. Quam scelerisque fermentum sapien morbi sodales odio sed
              rhoncus.
              <br />
              <br />
              Diam praesent massa dapibus magna aliquam a dictumst volutpat.
              Egestas vitae pellentesque auctor amet. Nunc sagittis libero
              adipiscing cursus felis pellentesque interdum. Odio cursus
              phasellus velit in senectus enim dui. Turpis tristique placerat
              interdum sed volutpat. Id imperdiet magna eget eros donec cursus
              nunc. Mauris faucibus diam mi nunc praesent massa turpis a.
              Integer dignissim augue viverra nulla et quis lobortis phasellus.
              Integer pellentesque enim convallis ultricies at.
              <br />
              <br />
              Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
              massa vel convallis duis ac. Mi adipiscing semper scelerisque
              porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
              congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
              eget. Ullamcorper dui
            </p>
          </div>
          <div className="bg-[#DEE1E6] h-[1px] w-[100%] "></div>
          <h1 className="text-[24px] font-[600] leading-[28.8px]">
            Already Holding Bitcoin?
          </h1>
          <div className="flex space-x-5 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-5">
            <Image
              className="w-[403px] h-[151px] cursor-pointer "
              src={aboutbitcoin1}
              alt=""
            />
            <Image
              className="w-[403px] h-[151px] cursor-pointer "
              src={aboutbitcoin2}
              alt=""
            />
          </div>
          <div className="bg-[#DEE1E6] h-[1px] w-[100%] "></div>
          <p className="text-[#3E424A] font-[500] leading-[25.6px] text-[16px]">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutbitcoin;
