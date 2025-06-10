import React from "react";
import TradingMetricsCards from "../components/TradingMetricsCards";
import TradingMetricsCards2 from "../components/TradingMetricsCards2";
import TradeActivityChart from "../components/TradeActivityChart";
import ActiveTraders from "../components/ActiveTraders";
import PopularActivePairs from "../components/PopularActivePairs";
import LiveFeed from "../components/LiveFeed";
import StreakTraders from "../components/Streaktraders";
import Leaderboard from "../components/LeaderBoard";
import Footer from "../../common/Footer";
import BtcIndex from "../components/BtcIndex";
import Navbar from "../../common/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="w-full px-3 sm:px-4 md:px-6 ">
        <TradingMetricsCards />
      </div>

      <TradingMetricsCards2 />

      {/* Two-column section */}
      <div className="w-full flex flex-col lg:flex-row gap-4 md:gap-6 px-3 sm:px-4 md:px-6 lg:px-[50px]">
        {/* Left Column */}
        <div className="w-full flex flex-col gap-4 md:gap-6 lg:w-2/3">
          <TradeActivityChart />
          <PopularActivePairs />
          <StreakTraders />
        </div>

        {/* Right Column */}
        <div className="w-full flex flex-col gap-4 md:gap-6 lg:w-1/3">
          <ActiveTraders />
          <LiveFeed />
          <BtcIndex />
        </div>
      </div>

      {/* Full-width Leaderboard */}
      <div className="w-full">
        <Leaderboard />
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
