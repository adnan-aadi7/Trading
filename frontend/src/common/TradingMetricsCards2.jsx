import React from "react";
import { Users, TrendingUp, Skull, Trophy } from "lucide-react";

const cardData = [
  {
    title: "Total Users Tracked",
    icon: <Users className="w-5 h-5 text-blue-400" />,
    value: "42,891",
    change: "+5.8%",
    changeColor: "text-green-400 bg-green-900",
    subtext: "+1,240 in last 24h",
  },
  {
    title: "Total Trades (24h)",
    icon: <TrendingUp className="w-5 h-5 text-blue-400" />,
    value: "168,432",
    change: "-3.2%",
    changeColor: "text-red-400 bg-red-900",
    subtext: "-5,620 compared to yesterday",
  },
  {
    title: "Wallets Liquidated",
    icon: <Skull className="w-5 h-5 text-red-400" />,
    value: "1,248",
    change: "+18.3%",
    changeColor: "text-green-400 bg-green-900",
    subtext: "$42.8M total liquidation value",
  },
  {
    title: "Top PNL of the Day",
    icon: <Trophy className="w-5 h-5 text-yellow-500" />,
    value: "$418,652",
    change: (
      <div className="flex items-center gap-2">
        <span className="text-green-400 text-sm font-medium">
          CryptoWhale24
        </span>
        <div className="w-3 h-3 bg-green-400 rounded-full" />
      </div>
    ),
    changeColor: "",
    subtext: "BTC/USDT Long @ 25x leverage",
  },
];

const TradingMetricsCards2 = () => {
  return (
    <div className="p-3 sm:p-4 md:p-6 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
        {cardData.map((card, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-3 sm:p-4 w-full">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <h3 className="text-gray-400 text-xs sm:text-sm font-medium truncate">
                {card.title}
              </h3>
              {card.icon}
            </div>

            <div className="flex items-center justify-between mb-2">
              <span className="text-white text-2xl sm:text-3xl font-bold">
                {card.value}
              </span>
              {typeof card.change === "string" ? (
                <span
                  className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm font-medium ${card.changeColor}`}
                >
                  {card.change}
                </span>
              ) : (
                card.change
              )}
            </div>

            <div className="text-gray-400 text-xs sm:text-sm">
              {card.subtext}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingMetricsCards2;
