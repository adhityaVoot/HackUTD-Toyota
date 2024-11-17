import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Car Stats</h2>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          General Stats
        </NavLink>
        <NavLink
          to="/comparison"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Car Comparison
        </NavLink>
        <NavLink
          to="/toyota-stats"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Toyota Stats
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
