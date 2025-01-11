"use client";
import React, { useContext } from "react";
import { TrendingCoinsContext } from "@/context/TrendingCoinsContext";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import increase from "@/assets/increase.png";

const Youmayalsolike = () => {
  const { trendingCoins, loading, error } = useContext(TrendingCoinsContext);

  const ArrowRightIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      role="img"
      color="black"
    >
      <path
        d="M9.00005 6L15 12L9 18"
        stroke="black"
        strokeWidth="1.5"
        strokeMiterlimit="16"
      />
    </svg>
  );

  return (
    <div className="bg-white px-14 py-14 pb-20 flex flex-col space-y-14">
      <div className="flex flex-col space-y-6">
        <h1 className="text-[#202020] font-[600] text-[24px] leading-[36px] ">
          You May Also Like
        </h1>
        <Swiper
          spaceBetween={10} // Space between slides
          slidesPerView={5} // Number of slides visible at once
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }} // Enable navigation (arrows)
          modules={[Pagination, Navigation]} // Swiper modules
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile screens
            640: { slidesPerView: 2 }, // Tablets
            1024: { slidesPerView: 5 }, // Desktops
          }}
        >
          {trendingCoins.map(({ item }) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col justify-between items-center border-[#E3E3E3] border-[1px] p-4 rounded-[8px] h-[180px] w-auto">
                <div className="w-full flex flex-col space-y-1 ">
                  <div className="flex justify-between items-start w-full ">
                    <div className="flex space-x-2 items-center justify-start font-[500] text-[16px] leading-[24px] w-full">
                      <Image
                        width={26}
                        height={26}
                        src={item.small}
                        alt={item.name}
                        className="rounded-full"
                        loading="lazy"
                      />
                      <div className="flex flex-col items-start justify-center">
                        <span className="text-[16px] font-[400] leading-[19.36px] text-[#202020] ">
                          {item.symbol.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="bg-[#EBF9F4] text-[#14B079] leading-[19.36px] w-auto px-3 py-1 rounded-[8px] text-center flex justify-center space-x-1 items-center">
                      <Image
                        className="h-[8px]"
                        width={11}
                        height={2}
                        src={increase}
                        alt="Increase"
                      />
                      <span className="text-[14px]">{`${item.data.price_change_percentage_24h.aed.toFixed(
                        2
                      )}%`}</span>
                    </div>
                  </div>
                  <span className="font-[500] text-[20px] leading-[24px] text-[#171717]">
                    ${item.data.price.toFixed(7)}
                  </span>
                </div>
                <Image
                  width={150}
                  height={150}
                  alt={item.name}
                  src={item.data.sparkline}
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-2 z-10 cursor-pointer">
            <span className="text-3xl text-gray-600 -scale-100">{ArrowRightIcon()}</span>{" "}
            {/* Left arrow */}
          </div>
          <div className="custom-next absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-2 z-10 cursor-pointer">
            <span className="text-3xl text-gray-600">{ArrowRightIcon()}</span>{" "}
            {/* Right arrow */}
          </div>
        </Swiper>
      </div>
      <div className="flex flex-col space-y-6">
        <h1 className="text-[#202020] font-[600] text-[24px] leading-[36px] ">
          Trending Coins (24h)
        </h1>
        <Swiper
          spaceBetween={10} // Space between slides
          slidesPerView={5} // Number of slides visible at once
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }} // Enable navigation (arrows)
          modules={[Pagination, Navigation]} // Swiper modules
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile screens
            640: { slidesPerView: 2 }, // Tablets
            1024: { slidesPerView: 5 }, // Desktops
          }}
        >
          {trendingCoins.map(({ item }) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col justify-between items-center border-[#E3E3E3] border-[1px] p-4 rounded-[8px] h-[180px] w-auto">
                <div className="w-full flex flex-col space-y-1 ">
                  <div className="flex justify-between items-start w-full ">
                    <div className="flex space-x-2 items-center justify-start font-[500] text-[16px] leading-[24px] w-full">
                      <Image
                        width={26}
                        height={26}
                        src={item.small}
                        alt={item.name}
                        className="rounded-full"
                        loading="lazy"
                      />
                      <div className="flex flex-col items-start justify-center">
                        <span className="text-[16px] font-[400] leading-[19.36px] text-[#202020] ">
                          {item.symbol.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="bg-[#EBF9F4] text-[#14B079] leading-[19.36px] w-auto px-3 py-1 rounded-[8px] text-center flex justify-center space-x-1 items-center">
                      <Image
                        className="h-[8px]"
                        width={11}
                        height={2}
                        src={increase}
                        alt="Increase"
                      />
                      <span className="text-[14px]">{`${item.data.price_change_percentage_24h.aed.toFixed(
                        2
                      )}%`}</span>
                    </div>
                  </div>
                  <span className="font-[500] text-[20px] leading-[24px] text-[#171717]">
                    ${item.data.price.toFixed(7)}
                  </span>
                </div>
                <Image
                  width={150}
                  height={150}
                  alt={item.name}
                  src={item.data.sparkline}
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-2 z-10 cursor-pointer">
            <span className="text-3xl text-gray-600 -scale-100">{ArrowRightIcon()}</span>{" "}
            {/* Left arrow */}
          </div>
          <div className="custom-next absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-2 z-10 cursor-pointer">
            <span className="text-3xl text-gray-600">{ArrowRightIcon()}</span>{" "}
            {/* Right arrow */}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Youmayalsolike;
