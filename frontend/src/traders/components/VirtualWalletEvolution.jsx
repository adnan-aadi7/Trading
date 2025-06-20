import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function VirtualWalletEvolution() {
  const [viewMode, setViewMode] = useState("% Change");

  const data = [
    { date: "May 1", walletValue: 0, btcValue: 0 },
    { date: "May 5", walletValue: 8, btcValue: 5 },
    { date: "May 10", walletValue: 15, btcValue: 10 },
    { date: "May 15", walletValue: 12, btcValue: 8 },
    { date: "May 20", walletValue: 20, btcValue: 12 },
    { date: "May 25", walletValue: 25, btcValue: 15 },
    { date: "Jun 1", walletValue: 32, btcValue: 18 },
    { date: "Jun 5", walletValue: 38, btcValue: 22 },
    { date: "Jun 10", walletValue: 35, btcValue: 20 },
    { date: "Jun 15", walletValue: 42, btcValue: 25 },
  ];

  // Custom Tooltip component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 border border-gray-700/50 rounded-lg p-2 sm:p-3 shadow-lg">
          <p className="text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">
            {label}
          </p>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-2 sm:w-3 h-1 bg-blue-500 rounded"></div>
              <span className="text-white text-xs sm:text-sm">
                Wallet: {payload[0].value}%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 sm:w-3 h-1 border border-dashed border-yellow-500 rounded"></div>
              <span className="text-white text-xs sm:text-sm">
                BTC: {payload[1].value}%
              </span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className=" sm:px-4 md:px-2 lg:px-10  sm:py-3 md:py-4 w-full max-w-full mx-auto overflow-x-auto mt-2">
      <div className="py-3 bg-gray-800 rounded-2xl px-4  mx-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-2 mb-2 sm:mb-4">
          <h2 className="text-white text-base sm:text-lg md:text-xl font-semibold">
            Virtual Wallet Evolution
          </h2>
          <div className="flex gap-1 sm:gap-2 w-full sm:w-auto">
            <button
              onClick={() => setViewMode("Absolute Value")}
              className={`flex-1 sm:flex-none px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                viewMode === "Absolute Value"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              Absolute Value
            </button>
            <button
              onClick={() => setViewMode("% Change")}
              className={`flex-1 sm:flex-none px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                viewMode === "% Change"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              % Change
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
          <div className="flex items-center gap-1 sm:gap-1.5">
            <div className="w-2 sm:w-3 h-1 bg-blue-500 rounded"></div>
            <span className="text-gray-300 text-xs sm:text-sm">
              Wallet Value %
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5">
            <div className="w-2 sm:w-3 h-1 border-2 border-dashed border-yellow-500 rounded"></div>
            <span className="text-gray-300 text-xs sm:text-sm">BTC/USD %</span>
          </div>
        </div>

        {/* Chart */}
        <div className="h-40 sm:h-48 md:h-60 lg:h-72 min-w-[280px] sm:min-w-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 5,
                bottom: 5,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#374151"
                opacity={0.3}
              />
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 10 }}
                interval="preserveStartEnd"
                minTickGap={20}
                height={30}
              />
              <YAxis
                domain={[0, 45]}
                ticks={[0, 5, 10, 15, 20, 25, 30, 35, 40, 45]}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 10 }}
                tickFormatter={(value) => `${value}%`}
                width={30}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="walletValue"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={{ fill: "#3B82F6", strokeWidth: 0, r: 2 }}
                activeDot={{ r: 4, fill: "#3B82F6" }}
              />
              <Line
                type="monotone"
                dataKey="btcValue"
                stroke="#EAB308"
                strokeWidth={2}
                strokeDasharray="8 4"
                dot={{ fill: "#EAB308", strokeWidth: 0, r: 2 }}
                activeDot={{ r: 4, fill: "#EAB308" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
