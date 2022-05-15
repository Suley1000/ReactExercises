import React from "react";
import "./trafficlight.css";
import TrafficLight from "./trafficlight.js";

const Street = () => {
  return (
    <div>
      <p style={{ fontWeight: "bold", textAlign: "center" }}>Lab 17</p>
      <div className="flex-container">
        <TrafficLight street="Suleyman" />
        <TrafficLight street="Jama" />
        <TrafficLight street="Info3139" />
      </div>
    </div>
  );
};

export default Street;
