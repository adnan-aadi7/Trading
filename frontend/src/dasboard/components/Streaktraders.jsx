import React from "react";
import { ChevronDown } from "lucide-react";

const StreakTraders = () => {
  const traders = [
    {
      id: 1,
      name: "Cryptowhale",
      avatar: "BT",
      avatarBg: "bg-blue-600",
      trades: 36,
      winStreak: 14,
      pnl24h: "+$589,431",
      winRate: "91.2%",
      performance: "+21.1%",
    },
    {
      id: 2,
      name: "BitTrader",
      avatar: "BT",
      avatarBg: "bg-orange-600",
      trades: 36,
      winStreak: 14,
      pnl24h: "+$289,431",
      winRate: "91.2%",
      performance: "+2.1%",
    },
    {
      id: 3,
      name: "MoonShot",
      avatar: "MS",
      avatarBg: "bg-green-600",
      trades: 29,
      winStreak: 12,
      pnl24h: "+$215,783",
      winRate: "88.9%",
      performance: "+1.9%",
    },
    {
      id: 4,
      name: "AlphaBull",
      avatar: "AB",
      avatarBg: "bg-red-600",
      trades: 31,
      winStreak: 11,
      pnl24h: "+$198,452",
      winRate: "87.5%",
      performance: "+1.7%",
    },
    {
      id: 5,
      name: "SatoshiCapital",
      avatar: "SC",
      avatarBg: "bg-blue-500",
      trades: 27,
      winStreak: 10,
      pnl24h: "+$176,320",
      winRate: "85.2%",
      performance: "+1.5%",
    },
    {
      id: 6,
      name: "ChainGuru",
      avatar: "CG",
      avatarBg: "bg-purple-600",
      trades: 33,
      winStreak: 13,
      pnl24h: "+$154,290",
      winRate: "84.7%",
      performance: "+1.3%",
    },
    {
      id: 7,
      name: "BlockMaster",
      avatar: "BM",
      avatarBg: "bg-yellow-500",
      trades: 25,
      winStreak: 9,
      pnl24h: "+$132,870",
      winRate: "82.1%",
      performance: "+1.1%",
    },
    {
      id: 8,
      name: "DeFiDragon",
      avatar: "DD",
      avatarBg: "bg-pink-500",
      trades: 28,
      winStreak: 8,
      pnl24h: "+$119,730",
      winRate: "80.5%",
      performance: "+0.9%",
    },
    {
      id: 9,
      name: "MetaBull",
      avatar: "MB",
      avatarBg: "bg-teal-600",
      trades: 30,
      winStreak: 7,
      pnl24h: "+$104,540",
      winRate: "78.9%",
      performance: "+0.7%",
    },
    {
      id: 10,
      name: "QuantKing",
      avatar: "QK",
      avatarBg: "bg-indigo-600",
      trades: 22,
      winStreak: 6,
      pnl24h: "+$95,120",
      winRate: "76.3%",
      performance: "+0.5%",
    },
  ];

  return (
    <div className="">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-8">
          <h1 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
            Top 10 Hot Streak Traders
          </h1>
          <div className="relative w-full sm:w-auto">
            <select className=" bg-gray-800 w-full sm:w-auto text-white px-3 sm:px-4 py-2 pr-10 rounded-lg border border-slate-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
              <option>Sort by PNL</option>
              <option>Sort by Win Rate</option>
              <option>Sort by Win Streak</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none"
              size={16}
            />
          </div>
        </div>

        {/* Table */}
        <div className=" rounded-xl bg-gray-800 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-2 sm:gap-4 px-3 sm:px-6 py-3 sm:py-4">
            <div className="text-slate-400 text-xs sm:text-sm font-medium">
              Trader
            </div>
            <div className="text-slate-400 text-xs sm:text-sm font-medium text-center">
              Win Streak
            </div>
            <div className="text-slate-400 text-xs sm:text-sm font-medium text-center">
              24h PNL
            </div>
            <div className="text-slate-400 text-xs sm:text-sm font-medium text-center">
              Win Rate
            </div>
            <div className="text-slate-400 text-xs sm:text-sm font-medium text-center">
              Risk Ratio
            </div>
          </div>

          {/* Table Rows */}
          {traders.map((trader, index) => (
            <div
              key={trader.id}
              className={`grid grid-cols-5 gap-2 px-3 sm:px-5 py-3 rounded-lg hover:bg-gray-700 transition-colors ${
                index !== traders.length - 1 ? "border-b border-slate-700" : ""
              }`}
            >
              {/* Trader Info */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${trader.avatarBg} flex items-center justify-center text-white text-xs sm:text-sm font-semibold`}
                >
                  {trader.avatar}
                </div>
                <div>
                  <div className="text-white text-xs sm:text-sm font-medium">
                    {trader.name}
                  </div>
                  <div className="text-slate-400 text-xs">
                    {trader.trades} trades
                  </div>
                </div>
              </div>

              {/* Win Streak */}
              <div className="flex items-center justify-center">
                <span className="text-green-400 text-sm sm:text-lg font-semibold">
                  {trader.winStreak}
                </span>
              </div>

              {/* 24h PNL */}
              <div className="flex items-center justify-center">
                <span className="text-green-400 text-xs sm:text-sm font-semibold">
                  {trader.pnl24h}
                </span>
              </div>

              {/* Win Rate */}
              <div className="flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm font-medium">
                  {trader.winRate}
                </span>
              </div>

              {/* Performance */}
              <div className="flex items-center justify-center">
                <span className="text-green-400 text-xs sm:text-sm font-medium">
                  {trader.performance}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StreakTraders;
