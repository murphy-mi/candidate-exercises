import React from "react";
import SUVIMG from "../assets/SUV.png";
import { BsArrow90DegLeft, BsArrow90DegRight, BsArrowUp } from "react-icons/bs";

function SUV({ status, onStatusChange }) {
  return (
    <div className="eighteen-wheeler-container">
      <h3 style={{ marginLeft: "2rem" }}>SUV</h3>
      <img
        className="vehicle-traffic-image"
        src={SUVIMG}
        alt="Eighteen Wheeler"
      />
      <div className="eighteen-wheeler-controls">
        <button
          value="left"
          onClick={onStatusChange}
          disabled={status === "stop"}
        >
          <BsArrow90DegLeft />
        </button>
        <button value="forward" onClick={onStatusChange}>
          <BsArrowUp />
        </button>
        <button
          value="right"
          onClick={onStatusChange}
          disabled={status === "stop"}
        >
          <BsArrow90DegRight />
        </button>
        <button
          value="pinto"
          onClick={onStatusChange}
          disabled={status !== "forward"}
        >
          Run Over Ford Pinto
        </button>
      </div>
    </div>
  );
}

export default SUV;
