import React from "react";
import EighteenWheelerIMG from "../assets/EighteenWheeler.png";
import { BsArrow90DegLeft, BsArrow90DegRight, BsArrowUp } from "react-icons/bs";

function EighteenWheeler({ vehicleStatus, lightStatus, onStatusChange }) {
  return (
    <div className="eighteen-wheeler-container">
      <h3 style={{ marginLeft: "2rem" }}>Eighteen Wheeler</h3>
      <img
        className="vehicle-traffic-image"
        src={EighteenWheelerIMG}
        alt="Eighteen Wheeler"
      />
      <div className="eighteen-wheeler-controls">
        <button
          value="left"
          onClick={onStatusChange}
          disabled={
            vehicleStatus === "stop" || lightStatus !== "Left-Turn Green"
          }
        >
          <BsArrow90DegLeft />
        </button>
        <button value="forward" onClick={onStatusChange}>
          <BsArrowUp />
        </button>
        <button
          value="right"
          onClick={onStatusChange}
          disabled={vehicleStatus === "stop"}
        >
          <BsArrow90DegRight />
        </button>
        <button
          value="stop"
          onClick={onStatusChange}
          disabled={vehicleStatus === "stop"}
        >
          Jackknife to a Stop
        </button>
      </div>
    </div>
  );
}

export default EighteenWheeler;
