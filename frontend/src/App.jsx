import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./dasboard/page/Dashboard";
import Traders from "./traders/page/Traders";
import Trade from "./trade/pages/Trades";
function App() {
  return (
    <BrowserRouter>
      {/* Home page routes */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/traders" element={<Traders />} />
        <Route path="/trade" element={<Trade />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
