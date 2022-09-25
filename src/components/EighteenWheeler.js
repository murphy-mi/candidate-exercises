import React from "react";
import EighteenWheelerIMG from "../assets/EighteenWheeler.png";
import { BsArrow90DegLeft, BsArrow90DegRight, BsArrowUp } from "react-icons/bs";

function EighteenWheeler() {
  return (
    <div className="eighteen-wheeler-container">
      <img
        className="eighteen-wheeler-image"
        src={EighteenWheelerIMG}
        alt="Eighteen Wheeler"
      />
      <div className="eighteen-wheeler-controls">
        <button>
          <BsArrow90DegLeft />
        </button>
        <button>
          <BsArrowUp />
        </button>
        <button>
          <BsArrow90DegRight />
        </button>
        <button>Jackknife to a Stop</button>
      </div>
    </div>
  );
}

export default EighteenWheeler;
