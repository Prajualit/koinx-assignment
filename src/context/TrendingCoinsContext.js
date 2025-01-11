'use client'
import React, { createContext, useState, useEffect } from "react";

// Create the context
export const TrendingCoinsContext = createContext();

// Create the provider component
export const TrendingCoinsProvider = ({ children }) => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const data = await response.json();
        setTrendingCoins(data.coins); // Top 3 trending coins
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <TrendingCoinsContext.Provider value={{ trendingCoins, loading, error }}>
      {children}
    </TrendingCoinsContext.Provider>
  );
};
