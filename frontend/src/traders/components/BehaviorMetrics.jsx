import React from "react";

function BehaviorMetrics() {
  const metricsData = [
    {
      title: "Average Trade Duration",
      mainValue: "14.6 hours",
      subtitle: "Swing trader",
      valueColor: "text-white",
    },
    {
      title: "Average Ongoing Trades",
      mainValue: "3.2",
      subtitle: "Moderate diversification",
      valueColor: "text-white",
    },
    {
      title: "Max Ongoing Trades",
      mainValue: "8",
      subtitle: "During market volatility",
      valueColor: "text-white",
    },
    {
      title: "Avg PNL per Trade",
      mainValue: "+2.34%",
      subtitle: "Consistent performer",
      valueColor: "text-green-400",
    },
    {
      title: "Avg & Max Drawdown",
      mainValue: "-3.7% / -18.2%",
      subtitle: "Well-managed risk",
      valueColor: "text-red-400",
    },
    {
      title: "Avg & Max Drawup",
      mainValue: "+5.2% / +27.8%",
      subtitle: "Lets winners run",
      valueColor: "text-green-400",
    },
    {
      title: "Trades with Position Increase",
      mainValue: "32.7%",
      subtitle: "408 trades",
      valueColor: "text-white",
    },
    {
      title: "Trades with Partial Close",
      mainValue: "67.3%",
      subtitle: "839 trades",
      valueColor: "text-white",
    },
    {
      title: "Avg Position Increase %",
      mainValue: "+43.2%",
      subtitle: "Calculated from base",
      valueColor: "text-green-400",
    },
    {
      title: "Avg Partial Close %",
      mainValue: "38.7%",
      subtitle: "Of total position",
      valueColor: "text-white",
    },
  ];

  return (
    <div className=" p-4 sm:p-6 w-full px-4 sm:px-14">
      {/* Header */}
      <h2 className="text-white text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
        Behavior Metrics
      </h2>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4">
        {metricsData.map((metric, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700 hover:scale-105 transition-transform duration-300"
          >
            {/* Metric Title */}
            <h3 className="text-gray-400 text-xs sm:text-sm font-medium mb-2 sm:mb-4 line-clamp-2">
              {metric.title}
            </h3>

            {/* Main Value */}
            <div
              className={`text-xl sm:text-2xl font-bold mb-1 sm:mb-2 ${metric.valueColor} break-words`}
            >
              {metric.mainValue}
            </div>

            {/* Subtitle */}
            <div className="text-gray-400 text-xs sm:text-sm line-clamp-2">
              {metric.subtitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default BehaviorMetrics;
