"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import getstarted from "@/assets/getstarted.png";
import arrow from "@/assets/arrow.png";
import Cryptochart from "./Cryptochart";
import Trendingcoins from "./Trendingcoins";

const fetchCurrencyData = async (currency) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=1&sparkline=false&x_cg_api_key=CG-MGWg9bPKA88LSmmkwC7A4rFw`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usdData, inrData] = await Promise.all([
          fetchCurrencyData("usd"),
          fetchCurrencyData("inr"),
        ]);
        const combinedData = usdData.map((usdItem) => {
          const inrItem = inrData.find((item) => item.id === usdItem.id);
          return {
            ...usdItem,
            price_in_inr: inrItem?.current_price || null,
          };
        });

        setData(combinedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col space-y-3 sm:space-y-10 ">
      <Navbar />
      <div className="flex items-start space-x-5 sm:px-12 px-3">
        <div className="flex flex-col justify-center items-center w-full xl:w-[70%] space-y-8">
          {data.slice(0, 1).map((currency) => (
            <Cryptochart
              key={currency.id}
              currency={currency}
              price_in_inr={currency.price_in_inr}
            />
          ))}
          <div className="flex justify-start space-x-10 w-full border-b border-[#D3E0E6] ">
            <button className="text-[#0141CF] font-[600] text-[16px] leading-[19.36px] border-b-[3px] border-[#0141CF] pb-3  ">Overview</button>
            <button className="text-[#3E424A] font-[500] text-[16px] leading-[19.36px] pb-3 ">Fundamentals</button>
            <button className="text-[#3E424A] font-[500] text-[16px] leading-[19.36px] pb-3 ">News Insights</button>
            <button className="text-[#3E424A] flex max-sm:hidden font-[500] text-[16px] leading-[19.36px] pb-3 ">Sentiments</button>
            <button className="text-[#3E424A] flex max-sm:hidden font-[500] text-[16px] leading-[19.36px] pb-3 ">Team</button>
            <button className="text-[#3E424A] flex max-lg:hidden font-[500] text-[16px] leading-[19.36px] pb-3 ">Technicals</button>
            <button className="text-[#3E424A] flex max-lg:hidden font-[500] text-[16px] leading-[19.36px] pb-3 ">Tokenomics</button>
          </div>
        </div>
        <div className="flex max-lg:hidden flex-col w-[30%] space-y-5">
          <div className="h-auto text-white rounded-[8px] bg-[#0052FE] p-10 flex flex-col justify-start items-center space-y-5">
            <h1 className="font-[700] text-[24px] leading-[40p] text-center">
              Get Started with KoinX for FREE
            </h1>
            <p className="text-center text-[14px] leading-[24px]">
              With our range of features that you can equip for free, KoinX
              allows you to be more educated and aware of your tax reports.
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
      </div>
    </div>
  );
};

export default Home;
