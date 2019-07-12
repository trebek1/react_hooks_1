import React, { useState } from "react";
import PICTURES from "./data/pictures";
import { useDynamicTransition } from "./hooks";

const SECONDS = 1000;
const minimumDelay = 1 * SECONDS;
const minimumIncrement = 1;

function Gallery() {
  const [delay, setDelay] = useState(3 * SECONDS);
  const [increment, setIncrement] = useState(1);
  const index = useDynamicTransition({
    delay,
    increment,
    length: PICTURES.length
  });
  const updateDelay = event => {
    setDelay(
      delay < minimumDelay ? minimumDelay : Number(event.target.value) * SECONDS
    );
  };
  const updateIncrement = event => {
    const increment = Number(event.target.value);
    setIncrement(increment < minimumIncrement ? minimumIncrement : increment);
  };
  return (
    <div className="Gallery">
      <img src={PICTURES[index].image} alt="gallery" />
      <div className="multiform">
        Gallery Transition Delay (seconds):
        <input onChange={updateDelay} type="number" />
        <div>
          Gallery Increment:
          <input type="number" onChange={updateIncrement} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
