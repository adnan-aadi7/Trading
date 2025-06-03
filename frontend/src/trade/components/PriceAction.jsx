import React, { useState } from "react";
import { TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Dot,
} from "recharts";

const PriceActionChart = () => {
  const [activeTimeframe, setActiveTimeframe] = useState("4H");

  // Generate realistic price data with trade points
  const generatePriceData = () => {
    const basePrice = 27000;
    const data = [];
    let currentPrice = basePrice;

    for (let i = 0; i < 60; i++) {
      const trend = i < 20 ? 0.002 : i < 45 ? 0.001 : -0.001;
      const volatility = Math.random() * 0.02 - 0.01;

      currentPrice = currentPrice * (1 + trend + volatility);

      const hours = Math.floor(i / 4);
      const minutes = (i % 4) * 15;
      const timeLabel = `May 1${hours < 4 ? 2 : 3}, ${String(
        (hours % 4) * 6 + Math.floor(minutes / 30) * 2
      ).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;

      data.push({
        time: timeLabel,
        price: Math.round(currentPrice * 100) / 100,
        isEntryPoint: i === 8,
        isPositionIncrease: i === 20,
        isPartialClose: i === 35,
        isExitPoint: i === 48,
      });
    }

    return data;
  };

  const [chartData] = useState(generatePriceData());

  // Custom dot component for trade markers
  const CustomDot = (props) => {
    const { cx, cy, payload } = props;

    if (payload.isEntryPoint) {
      return (
        <Dot
          cx={cx}
          cy={cy}
          r={6}
          fill="#10b981"
          stroke="#fff"
          strokeWidth={2}
        />
      );
    }
    if (payload.isPositionIncrease) {
      return (
        <Dot
          cx={cx}
          cy={cy}
          r={6}
          fill="#3b82f6"
          stroke="#fff"
          strokeWidth={2}
        />
      );
    }
    if (payload.isPartialClose) {
      return (
        <Dot
          cx={cx}
          cy={cy}
          r={6}
          fill="#f59e0b"
          stroke="#fff"
          strokeWidth={2}
        />
      );
    }
    if (payload.isExitPoint) {
      return (
        <Dot
          cx={cx}
          cy={cy}
          r={6}
          fill="#ef4444"
          stroke="#fff"
          strokeWidth={2}
        />
      );
    }

    return null;
  };

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="border border-slate-600/50 rounded-lg p-3 shadow-lg">
          <p className="text-gray-300 text-sm">{label}</p>
          <p className="text-white font-semibold">
            ${payload[0].value.toLocaleString()}
          </p>
          {data.isEntryPoint && (
            <p className="text-green-400 text-xs">Entry Point</p>
          )}
          {data.isPositionIncrease && (
            <p className="text-blue-400 text-xs">Position Increase</p>
          )}
          {data.isPartialClose && (
            <p className="text-yellow-400 text-xs">Partial Close</p>
          )}
          {data.isExitPoint && (
            <p className="text-red-400 text-xs">Exit Point</p>
          )}
        </div>
      );
    }
    return null;
  };

  // Get reference line values
  const entryPoint = chartData.find((d) => d.isEntryPoint);
  const exitPoint = chartData.find((d) => d.isExitPoint);

  return (
    <div className=" bg-gray-800 rounded-lg p-3 sm:p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
        <h2 className="text-white text-lg sm:text-xl font-semibold">
          Price Action
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:space-x-4">
          {/* Timeframe buttons */}
          <div className="flex bg-slate-700 rounded-lg p-1 w-full sm:w-auto">
            {["1H", "4H", "1D"].map((timeframe) => (
              <button
                key={timeframe}
                onClick={() => setActiveTimeframe(timeframe)}
                className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium transition-colors flex-1 sm:flex-none ${
                  activeTimeframe === timeframe
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {timeframe}
              </button>
            ))}
          </div>

          {/* BTC Overlay button */}
          <button className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors text-xs sm:text-sm">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>BTC Overlay</span>
          </button>
        </div>
      </div>

      {/* Chart Container */}
      <div className="bg-gradient-to-br bg-gray-800 rounded-lg p-2 sm:p-4 mb-4 sm:mb-6">
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
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
                tick={{ fill: "#9ca3af", fontSize: 11 }}
                interval="preserveStartEnd"
                tickFormatter={(value) => {
                  const parts = value.split(", ");
                  return parts[1] || value;
                }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 11 }}
                tickFormatter={(value) =>
                  `$${Math.round(value).toLocaleString()}`
                }
                domain={["dataMin - 100", "dataMax + 100"]}
              />
              <Tooltip content={<CustomTooltip />} />

              {/* Reference lines */}
              {entryPoint && (
                <ReferenceLine
                  y={entryPoint.price}
                  stroke="#10b981"
                  strokeDasharray="4 4"
                  strokeOpacity={0.6}
                />
              )}
              {exitPoint && (
                <ReferenceLine
                  y={exitPoint.price}
                  stroke="#ef4444"
                  strokeDasharray="4 4"
                  strokeOpacity={0.6}
                />
              )}

              <Line
                type="monotone"
                dataKey="price"
                stroke="#ffffff"
                strokeWidth={2}
                dot={<CustomDot />}
                activeDot={{ r: 6, stroke: "#fff", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
          <span className="text-gray-300 text-xs sm:text-sm">Entry Point</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-500"></div>
          <span className="text-gray-300 text-xs sm:text-sm">
            Position Increase
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
          <span className="text-gray-300 text-xs sm:text-sm">
            Partial Close
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
          <span className="text-gray-300 text-xs sm:text-sm">Exit Point</span>
        </div>
      </div>
    </div>
  );
};

export default PriceActionChart;
