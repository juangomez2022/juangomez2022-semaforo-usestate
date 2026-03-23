import React, { useState } from "react";

function TrafficLigth() {
  const [color, setColor] = useState("red");

  return (
    <div className="base-traffic">
       <div className="pole"></div>

        <div className="traffic-light">
          <div
            className={`red light ${color === 'red' ? 'selected' : ''}`}
            onClick={() => setColor('red')}
          ></div>

          <div
            className={`yellow light ${color === 'yellow' ? 'selected' : ''}`}
            onClick={() => setColor('yellow')}
          ></div>

          <div
            className={`green light ${color === 'green' ? 'selected' : ''}`}
            onClick={() => setColor('green')}
          ></div>
        </div>
    </div>
  );
}

export default TrafficLigth;