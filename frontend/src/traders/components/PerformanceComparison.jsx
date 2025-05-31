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

function PerformanceComparison() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("24H");

  const timeframes = ["1H", "4H", "24H", "1W", "1M"];

  // Data for Individual PNL vs Global Avg (left chart)
  const individualPNLData = [
    { time: "00:00", traderPNL: 0, globalAvgPNL: 0, btcFluctuation: 0 },
    { time: "04:00", traderPNL: 1.5, globalAvgPNL: 0.5, btcFluctuation: 0.8 },
    { time: "08:00", traderPNL: 2.5, globalAvgPNL: 1.2, btcFluctuation: 1.5 },
    { time: "12:00", traderPNL: 1.8, globalAvgPNL: 0.8, btcFluctuation: 1.3 },
    { time: "16:00", traderPNL: 3.2, globalAvgPNL: 1.3, btcFluctuation: 2.0 },
    { time: "20:00", traderPNL: 2.7, globalAvgPNL: 1.2, btcFluctuation: 1.8 },
    { time: "00:00", traderPNL: 4.0, globalAvgPNL: 1.8, btcFluctuation: 2.5 },
  ];

  // Data for Config PNL vs Global Avg (right chart)
  const configPNLData = [
    {
      time: "00:00",
      traderConfigPNL: 0,
      globalConfigPNL: 0,
      btcFluctuation: 0,
    },
    {
      time: "04:00",
      traderConfigPNL: 25,
      globalConfigPNL: 15,
      btcFluctuation: 18,
    },
    {
      time: "08:00",
      traderConfigPNL: 60,
      globalConfigPNL: 30,
      btcFluctuation: 40,
    },
    {
      time: "12:00",
      traderConfigPNL: 45,
      globalConfigPNL: 25,
      btcFluctuation: 35,
    },
    {
      time: "16:00",
      traderConfigPNL: 80,
      globalConfigPNL: 35,
      btcFluctuation: 50,
    },
    {
      time: "20:00",
      traderConfigPNL: 65,
      globalConfigPNL: 30,
      btcFluctuation: 45,
    },
    {
      time: "00:00",
      traderConfigPNL: 100,
      globalConfigPNL: 50,
      btcFluctuation: 68,
    },
  ];

  // Custom Tooltip component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 shadow-lg text-sm text-white">
          <p className="font-semibold mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={`tooltip-${index}`} className="flex items-center gap-2">
              <span style={{ color: entry.stroke }}>●</span>
              {entry.dataKey === "traderPNL" && "Trader PNL:"}
              {entry.dataKey === "globalAvgPNL" && "Global Avg PNL:"}
              {entry.dataKey === "traderConfigPNL" && "Trader Config PNL:"}
              {entry.dataKey === "globalConfigPNL" && "Global Config PNL:"}
              {entry.dataKey === "btcFluctuation" && "BTC Fluctuation:"}
              {entry.dataKey === "traderPNL" ||
              entry.dataKey === "globalAvgPNL" ||
              entry.dataKey === "btcFluctuation"
                ? `${entry.value}%`
                : `$${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className=" bg-gray-800 p-4 sm:p-6 rounded-lg w-full max-w-[1410px] mx-auto overflow-x-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6 sm:mb-8">
        <h2 className="text-white text-xl sm:text-2xl font-semibold">
          Performance Comparison
        </h2>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          {timeframes.map((timeframe) => (
            <button
              key={timeframe}
              onClick={() => setSelectedTimeframe(timeframe)}
              className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
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

      {/* Charts Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
        {/* Left Chart - Individual PNL vs Global Avg */}
        <div className="min-w-[300px]">
          <h3 className="text-white text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
            Individual PNL vs Global Avg
          </h3>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 sm:w-4 h-1 bg-green-500 rounded"></div>
              <span className="text-gray-300 text-xs sm:text-sm">
                Trader PNL
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 sm:w-4 h-1 border-2 border-dashed border-blue-500 rounded"></div>
              <span className="text-gray-300 text-xs sm:text-sm">
                Global Avg PNL
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 sm:w-4 h-1 border-2 border-dotted border-yellow-500 rounded"></div>
              <span className="text-gray-300 text-xs sm:text-sm">
                BTC Fluctuation
              </span>
            </div>
          </div>

          {/* Chart */}
          <div className="h-60 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={individualPNLData}
                margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#374151"
                  opacity={0.3}
                />
                <XAxis
                  dataKey="time"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9CA3AF", fontSize: 10 }}
                  interval="preserveStartEnd"
                  minTickGap={20}
                />
                <YAxis
                  domain={[0, 4.5]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9CA3AF", fontSize: 10 }}
                  tickFormatter={(value) => `${value}%`}
                  width={35}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="traderPNL"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={{ fill: "#10B981", strokeWidth: 0, r: 3 }}
                />
                <Line
                  type="monotone"
                  dataKey="globalAvgPNL"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  strokeDasharray="8 4"
                  dot={{ fill: "#3B82F6", strokeWidth: 0, r: 3 }}
                />
                <Line
                  type="monotone"
                  dataKey="btcFluctuation"
                  stroke="#EAB308"
                  strokeWidth={2}
                  strokeDasharray="2 2"
                  dot={{ fill: "#EAB308", strokeWidth: 0, r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Chart - Config PNL vs Global Avg */}
        <div className="min-w-[300px]">
          <h3 className="text-white text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
            Config PNL vs Global Avg
          </h3>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 sm:w-4 h-1 bg-green-500 rounded"></div>
              <span className="text-gray-300 text-xs sm:text-sm">
                Trader Config PNL
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 sm:w-4 h-1 border-2 border-dashed border-blue-500 rounded"></div>
              <span className="text-gray-300 text-xs sm:text-sm">
                Global Config PNL
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 sm:w-4 h-1 border-2 border-dotted border-yellow-500 rounded"></div>
              <span className="text-gray-300 text-xs sm:text-sm">
                BTC Fluctuation
              </span>
            </div>
          </div>

          {/* Chart */}
          <div className="h-60 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={configPNLData}
                margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#374151"
                  opacity={0.3}
                />
                <XAxis
                  dataKey="time"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9CA3AF", fontSize: 10 }}
                  interval="preserveStartEnd"
                  minTickGap={20}
                />
                <YAxis
                  domain={[0, 100]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9CA3AF", fontSize: 10 }}
                  tickFormatter={(value) => `$${value}`}
                  width={35}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="traderConfigPNL"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={{ fill: "#10B981", strokeWidth: 0, r: 3 }}
                />
                <Line
                  type="monotone"
                  dataKey="globalConfigPNL"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  strokeDasharray="8 4"
                  dot={{ fill: "#3B82F6", strokeWidth: 0, r: 3 }}
                />
                <Line
                  type="monotone"
                  dataKey="btcFluctuation"
                  stroke="#EAB308"
                  strokeWidth={2}
                  strokeDasharray="2 2"
                  dot={{ fill: "#EAB308", strokeWidth: 0, r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PerformanceComparison;
