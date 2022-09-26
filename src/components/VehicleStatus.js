import React from "react";

function VehicleStatus({ status }) {
  return (
    <div className="vehicle-status-container">
      <h1 style={{ marginLeft: "2rem" }}>Vehicle Status</h1>
      <h3 style={{ marginLeft: "4rem" }}>{status}</h3>
    </div>
  );
}

export default VehicleStatus;
