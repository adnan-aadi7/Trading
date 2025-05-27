import React, { useState } from "react";
import { Filter, Download, ChevronLeft, ChevronRight } from "lucide-react";

const Leaderboard = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const traders = [
    {
      id: 1,
      name: "CryptoWhale24",
      avatar: "CW",
      avatarBg: "bg-blue-600",
      assets: "BTC, ETH, SOL",
      pnl: "+$418,652",
      avgPnl: "+$9,968",
      configPnl: "+$402,487",
      avgDrawdown: "-8.2%",
      maxDrawdown: "-15.4%",
      totalTrades: 42,
      liquidations: 0,
      winRate: "94.7%",
    },
    {
      id: 2,
      name: "BitTrader",
      avatar: "BT",
      avatarBg: "bg-orange-600",
      assets: "ETH, DOGE, LINK",
      pnl: "+$289,431",
      avgPnl: "+$8,040",
      configPnl: "+$278,563",
      avgDrawdown: "-10.1%",
      maxDrawdown: "-18.7%",
      totalTrades: 36,
      liquidations: 1,
      winRate: "91.2%",
    },
    {
      id: 3,
      name: "MoonShot",
      avatar: "MS",
      avatarBg: "bg-green-600",
      assets: "SOL, AVAX, MATIC",
      pnl: "+$215,783",
      avgPnl: "+$7,441",
      configPnl: "+$206,128",
      avgDrawdown: "-12.8%",
      maxDrawdown: "-21.5%",
      totalTrades: 29,
      liquidations: 2,
      winRate: "88.9%",
    },
    {
      id: 4,
      name: "AlphaBull",
      avatar: "AB",
      avatarBg: "bg-red-600",
      assets: "BTC, ADA, XRP",
      pnl: "+$198,452",
      avgPnl: "+$6,402",
      configPnl: "+$187,963",
      avgDrawdown: "-9.7%",
      maxDrawdown: "-16.8%",
      totalTrades: 31,
      liquidations: 1,
      winRate: "87.5%",
    },
    {
      id: 5,
      name: "SatoshiCapital",
      avatar: "SC",
      avatarBg: "bg-blue-500",
      assets: "BTC, ETH, DOT",
      pnl: "+$176,320",
      avgPnl: "+$6,530",
      configPnl: "+$169,482",
      avgDrawdown: "-11.2%",
      maxDrawdown: "-19.3%",
      totalTrades: 27,
      liquidations: 0,
      winRate: "85.2%",
    },
  ];

  const totalPages = 3;
  const totalTraders = 42891;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];

    // Previous button
    pages.push(
      <button
        key="prev"
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-lg transition-colors text-sm"
      >
        <ChevronLeft size={16} />
        <span className="hidden sm:inline">Prev</span>
      </button>
    );

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-colors text-sm ${
            currentPage === i
              ? "bg-blue-600 text-white"
              : "bg-slate-700 hover:bg-slate-600 text-white"
          }`}
        >
          {i}
        </button>
      );
    }

    // Next button
    pages.push(
      <button
        key="next"
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-lg transition-colors text-sm"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={16} />
      </button>
    );

    return pages;
  };

  return (
    <div className="w-full px-2 lg:px-16">
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-4 sm:mb-6">
          <h1 className="text-white text-xl sm:text-2xl font-semibold">
            Trader Performance Leaderboard
          </h1>
          <div className="flex gap-2 sm:gap-3">
            <button className="flex items-center gap-1.5 sm:gap-2 bg-slate-700 hover:bg-slate-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors text-sm">
              <Filter size={16} />
              <span className="hidden sm:inline">Filters</span>
            </button>
            <button className="flex items-center gap-1.5 sm:gap-2 bg-slate-700 hover:bg-slate-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors text-sm">
              <Download size={16} />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
          <div className="overflow-x-auto">
            {/* Table Header */}
            <div className="grid grid-cols-9 gap-3 sm:gap-4 px-3 sm:px-6 py-3 sm:py-4 bg-slate-800 border-b border-slate-700 min-w-[800px]">
              <div className="text-slate-400 text-xs sm:text-sm font-medium">
                Trader
              </div>
              <div className="text-slate-400 text-xs sm:text-sm font-medium text-center">
                PNL
              </div>
              <div className="text-slate-400 text-xs sm:text-sm font-medium text-center">
                Avg PNL
              </div>
              <div className="text-slate-400 text-xs sm:text-sm font-medium text-center">
                Config PNL
              </div>
              <div className="text-slate-400 text-xs sm:text-sm font-medium text-center">
                Avg Drawdown
              </div>
              <div className="text-slate-400 text-xs sm:text-sm font-medium text-center">
                Max Drawdown
              </div>
              <div className="text-slate-400 text-xs sm:text-sm font-medium text-center">
                Total Trades
              </div>
              <div className="text-slate-400 text-xs sm:text-sm font-medium text-center">
                Liquidations
              </div>
              <div className="text-slate-400 text-xs sm:text-sm font-medium text-center">
                Win Rate
              </div>
            </div>

            {/* Table Rows */}
            {traders.map((trader, index) => (
              <div
                key={trader.id}
                className={`grid grid-cols-9 gap-3 sm:gap-4 px-3 sm:px-6 py-3 sm:py-4 hover:bg-slate-750 transition-colors min-w-[800px] ${
                  index !== traders.length - 1
                    ? "border-b border-slate-700"
                    : ""
                }`}
              >
                {/* Trader Info */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${trader.avatarBg} flex items-center justify-center text-white text-xs sm:text-sm font-semibold flex-shrink-0`}
                  >
                    {trader.avatar}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-white font-medium text-sm sm:text-base truncate">
                      {trader.name}
                    </div>
                    <div className="text-slate-400 text-xs sm:text-sm truncate">
                      {trader.assets}
                    </div>
                  </div>
                </div>

                {/* PNL */}
                <div className="flex items-center justify-center">
                  <span className="text-green-400 font-semibold text-sm sm:text-base whitespace-nowrap">
                    {trader.pnl}
                  </span>
                </div>

                {/* Avg PNL */}
                <div className="flex items-center justify-center">
                  <span className="text-green-400 font-medium text-sm sm:text-base whitespace-nowrap">
                    {trader.avgPnl}
                  </span>
                </div>

                {/* Config PNL */}
                <div className="flex items-center justify-center">
                  <span className="text-green-400 font-medium text-sm sm:text-base whitespace-nowrap">
                    {trader.configPnl}
                  </span>
                </div>

                {/* Avg Drawdown */}
                <div className="flex items-center justify-center">
                  <span className="text-red-400 font-medium text-sm sm:text-base whitespace-nowrap">
                    {trader.avgDrawdown}
                  </span>
                </div>

                {/* Max Drawdown */}
                <div className="flex items-center justify-center">
                  <span className="text-red-400 font-medium text-sm sm:text-base whitespace-nowrap">
                    {trader.maxDrawdown}
                  </span>
                </div>

                {/* Total Trades */}
                <div className="flex items-center justify-center">
                  <span className="text-white font-medium text-sm sm:text-base whitespace-nowrap">
                    {trader.totalTrades}
                  </span>
                </div>

                {/* Liquidations */}
                <div className="flex items-center justify-center">
                  <span
                    className={`font-medium text-sm sm:text-base whitespace-nowrap ${
                      trader.liquidations === 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {trader.liquidations}
                  </span>
                </div>

                {/* Win Rate */}
                <div className="flex items-center justify-center">
                  <span className="text-white font-medium text-sm sm:text-base whitespace-nowrap">
                    {trader.winRate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer with pagination */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mt-4 sm:mt-6">
          <div className="text-slate-400 text-xs sm:text-sm">
            Showing 5 of {totalTraders.toLocaleString()} traders
          </div>
          <div className="flex items-center gap-2">{renderPagination()}</div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
