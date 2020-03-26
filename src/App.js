import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";

import ChooseSpeed from "./gameScreens/chooseSpeed";

export default function App() {
  const [gameState, updateGameState] = useState(1);
  const [gameSpeed, updateGameSpeed] = useState(1);

  return (
    <div className="App container-fluid">
      <h1>Contain Corona!</h1>
      {gameState === 1 && (
        <div className={"new-game"}>
          <h3>Start New Game</h3>
          <button
            className={"btn btn-primary"}
            onClickCapture={() => {
              updateGameState(2);
            }}
          >
            Start
          </button>
          <span>
            <p>How to play: </p>
            <ol>
              <li>Start new game</li>
              <li>Select difficulty</li>
              <li>
                Try and stop the virus inside the red cirle in least tries and
                time.
              </li>
            </ol>
          </span>
        </div>
      )}
      {gameState === 2 && (
        <ChooseSpeed gameSpeed={gameSpeed} updateGameSpeed={updateGameSpeed} />
      )}
    </div>
  );
}
