import React from "react";

const ActiveTraders = () => {
  const traders = [
    {
      rank: 1,
      name: "TradeMaster3000",
      trades: 86,
      pnl: "+$124,562",
      tokens: "BTC, ETH, SOL",
      isPositive: true,
    },
    {
      rank: 2,
      name: "WhaleHunter",
      trades: 72,
      pnl: "+$98,745",
      tokens: "BTC, DOGE, ADA",
      isPositive: true,
    },
    {
      rank: 3,
      name: "CryptoNinja",
      trades: 65,
      pnl: "-$42,310",
      tokens: "ETH, LINK, AVAX",
      isPositive: false,
    },
    {
      rank: 4,
      name: "SatoshiDisciple",
      trades: 58,
      pnl: "+$86,421",
      tokens: "BTC, ETH, DOT",
      isPositive: true,
    },
    {
      rank: 5,
      name: "BlockchainBaron",
      trades: 52,
      pnl: "+$72,138",
      tokens: "SOL, ATOM, FTM",
      isPositive: true,
    },
  ];

  return (
    <div className="w-full mt-6">
      <div className="w-full rounded-lg p-6 bg-gray-800">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-xl font-semibold">
            Most Active Traders
          </h2>
          <span className="text-gray-400 text-sm">Last 24h</span>
        </div>

        {/* Traders List */}
        <div className="space-y-4 w-full">
          {traders.map((trader) => (
            <div
              key={trader.rank}
              className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              {/* Rank Circle */}
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center text-sm font-bold leading-none ${
                  trader.rank === 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                {trader.rank}
              </div>

              {/* Trader Info */}
              <div className="flex-1">
                <div className="text-white font-medium mb-1">{trader.name}</div>
                <div className="text-gray-400 text-sm">
                  {trader.trades} trades
                </div>
              </div>

              {/* PNL and Tokens */}
              <div className="text-right">
                <div
                  className={`font-semibold mb-1 ${
                    trader.isPositive ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {trader.pnl}
                </div>
                <div className="text-gray-400 text-sm">{trader.tokens}</div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-6 text-center">
          <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
            View All Traders
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveTraders;
