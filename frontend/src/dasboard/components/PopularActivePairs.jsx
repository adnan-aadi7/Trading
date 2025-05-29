import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const PopularActivePairs = () => {
  const data = [
    {
      pair: "BTC/USDT",
      value: 18000,
      color: "#ef4444",
      long: 12000,
      short: 6000,
    },
    {
      pair: "ETH/USDT",
      value: 14000,
      color: "#3b82f6",
      long: 8500,
      short: 5500,
    },
    {
      pair: "SOL/USDT",
      value: 10000,
      color: "#f97316",
      long: 6500,
      short: 3500,
    },
    {
      pair: "BNB/USDT",
      value: 7500,
      color: "#22c55e",
      long: 4800,
      short: 2700,
    },
    {
      pair: "XRP/USDT",
      value: 6000,
      color: "#a855f7",
      long: 3800,
      short: 2200,
    },
    {
      pair: "ADA/USDT",
      value: 5500,
      color: "#ec4899",
      long: 3200,
      short: 2300,
    },
    {
      pair: "DOGE/USDT",
      value: 5000,
      color: "#eab308",
      long: 2800,
      short: 2200,
    },
    {
      pair: "AVAX/USDT",
      value: 4000,
      color: "#6b7280",
      long: 2200,
      short: 1800,
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-gray-800 border border-gray-600 rounded-lg p-3 shadow-xl">
          <div className="text-blue-400 font-semibold mb-2">{label}</div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">Total Volume:</span>
              <span className="text-white font-semibold">
                ${data.value.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-green-400 text-sm">Long:</span>
              <span className="text-green-400 font-medium">
                ${data.long.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-red-400 text-sm">Short:</span>
              <span className="text-red-400 font-medium">
                ${data.short.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const formatYAxisLabel = (value) => {
    return `${value / 1000}k`;
  };

  return (
    <div className="bg-gray-800 text-white p-3 sm:p-4 md:p-6 rounded-lg w-full  bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-medium text-white">
          Popular Active Pairs
        </h2>
        <span className="text-xs sm:text-sm text-gray-400">
          Long/Short Ratio
        </span>
      </div>

      {/* Chart */}
      <div className="w-full h-48 sm:h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 20,
              bottom: 30,
            }}
            barCategoryGap="20%"
          >
            <XAxis
              dataKey="pair"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 10 }}
              interval={0}
              angle={-45}
              textAnchor="end"
              height={60}
              minTickGap={20}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 10 }}
              tickFormatter={formatYAxisLabel}
              domain={[0, 20000]}
              ticks={[0, 5000, 10000, 15000, 20000]}
              width={35}
              grid={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="value"
              shape={(props) => {
                const dataPoint = data.find(
                  (d) => d.value === props.payload.value
                );
                return (
                  <rect
                    {...props}
                    fill={dataPoint?.color || "#3b82f6"}
                    rx={0}
                    ry={0}
                    className="transition-all duration-200 hover:opacity-80"
                  />
                );
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PopularActivePairs;
