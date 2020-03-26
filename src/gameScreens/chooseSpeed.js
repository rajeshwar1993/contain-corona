import React from "react";

const ChooseSpeed = ({ gameSpeed, updateGameSpeed, updateGameState }) => {
  return (
    <div className={"game-speed-holder"}>
      <div>
        <h3>Choose dificulty:</h3>
      </div>
      <div className={"btn-holder"}>
        <button
          className={"btn btn-success"}
          onClickCapture={() => {
            updateGameSpeed(1);
            updateGameState(3);
          }}
        >
          Toddler
        </button>
        <button
          className={"btn btn-success"}
          onClickCapture={() => {
            updateGameSpeed(2);
            updateGameState(3);
          }}
        >
          Kid
        </button>
        <button
          className={"btn btn-success"}
          onClickCapture={() => {
            updateGameSpeed(3);
            updateGameState(3);
          }}
        >
          Puberty
        </button>
        <button
          className={"btn btn-warning"}
          onClickCapture={() => {
            updateGameSpeed(4);
            updateGameState(3);
          }}
        >
          Lost virginity
        </button>
        <button
          className={"btn btn-warning"}
          onClickCapture={() => {
            updateGameSpeed(5);
            updateGameState(3);
          }}
        >
          Married
        </button>
        <button
          className={"btn btn-danger"}
          onClickCapture={() => {
            updateGameSpeed(6);
            updateGameState(3);
          }}
        >
          Too late to be saved
        </button>
      </div>
    </div>
  );
};

export default ChooseSpeed;
