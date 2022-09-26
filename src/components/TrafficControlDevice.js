import { useState } from "react";
import GreenLightIMG from "../assets/traffic-green.png";
import YellowLightIMG from "../assets/traffic-yellow.png";
import RedLightIMG from "../assets/traffic-red.png";

function TrafficControlDevice() {
  const [currentLight, setCurrentLight] = useState("Red");

  let light;
  switch (currentLight) {
    case "Green":
      light = GreenLightIMG;
      break;
    case "Yellow":
      light = YellowLightIMG;
      break;
    case "Left-Turn Green":
      light = GreenLightIMG;
      break;
    default:
      light = RedLightIMG;
  }

  return (
    <div className="light-container">
      <h2>Traffic Light</h2>
      <img className="vehicle-traffic-image" src={light} alt="Traffic Light" />
      <div className="traffic-controls-container">
        <button onClick={() => setCurrentLight("Green")}>Green</button>
        <button onClick={() => setCurrentLight("Yellow")}>Yellow</button>
        <button onClick={() => setCurrentLight("Red")}>Red</button>
        <button onClick={() => setCurrentLight("Left-Turn Green")}>
          Left-Turn Green
        </button>
      </div>
    </div>
  );
}

export default TrafficControlDevice;
