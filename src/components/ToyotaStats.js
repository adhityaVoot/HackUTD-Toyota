import React from "react";
import "../styles/ToyotaStats.css";

const ToyotaStats = () => {
  const toyotaModels = [
    {
      name: "2023 Prius Prime",
      image: "/prius.png",
      description: "Top-performing hybrid with 58 MPG combined.",
    },
    {
      name: "2023 Toyota Corolla",
      image: "/toyota-corolla.png",
      description: "Reliable compact sedan with advanced safety features.",
    },
    {
      name: "2023 Toyota RAV4",
      image: "/toyota-rav4.png",
      description: "Best-selling SUV with outstanding versatility.",
    },
  ];

  const graphs = [
    {
      title: "Combined MPG",
      image: "/toyotaCmbHwy.png",
      description: "Averages for combined MPG performance across Toyota models.",
    },
    {
      title: "Highway MPG",
      image: "/toyotaHwyMpg.png",
      description: "Highway MPG statistics for Toyota models.",
    },
    {
      title: "City MPG",
      image: "/toyotaCityMpg.png",
      description: "City MPG averages for Toyota vehicles.",
    },
  ];

  return (
    <div className="toyota-stats">
      <h1>Toyota Stats</h1>
      <p>Explore the latest Toyota models and their performance statistics:</p>

      {/* Toyota Models Section */}
      <div className="toyota-models">
        {toyotaModels.map((model, index) => (
          <div className="toyota-card" key={index}>
            <img src={model.image} alt={model.name} />
            <h2>{model.name}</h2>
            <p>{model.description}</p>
          </div>
        ))}
      </div>

      {/* Graphs Section */}
      <div className="toyota-graphs">
        <h2>Performance Metrics</h2>
        <div className="graphs-container">
          {graphs.map((graph, index) => (
            <div className="graph-card" key={index}>
              <h3>{graph.title}</h3>
              <img src={graph.image} alt={graph.title} />
              <p>{graph.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToyotaStats;
