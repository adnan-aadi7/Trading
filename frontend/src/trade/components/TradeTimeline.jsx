import React, { useState } from "react";
import {
  TrendingUp,
  ArrowUp,
  ArrowDown,
  Circle,
  Minus,
  LogIn,
  LogOut,
} from "lucide-react";
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

  // Live feed data (updated to match image style)
  const liveFeedData = [
    {
      id: 1,
      date: "May 12",
      time: "08:42:15 UTC",
      label: "Entry Position",
      description:
        "Entered long position at $27,456.21 with 10x leverage. Initial position size: $5,000.",
      icon: <LogIn className="w-4 h-4 text-white" />,
      bgColor: "bg-green-500",
    },
    {
      id: 2,
      date: "May 12",
      time: "14:23:12 UTC",
      label: "Position Increase",
      description:
        "Added $500 to position at $27,891.35. Position increase: +10%.<b>",
      icon: <ArrowUp className="w-4 h-4 text-white" />,
      bgColor: "bg-blue-500",
    },
    {
      id: 3,
      date: "May 13",
      time: "02:17:45 UTC",
      label: "Position Increase",
      description:
        "Added $500 to position at $28,102.67. Position increase: +10%.<b>",
      icon: <ArrowUp className="w-4 h-4 text-white" />,
      bgColor: "bg-blue-500",
    },
    {
      id: 4,
      date: "May 13",
      time: "19:42:32 UTC",
      label: "Partial Close",
      description:
        "Closed 25% of position at $29,156.78. Realized profit: $412.35.",
      icon: <Minus className="w-4 h-4 text-white" />,
      bgColor: "bg-yellow-500",
    },
    {
      id: 5,
      date: "May 14",
      time: "14:23:56 UTC",
      label: "Exit Position",
      description:
        "Closed remaining position at $29,873.45. Total profit: $2,418.24 (+8.81%).",
      icon: <LogOut className="w-4 h-4 text-white" />,
      bgColor: "bg-red-500",
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
          <h3 className="text-white text-lg font-medium">Live Feed</h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-green-500 text-xs">Live</span>
          </div>
        </div>
        <div className="space-y-4">
          {liveFeedData.map((event, index) => (
            <div
              key={event.id}
              className="flex items-start gap-3 hover:bg-slate-700 rounded-md px-2 py-1 transition-colors duration-200 cursor-pointer"
            >
              {/* Icon and Vertical Line */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${event.bgColor}`}
                >
                  {event.icon}
                </div>
                {index < liveFeedData.length - 1 && (
                  <div className="w-0.5 h-full bg-gray-700"></div>
                )}
              </div>
              {/* Event Details */}
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white text-sm font-semibold">
                    {event.label}
                  </span>
                  <span className="text-gray-400 text-xs">
                    {event.date}, {event.time}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-tight">
                  {event.description}
                </p>
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
