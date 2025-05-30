import React from "react";
import { ChevronDown, Info } from "lucide-react";

const metrics = [
  {
    title: "Trader Position Index",
    value: "0.72",
    bar: { green: "33%", yellow: "15%", red: "52%" },
    icon: <ChevronDown className="w-4 h-4 text-gray-400" />,
    bottomStats: [
      { label: "Long", value: "35%", color: "green-400", bold: true },
      { label: "Neutral", value: "15%", color: "yellow-400", bold: false },
      { label: "Short", value: "65%", color: "red-400", bold: true },
    ],
  },
  {
    title: "Trade Position Index",
    value: "0.45",
    bar: { green: "42%", red: "58%" },
    icon: <ChevronDown className="w-4 h-4 text-gray-400" />,
    bottomStats: [
      { label: "Long: 45%", color: "green-400", bold: false },
      { label: "Short: 55%", color: "red-400", bold: false },
    ],
  },
  {
    title: "Liquidity Tracker Index",
    value: "0.82",
    bar: { orange: "83%", gray: "17%" },
    label: { text: "High", bg: "orange-500", textColor: "black" },
    bottomText: ["Deep", "Shallow"],
  },
  {
    title: "Global Risk Ratio",
    value: "1.24",
    bar: { green: "25%", gray: "75%" },
    label: { text: "Safe", bg: "green-500", textColor: "black" },
    bottomText: ["Low Risk", "High Risk"],
  },
  {
    title: "Global Sharpe Ratio",
    value: "2.18",
    bar: { green: "92%", gray: "8%" },
    label: { text: "Excellent", bg: "green-500", textColor: "black" },
    bottomText: ["Poor", "Excellent"],
  },
];

const TradingMetricsCards = () => {
  return (
    <div className="p-3 sm:p-4 md:p-6 min-h-full ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 w-full ">
        {metrics.map((metric, i) => (
          <div key={i} className=" rounded-lg p-3 sm:p-4 w-full  bg-gray-800">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <h3 className="text-gray-300 text-xs sm:text-sm font-medium truncate">
                {metric.title}
              </h3>
              <Info className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 flex-shrink-0" />
            </div>

            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="text-white text-2xl sm:text-3xl font-bold">
                {metric.value}
              </span>
              <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                <div className="w-10 sm:w-12 h-2 sm:h-3 rounded-full overflow-hidden flex">
                  {metric.bar?.green && (
                    <div
                      className="h-full bg-green-500"
                      style={{ width: metric.bar.green }}
                    />
                  )}
                  {metric.bar?.yellow && (
                    <div
                      className="h-full bg-yellow-500"
                      style={{ width: metric.bar.yellow }}
                    />
                  )}
                  {metric.bar?.red && (
                    <div
                      className="h-full bg-red-500"
                      style={{ width: metric.bar.red }}
                    />
                  )}
                  {metric.bar?.orange && (
                    <div
                      className="h-full bg-orange-500"
                      style={{ width: metric.bar.orange }}
                    />
                  )}
                  {metric.bar?.gray && (
                    <div
                      className="h-full bg-gray-600"
                      style={{ width: metric.bar.gray }}
                    />
                  )}
                </div>
                {metric.icon || (
                  <div
                    className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm font-bold bg-${metric.label?.bg} text-${metric.label?.textColor} whitespace-nowrap`}
                  >
                    {metric.label?.text}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Section */}
            {metric.bottomStats ? (
              <div className="flex items-center justify-between text-xs sm:text-sm">
                {metric.bottomStats.map((stat, idx) => (
                  <div key={idx} className="flex items-center">
                    <span className={`text-${stat.color} font-medium`}>
                      {stat.label}
                    </span>
                    <span
                      className={`text-${stat.color} ${
                        stat.bold ? "font-bold" : ""
                      } ml-1`}
                    >
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex justify-between text-xs sm:text-sm text-gray-400">
                <span>{metric.bottomText?.[0]}</span>
                <span>{metric.bottomText?.[1]}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingMetricsCards;
