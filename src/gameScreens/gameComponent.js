import React, { useState, useEffect } from "react";
import clsx from "clsx";

let interval;
let timePass;

const GameScreen = ({ speed, updateGameState }) => {
  const [currentPosition, updateCurrentPosition] = useState(0);
  const [isStarted, toggleIsStarted] = useState(false);
  const [time, updateTime] = useState(0);
  const [tries, updateTries] = useState(-1);
  const [message, updateMessage] = useState("Could not catch it!!!");
  const [hasWon, toggleHasWon] = useState(false);

  let boxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const speedMap = { 1: 1000, 2: 800, 3: 600, 4: 400, 5: 200, 6: 100 };
  let s = speedMap[speed];

  useEffect(() => {
    if (interval) {
      clearInterval(interval);
    }

    if (timePass) {
      clearInterval(timePass);
    }

    if (isStarted) {
      interval = setInterval(() => {
        updateCurrentPosition(Math.floor(Math.random() * 10));
      }, s);
      let t = parseFloat(time);
      timePass = setInterval(() => {
        t = t + 0.1;
        updateTime(t.toFixed(1));
        console.log("updating time", t);
      }, 100);
    } else {
      if (currentPosition === 4) {
        updateMessage("You WON!!!!!");
        toggleHasWon(true);
      } else {
        updateMessage("Keep trying");
        toggleHasWon(false);
      }
      updateTries(tries + 1);
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
          <span>{"Time: " + time + " sec"}</span>
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
      {!hasWon && (
        <button
          className={clsx(
            "btn btn-block catch",
            isStarted ? "btn-primary" : "btn-warning"
          )}
          onClickCapture={() => {
            toggleIsStarted(!isStarted);
          }}
        >
          {!isStarted ? "Start" : "Catch it!"}
        </button>
      )}
    </div>
  );
};

export default GameScreen;
