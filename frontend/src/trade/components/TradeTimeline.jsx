import React from "react";
import { ResponsiveContainer, XAxis, YAxis, ReferenceLine } from "recharts";

const TradeTimeline = () => {
  // Candlestick data with OHLC values
  const candleData = [
    { time: "08:00", open: 27400, high: 27480, low: 27380, close: 27456, x: 0 },
    { time: "09:00", open: 27456, high: 27500, low: 27420, close: 27480, x: 1 },
    { time: "10:00", open: 27480, high: 27520, low: 27450, close: 27500, x: 2 },
    { time: "11:00", open: 27500, high: 27550, low: 27480, close: 27520, x: 3 },
    { time: "12:00", open: 27520, high: 27580, low: 27500, close: 27550, x: 4 },
    { time: "13:00", open: 27550, high: 27650, low: 27530, close: 27620, x: 5 },
    { time: "14:00", open: 27620, high: 27920, low: 27600, close: 27891, x: 6 },
    { time: "15:00", open: 27891, high: 27980, low: 27850, close: 27950, x: 7 },
    { time: "16:00", open: 27950, high: 28050, low: 27920, close: 28020, x: 8 },
    { time: "17:00", open: 28020, high: 28150, low: 28000, close: 28102, x: 9 },
    {
      time: "18:00",
      open: 28102,
      high: 28200,
      low: 28080,
      close: 28150,
      x: 10,
    },
    {
      time: "19:00",
      open: 28150,
      high: 29200,
      low: 28120,
      close: 29156,
      x: 11,
    },
    {
      time: "20:00",
      open: 29156,
      high: 29250,
      low: 29100,
      close: 29200,
      x: 12,
    },
    {
      time: "21:00",
      open: 29200,
      high: 29350,
      low: 29180,
      close: 29300,
      x: 13,
    },
    {
      time: "22:00",
      open: 29300,
      high: 29550,
      low: 29280,
      close: 29500,
      x: 14,
    },
    {
      time: "23:00",
      open: 29500,
      high: 29750,
      low: 29480,
      close: 29700,
      x: 15,
    },
    {
      time: "00:00",
      open: 29700,
      high: 29900,
      low: 29650,
      close: 29873,
      x: 16,
    },
  ];

  // Custom Candlestick component
  const Candlestick = ({ data, width = 400, height = 200 }) => {
    const padding = 40;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;

    const minPrice = Math.min(...data.map((d) => d.low)) - 50;
    const maxPrice = Math.max(...data.map((d) => d.high)) + 50;
    const priceRange = maxPrice - minPrice;

    const candleWidth = (chartWidth / data.length) * 0.6;
    const candleSpacing = chartWidth / data.length;

    return (
      <svg width={width} height={height} className="overflow-visible">
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
          <line
            key={i}
            x1={padding}
            y1={padding + chartHeight * ratio}
            x2={width - padding}
            y2={padding + chartHeight * ratio}
            stroke="#374151"
            strokeWidth={0.5}
            opacity={0.3}
          />
        ))}

        {/* Candlesticks */}
        {data.map((candle, index) => {
          const x = padding + index * candleSpacing + candleSpacing / 2;
          const isGreen = candle.close > candle.open;

          const openY =
            padding + ((maxPrice - candle.open) / priceRange) * chartHeight;
          const closeY =
            padding + ((maxPrice - candle.close) / priceRange) * chartHeight;
          const highY =
            padding + ((maxPrice - candle.high) / priceRange) * chartHeight;
          const lowY =
            padding + ((maxPrice - candle.low) / priceRange) * chartHeight;

          const bodyTop = Math.min(openY, closeY);
          const bodyHeight = Math.abs(closeY - openY);

          return (
            <g key={index}>
              {/* High-Low line (wick) */}
              <line
                x1={x}
                y1={highY}
                x2={x}
                y2={lowY}
                stroke={isGreen ? "#10b981" : "#ef4444"}
                strokeWidth={1}
              />

              {/* Body */}
              <rect
                x={x - candleWidth / 2}
                y={bodyTop}
                width={candleWidth}
                height={Math.max(bodyHeight, 1)}
                fill={isGreen ? "#10b981" : "#ef4444"}
                stroke={isGreen ? "#10b981" : "#ef4444"}
                strokeWidth={1}
              />
            </g>
          );
        })}

        {/* X-axis labels */}
        {data
          .filter((_, i) => i % 3 === 0)
          .map((candle, index) => (
            <text
              key={index}
              x={padding + index * 3 * candleSpacing + candleSpacing / 2}
              y={height - 10}
              textAnchor="middle"
              fill="#64748b"
              fontSize="10"
            >
              {candle.time}
            </text>
          ))}

        {/* Y-axis labels */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
          const price = minPrice + (maxPrice - minPrice) * (1 - ratio);
          return (
            <text
              key={i}
              x={width - 10}
              y={padding + chartHeight * ratio + 3}
              textAnchor="end"
              fill="#64748b"
              fontSize="10"
            >
              ${Math.round(price).toLocaleString()}
            </text>
          );
        })}
      </svg>
    );
  };

  const timelineEvents = [
    {
      type: "entry",
      icon: "→",
      title: "Entry Position",
      time: "May 12, 08:42:15 UTC",
      description:
        "Entered long position at $27,456.21 with 10x leverage. Initial position size: $5,000.",
      bgColor: "bg-green-500",
    },
    {
      type: "increase",
      icon: "+",
      title: "Position Increase",
      time: "May 12, 14:23:12 UTC",
      description:
        "Added $500 to position at $27,891.35. Position increase: +10%.",
      bgColor: "bg-blue-500",
    },
    {
      type: "increase",
      icon: "+",
      title: "Position Increase",
      time: "May 13, 02:17:45 UTC",
      description:
        "Added $500 to position at $28,102.67. Position increase: +10%.",
      bgColor: "bg-blue-500",
    },
    {
      type: "partial",
      icon: "−",
      title: "Partial Close",
      time: "May 13, 19:42:32 UTC",
      description:
        "Closed 25% of position at $29,156.78. Realized profit: $412.35.",
      bgColor: "bg-yellow-500",
    },
    {
      type: "exit",
      icon: "✕",
      title: "Exit Position",
      time: "May 14, 14:23:56 UTC",
      description:
        "Closed remaining position at $29,873.45. Total profit: $2,418.24 (+8.817%).",
      bgColor: "bg-red-500",
    },
  ];

  return (
    <div className="bg-slate-800 text-white min-h-screen p-3 sm:p-4 md:p-6 rounded-lg">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
        Trade Timeline
      </h1>

      {/* Chart Section */}
      <div className="bg-slate-900 rounded-lg p-2 sm:p-4 mb-6 sm:mb-8 h-48 sm:h-64 flex items-center justify-center overflow-x-auto">
        <Candlestick
          data={candleData}
          width={Math.min(800, window.innerWidth - 32)}
          height={220}
        />
      </div>

      {/* Timeline Section */}
      <div className="space-y-3 sm:space-y-4">
        {timelineEvents.map((event, index) => (
          <div key={index} className="flex items-start space-x-3 sm:space-x-4">
            {/* Icon */}
            <div
              className={`${event.bgColor} rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0`}
            >
              {event.icon}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-1">
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  {event.title}
                </h3>
                <span className="text-slate-400 text-xs sm:text-sm">
                  {event.time}
                </span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeTimeline;
