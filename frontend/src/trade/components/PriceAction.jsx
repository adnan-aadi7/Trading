import React, { useState } from "react";
import { TrendingUp } from "lucide-react";

const PriceActionChart = () => {
  const [activeTimeframe, setActiveTimeframe] = useState("4H");

  // Generate realistic candlestick data with trade points
  const generateCandleData = () => {
    const basePrice = 27000;
    const data = [];
    let currentPrice = basePrice;

    for (let i = 0; i < 60; i++) {
      const open = currentPrice;
      const volatility = Math.random() * 0.03; // 3% max volatility
      const trend = i < 20 ? 0.002 : i < 45 ? 0.001 : -0.001; // Upward trend then decline

      // Generate OHLC data
      const high = open * (1 + volatility + Math.abs(trend));
      const low = open * (1 - volatility);
      const close = open * (1 + trend + (Math.random() * 0.02 - 0.01));

      currentPrice = close;

      data.push({
        time: new Date(Date.now() - (60 - i) * 4 * 3600000)
          .toISOString()
          .slice(5, 10),
        open: Math.round(open * 100) / 100,
        high: Math.round(high * 100) / 100,
        low: Math.round(low * 100) / 100,
        close: Math.round(close * 100) / 100,
        isEntryPoint: i === 8,
        isPositionIncrease: i === 20,
        isPartialClose: i === 35,
        isExitPoint: i === 48,
      });
    }

    return data;
  };

  const [chartData] = useState(generateCandleData());

  // Calculate chart dimensions
  const chartWidth = 800;
  const chartHeight = 300;
  const padding = { top: 20, right: 60, bottom: 40, left: 60 };
  const plotWidth = chartWidth - padding.left - padding.right;
  const plotHeight = chartHeight - padding.top - padding.bottom;

  // Find price range
  const allPrices = chartData.flatMap((d) => [d.high, d.low]);
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);
  const priceRange = maxPrice - minPrice;

  // Price to Y coordinate
  const priceToY = (price) => {
    return padding.top + ((maxPrice - price) / priceRange) * plotHeight;
  };

  // X coordinate for each candle
  const candleWidth = plotWidth / chartData.length;

  const TradeMarker = ({ x, y, type, price }) => {
    const colors = {
      entry: "#10b981",
      increase: "#3b82f6",
      partial: "#f59e0b",
      exit: "#ef4444",
    };

    return (
      <g>
        <circle
          cx={x}
          cy={y}
          r="4"
          fill={colors[type]}
          stroke="#fff"
          strokeWidth="2"
        />
        <text
          x={x}
          y={y - 15}
          textAnchor="middle"
          fill={colors[type]}
          fontSize="10"
          fontWeight="bold"
        >
          ${price.toLocaleString()}
        </text>
      </g>
    );
  };

  return (
    <div className="bg-slate-800 rounded-lg p-3 sm:p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
        <h2 className="text-white text-lg sm:text-xl font-semibold">
          Price Action
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:space-x-4">
          {/* Timeframe buttons */}
          <div className="flex bg-slate-700 rounded-lg p-1 w-full sm:w-auto">
            {["1H", "4H", "1D"].map((timeframe) => (
              <button
                key={timeframe}
                onClick={() => setActiveTimeframe(timeframe)}
                className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium transition-colors flex-1 sm:flex-none ${
                  activeTimeframe === timeframe
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {timeframe}
              </button>
            ))}
          </div>

          {/* BTC Overlay button */}
          <button className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors text-xs sm:text-sm">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>BTC Overlay</span>
          </button>
        </div>
      </div>

      {/* Chart Container */}
      <div className="bg-slate-900 rounded-lg p-2 sm:p-4 mb-4 sm:mb-6 overflow-x-auto">
        <svg
          width={Math.min(chartWidth, window.innerWidth - 32)}
          height={chartHeight}
          className="w-full"
        >
          {/* Grid lines */}
          <defs>
            <pattern
              id="grid"
              width="40"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 30"
                fill="none"
                stroke="#374151"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Y-axis price labels */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
            const price = minPrice + priceRange * ratio;
            const y = priceToY(price);
            return (
              <g key={ratio}>
                <line
                  x1={padding.left}
                  y1={y}
                  x2={chartWidth - padding.right}
                  y2={y}
                  stroke="#374151"
                  strokeWidth="0.5"
                  opacity="0.5"
                />
                <text
                  x={chartWidth - padding.right + 10}
                  y={y + 4}
                  fill="#9ca3af"
                  fontSize="11"
                >
                  ${Math.round(price).toLocaleString()}
                </text>
              </g>
            );
          })}

          {/* Candlesticks */}
          {chartData.map((candle, index) => {
            const x = padding.left + index * candleWidth + candleWidth / 2;
            const isGreen = candle.close > candle.open;
            const color = isGreen ? "#10b981" : "#ef4444";

            const highY = priceToY(candle.high);
            const lowY = priceToY(candle.low);
            const openY = priceToY(candle.open);
            const closeY = priceToY(candle.close);

            const bodyTop = Math.min(openY, closeY);
            const bodyBottom = Math.max(openY, closeY);
            const bodyHeight = Math.max(bodyBottom - bodyTop, 1);

            return (
              <g key={index}>
                {/* Wick */}
                <line
                  x1={x}
                  y1={highY}
                  x2={x}
                  y2={lowY}
                  stroke={color}
                  strokeWidth="1"
                />

                {/* Body */}
                <rect
                  x={x - candleWidth * 0.3}
                  y={bodyTop}
                  width={candleWidth * 0.6}
                  height={bodyHeight}
                  fill={isGreen ? color : "transparent"}
                  stroke={color}
                  strokeWidth="1"
                />

                {/* Trade markers */}
                {candle.isEntryPoint && (
                  <TradeMarker
                    x={x}
                    y={closeY}
                    type="entry"
                    price={candle.close}
                  />
                )}
                {candle.isPositionIncrease && (
                  <TradeMarker
                    x={x}
                    y={closeY}
                    type="increase"
                    price={candle.close}
                  />
                )}
                {candle.isPartialClose && (
                  <TradeMarker
                    x={x}
                    y={closeY}
                    type="partial"
                    price={candle.close}
                  />
                )}
                {candle.isExitPoint && (
                  <TradeMarker
                    x={x}
                    y={closeY}
                    type="exit"
                    price={candle.close}
                  />
                )}
              </g>
            );
          })}

          {/* X-axis time labels */}
          {chartData
            .filter((_, i) => i % 10 === 0)
            .map((candle, index) => {
              const x =
                padding.left + index * 10 * candleWidth + candleWidth / 2;
              return (
                <text
                  key={index}
                  x={x}
                  y={chartHeight - 10}
                  textAnchor="middle"
                  fill="#9ca3af"
                  fontSize="11"
                >
                  {candle.time}
                </text>
              );
            })}

          {/* Reference lines for entry and exit */}
          {(() => {
            const entryCandle = chartData.find((d) => d.isEntryPoint);
            const exitCandle = chartData.find((d) => d.isExitPoint);
            return (
              <>
                {entryCandle && (
                  <line
                    x1={padding.left}
                    y1={priceToY(entryCandle.close)}
                    x2={chartWidth - padding.right}
                    y2={priceToY(entryCandle.close)}
                    stroke="#10b981"
                    strokeDasharray="4 4"
                    strokeOpacity="0.6"
                  />
                )}
                {exitCandle && (
                  <line
                    x1={padding.left}
                    y1={priceToY(exitCandle.close)}
                    x2={chartWidth - padding.right}
                    y2={priceToY(exitCandle.close)}
                    stroke="#ef4444"
                    strokeDasharray="4 4"
                    strokeOpacity="0.6"
                  />
                )}
              </>
            );
          })()}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
          <span className="text-gray-300 text-xs sm:text-sm">Entry Point</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-500"></div>
          <span className="text-gray-300 text-xs sm:text-sm">
            Position Increase
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
          <span className="text-gray-300 text-xs sm:text-sm">
            Partial Close
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
          <span className="text-gray-300 text-xs sm:text-sm">Exit Point</span>
        </div>
      </div>
    </div>
  );
};

export default PriceActionChart;
