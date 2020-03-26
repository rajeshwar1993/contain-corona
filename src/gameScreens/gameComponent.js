import React, { useState, useEffect } from "react";
import clsx from "clsx";

let interval;

const GameScreen = ({ speed, updateGameState }) => {
  const [currentPosition, updateCurrentPosition] = useState(0);
  const [isStarted, toggleIsStarted] = useState(false);
  const [time, updateTime] = useState(0);
  const [tries, updateTries] = useState(0);
  const [message, updateMessage] = useState("Could not catch it!!!");
  const [hasWon, toggleHasWon] = useState(false);

  let boxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const speedMap = { 1: 1000, 2: 800, 3: 600, 4: 400, 5: 200, 6: 100 };
  let s = speedMap[speed];

  useEffect(() => {
    if (interval) {
      clearInterval(interval);
    }
    if (isStarted) {
      interval = setInterval(() => {
        updateCurrentPosition(Math.floor(Math.random() * 10));
      }, s);
    } else {
      if (currentPosition === 4) {
        updateMessage("You WON!!!!!");
        toggleHasWon(true);
      }
    }
  }, [isStarted]);

  return (
    <div className={"game-holder"}>
      <div>
        <h3>Stop the virus in the red circle!!</h3>
        <button
          className={"btn btn-success"}
          onClickCapture={() => {
            updateGameState(1);
          }}
        >
          New Game
        </button>
      </div>
      <div className={clsx("data-section", hasWon ? "winner" : "looser")}>
        <div className={"time"}>
          <span>{"Time(s): " + time}</span>
        </div>
        <div className={"message"}>
          <span>{message}</span>
        </div>
        <div className={"tries"}>
          <span>{"Tries: " + tries}</span>
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
        className={"btn btn-primary btn-block catch"}
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
