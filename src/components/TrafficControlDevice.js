import GreenLightIMG from "../assets/traffic-green.png";
import YellowLightIMG from "../assets/traffic-yellow.png";
import RedLightIMG from "../assets/traffic-red.png";
import GreenLightLeftIMG from "../assets/traffic-green-left.png";

function TrafficControlDevice({
  vehicleStatus,
  lightStatus,
  onLightStatusChange,
}) {
  let light;
  switch (lightStatus) {
    case "Green":
      light = GreenLightIMG;
      break;
    case "Yellow":
      light = YellowLightIMG;
      break;
    case "Left-Turn Green":
      light = GreenLightLeftIMG;
      break;
    default:
      light = RedLightIMG;
  }

  return (
    <div className="light-container">
      <h3>Traffic Light</h3>
      <img className="vehicle-traffic-image" src={light} alt="Traffic Light" />
      <div className="traffic-controls-container">
        <button value="Green" onClick={onLightStatusChange}>
          Green
        </button>
        <button value="Yellow" onClick={onLightStatusChange}>
          Yellow
        </button>
        <button value="Red" onClick={onLightStatusChange}>
          Red
        </button>
        <button value="Left-Turn Green" onClick={onLightStatusChange}>
          Left-Turn Green
        </button>
      </div>
    </div>
  );
}

export default TrafficControlDevice;
