import React from "react";
import { Info } from "lucide-react";

const RiskMetrics = () => {
  const metrics = [
    {
      label: "Risk/Reward Ratio",
      value: "1:2.3",
      textColor: "text-white",
    },
    {
      label: "Position Size (% of Portfolio)",
      value: "15%",
      textColor: "text-white",
    },
    {
      label: "Stop Loss Distance",
      value: "-6.5%",
      textColor: "text-white",
    },
    {
      label: "Take Profit Distance",
      value: "+15%",
      textColor: "text-white",
    },
    {
      label: "Entry Quality Score",
      value: "8.4",
      rating: "10",
      textColor: "text-green-400",
      hasInfo: true,
    },
    {
      label: "Exit Quality Score",
      value: "7.8",
      rating: "10",
      textColor: "text-green-400",
      hasInfo: true,
    },
  ];

  return (
    <div className="bg-gradient-to-br bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 p-3 sm:p-4 md:p-6 rounded-lg w-full sm:w-80">
      <h2 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6">
        Risk Metrics
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="space-y-1 sm:space-y-2">
            <div className="flex items-center gap-1">
              <span className="text-slate-400 text-xs sm:text-sm">
                {metric.label}
              </span>
              {metric.hasInfo && <Info size={12} className="text-slate-400" />}
            </div>
            <div
              className={`text-xl sm:text-2xl font-bold ${metric.textColor}`}
            >
              {metric.value}
              {metric.rating && (
                <span className="text-slate-400 text-base sm:text-lg font-normal">
                  /{metric.rating}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskMetrics;
