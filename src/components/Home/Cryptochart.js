import React from "react";
import Image from "next/image";
import increase from "@/assets/increase.png";
import TradingViewWidget from "./TradingViewWidget";

const Cryptochart = ({ currency, price_in_inr }) => {
  // Format the USD price with the US system (US locale)
  const formatCurrencyUSD = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  // Format the INR price with the Indian system (IN locale)
  const formatCurrencyINR = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);
  };

  return (
    <div className="h-[81vh] w-full bg-white rounded-[8px] p-[20px] flex flex-col space-y-5">
      <div className="flex flex-col justify-start items-start space-y-12">
        <div className="flex justify-start items-center space-x-10">
          <div className="flex justify-start items-center space-x-3">
            <Image width={36} height={36} src={currency.image} alt="" />
            <h1 className="text-[24px] font-[600] leading-[28.8px] ">
              {currency.name}
            </h1>
            <span className="text-[#5D667B] text-[16px] leading-[19.2px] font-[600] ">
              {currency.symbol.toUpperCase()}
            </span>
          </div>
          <div className="bg-[#808A9D] w-[80px] rounded-[8px] text-center px-2 py-2 text-white border leading-[20.16px] text-[16px]">
            {`Rank #${currency.market_cap_rank}`}
          </div>
        </div>
        <div className="flex flex-col justify-start space-y-1">
          <div className="flex justify-start items-center space-x-8">
            <span className="font-[600] text-[28px] text-[#0B1426] leading-[38.4px] ">{`${formatCurrencyUSD(
              currency.current_price
            )}`}</span>
            <div className="bg-[#EBF9F4] text-[#14B079] leading-[19.36px] w-[84px] px-2 py-1 rounded-[8px] text-center flex justify-between items-center">
              <Image
                className="h-[8px]"
                width={11}
                height={2}
                src={increase}
                alt="Increase"
              />
              <span>{`${currency.price_change_percentage_24h.toFixed(
                2
              )}%`}</span>
            </div>
            <span className="text-[#5D667B] text-[16px] leading-[19.2px] ">
              (24H)
            </span>
          </div>
          <span>{`${formatCurrencyINR(price_in_inr)}`}</span>
        </div>
      </div>
      <div className="bg-[#DEE1E6] h-[1px] w-[100%] "></div>
      <div className="flex flex-col justify-start items-start space-y-5 h-full">
        <h1 className="text-[#0B1426] font-[600] text-[16px] leading-[19.5px] ">{currency.name} Price Chart (USD)</h1>
        <TradingViewWidget />
      </div>
    </div>
  );
};

export default Cryptochart;
