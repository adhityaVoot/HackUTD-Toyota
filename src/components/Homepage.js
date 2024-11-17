import React from "react";
import "./Homepage.css";

const Homepage = () => {
  const brands = [
    { name: "Toyota", logo: "/toyota-logo.png" },
    { name: "Mercedes-Benz", logo: "/mercedes-logo.png" },
    { name: "Nissan", logo: "/nissan-logo.png" },
  ];

  const popularComparisons = [
    {
      car1: {
        name: "2021 Nissan Sentra",
        image: "/nissan-sentra.png",
      },
      car2: {
        name: "2021 Nissan Versa",
        image: "/nissan-versa.png",
      },
    },
  ];

  return (
    <div className="homepage">
      {/* Header */}
      <div className="header">
        <div className="header-icon">
          <img src="/car-icon.png" alt="Car Icon" />
        </div>
        <h1>Compare Your Favorite Cars</h1>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search Car" />
        <button className="filter-btn">
          <img src="/filter-icon.png" alt="Filter Icon" />
        </button>
      </div>

      {/* Select Brand */}
      <div className="brand-section">
        <h2>Select Brand</h2>
        <div className="brands">
          {brands.map((brand, index) => (
            <div key={index} className="brand-card">
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>

      {/* Popular Car Comparisons */}
      <div className="popular-comparisons">
        <h2>Popular Car Comparisons</h2>
        {popularComparisons.map((comparison, index) => (
          <div className="comparison-card" key={index}>
            <div className="car">
              <img src={comparison.car1.image} alt={comparison.car1.name} />
              <p>{comparison.car1.name}</p>
            </div>
            <span>VS</span>
            <div className="car">
              <img src={comparison.car2.image} alt={comparison.car2.name} />
              <p>{comparison.car2.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Compare Cars Button */}
      <div className="compare-btn-container">
        <button className="compare-btn">Compare Cars</button>
      </div>
    </div>
  );
};

export default Homepage;
