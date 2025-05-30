import React from "react";

const MarketContext = () => {
  const topMetrics = [
    {
      title: "BTC Dominance",
      value: "52.3%",
      subtitle: "+0.8% during trade",
      subtitleColor: "text-green-400",
    },
    {
      title: "Market Volatility",
      value: "Medium",
      subtitle: "32.4 VIX index",
      subtitleColor: "text-slate-400",
    },
    {
      title: "Market Sentiment",
      value: "Bullish",
      subtitle: "Fear & Greed: 72",
      subtitleColor: "text-slate-400",
    },
  ];

  const correlatedAssets = [
    { symbol: "ETH", change: "+7.2%", color: "text-green-400" },
    { symbol: "SOL", change: "+12.5%", color: "text-green-400" },
    { symbol: "BNB", change: "+4.8%", color: "text-green-400" },
    { symbol: "XRP", change: "-2.1%", color: "text-red-400" },
    { symbol: "ADA", change: "+5.3%", color: "text-green-400" },
    { symbol: "DOT", change: "+6.9%", color: "text-green-400" },
  ];

  return (
    <div className="bg-gradient-to-br bg-gray-800 p-3 sm:p-4 md:p-6 rounded-lg border border-slate-700 w-full">
      <h2 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6">
        Market Context
      </h2>

      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
        {topMetrics.map((metric, index) => (
          <div
            key={index}
            className="bg-gradient-to-br bg-gray-800 p-3 sm:p-4 rounded-lg"
          >
            <div className="text-slate-400 text-xs sm:text-sm mb-1 sm:mb-2">
              {metric.title}
            </div>
            <div className="text-white text-xl sm:text-2xl font-bold mb-0.5 sm:mb-1">
              {metric.value}
            </div>
            <div className={`text-xs sm:text-sm ${metric.subtitleColor}`}>
              {metric.subtitle}
            </div>
          </div>
        ))}
      </div>

      {/* Correlated Assets Section */}
      <div className=" bg-gray-800 p-3 sm:p-4 rounded-lg">
        <div className="text-slate-400 text-xs sm:text-sm mb-2 sm:mb-3">
          Correlated Assets During Trade
        </div>
        <div className="flex flex-wrap gap-3 sm:gap-6">
          {correlatedAssets.map((asset, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-white font-medium text-xs sm:text-sm mb-0.5 sm:mb-1">
                {asset.symbol}
              </div>
              <div className={`font-bold text-xs sm:text-sm ${asset.color}`}>
                {asset.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketContext;
