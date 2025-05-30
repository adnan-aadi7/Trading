import React, { useState } from "react";
import { TrendingUp, ArrowUp, ArrowDown, Circle, Minus } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const TradeTimeline = () => {
  const [activeTimeframe, setActiveTimeframe] = useState("1D");
  // Trade events data for bar chart
  const tradeData = [
    {
      time: "May 12, 08:42",
      value: 5000,
      type: "entry",
      color: "#10b981",
      label: "Entry Position",
    },
    {
      time: "May 12, 14:23",
      value: 5500,
      type: "increase",
      color: "#3b82f6",
      label: "Position Increase",
    },
    {
      time: "May 13, 02:17",
      value: 6000,
      type: "increase",
      color: "#3b82f6",
      label: "Position Increase",
    },
    {
      time: "May 13, 19:42",
      value: 4500,
      type: "partial",
      color: "#f59e0b",
      label: "Partial Close",
    },
    {
      time: "May 14, 14:23",
      value: 0,
      type: "exit",
      color: "#ef4444",
      label: "Exit Position",
    },
  ];

  // Live feed data
  const liveFeedData = [
    {
      id: 1,
      time: "14:23:45",
      type: "open",
      pair: "BTC/USDT",
      price: "65,432.10",
      amount: "0.5 BTC",
      value: "$32,716.05",
      color: "text-green-500",
      icon: <Circle className="w-2 h-2 fill-green-500" />,
    },
    {
      id: 2,
      time: "14:45:12",
      type: "increase",
      pair: "BTC/USDT",
      price: "65,789.45",
      amount: "+0.3 BTC",
      value: "+$19,736.84",
      color: "text-blue-500",
      icon: <ArrowUp className="w-3 h-3" />,
    },
    {
      id: 3,
      time: "15:12:33",
      type: "decrease",
      pair: "BTC/USDT",
      price: "65,123.78",
      amount: "-0.2 BTC",
      value: "-$13,024.76",
      color: "text-yellow-500",
      icon: <ArrowDown className="w-3 h-3" />,
    },
    {
      id: 4,
      time: "15:45:21",
      type: "closed",
      pair: "BTC/USDT",
      price: "66,123.45",
      amount: "0.6 BTC",
      value: "$39,674.07",
      color: "text-red-500",
      icon: <Minus className="w-3 h-3" />,
    },
  ];

  // Custom tooltip for bar chart
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-700 border border-slate-600 rounded-lg p-3 shadow-lg">
          <p className="text-gray-300 text-sm">{label}</p>
          <p className="text-white font-semibold">
            ${payload[0].value.toLocaleString()}
          </p>
          <p className="text-gray-300 text-xs">{data.label}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className=" bg-gray-800 rounded-lg p-3 sm:p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
        <h2 className="text-white text-lg sm:text-xl font-semibold">
          Trade Timeline
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
      <div className="bg-slate-800 rounded-lg p-2 sm:p-4 mb-4 sm:mb-6">
        <div className="h-60 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={tradeData}
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
                interval={0}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 11 }}
                tickFormatter={(value) => `${value.toLocaleString()}`}
                domain={[0, "dataMax + 1000"]}
              />
              <Tooltip content={<CustomTooltip />} />

              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {tradeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Live Feed Section */}
      <div className="bg-slate-800 rounded-lg p-3 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white text-sm font-medium">Live Feed</h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-green-500 text-xs">Live</span>
          </div>
        </div>
        <div className="space-y-3">
          {liveFeedData.map((event) => (
            <div key={event.id} className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <div className={`${event.color}`}>{event.icon}</div>
                <div className="w-0.5 h-full bg-gray-700"></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-xs">{event.time}</span>
                    <span className={`text-xs font-medium ${event.color}`}>
                      {event.type.toUpperCase()}
                    </span>
                  </div>
                  <span className="text-gray-300 text-xs">{event.pair}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-white text-sm">${event.price}</span>
                    <span className="text-gray-400 text-xs">
                      {event.amount}
                    </span>
                  </div>
                  <span className={`text-sm font-medium ${event.color}`}>
                    {event.value}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Legend */}
      {/* <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
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
      </div> */}
    </div>
  );
};

export default TradeTimeline;
