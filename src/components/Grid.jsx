import { useState } from "react";
import Box from "./Box";
import "./Box.css";
import checkWinner from "../helpers/winner";
import isGameDraw from "../helpers/draw";

const Grid = ({ numberOfCards }) => {
  const grid = Array(numberOfCards).fill("");
  const [turn, setTurn] = useState(false);
  const [box, setBox] = useState(grid);
  const [winner, setWinner] = useState(null);
  const [isGameDrawn, setIsGameDrawn] = useState(false);

  const playGame = (index) => {
    const currentPlayer = turn ? "O" : "X";
    box[index] = currentPlayer;
    const gameWinner = checkWinner(box, currentPlayer);
    if (gameWinner.symbol) {
      setWinner(gameWinner.symbol);
    } else {
      setIsGameDrawn(isGameDraw(box, currentPlayer));
    }
    setBox([...box]);
    setTurn(!turn);
  };
  const resetGame = () => {
    setBox(grid);
    setTurn(false);
    setWinner(null);
    setIsGameDrawn(false);
  };

  return (
    <div className="grid-wrapper">
      {winner && (
        <>
          <h1 className="game-winner"> Winner is {winner} </h1>
          <button className="reset" onClick={resetGame}>
            Reset game
          </button>
        </>
      )}
      {isGameDrawn && (
        <>
          <h1 className="game-drawn"> Game is drawn</h1>
          <button className="reset" onClick={resetGame}>
            Reset game
          </button>
        </>
      )}

      {!winner && !isGameDrawn && (
        <div className="turn-status">
          <h2>Current Turn : {turn ? "O" : "X"}</h2>
          <h2>Next Turn : {!turn ? "O" : "X"}</h2>
        </div>
      )}
      <div className="grid">
        {box.map((item, index) => {
          return (
            <Box
              key={index}
              onPlayGame={playGame}
              player={item}
              idx={index}
              gameFinish={winner ? true : false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
