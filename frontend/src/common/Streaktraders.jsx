import React from "react";
import { ChevronDown } from "lucide-react";

const StreakTraders = () => {
  const traders = [
    {
      id: 1,
      name: "CryptoWhale24",
      avatar: "CW",
      avatarBg: "bg-blue-600",
      trades: 42,
      winStreak: 18,
      pnl24h: "+$418,652",
      winRate: "94.7%",
      performance: "+2.8%",
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
  ];

  return (
    <div className="  p-4">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-white text-2xl font-semibold">
            Top 10 Hot Streak Traders
          </h1>
          <div className="relative">
            <select className="bg-slate-800 text-white px-4 py-2 pr-10 rounded-lg border border-slate-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
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
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-4 px-6 py-4 bg-slate-800 border-b border-slate-700">
            <div className="text-slate-400 text-sm font-medium">Trader</div>
            <div className="text-slate-400 text-sm font-medium text-center">
              Win Streak
            </div>
            <div className="text-slate-400 text-sm font-medium text-center">
              24h PNL
            </div>
            <div className="text-slate-400 text-sm font-medium text-center">
              Win Rate
            </div>
            <div className="text-slate-400 text-sm font-medium text-center">
              Performance
            </div>
          </div>

          {/* Table Rows */}
          {traders.map((trader, index) => (
            <div
              key={trader.id}
              className={`grid grid-cols-5 gap-4 px-6 py-4 hover:bg-slate-750 transition-colors ${
                index !== traders.length - 1 ? "border-b border-slate-700" : ""
              }`}
            >
              {/* Trader Info */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${trader.avatarBg} flex items-center justify-center text-white text-sm font-semibold`}
                >
                  {trader.avatar}
                </div>
                <div>
                  <div className="text-white font-medium">{trader.name}</div>
                  <div className="text-slate-400 text-sm">
                    {trader.trades} trades
                  </div>
                </div>
              </div>

              {/* Win Streak */}
              <div className="flex items-center justify-center">
                <span className="text-green-400 text-lg font-semibold">
                  {trader.winStreak}
                </span>
              </div>

              {/* 24h PNL */}
              <div className="flex items-center justify-center">
                <span className="text-green-400 font-semibold">
                  {trader.pnl24h}
                </span>
              </div>

              {/* Win Rate */}
              <div className="flex items-center justify-center">
                <span className="text-white font-medium">{trader.winRate}</span>
              </div>

              {/* Performance */}
              <div className="flex items-center justify-center">
                <span className="text-green-400 font-medium">
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
