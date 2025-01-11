import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget({ symbol = "NASDAQ:AAPL" }) {
    const container = useRef();

    useEffect(() => {
        // Check if the script is already present in the document
        if (!document.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"]')) {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.onerror = () => {
                console.error("TradingView widget failed to load.");
            };
            script.innerHTML = JSON.stringify({
                autosize: true,
                symbol,
                timezone: "Etc/UTC",
                theme: "light",
                style: "2",
                locale: "en",
                backgroundColor: "rgba(255, 255, 255, 1)",
                hide_top_toolbar: true,
                hide_legend: true,
                range: "5D",
                allow_symbol_change: false,
                save_image: false,
                calendar: false,
                hide_volume: true,
                support_host: "https://www.tradingview.com",
                layout: {
                    // Disabling grid lines
                    grid: {
                        horzLines: {
                            visible: false, // Remove horizontal (Y-axis) grid lines
                        },
                        vertLines: {
                            visible: false, // Remove vertical grid lines
                        },
                    },
                },
            });
            container.current.appendChild(script);
        } else {
            // If script is already present, just reconfigure the widget
            const script = document.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"]');
            script.innerHTML = JSON.stringify({
                autosize: true,
                symbol,
                timezone: "Etc/UTC",
                theme: "light",
                style: "2",
                locale: "en",
                backgroundColor: "rgba(255, 255, 255, 1)",
                hide_top_toolbar: true,
                hide_legend: true,
                range: "5D",
                allow_symbol_change: false,
                save_image: false,
                calendar: false,
                hide_volume: true,
                support_host: "https://www.tradingview.com",
                layout: {
                    // Disabling grid lines
                    grid: {
                        horzLines: {
                            visible: false, // Remove horizontal (Y-axis) grid lines
                        },
                        vertLines: {
                            visible: false, // Remove vertical grid lines
                        },
                    },
                },
            });
        }
    }, [symbol]); // Depend on symbol so effect runs only if symbol changes

    return (
        <div className="tradingview-widget-container outline-none" ref={container} style={{ height: "100%", width: "100%", border: "none" }}>
            <div className="tradingview-widget-container__widget outline-none" style={{ height: "100%", width: "100%", border: "none" }}></div>
        </div>
    );
}

export default memo(TradingViewWidget);
