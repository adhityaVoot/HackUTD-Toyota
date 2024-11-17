import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import GeneralStats from "./components/GeneralStats";
import ToyotaStats from "./components/ToyotaStats";
import CarComparison from "./components/CarComparison";
import NotFound from "./components/NotFound";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<GeneralStats />} />
            <Route path="/comparison" element={<CarComparison />} />
            <Route path="/toyota-stats" element={<ToyotaStats />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
