import { useState } from "react";
import EighteenWheeler from "./components/EighteenWheeler";
import TrafficControlDevice from "./components/TrafficControlDevice";
import SUV from "./components/SUV";
import VehicleStatus from "./components/VehicleStatus";

function App() {
  const [currentVehicle, setCurrentVehicle] = useState(true);
  let vehicle;
  if (currentVehicle) {
    vehicle = <EighteenWheeler />;
  } else {
    vehicle = <SUV />;
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h2>E2Open Candidate Exercises</h2>
      </header>
      <div className="user-interface-container">
        <div className="vehicle-container">
          {vehicle}
          <button onClick={() => setCurrentVehicle(!currentVehicle)}>
            Change Vehicle
          </button>
        </div>
        <div className="traffic-container">
          <TrafficControlDevice />
        </div>
      </div>
      <VehicleStatus />
    </div>
  );
}

export default App;
