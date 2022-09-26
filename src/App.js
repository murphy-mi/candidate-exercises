import { useState } from "react";
import EighteenWheeler from "./components/EighteenWheeler";
import TrafficControlDevice from "./components/TrafficControlDevice";
import SUV from "./components/SUV";
import VehicleStatus from "./components/VehicleStatus";

function App() {
  const [currentVehicle, setCurrentVehicle] = useState(true);
  const [currentVehicleStatus, setCurrentVehicleStatus] = useState("stop");
  const [currentLightStatus, setCurrentLightStatus] = useState("red");

  function onStatusChange(e) {
    const status = e.currentTarget.value;
    if (currentVehicleStatus === "forward" && status === "forward") {
      throw "Cannot move forward twice!";
    }
    setCurrentVehicleStatus(status);
  }

  let vehicle;
  if (currentVehicle) {
    vehicle = (
      <EighteenWheeler
        status={currentVehicleStatus}
        onStatusChange={onStatusChange}
      />
    );
  } else {
    vehicle = (
      <SUV status={currentVehicleStatus} onStatusChange={onStatusChange} />
    );
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h2>E2Open Candidate Exercises</h2>
      </header>
      <div className="user-interface-container">
        <div className="vehicle-container">
          {vehicle}
          <button
            className="change-vehicle-button"
            onClick={() => setCurrentVehicle(!currentVehicle)}
          >
            Change Vehicle
          </button>
        </div>
        <div className="traffic-container">
          <TrafficControlDevice />
        </div>
      </div>
      <VehicleStatus status={currentVehicleStatus} />
    </div>
  );
}

export default App;
