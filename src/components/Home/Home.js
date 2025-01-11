"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import getstarted from "@/assets/getstarted.png";
import arrow from "@/assets/arrow.png";
import increase from "@/assets/increase.png";
import Cryptochart from "./Cryptochart";

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
    <div className="flex flex-col space-y-10 pb-10">
      <Navbar />
      <div className="flex items-start space-x-5 px-12">
        {data.slice(0, 1).map((currency) => (
          <Cryptochart key={currency.id} currency={currency} price_in_inr={currency.price_in_inr} />
        ))}
        <div className="flex flex-col w-[30%] space-y-5">
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
          <div className="bg-white h-[auto] rounded-[8px] p-6 flex flex-col space-y-6">
            <h1 className="font-[600] text-[24px] leading-[28.8px]">{`Trending Coins (24h)`}</h1>
            {data.slice(0, 3).map((currency) => (
              <div key={currency.id} className="flex justify-between">
                <div className="flex space-x-2 items-center justify-start font-[500] text-[16px] leading-[24px]">
                  <Image
                    width={24}
                    height={24}
                    src={currency.image}
                    alt={currency.name}
                  />
                  <span>{currency.name}</span>
                </div>
                <div className="bg-[#EBF9F4] text-[#14B079] leading-[19.36px] w-[84px] px-2 py-1 rounded-[8px] text-center flex justify-between items-center">
                  <Image
                    className="h-[8px]"
                    width={11}
                    height={2}
                    src={increase}
                    alt="Increase"
                  />
                  <span>
                    {`${currency.price_change_percentage_24h.toFixed(2)}%`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
