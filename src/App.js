import { useState } from "react";
import EighteenWheeler from "./components/EighteenWheeler";
import TrafficControlDevice from "./components/TrafficControlDevice";
import SUV from "./components/SUV";
import VehicleStatus from "./components/VehicleStatus";

function App() {
  const [currentVehicle, setCurrentVehicle] = useState(true);
  const [currentVehicleStatus, setCurrentVehicleStatus] = useState("stop");
  const [currentLightStatus, setCurrentLightStatus] = useState("Green");

  function onVehicleStatusChange(e) {
    const status = e.currentTarget.value;
    if (currentVehicleStatus === "forward" && status === "forward") {
      throw new Error("Cannot move forward twice!");
    }
    setCurrentVehicleStatus(status);
    setCurrentLightStatus("Green");
  }

  function onLightStatusChange(e) {
    let light = e.currentTarget.value;
    setCurrentLightStatus(light);
  }

  let vehicle;
  if (currentVehicle) {
    vehicle = (
      <EighteenWheeler
        vehicleStatus={currentVehicleStatus}
        lightStatus={currentLightStatus}
        onStatusChange={onVehicleStatusChange}
      />
    );
  } else {
    vehicle = (
      <SUV
        vehicleStatus={currentVehicleStatus}
        lightStatus={currentLightStatus}
        onStatusChange={onVehicleStatusChange}
      />
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
          <TrafficControlDevice
            vehicleStatus={currentVehicleStatus}
            lightStatus={currentLightStatus}
            onLightStatusChange={onLightStatusChange}
          />
        </div>
      </div>
      <VehicleStatus
        status={currentVehicleStatus}
        lightStatus={currentLightStatus}
      />
    </div>
  );
}

export default App;
