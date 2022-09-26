import React from "react";

function VehicleStatus({ status, lightStatus }) {
  function statusSentence(status) {
    switch (status) {
      case "left":
        return "Turning left.";
      case "right":
        return "Turning right.";
      case "forward":
        return "Driving forward.";
      case "pinto":
        return "Ran over a Ford Pinto.";
      default:
        return "Jackknifed to a stop.";
    }
  }

  return (
    <div className="vehicle-status-container">
      <h1 style={{ marginLeft: "2rem" }}>Vehicle Status</h1>
      <h3 style={{ marginLeft: "4rem" }}>{statusSentence(status)}</h3>
    </div>
  );
}

export default VehicleStatus;
