import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

function TimeBasePerformance() {
  // Sample upward trending data for mini charts
  const upwardTrendData = [
    { value: 10 },
    { value: 12 },
    { value: 8 },
    { value: 15 },
    { value: 18 },
    { value: 14 },
    { value: 22 },
    { value: 25 },
    { value: 20 },
    { value: 28 },
    { value: 32 },
    { value: 35 },
  ];

  const performanceCards = [
    {
      title: "All-Time PNL",
      value: "+247.83%",
      subtitle: "",
      isPositive: true,
      showChart: true,
    },
    {
      title: "Monthly PNL",
      value: "+24.5%",
      subtitle: "",
      isPositive: true,
      showChart: true,
    },
    {
      title: "Weekly PNL",
      value: "+8.7%",
      subtitle: "",
      isPositive: true,
      showChart: true,
    },
    {
      title: "Daily PNL",
      value: "+1.2%",
      subtitle: "",
      isPositive: true,
      showChart: true,
    },
    {
      title: "Best Month",
      value: "+42.8%",
      subtitle: "March 2023",
      isPositive: true,
      showChart: false,
    },
    {
      title: "Worst Month",
      value: "-12.3%",
      subtitle: "November 2022",
      isPositive: false,
      showChart: false,
    },
    {
      title: "Monthly Average",
      value: "+18.2%",
      subtitle: "Last 12 months",
      isPositive: true,
      showChart: false,
    },
  ];

  const MiniChart = () => (
    <div className="h-12 sm:h-16 w-full mt-1 sm:mt-2">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={upwardTrendData}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#10B981"
            strokeWidth={1.5}
            dot={false}
            strokeLinecap="round"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  return (
    <div className=" p-4 sm:p-6 w-full px-4 sm:px-14 mt-6 sm:mt-10">
      {/* Header */}
      <h2 className="text-white text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
        Time-Based Performance
      </h2>

      {/* Performance Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-3 sm:gap-4">
        {performanceCards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-800 p-3 sm:p-4 rounded-lg border border-gray-700 hover:scale-105 transition-transform duration-300"
          >
            {/* Card Header */}
            <h3 className="text-gray-400 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
              {card.title}
            </h3>

            {/* Main Value */}
            <div
              className={`text-xl sm:text-2xl font-bold mb-0.5 sm:mb-1 ${
                card.isPositive ? "text-green-400" : "text-red-400"
              }`}
            >
              {card.value}
            </div>

            {/* Subtitle */}
            {card.subtitle && (
              <div className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">
                {card.subtitle}
              </div>
            )}

            {/* Mini Chart */}
            {card.showChart && <MiniChart />}
          </div>
        ))}
      </div>
    </div>
  );
}
export default TimeBasePerformance;
