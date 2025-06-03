import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Area,
  AreaChart,
} from "recharts";

const TradeActivityChart = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("24H");

  const data = [
    {
      time: "00:00",
      value: 6500,
      trades: 12,
      volume: "$45,200",
      topPair: "BTC/USDT",
    },
    {
      time: "02:00",
      value: 6000,
      trades: 8,
      volume: "$32,100",
      topPair: "ETH/USDT",
    },
    {
      time: "04:00",
      value: 8000,
      trades: 15,
      volume: "$58,700",
      topPair: "BTC/USDT",
    },
    {
      time: "06:00",
      value: 8200,
      trades: 18,
      volume: "$62,400",
      topPair: "SOL/USDT",
    },
    {
      time: "08:00",
      value: 5500,
      trades: 7,
      volume: "$28,900",
      topPair: "LINK/USDT",
    },
    {
      time: "10:00",
      value: 5600,
      trades: 9,
      volume: "$31,500",
      topPair: "ADA/USDT",
    },
    {
      time: "12:00",
      value: 7000,
      trades: 14,
      volume: "$48,300",
      topPair: "BTC/USDT",
    },
    {
      time: "14:00",
      value: 9600,
      trades: 22,
      volume: "$71,800",
      topPair: "ETH/USDT",
    },
    {
      time: "16:00",
      value: 7700,
      trades: 16,
      volume: "$52,900",
      topPair: "BTC/USDT",
    },
    {
      time: "18:00",
      value: 9500,
      trades: 21,
      volume: "$68,400",
      topPair: "ETH/USDT",
    },
    {
      time: "20:00",
      value: 11200,
      trades: 28,
      volume: "$89,600",
      topPair: "BTC/USDT",
    },
    {
      time: "22:00",
      value: 10500,
      trades: 25,
      volume: "$78,300",
      topPair: "BTC/USDT",
    },
  ];

  const timeframes = [
    { label: "1H", value: "1H" },
    { label: "24H", value: "24H" },
    { label: "7D", value: "7D" },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="  border border-gray-600/50 rounded-lg p-4 shadow-xl">
          <div className="text-blue-400 font-semibold mb-2">{label}</div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">Trade Value:</span>
              <span className="text-white font-semibold">
                ${data.value.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">Total Trades:</span>
              <span className="text-blue-400 font-medium">{data.trades}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">Volume:</span>
              <span className="text-green-400 font-medium">{data.volume}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">Top Pair:</span>
              <span className="text-yellow-400 font-medium">
                {data.topPair}
              </span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const CustomDot = (props) => {
    const { cx, cy, stroke } = props;
    return (
      <circle
        cx={cx}
        cy={cy}
        r={4}
        fill={stroke}
        stroke={stroke}
        strokeWidth={2}
        className="hover:r-6 transition-all duration-200"
      />
    );
  };

  const formatYAxis = (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}K`;
    }
    return value.toString();
  };

  return (
    <div className="bg-gray-800 text-white p-3 sm:p-4 md:p-6 rounded-lg mt-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          Recent Trade Activity
        </h2>
        <div className="flex bg-gray-800 rounded-lg p-1 w-full sm:w-auto">
          {timeframes.map((timeframe) => (
            <button
              key={timeframe.value}
              onClick={() => setSelectedTimeframe(timeframe.value)}
              className={`flex-1 sm:flex-none px-2 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedTimeframe === timeframe.value
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
            >
              {timeframe.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-60 sm:h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
          >
            <defs>
              <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.3} />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity={0.1} />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#374151"
              horizontal={true}
              vertical={false}
            />
            <XAxis
              dataKey="time"
              stroke="#9CA3AF"
              fontSize={10}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF" }}
              interval="preserveStartEnd"
              minTickGap={20}
            />
            <YAxis
              stroke="#9CA3AF"
              fontSize={10}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF" }}
              tickFormatter={formatYAxis}
              domain={["dataMin - 500", "dataMax + 500"]}
              width={35}
            />
            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#3B82F6"
              strokeWidth={2}
              fill="url(#blueGradient)"
              dot={<CustomDot />}
              activeDot={{
                r: 4,
                fill: "#3B82F6",
                stroke: "#1E40AF",
                strokeWidth: 2,
                style: {
                  filter: "drop-shadow(0 0 6px rgba(59, 130, 246, 0.6))",
                },
              }}
              style={{
                filter: "drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3))",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Activity Summary */}
      <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
        <div className="bg-gray-800 p-2 sm:p-3 rounded-lg">
          <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">
            Peak Activity
          </div>
          <div className="text-white text-base sm:text-lg font-bold">20:00</div>
          <div className="text-blue-400 text-xs sm:text-sm">$11.2K</div>
        </div>
        <div className="bg-gray-800 p-2 sm:p-3 rounded-lg">
          <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">
            Total Trades
          </div>
          <div className="text-white text-base sm:text-lg font-bold">195</div>
          <div className="text-green-400 text-xs sm:text-sm">+12% vs avg</div>
        </div>
        <div className="bg-gray-800 p-2 sm:p-3 rounded-lg">
          <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">
            Avg Trade Size
          </div>
          <div className="text-white text-base sm:text-lg font-bold">$392</div>
          <div className="text-yellow-400 text-xs sm:text-sm">-3% vs avg</div>
        </div>
        <div className="bg-gray-800 p-2 sm:p-3 rounded-lg">
          <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">
            Success Rate
          </div>
          <div className="text-white text-base sm:text-lg font-bold">73%</div>
          <div className="text-green-400 text-xs sm:text-sm">+5% vs avg</div>
        </div>
      </div>
    </div>
  );
};

export default TradeActivityChart;
