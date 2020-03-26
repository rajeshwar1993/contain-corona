import React, { useState, useEffect } from "react";
import clsx from "clsx";

let interval;

const GameScreen = ({ speed }) => {
  const [currentPosition, updateCurrentPosition] = useState(0);
  const [isStarted, toggleIsStarted] = useState(false);

  let boxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  useEffect(() => {
    if (interval) {
      clearInterval(interval);
    }
    if (isStarted) {
      interval = setInterval(() => {
        updateCurrentPosition(Math.floor(Math.random() * 10));
      }, 100);
    }
  }, [isStarted]);

  return (
    <div className={"game-holder"}>
      <h3>Stop the virus in the red box!!</h3>
      <div className={"data-section"}>
        <div className={"time"}>
          <span>{"Time"}</span>
        </div>
        <div className={"message"}>
          <span>Message</span>
        </div>
        <div className={"tries"}>
          <span>{"Tries"}</span>
        </div>
      </div>
      <div className={"game-frame row"}>
        {boxes.map((b, i) => {
          return (
            <div className={"col-4 boxes-holder"}>
              <div className={clsx("boxes", i === 4 ? "middle" : "")}>
                {currentPosition === i && <div className={"virus"} />}
              </div>
            </div>
          );
        })}
      </div>
      <button
        className={"btn btn-primary"}
        onClickCapture={() => {
          toggleIsStarted(!isStarted);
        }}
      >
        Catch it!
      </button>
    </div>
  );
};

export default GameScreen;
