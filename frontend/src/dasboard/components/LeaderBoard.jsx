import React, { useState } from "react";
import { Filter, Download, ChevronLeft, ChevronRight } from "lucide-react";

const Leaderboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const tradersPerPage = 10;

  // Generate 50 traders with comprehensive data
  const generateTraders = () => {
    const names = [
      "CryptoWhale24",
      "BitTrader",
      "MoonShot",
      "AlphaBull",
      "SatoshiCapital",
      "DiamondHands",
      "BullRun2024",
      "EthereumKing",
      "SolanaWave",
      "DeFiMaster",
      "BlockchainBoss",
      "CryptoPunk",
      "TokenHunter",
      "AltcoinAce",
      "FuturesFlash",
      "LeverageLion",
      "MarginMaster",
      "SwingTrader",
      "ScalpHunter",
      "TrendFollower",
      "QuantAnalyst",
      "RiskManager",
      "ProfitSeeker",
      "ChartWizard",
      "TechnicalPro",
      "FundamentalFox",
      "ArbitrageApe",
      "YieldFarmer",
      "LiquidityLord",
      "StakingStorm",
      "NFTNinja",
      "GameFiGuru",
      "MetaverseMogul",
      "Web3Warrior",
      "DAppDynamo",
      "SmartContract",
      "ValidatorVibe",
      "NodeRunner",
      "MinerMajor",
      "HashHero",
      "PoolMaster",
      "VaultVanguard",
      "BridgeBuilder",
      "CrossChain",
      "LayerTwo",
      "ZeroKnowledge",
      "ConsensusKing",
      "ForkFinder",
      "GasOptimizer",
      "MEVHunter",
    ];

    const assets = [
      "BTC, ETH, SOL",
      "ETH, DOGE, LINK",
      "SOL, AVAX, MATIC",
      "BTC, ADA, XRP",
      "BTC, ETH, DOT",
      "ETH, UNI, AAVE",
      "SOL, RAY, SRM",
      "AVAX, JOE, PNG",
      "MATIC, QUICK, SUSHI",
      "ADA, MINA, ALGO",
      "DOT, KSM, GLMR",
      "LINK, BAND, API3",
      "UNI, CAKE, 1INCH",
      "AAVE, COMP, MKR",
      "DOGE, SHIB, FLOKI",
      "XRP, XLM, HBAR",
    ];

    const avatarBgs = [
      "bg-blue-600",
      "bg-orange-600",
      "bg-green-600",
      "bg-red-600",
      "bg-blue-500",
      "bg-purple-600",
      "bg-pink-600",
      "bg-indigo-600",
      "bg-yellow-600",
      "bg-teal-600",
      "bg-cyan-600",
      "bg-emerald-600",
      "bg-lime-600",
      "bg-amber-600",
      "bg-rose-600",
    ];

    return names.map((name, index) => {
      const basePnl = Math.random() * 500000 + 50000;
      const totalTrades = Math.floor(Math.random() * 100) + 10;
      const liquidations = Math.floor(Math.random() * 5);
      const winRate = 60 + Math.random() * 35;
      const riskRatio = (Math.random() * 3 + 1).toFixed(2);
      const sharpeRatio = (Math.random() * 2 + 0.5).toFixed(2);

      return {
        id: index + 1,
        name: name,
        avatar: name.substring(0, 2).toUpperCase(),
        avatarBg: avatarBgs[index % avatarBgs.length],
        assets: assets[index % assets.length],
        pnl: `+$${Math.floor(basePnl).toLocaleString()}`,
        avgPnl: `+$${Math.floor(basePnl / totalTrades).toLocaleString()}`,
        configPnl: `+$${Math.floor(basePnl * 0.95).toLocaleString()}`,
        avgDrawdown: `-${(Math.random() * 15 + 5).toFixed(1)}%`,
        maxDrawdown: `-${(Math.random() * 25 + 10).toFixed(1)}%`,
        totalTrades: totalTrades,
        absolutePnl: `+$${Math.floor(basePnl * 1.1).toLocaleString()}`,
        avgAbsolutePnl: `+$${Math.floor(
          (basePnl * 1.1) / totalTrades
        ).toLocaleString()}`,
        minAbsolutePnl: `+$${Math.floor(basePnl * 0.1).toLocaleString()}`,
        minConfigPnl: `+$${Math.floor(basePnl * 0.05).toLocaleString()}`,
        liquidationCount: liquidations,
        winRate: `${winRate.toFixed(1)}%`,
        avgDU: `${(Math.random() * 20 + 10).toFixed(1)}%`,
        maxDU: `${(Math.random() * 40 + 20).toFixed(1)}%`,
        riskRatio: riskRatio,
        sharpeRatio: sharpeRatio,
      };
    });
  };

  const traders = generateTraders();
  const totalPages = Math.ceil(traders.length / tradersPerPage);
  const currentTraders = traders.slice(
    (currentPage - 1) * tradersPerPage,
    currentPage * tradersPerPage
  );

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
        className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 bg-slate-700 hover:bg-slate-600 disabled:bg-gray-800 disabled:text-slate-500 text-white rounded-lg transition-colors text-sm"
      >
        <ChevronLeft size={16} />
        <span className="hidden sm:inline">Prev</span>
      </button>
    );

    // Page numbers (show first, last, current and surrounding pages)
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className="px-2 sm:px-3 py-1.5 sm:py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm"
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(
          <span key="ellipsis1" className="text-slate-400 px-2">
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
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

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="ellipsis2" className="text-slate-400 px-2">
            ...
          </span>
        );
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="px-2 sm:px-3 py-1.5 sm:py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm"
        >
          {totalPages}
        </button>
      );
    }

    // Next button
    pages.push(
      <button
        key="next"
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 bg-slate-700 hover:bg-slate-600 disabled:bg-gray-800 disabled:text-slate-500 text-white rounded-lg transition-colors text-sm"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={16} />
      </button>
    );

    return pages;
  };

  return (
    <div className="w-full px-1 sm:px-2 lg:px-4 mt-6 sm:mt-10">
      <div className="w-full px-2 sm:px-4 md:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 sm:gap-0 mb-4 sm:mb-6">
          <h1 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
            Trader Performance Leaderboard
          </h1>
          <div className="flex gap-2 sm:gap-3">
            <button className="flex items-center gap-1.5 sm:gap-2 bg-gray-800 hover:bg-slate-600 text-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg transition-colors text-xs sm:text-sm">
              <Filter size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Filters</span>
            </button>
            <button className="flex items-center gap-1.5 sm:gap-2 bg-gray-800 hover:bg-slate-600 text-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg transition-colors text-xs sm:text-sm">
              <Download size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-gray-800 rounded-xl border border-slate-700">
          <div className="overflow-x-auto">
            <div className="min-w-[1200px] lg:min-w-full">
              {/* Table Header */}
              <div className="grid grid-cols-18 gap-1 px-2 sm:px-3 py-2 sm:py-3 bg-gray-800 border-b border-slate-700 text-xs mx-2 sm:mx-5">
                <div className="text-slate-400 font-medium col-span-2 text-[10px] sm:text-xs md:text-sm">
                  Trader
                </div>
                <div className="text-slate-400 font-medium text-center text-[10px] sm:text-xs md:text-sm">
                  PNL
                </div>
                <div className="text-slate-400 font-medium text-center text-[10px] sm:text-xs md:text-sm">
                  Avg PNL
                </div>
                <div className="text-slate-400 font-medium text-center text-[10px] sm:text-xs md:text-sm">
                  Config PNL
                </div>
                <div className="text-slate-400 font-medium text-center text-[10px] sm:text-xs md:text-sm">
                  Avg DD
                </div>
                <div className="text-slate-400 font-medium text-center text-[10px] sm:text-xs md:text-sm">
                  Max DD
                </div>
                <div className="text-slate-400 font-medium text-center text-[10px] sm:text-xs md:text-sm">
                  Trades
                </div>
                <div className="text-slate-400 font-medium text-center text-[10px] sm:text-xs md:text-sm">
                  Abs PNL
                </div>
                <div className="text-slate-400 font-medium text-center text-[10px] sm:text-xs md:text-sm">
                  Avg Abs
                </div>
                <div className="text-slate-400 font-medium text-center text-[10px] sm:text-xs md:text-sm">
                  Min Abs
                </div>
                <div className="text-slate-400 font-medium text-center text-[10px] sm:text-xs md:text-sm">
                  Min Config
                </div>
                <div className="text-slate-400 font-medium text-center text-[10px] sm:text-xs md:text-sm">
                  Liq Count
                </div>
                <div className="text-slate-400 font-medium text-center text-[10px] sm:text-xs md:text-sm">
                  Win Rate
                </div>
                <div className="text-slate-400 font-medium text-center text-[10px] sm:text-xs md:text-sm">
                  Avg DU
                </div>
                <div className="text-slate-400 font-medium text-center text-[10px] sm:text-xs md:text-sm">
                  Max DU
                </div>
                <div className="text-slate-400 font-medium text-center text-[10px] sm:text-xs md:text-sm">
                  Risk Ratio
                </div>
                <div className="text-slate-400 font-medium text-center text-[10px] sm:text-xs md:text-sm">
                  Sharpe
                </div>
              </div>

              {/* Table Rows */}
              {currentTraders.map((trader, index) => (
                <div
                  key={trader.id}
                  className={`grid grid-cols-18 gap-1 px-2 sm:px-3 py-2 sm:py-3 rounded-lg hover:bg-gray-700 transition-colors ${
                    index !== currentTraders.length - 1
                      ? "border-b border-slate-700"
                      : ""
                  }`}
                >
                  {/* Trader Info */}
                  <div className="flex items-center gap-1 sm:gap-2 col-span-2">
                    <div
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${trader.avatarBg} flex items-center justify-center text-white text-[10px] sm:text-xs md:text-sm font-semibold flex-shrink-0`}
                    >
                      {trader.avatar}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-white font-medium truncate text-[10px] sm:text-xs md:text-sm">
                        #{trader.id} {trader.name}
                      </div>
                      <div className="text-slate-400 truncate text-[8px] sm:text-xs">
                        {trader.assets}
                      </div>
                    </div>
                  </div>

                  {/* PNL */}
                  <div className="flex items-center justify-center">
                    <span className="text-green-400 font-semibold whitespace-nowrap text-[10px] sm:text-xs md:text-sm">
                      {trader.pnl}
                    </span>
                  </div>

                  {/* Avg PNL */}
                  <div className="flex items-center justify-center">
                    <span className="text-green-400 font-medium whitespace-nowrap text-[10px] sm:text-xs md:text-sm">
                      {trader.avgPnl}
                    </span>
                  </div>

                  {/* Config PNL */}
                  <div className="flex items-center justify-center">
                    <span className="text-green-400 font-medium whitespace-nowrap text-[10px] sm:text-xs md:text-sm">
                      {trader.configPnl}
                    </span>
                  </div>

                  {/* Avg Drawdown */}
                  <div className="flex items-center justify-center">
                    <span className="text-red-400 font-medium whitespace-nowrap text-[10px] sm:text-xs md:text-sm">
                      {trader.avgDrawdown}
                    </span>
                  </div>

                  {/* Max Drawdown */}
                  <div className="flex items-center justify-center">
                    <span className="text-red-400 font-medium whitespace-nowrap text-[10px] sm:text-xs md:text-sm">
                      {trader.maxDrawdown}
                    </span>
                  </div>

                  {/* Total Trades */}
                  <div className="flex items-center justify-center">
                    <span className="text-white font-medium whitespace-nowrap text-[10px] sm:text-xs md:text-sm">
                      {trader.totalTrades}
                    </span>
                  </div>

                  {/* Absolute PNL */}
                  <div className="flex items-center justify-center">
                    <span className="text-blue-400 font-medium whitespace-nowrap text-[10px] sm:text-xs md:text-sm">
                      {trader.absolutePnl}
                    </span>
                  </div>

                  {/* Avg Absolute PNL */}
                  <div className="flex items-center justify-center">
                    <span className="text-blue-400 font-medium whitespace-nowrap text-[10px] sm:text-xs md:text-sm">
                      {trader.avgAbsolutePnl}
                    </span>
                  </div>

                  {/* Min Absolute PNL */}
                  <div className="flex items-center justify-center">
                    <span className="text-blue-300 font-medium whitespace-nowrap text-[10px] sm:text-xs md:text-sm">
                      {trader.minAbsolutePnl}
                    </span>
                  </div>

                  {/* Min Config PNL */}
                  <div className="flex items-center justify-center">
                    <span className="text-blue-300 font-medium whitespace-nowrap text-[10px] sm:text-xs md:text-sm">
                      {trader.minConfigPnl}
                    </span>
                  </div>

                  {/* Liquidation Count */}
                  <div className="flex items-center justify-center">
                    <span
                      className={`font-medium whitespace-nowrap text-[10px] sm:text-xs md:text-sm ${
                        trader.liquidationCount === 0
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {trader.liquidationCount}
                    </span>
                  </div>

                  {/* Win Rate */}
                  <div className="flex items-center justify-center">
                    <span className="text-white font-medium whitespace-nowrap text-[10px] sm:text-xs md:text-sm">
                      {trader.winRate}
                    </span>
                  </div>

                  {/* Avg DU */}
                  <div className="flex items-center justify-center">
                    <span className="text-yellow-400 font-medium whitespace-nowrap text-[10px] sm:text-xs md:text-sm">
                      {trader.avgDU}
                    </span>
                  </div>

                  {/* Max DU */}
                  <div className="flex items-center justify-center">
                    <span className="text-yellow-400 font-medium whitespace-nowrap text-[10px] sm:text-xs md:text-sm">
                      {trader.maxDU}
                    </span>
                  </div>

                  {/* Risk Ratio */}
                  <div className="flex items-center justify-center">
                    <span className="text-purple-400 font-medium whitespace-nowrap text-[10px] sm:text-xs md:text-sm">
                      {trader.riskRatio}
                    </span>
                  </div>

                  {/* Sharpe Ratio */}
                  <div className="flex items-center justify-center">
                    <div className="w-full max-w-[60px] sm:max-w-[80px]">
                      <div className="relative h-1.5 sm:h-2 bg-slate-700 overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-white"
                          style={{
                            width: `${(trader.sharpeRatio / 2.5) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-white font-medium whitespace-nowrap text-[10px] sm:text-xs md:text-sm ml-1 sm:ml-2">
                        {trader.sharpeRatio}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer with pagination */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 sm:gap-0 mt-4 sm:mt-6">
          <div className="text-slate-400 text-[10px] sm:text-xs md:text-sm">
            Showing {(currentPage - 1) * tradersPerPage + 1}-
            {Math.min(currentPage * tradersPerPage, traders.length)} of{" "}
            {traders.length} traders
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            {renderPagination()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
