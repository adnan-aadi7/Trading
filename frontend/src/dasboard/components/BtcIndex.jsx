import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  Text,
} from "recharts";

const BtcIndex = () => {
  // Generate data for BTC and trading positions comparison
  const generateComparisonData = () => {
    const data = [];
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30); // Last 30 days

    // Initial values
    let btcPrice = 105000; // Starting BTC price (updated to be above 1 lac)
    let longPercent = 55; // Starting long percentage
    let shortPercent = 45; // Starting short percentage (totaling 100 for simplicity)

    for (let i = 0; i < 30; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);

      // Generate BTC price movement
      const btcChange = Math.random() * 0.1 - 0.05; // -5% to +5% daily change
      btcPrice = btcPrice * (1 + btcChange);

      // Adjust long/short percentages based on BTC movement
      let longChange = Math.random() * 3 - 1.5; // Small random change
      if (btcChange > 0.01) longChange += Math.random() * 2; // More long on upward trend
      if (btcChange < -0.01) longChange -= Math.random() * 2; // More short on downward trend

      longPercent = longPercent + longChange;
      longPercent = Math.max(10, Math.min(90, longPercent)); // Keep within reasonable bounds
      shortPercent = 100 - longPercent; // Keep total at 100%

      data.push({
        date: date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        btcPrice: parseFloat(btcPrice.toFixed(2)),
        longPercentage: parseFloat(longPercent.toFixed(1)),
        shortPercentage: parseFloat(shortPercent.toFixed(1)),
      });
    }

    // Calculate 24h BTC change
    const btcPriceToday = data[data.length - 1].btcPrice;
    const btcPriceYesterday = data[data.length - 2].btcPrice;
    const btc24hChange =
      ((btcPriceToday - btcPriceYesterday) / btcPriceYesterday) * 100;

    return { data, btc24hChange };
  };

  const { data: comparisonData, btc24hChange } = generateComparisonData();

  const BtcPriceTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      // Access the btc24hChange from the comparisonData based on the current label (date)
      const currentDayData = comparisonData.find((d) => d.date === label);
      // Handle case where currentDayData or previous day data might not exist (e.g., first day)
      const previousDayData =
        comparisonData[comparisonData.indexOf(currentDayData) - 1];
      const change24h =
        currentDayData && previousDayData
          ? ((currentDayData.btcPrice - previousDayData.btcPrice) /
              previousDayData.btcPrice) *
            100
          : 0;
      const changeColor = change24h >= 0 ? "text-green-400" : "text-red-400";

      return (
        <div className="bg-gray-800 border border-slate-600 rounded-lg p-2 shadow-xl max-w-xs text-xs">
          <div className="text-blue-400 font-semibold mb-2">{label}</div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300 text-sm">BTC Price:</span>
            <span className="text-white font-semibold">
              ${payload[0].value.toLocaleString()}
              <span className={`text-sm ${changeColor}`}>
                ({change24h >= 0 ? "+" : ""}
                {change24h.toFixed(2)}% 24h)
              </span>
            </span>
          </div>
        </div>
      );
    }
    return null;
  };

  const PositionTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 border border-slate-600 rounded-lg p-2 shadow-xl max-w-xs text-xs">
          <div className="text-blue-400 font-semibold mb-2">{label}</div>
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">Long:</span>
              <span className="text-green-400 font-semibold">
                {payload[0].value.toFixed(1)}%
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">Short:</span>
              <span className="text-red-400 font-semibold">
                {payload[1].value.toFixed(1)}%
              </span>
            </div>
            {/* Display Long/Short Ratio on hover like in the image */}
            <div className="flex justify-center mt-2">
              <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">
                {payload[0].value.toFixed(0)}% : {payload[1].value.toFixed(0)}%
              </span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className=" max-w-3xl mt-16 bg-gray-800 rounded-xl border border-slate-700 p-4 mb-6">
      {/* BTC Price Chart */}
      <div className="">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-lg font-medium">BTC Price</h2>
          <span
            className={`text-sm font-semibold ${
              btc24hChange >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {btc24hChange >= 0 ? "+" : ""}
            {btc24hChange.toFixed(2)}% (24h)
          </span>
        </div>
        <div className="h-[150px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={comparisonData} syncId="chartsSync">
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis
                dataKey="date"
                hide={true} // Hide X-axis on the top chart
              />
              <YAxis
                stroke="#F59E0B"
                tick={{ fill: "#F59E0B", fontSize: 10 }}
                tickLine={{ stroke: "#4B5563" }}
                tickFormatter={(value) => `$${value.toLocaleString()}`}
                domain={["auto", "auto"]}
              />
              <Tooltip
                cursor={{ stroke: "#A0AEC0", strokeDasharray: "3 3" }}
                content={<BtcPriceTooltip />}
              />
              <Line
                type="monotone"
                dataKey="btcPrice"
                name="BTC Price"
                stroke="#F59E0B"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Trading Position Index Chart */}
      <div>
        {/* Wrap chart container in relative div for positioning labels */}
        <div className="h-[150px] relative">
          {/* Add positioned text for 'short' and 'Long' */}
          {/* 'short' label */}
          <div
            className="text-white text-lg  z-10 absolute"
            style={{
              top: "20%",
              left: "55%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          >
            short
          </div>
          {/* 'Long' label */}
          <div
            className="text-white text-lg z-10 absolute"
            style={{
              top: "60%",
              left: "55%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          >
            Long
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={comparisonData} syncId="chartsSync">
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis
                dataKey="date"
                stroke="#9CA3AF"
                tick={{ fill: "#9CA3AF", fontSize: 10 }}
                tickLine={{ stroke: "#4B5563" }}
              />
              <YAxis
                stroke="#9CA3AF"
                tick={{ fill: "#9CA3AF", fontSize: 10 }}
                tickLine={{ stroke: "#4B5563" }}
                tickFormatter={(value) => `${value}%`}
                domain={[0, 100]}
              />
              <Tooltip
                cursor={{ stroke: "#A0AEC0", strokeDasharray: "3 3" }}
                content={<PositionTooltip />}
              />
              {/* Add 'short' label using Recharts Text component */}
              <Text
                x="50%"
                y="35%"
                textAnchor="middle"
                verticalAnchor="middle"
                fill="#ffffff"
                fontSize={14}
                fontWeight="bold"
              >
                short
              </Text>
              {/* Add 'Long' label using Recharts Text component */}
              <Text
                x="50%"
                y="65%"
                textAnchor="middle"
                verticalAnchor="middle"
                fill="#ffffff"
                fontSize={14}
                fontWeight="bold"
              >
                Long
              </Text>
              <Area
                type="monotone"
                dataKey="longPercentage"
                stackId="1"
                stroke="#10B981"
                fill="#10B981"
                name="% Long"
              />
              <Area
                type="monotone"
                dataKey="shortPercentage"
                stackId="1"
                stroke="#EF4444"
                fill="#EF4444"
                name="% Short"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BtcIndex;
