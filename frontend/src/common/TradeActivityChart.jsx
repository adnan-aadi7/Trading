import React, { useState } from "react";

const TradeActivityChart = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("24H");

  // Sample candlestick data for BTC/USDT
  const candleData = [
    { open: 65000, high: 65500, low: 64500, close: 65200, time: "09:00" },
    { open: 65200, high: 66000, low: 65000, close: 65800, time: "10:00" },
    { open: 65800, high: 66200, low: 65300, close: 65400, time: "11:00" },
    { open: 65400, high: 65900, low: 64800, close: 65600, time: "12:00" },
    { open: 65600, high: 66800, low: 65400, close: 66500, time: "13:00" },
    { open: 66500, high: 67200, low: 66000, close: 66800, time: "14:00" },
    { open: 66800, high: 67000, low: 66200, close: 66400, time: "15:00" },
    { open: 66400, high: 66900, low: 65800, close: 66200, time: "16:00" },
    { open: 66200, high: 66700, low: 65900, close: 66600, time: "17:00" },
    { open: 66600, high: 67300, low: 66300, close: 67100, time: "18:00" },
    { open: 67100, high: 67800, low: 66800, close: 67500, time: "19:00" },
    { open: 67500, high: 68000, low: 67200, close: 67800, time: "20:00" },
  ];

  const maxPrice = Math.max(...candleData.map((d) => d.high));
  const minPrice = Math.min(...candleData.map((d) => d.low));
  const priceRange = maxPrice - minPrice;

  const Candle = ({ data, index }) => {
    const isGreen = data.close > data.open;
    const bodyHeight = (Math.abs(data.close - data.open) / priceRange) * 200;
    const bodyTop =
      ((maxPrice - Math.max(data.open, data.close)) / priceRange) * 200;
    const wickTop = ((maxPrice - data.high) / priceRange) * 200;
    const wickBottom = ((maxPrice - data.low) / priceRange) * 200;

    return (
      <g key={index}>
        {/* Wick */}
        <line
          x1={index * 40 + 20}
          y1={wickTop}
          x2={index * 40 + 20}
          y2={wickBottom}
          stroke={isGreen ? "#10b981" : "#ef4444"}
          strokeWidth="1"
        />
        {/* Body */}
        <rect
          x={index * 40 + 12}
          y={bodyTop}
          width="16"
          height={Math.max(bodyHeight, 2)}
          fill={isGreen ? "#10b981" : "#ef4444"}
          rx="1"
        />
      </g>
    );
  };

  return (
    <div className="min-h-[150px] mt-8">
      <div className="bg-slate-800 rounded-lg p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-lg font-semibold">
            Recent Trade Activity
          </h2>
          <div className="flex gap-1">
            {["1H", "24H", "7D"].map((timeframe) => (
              <button
                key={timeframe}
                onClick={() => setSelectedTimeframe(timeframe)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  selectedTimeframe === timeframe
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {timeframe}
              </button>
            ))}
          </div>
        </div>

        {/* Trading Pair Info */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-white text-base font-bold">BTC/USDT</h3>
            <span className="text-green-400 text-xs bg-green-900 px-2 py-0.5 rounded">
              +2.45%
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-gray-400 text-xs">
            <span>
              Price: <span className="text-white font-medium">$67,800</span>
            </span>
            <span>
              24h High: <span className="text-green-400">$68,200</span>
            </span>
            <span>
              24h Low: <span className="text-red-400">$64,500</span>
            </span>
            <span>
              Volume: <span className="text-white">24,567 BTC</span>
            </span>
          </div>
        </div>

        {/* Candlestick Chart */}
        <div className="bg-gray-800 rounded-lg p-3">
          <h4 className="text-gray-300 text-xs font-medium mb-1">
            BTC/USDT Candlestick Chart
          </h4>
          <div className="relative">
            <svg
              width="100%"
              height="180"
              viewBox="0 0 480 180"
              className="overflow-visible"
            >
              {/* Grid lines */}
              {[0, 1, 2, 3].map((i) => (
                <line
                  key={i}
                  x1="0"
                  y1={i * 45}
                  x2="480"
                  y2={i * 45}
                  stroke="#374151"
                  strokeWidth="0.5"
                  strokeDasharray="2,2"
                />
              ))}

              {/* Price labels */}
              {[0, 1, 2, 3].map((i) => {
                const price = maxPrice - (i * priceRange) / 3;
                return (
                  <text
                    key={i}
                    x="485"
                    y={i * 45 + 5}
                    fill="#9ca3af"
                    fontSize="10"
                    textAnchor="start"
                  >
                    ${price.toFixed(0)}
                  </text>
                );
              })}

              {/* Candles */}
              {candleData.map((data, index) => (
                <Candle key={index} data={data} index={index} />
              ))}

              {/* Time labels */}
              {candleData.map(
                (data, index) =>
                  index % 2 === 0 && (
                    <text
                      key={index}
                      x={index * 40 + 20}
                      y="170"
                      fill="#9ca3af"
                      fontSize="9"
                      textAnchor="middle"
                    >
                      {data.time}
                    </text>
                  )
              )}
            </svg>
          </div>
        </div>

        {/* Trading Statistics */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          {[
            { label: "Open", value: "$65,000", color: "text-white" },
            { label: "High", value: "$68,000", color: "text-green-400" },
            { label: "Low", value: "$64,500", color: "text-red-400" },
            { label: "Close", value: "$67,800", color: "text-white" },
          ].map((stat, i) => (
            <div key={i} className="bg-gray-800 rounded p-3">
              <div className="text-gray-400 text-xs mb-0.5">{stat.label}</div>
              <div className={`${stat.color} font-semibold text-sm`}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradeActivityChart;
