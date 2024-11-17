import React, { useState, useEffect } from "react";
import Papa from "papaparse"; // For parsing CSV
import "../styles/CarComparison.css";

const CarComparison = () => {
  const [dataset, setDataset] = useState("smart-cars"); // Selected dataset
  const [cars, setCars] = useState([]); // Holds all cars from the selected dataset
  const [selectedCar1, setSelectedCar1] = useState(null); // Selected Car 1
  const [selectedCar2, setSelectedCar2] = useState(null); // Selected Car 2

  // Load the selected dataset
  useEffect(() => {
    let datasetPath = "";
    if (dataset === "smart-cars") {
      datasetPath = "/2025_deduplicated.csv"; // Path to Smart Cars dataset
    } else if (dataset === "green-cars") {
      datasetPath = "/alpha_25_deduplicated.csv"; // Path to Green Cars dataset
    }

    Papa.parse(datasetPath, {
      download: true,
      header: true,
      complete: (result) => {
        setCars(result.data);
        setSelectedCar1(null); // Reset selections
        setSelectedCar2(null);
      },
    });
  }, [dataset]);

  // Handle dataset selection
  const handleDatasetChange = (e) => {
    setDataset(e.target.value);
  };

  // Handle dropdown changes for cars
  const handleCar1Change = (e) => {
    const car = cars.find((c) => c["Model"] === e.target.value);
    setSelectedCar1(car);
  };

  const handleCar2Change = (e) => {
    const car = cars.find((c) => c["Model"] === e.target.value);
    setSelectedCar2(car);
  };

  return (
    <div className="car-comparison">
      <h1 className="title">Compare Your Favorite Cars</h1>
      <p className="subtitle">Choose a dataset and compare two cars to explore their stats.</p>

      {/* Dataset Selection */}
      <div className="dataset-selection">
        <label htmlFor="dataset">Choose a Dataset:</label>
        <select id="dataset" onChange={handleDatasetChange}>
          <option value="smart-cars">Smart Cars</option>
          <option value="green-cars">Green Cars</option>
        </select>
      </div>

      {/* Dropdowns for selecting cars */}
      <div className="dropdowns">
        <div className="dropdown">
          <label htmlFor="car1">Select Car 1:</label>
          <select id="car1" onChange={handleCar1Change}>
            <option value="">-- Choose a Car --</option>
            {cars.map((car, index) => (
              <option key={index} value={car["Model"]}>
                {car["Model"]}
              </option>
            ))}
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="car2">Select Car 2:</label>
          <select id="car2" onChange={handleCar2Change}>
            <option value="">-- Choose a Car --</option>
            {cars.map((car, index) => (
              <option key={index} value={car["Model"]}>
                {car["Model"]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Display comparison */}
      <div className="comparison-container">
        {selectedCar1 && selectedCar2 && (
          <>
            <div className="car-stats">
              <h2>{selectedCar1["Model"]}</h2>
              <p>Fuel Type: {selectedCar1["Fuel"]}</p>
              <p>Vehicle Class: {selectedCar1["Veh Class"]}</p>
              <p>Combined MPG: {selectedCar1["Cmb MPG"]}</p>
              <p>City MPG: {selectedCar1["City MPG"]}</p>
              <p>Highway MPG: {selectedCar1["Hwy MPG"]}</p>
              <p>CO2 Emissions: {selectedCar1["Comb CO2"]} g/mile</p>
            </div>
            <div className="vs">
              <span>VS</span>
            </div>
            <div className="car-stats">
              <h2>{selectedCar2["Model"]}</h2>
              <p>Fuel Type: {selectedCar2["Fuel"]}</p>
              <p>Vehicle Class: {selectedCar2["Veh Class"]}</p>
              <p>Combined MPG: {selectedCar2["Cmb MPG"]}</p>
              <p>City MPG: {selectedCar2["City MPG"]}</p>
              <p>Highway MPG: {selectedCar2["Hwy MPG"]}</p>
              <p>CO2 Emissions: {selectedCar2["Comb CO2"]} g/mile</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CarComparison;
