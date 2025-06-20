import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./dasboard/page/Dashboard";
import Traders from "./traders/page/Traders";
import Trade from "./trade/pages/Trades";
import Config from "./common/Config";
// import Analytics from "./analytics/page/Analytics";
// import Leaderboard from "./leaderboard/page/Leaderboard";

function App() {
  return (
    <BrowserRouter>
      {/* Home page routes */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/traders" element={<Traders />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/config" element={<Config />} />
        {/* <Route path="/analytics" element={<Analytics />} />
        <Route path="/leaderboard" element={<Leaderboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
