import { useState } from "react";
import EighteenWheeler from "./components/EighteenWheeler";
import TrafficControlDevice from "./components/TrafficControlDevice";
import SUV from "./components/SUV";

function App() {
  const [currentVehicle, setCurrentVehicle] = useState(true);
  let vehicle;
  if (currentVehicle) {
    vehicle = <EighteenWheeler />;
  } else {
    vehicle = <SUV />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>E2Open Candidate Exercises</h2>
      </header>
      <div className="user-interface-container">
        <button onClick={() => setCurrentVehicle(!currentVehicle)}>
          Change Vehicle
        </button>
      </div>
      <div className="vehicle-traffic-container">
        <div className="vehicle-container">{vehicle}</div>
        <div>
          <TrafficControlDevice />
        </div>
      </div>
    </div>
  );
}

export default App;
