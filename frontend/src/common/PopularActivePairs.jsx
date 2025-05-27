import React, { useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const PopularActivePairs = () => {
  const [selectedPair, setSelectedPair] = useState("BTC/USDT");

  const tradingPairs = [
    {
      pair: "BTC/USDT",
      price: "$67,850.42",
      change: "+2.45%",
      volume: "24,567.89 BTC",
      isPositive: true,
      chartData: [
        65000, 65200, 64800, 65500, 66200, 65800, 66500, 67200, 66800, 67850,
      ],
    },
    {
      pair: "ETH/USDT",
      price: "$3,245.67",
      change: "+1.89%",
      volume: "156,234.12 ETH",
      isPositive: true,
      chartData: [3100, 3150, 3080, 3200, 3180, 3220, 3190, 3250, 3230, 3245],
    },
    {
      pair: "BNB/USDT",
      price: "$542.18",
      change: "-0.67%",
      volume: "45,789.34 BNB",
      isPositive: false,
      chartData: [550, 548, 545, 543, 540, 542, 544, 541, 543, 542],
    },
    {
      pair: "SOL/USDT",
      price: "$156.89",
      change: "+5.23%",
      volume: "89,123.45 SOL",
      isPositive: true,
      chartData: [145, 148, 150, 152, 155, 158, 156, 159, 157, 156],
    },
    {
      pair: "ADA/USDT",
      price: "$0.4523",
      change: "+3.12%",
      volume: "2,456,789 ADA",
      isPositive: true,
      chartData: [0.42, 0.43, 0.44, 0.45, 0.46, 0.45, 0.46, 0.45, 0.46, 0.4523],
    },
    {
      pair: "DOGE/USDT",
      price: "$0.0892",
      change: "-1.45%",
      volume: "12,345,678 DOGE",
      isPositive: false,
      chartData: [
        0.095, 0.093, 0.091, 0.089, 0.087, 0.089, 0.091, 0.09, 0.089, 0.0892,
      ],
    },
  ];

  const selectedPairData = tradingPairs.find(
    (pair) => pair.pair === selectedPair
  );

  const MiniChart = ({ data, isPositive, width = 50, height = 25 }) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;

    const points = data
      .map((value, index) => {
        const x = (index / (data.length - 1)) * width;
        const y = height - ((value - min) / range) * height;
        return `${x},${y}`;
      })
      .join(" ");

    return (
      <svg width={width} height={height} className="overflow-visible">
        <polyline
          fill="none"
          stroke={isPositive ? "#10b981" : "#ef4444"}
          strokeWidth="2"
          points={points}
        />
      </svg>
    );
  };

  const DetailedChart = ({ data, isPositive }) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;
    const width = 400;
    const height = 80;

    const points = data
      .map((value, index) => {
        const x = (index / (data.length - 1)) * width;
        const y = height - ((value - min) / range) * height;
        return `${x},${y}`;
      })
      .join(" ");

    return (
      <div className="bg-gray-800 rounded-lg p-1 mt-1">
        <h4 className="text-white font-medium mb-0.5">
          {selectedPair} Price Chart
        </h4>
        <svg
          width="100%"
          height="100"
          viewBox={`0 0 ${width} ${height + 20}`}
          className="overflow-visible"
        >
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="0"
              y1={i * (height / 4)}
              x2={width}
              y2={i * (height / 4)}
              stroke="#374151"
              strokeWidth="0.5"
              strokeDasharray="2,2"
            />
          ))}

          {/* Price line */}
          <polyline
            fill="none"
            stroke={isPositive ? "#10b981" : "#ef4444"}
            strokeWidth="3"
            points={points}
          />

          {/* Area fill */}
          <polygon
            fill={
              isPositive ? "rgba(16, 185, 129, 0.1)" : "rgba(239, 68, 68, 0.1)"
            }
            points={`0,${height} ${points} ${width},${height}`}
          />

          {/* Price labels */}
          {[0, 2, 4].map((i) => {
            const price = max - (i * range) / 4;
            return (
              <text
                key={i}
                x={width + 5}
                y={i * (height / 4) + 5}
                fill="#9ca3af"
                fontSize="9"
                textAnchor="start"
              >
                {typeof price === "number"
                  ? price > 1
                    ? price.toFixed(2)
                    : price.toFixed(4)
                  : ""}
              </text>
            );
          })}
        </svg>
      </div>
    );
  };

  return (
    <div className="p-1 ">
      <div className="bg-slate-800 rounded-lg p-1.5">
        {/* Header */}
        <div className="flex items-center justify-between mb-0.5">
          <h2 className="text-white text-sm font-semibold">
            Popular Active Pairs
          </h2>
          <button className="text-blue-400 hover:text-blue-300 text-xs font-medium transition-colors">
            View All
          </button>
        </div>

        {/* Trading Pairs Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-0.5 mb-0.5">
          {tradingPairs.map((pair) => (
            <div
              key={pair.pair}
              onClick={() => setSelectedPair(pair.pair)}
              className={`bg-gray-800 rounded-lg p-1 cursor-pointer transition-colors border-2 ${
                selectedPair === pair.pair
                  ? "border-blue-500"
                  : "border-transparent hover:border-gray-600"
              }`}
            >
              <div className="flex items-center justify-between mb-0.5">
                <h3 className="text-white font-semibold text-xs">
                  {pair.pair}
                </h3>
                <div className="flex items-center gap-0.5">
                  {pair.isPositive ? (
                    <TrendingUp className="w-2.5 h-2.5 text-green-400" />
                  ) : (
                    <TrendingDown className="w-2.5 h-2.5 text-red-400" />
                  )}
                  <span
                    className={`text-xs font-medium ${
                      pair.isPositive ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {pair.change}
                  </span>
                </div>
              </div>

              <div className="mb-0.5">
                <div className="text-gray-400 text-xs mb-0">Price</div>
                <div className="text-white font-bold text-sm">{pair.price}</div>
              </div>

              <div className="mb-0.5">
                <div className="text-gray-400 text-xs mb-0">24h Volume</div>
                <div className="text-gray-300 text-xs">{pair.volume}</div>
              </div>

              <div className="flex justify-center">
                <MiniChart
                  data={pair.chartData}
                  isPositive={pair.isPositive}
                  width={50}
                  height={25}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Chart for Selected Pair */}
        {selectedPairData && (
          <DetailedChart
            data={selectedPairData.chartData}
            isPositive={selectedPairData.isPositive}
          />
        )}

        {/* Market Summary */}
        <div className="grid grid-cols-4 gap-0.5 mt-1.5">
          <div className="bg-gray-800 rounded p-1 text-center">
            <div className="text-gray-400 text-xs mb-0">Total Volume</div>
            <div className="text-white font-semibold text-sm">$2.45B</div>
          </div>
          <div className="bg-gray-800 rounded p-1 text-center">
            <div className="text-gray-400 text-xs mb-0">Market Cap</div>
            <div className="text-white font-semibold text-sm">$1.67T</div>
          </div>
          <div className="bg-gray-800 rounded p-1 text-center">
            <div className="text-gray-400 text-xs mb-0">Active Pairs</div>
            <div className="text-white font-semibold text-sm">1,247</div>
          </div>
          <div className="bg-gray-800 rounded p-1 text-center">
            <div className="text-gray-400 text-xs mb-0">Gainers</div>
            <div className="text-green-400 font-semibold text-sm">847</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularActivePairs;
