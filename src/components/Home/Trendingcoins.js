import React from "react";
import Image from "next/image";
import increase from "@/assets/increase.png";
import { useState, useEffect } from "react";

const Trendingcoins = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTrendingCoins = async (currency) => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/search/trending`
      );
      const trendingData = await response.json();
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        setData(trendingData.coins);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  return (
    <div className="bg-white h-[auto] rounded-[8px] p-6 flex flex-col space-y-6">
      <h1 className="font-[600] text-[24px] leading-[28.8px]">{`Trending Coins (24h)`}</h1>
      {data.slice(0, 3).map((currency) => (
        <div key={currency.item.id} className="flex justify-between">
          <div className="flex space-x-2 items-center justify-start font-[500] text-[16px] leading-[24px]">
            <Image
            className="rounded-full"
              width={24}
              height={24}
              src={currency.item.thumb}
              alt={currency.item.name}
            />
            <span>{currency.item.name}</span>
          </div>
          <div className="bg-[#EBF9F4] text-[#14B079] leading-[19.36px] w-[80px] px-2 py-1 rounded-[8px] text-center flex justify-between items-center">
            <Image
              className="h-[8px]"
              width={11}
              height={2}
              src={increase}
              alt="Increase"
            />
            <span className="text-[14px]">{`${currency.item.data.price_change_percentage_24h.aed.toFixed(2)}%`}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trendingcoins;
