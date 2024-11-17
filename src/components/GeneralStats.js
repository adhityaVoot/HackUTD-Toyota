import React from "react";
import "../styles/GeneralStats.css";

const GeneralStats = () => {
  const generalStats = [
    { title: "Most Popular Car", value: "Toyota Camry" },
    { title: "Average MPG", value: "30 MPG" },
    { title: "Most Fuel-Efficient", value: "LUCID Air Pure RWD w/19 wheels" },
  ];

  return (
    <div className="general-stats">
      {/* Header */}
      <h1>General Car Stats</h1>
      <p>Here you can view the overall statistics for cars.</p>

      {/* Statistics Cards */}
      <div className="stats-container">
        {generalStats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h2>{stat.title}</h2>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Graphs Section */}
      <div className="graphs-container">
        {/* Hybrid Vehicles MPG Trend Graph */}
        <div
          className="graph-card"
          data-title="Hybrid and electric vehicles have the most miles per gallon, making the most cost efficient"
        >
          <h2>Hybrid Vehicles: Average MPG (2021-2025)</h2>
          <img
            src="avg_combined_mpg_bar_chart.png"
            alt="Miles Per Gallon by Fuel Type"
          />
        </div>

        {/* Fuel Cost Comparison Graph */}
        <div
          className="graph-card"
          data-title="Electric vehicles save an average of $1,200 annually in fuel costs compared to gasoline cars."
        >
          <h2>Fuel Cost Savings: Electric vs Gasoline</h2>
          <img
            src="updated_fuel_cost_comparison.png"
            alt="Fuel Cost Savings: Electric vs Gasoline"
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralStats;
