import React, { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

const TradeActivityChart = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("24H");

  // Data points matching the curve in the image
  const tradeData = [
    { value: 6500, time: "00:00" },
    { value: 6000, time: "02:00" },
    { value: 8000, time: "04:00" },
    { value: 8000, time: "06:00" },
    { value: 5000, time: "08:00" },
    { value: 5500, time: "10:00" },
    { value: 7000, time: "12:00" },
    { value: 10000, time: "14:00" },
    { value: 8000, time: "16:00" },
    { value: 11000, time: "18:00" },
    { value: 11000, time: "20:00" },
    { value: 10500, time: "22:00" },
  ];

  const formatYAxisLabel = (value) => {
    return `${(value / 1000).toFixed(0)},000`;
  };

  const CustomDot = (props) => {
    const { cx, cy } = props;
    return (
      <circle
        cx={cx}
        cy={cy}
        r="3"
        fill="#3b82f6"
        stroke="#1e293b"
        strokeWidth="1"
      />
    );
  };

  return (
    <div className="w-full bg-slate-800 text-white mt-4 sm:mt-6">
      <div className="px-2 sm:px-4 py-2 sm:py-3">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-3 sm:mb-4">
          <h2 className="text-white text-sm sm:text-base font-medium">
            Trade Activity (24h)
          </h2>
          <div className="flex gap-1">
            {["1H", "24H", "7D"].map((timeframe) => (
              <button
                key={timeframe}
                onClick={() => setSelectedTimeframe(timeframe)}
                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                  selectedTimeframe === timeframe
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {timeframe}
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="w-full h-48 sm:h-64 md:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={tradeData}
              margin={{
                top: 10,
                right: 10,
                left: 30,
                bottom: 10,
              }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#1e40af" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 8 }}
                interval={1}
                minTickGap={20}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 8 }}
                tickFormatter={formatYAxisLabel}
                domain={[0, 12000]}
                ticks={[0, 4000, 8000, 12000]}
                width={35}
                grid={{
                  stroke: "#374151",
                  strokeWidth: 0.5,
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={2}
                fill="url(#colorValue)"
                dot={<CustomDot />}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TradeActivityChart;
