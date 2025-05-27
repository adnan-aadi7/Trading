import React from "react";
import Navbar from "../../common/Navbar";
import TradingFilter from "../components/TradingFilter";
import TradingMetricsCards from "../../common/TradingMetricsCards";
import TradingMetricsCards2 from "../../common/TradingMetricsCards2";
import TradeActivityChart from "../../common/TradeActivityChart";
import ActiveTraders from "../../common/ActiveTraders";
import PopularActivePairs from "../../common/PopularActivePairs";
import LiveFeed from "../../common/LiveFeed";
import StreakTraders from "../../common/Streaktraders";
import Leaderboard from "../../common/LeaderBoard";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <TradingFilter />
      <div className="px-3 sm:px-4 md:px-6">
        <TradingMetricsCards />
      </div>
      
      <TradingMetricsCards2 />

      {/* Two-column section */}
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 px-3 sm:px-4 md:px-6 lg:px-[50px]">
        {/* Left Column */}
        <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-2/3">
          <TradeActivityChart />
          <PopularActivePairs />
          <StreakTraders />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-1/3">
          <ActiveTraders />
          <LiveFeed />
        </div>
      </div>

      {/* Full-width Leaderboard */}
      <div className="px-3 sm:px-4 md:px-6 lg:px-[100px] py-4">
        <Leaderboard />
      </div>
    </>
  );
};

export default Dashboard;
