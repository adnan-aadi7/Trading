import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { ChevronDown } from "lucide-react";

const WalletComparisonChart = () => {
  const [compareWith, setCompareWith] = useState("Top 10 Traders Avg");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const data = [
    { month: "Jan", cryptoWhale: 10000, top10Avg: 10000, btcPrice: 10000 },
    { month: "Feb", cryptoWhale: 12500, top10Avg: 11500, btcPrice: 11200 },
    { month: "Mar", cryptoWhale: 15000, top10Avg: 13000, btcPrice: 12800 },
    { month: "Apr", cryptoWhale: 14200, top10Avg: 14800, btcPrice: 13500 },
    { month: "May", cryptoWhale: 17800, top10Avg: 15200, btcPrice: 14200 },
    { month: "Jun", cryptoWhale: 20500, top10Avg: 17500, btcPrice: 15800 },
    { month: "Jul", cryptoWhale: 24800, top10Avg: 19200, btcPrice: 17200 },
    { month: "Aug", cryptoWhale: 27200, top10Avg: 20800, btcPrice: 19500 },
    { month: "Sep", cryptoWhale: 25800, top10Avg: 19500, btcPrice: 18800 },
    { month: "Oct", cryptoWhale: 31200, top10Avg: 23200, btcPrice: 20200 },
    { month: "Nov", cryptoWhale: 33800, top10Avg: 25800, btcPrice: 21800 },
    { month: "Dec", cryptoWhale: 35200, top10Avg: 26500, btcPrice: 22500 },
  ];

  const compareOptions = [
    "Top 10 Traders Avg",
    "Market Average",
    "S&P 500",
    "Gold Performance",
  ];

  const formatYAxis = (value) => {
    return `$${(value / 1000).toFixed(0)}k`;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="border border-gray-600/50 rounded-lg p-2 sm:p-3 shadow-lg text-gray-300">
          <p className="text-white text-xs sm:text-sm mb-1 sm:mb-2 font-semibold">
            {label}
          </p>
          {payload.map((entry, index) => (
            <p
              key={index}
              className="text-xs sm:text-sm"
              style={{ color: entry.color }}
            >
              {entry.name}: ${entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gray-800 text-white p-4 sm:p-6 rounded-lg w-full max-w-[1410px] mx-auto mt-6 sm:mt-10 overflow-x-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">
          Custom Wallet Comparison
        </h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <span className="text-gray-400 text-sm">Compare with:</span>
          <div className="relative w-full sm:w-auto">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full sm:w-auto bg-gray-800 text-white px-3 sm:px-4 py-2 rounded-md flex items-center justify-between sm:justify-start gap-2 hover:bg-gray-700 transition-colors border border-gray-700 text-sm"
            >
              <span className="truncate">{compareWith}</span>
              <ChevronDown className="w-4 h-4 flex-shrink-0" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full mt-1 right-0 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-10 w-full sm:min-w-[200px]">
                {compareOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setCompareWith(option);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 sm:px-4 py-2 hover:bg-gray-700 text-white text-sm truncate"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 sm:gap-6 mb-4 sm:mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 sm:w-4 h-1 bg-emerald-500 rounded"></div>
          <span className="text-xs sm:text-sm text-gray-300">
            CryptoWhale7843
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 sm:w-4 h-1 border-2 border-dashed border-blue-400 rounded"></div>
          <span className="text-xs sm:text-sm text-gray-300">
            Top 10 Traders Avg
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 sm:w-4 h-1 border-2 border-dotted border-yellow-500 rounded"></div>
          <span className="text-xs sm:text-sm text-gray-300">
            BTC Price (scaled)
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="h-56 sm:h-72 md:h-80 w-full min-w-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey="month"
              stroke="#9CA3AF"
              fontSize={10}
              axisLine={false}
              tickLine={false}
              interval="preserveStartEnd"
              minTickGap={20}
            />
            <YAxis
              stroke="#9CA3AF"
              fontSize={10}
              axisLine={false}
              tickLine={false}
              tickFormatter={formatYAxis}
              domain={["dataMin - 1000", "dataMax + 1000"]}
              width={35}
            />
            <Tooltip content={<CustomTooltip />} isAnimationActive={false} />

            {/* CryptoWhale7843 - Solid green line */}
            <Line
              type="monotone"
              dataKey="cryptoWhale"
              stroke="#10B981"
              strokeWidth={2}
              dot={{ fill: "#10B981", strokeWidth: 0, r: 3 }}
              name="CryptoWhale7843"
            />

            {/* Top 10 Traders Avg - Dashed blue line */}
            <Line
              type="monotone"
              dataKey="top10Avg"
              stroke="#60A5FA"
              strokeWidth={2}
              strokeDasharray="8 4"
              dot={{ fill: "#60A5FA", strokeWidth: 0, r: 3 }}
              name="Top 10 Traders Avg"
            />

            {/* BTC Price - Dotted yellow line */}
            <Line
              type="monotone"
              dataKey="btcPrice"
              stroke="#F59E0B"
              strokeWidth={2}
              strokeDasharray="2 3"
              dot={{ fill: "#F59E0B", strokeWidth: 0, r: 3 }}
              name="BTC Price (scaled)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Performance Summary */}
      <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
          <div className="text-emerald-500 text-xs sm:text-sm font-medium">
            CryptoWhale7843
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white">
            $35,200
          </div>
          <div className="text-emerald-400 text-xs sm:text-sm">+252%</div>
        </div>
        <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
          <div className="text-blue-400 text-xs sm:text-sm font-medium">
            Top 10 Traders Avg
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white">
            $26,500
          </div>
          <div className="text-blue-400 text-xs sm:text-sm">+165%</div>
        </div>
        <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
          <div className="text-yellow-500 text-xs sm:text-sm font-medium">
            BTC Price
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white">
            $22,500
          </div>
          <div className="text-yellow-400 text-xs sm:text-sm">+125%</div>
        </div>
      </div>
    </div>
  );
};

export default WalletComparisonChart;
