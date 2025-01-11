"use client";
import React from "react";
import { useState, useEffect } from "react";
import performance from "@/assets/performance.png";
import Image from "next/image";

const Performance = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCurrencyData = async (currency) => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&x_cg_api_key=CG-MGWg9bPKA88LSmmkwC7A4rFw`
      );
      const performance = await response.json();
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        setData(performance);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrencyData();
  }, []);

  const formatCurrencyUSD = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const formatPercentage = (numerator, denominator) => {
    if (!denominator) return "N/A"; // Handle division by 0 or undefined values
    const ans = numerator / denominator;
    return `${ans.toFixed(4)}`; // Return result with 2 decimal points as percentage
  };

  return (
    <div className="px-12 pr-[68px] pt-3 pb-12">
      <div className="h-[81vh] w-[70%] bg-white rounded-[8px] p-[20px] flex flex-col space-y-5">
        <h1 className="text-[24px] font-[600] leading-[28.8px]">Performance</h1>
        {data.slice(0, 1).map((currency) => (
          <div key={currency.id} className="flex flex-col space-y-10">
            <div className="flex flex-col space-y-5">
              <div className="flex justify-around items-center">
                <div className="flex flex-col space-y-2 justify-center items-start">
                  <span className="font-[400] text-[13.78px] leading-[20px] text-[#44475B] ">
                    Today&apos;s Low
                  </span>
                  <span className="text-[#44475B] font-[500] text-[15.63px] leading-[22px] ">
                    {formatCurrencyUSD(currency.low_24h)}
                  </span>
                </div>
                <Image
                  className="w-[582.8px] h-[4.63px]"
                  src={performance}
                  alt=""
                />
                <div className="flex flex-col space-y-2 justify-center items-start">
                  <span className="font-[400] text-[13.78px] leading-[20px] text-[#44475B] ">
                    Today&apos;s High
                  </span>
                  <span className="text-[#44475B] font-[500] text-[15.63px] leading-[22px] ">
                    {formatCurrencyUSD(currency.high_24h)}
                  </span>
                </div>
              </div>
              <div className="flex justify-around items-center">
                <div className="flex flex-col space-y-2 justify-center items-start">
                  <span className="font-[400] text-[13.78px] leading-[20px] text-[#44475B] ">
                    52W Low
                  </span>
                  <span className="text-[#44475B] font-[500] text-[15.63px] leading-[22px] ">
                    {formatCurrencyUSD(currency.low_24h)}
                  </span>
                </div>
                <Image
                  className="w-[582.8px] h-[4.63px]"
                  src={performance}
                  alt=""
                />
                <div className="flex flex-col space-y-2 justify-center items-start">
                  <span className="font-[400] text-[13.78px] leading-[20px] text-[#44475B] ">
                    52W High
                  </span>
                  <span className="text-[#44475B] font-[500] text-[15.63px] leading-[22px] ">
                    {formatCurrencyUSD(currency.high_24h)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <h1 className="text-[18.91px] font-[600] leading-[20px]">
                Fundamentals
              </h1>
              <div className="flex items-center space-x-10">
                <div className="flex flex-col space-y-2 w-full">
                  <div className="flex justify-between border-b-[1px] border-[#DEE1E6] py-4 pb-6 ">
                    <span className="font-[500] text-[14px] leading-[20px] text-[#768396] ">
                      Bitcoin Price
                    </span>
                    <span className="font-[500] text-[13px] leading-[20px] text-[#111827] ">
                      {formatCurrencyUSD(currency.current_price)}
                    </span>
                  </div>
                  <div className="flex justify-between border-b-[1px] border-[#DEE1E6] py-4 pb-6 ">
                    <span className="font-[500] text-[14px] leading-[20px] text-[#768396] ">
                      24h Low / 24h High
                    </span>
                    <span className="font-[500] text-[13px] leading-[20px] text-[#111827] ">
                      {`${formatCurrencyUSD(
                        currency.low_24
                      )} / ${formatCurrencyUSD(currency.high_24)}`}
                    </span>
                  </div>
                  <div className="flex justify-between border-b-[1px] border-[#DEE1E6] py-4 pb-6 ">
                    <span className="font-[500] text-[14px] leading-[20px] text-[#768396] ">
                      7d Low / 7d High
                    </span>
                    <span className="font-[500] text-[13px] leading-[20px] text-[#111827] ">
                      {`${formatCurrencyUSD(
                        currency.low_24
                      )} / ${formatCurrencyUSD(currency.high_24)}`}
                    </span>
                  </div>
                  <div className="flex justify-between border-b-[1px] border-[#DEE1E6] py-4 pb-6 ">
                    <span className="font-[500] text-[14px] leading-[20px] text-[#768396] ">
                      Trading Volume
                    </span>
                    <span className="font-[500] text-[13px] leading-[20px] text-[#111827] ">
                      {formatCurrencyUSD(currency.total_volume)}
                    </span>
                  </div>
                  <div className="flex justify-between border-b-[1px] border-[#DEE1E6] py-4 pb-6 ">
                    <span className="font-[500] text-[14px] leading-[20px] text-[#768396] ">
                      Market Cap Rank
                    </span>
                    <span className="font-[500] text-[13px] leading-[20px] text-[#111827] ">
                      #{currency.market_cap_rank}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 w-full">
                  <div className="flex justify-between border-b-[1px] border-[#DEE1E6] py-4 pb-6 ">
                    <span className="font-[500] text-[14px] leading-[20px] text-[#768396] ">
                      Market Cap
                    </span>
                    <span className="font-[500] text-[13px] leading-[20px] text-[#111827] ">
                      {formatCurrencyUSD(currency.market_cap)}
                    </span>
                  </div>
                  <div className="flex justify-between border-b-[1px] border-[#DEE1E6] py-4 pb-6 ">
                    <span className="font-[500] text-[14px] leading-[20px] text-[#768396] ">
                      Market Cap Dominance
                    </span>
                    <span className="font-[500] text-[13px] leading-[20px] text-[#111827] ">
                      38.343%
                    </span>
                  </div>
                  <div className="flex justify-between border-b-[1px] border-[#DEE1E6] py-4 pb-6 ">
                    <span className="font-[500] text-[14px] leading-[20px] text-[#768396] ">
                      Volume / Market Cap
                    </span>
                    <span className="font-[500] text-[13px] leading-[20px] text-[#111827] ">
                      {formatPercentage(
                        currency.total_volume,
                        currency.market_cap
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between border-b-[1px] border-[#DEE1E6] py-4 pb-6 ">
                    <span className="font-[500] text-[14px] leading-[20px] text-[#768396] ">
                      All-Time High
                    </span>
                    <span className="font-[500] text-[13px] leading-[20px] text-[#111827] ">
                      {formatCurrencyUSD(currency.ath)}
                    </span>
                  </div>
                  <div className="flex justify-between border-b-[1px] border-[#DEE1E6] py-4 pb-6 ">
                    <span className="font-[500] text-[14px] leading-[20px] text-[#768396] ">
                      All-Time Low
                    </span>
                    <span className="font-[500] text-[13px] leading-[20px] text-[#111827] ">
                      {formatCurrencyUSD(currency.atl)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performance;
