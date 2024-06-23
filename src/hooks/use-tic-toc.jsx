import React, { useState } from "react";

const INITIAL_VALUE = [...Array(9).fill(null)];
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const useTicToc = () => {
  const [board, setBoard] = useState(INITIAL_VALUE);
  const [isXNext, setIsXNext] = useState(true);

  const calcuclateWinner = (newBoard) => {
    for (var i = 0; i < WINNING_COMBINATIONS.length; i++) {
      const [a, b, c] = WINNING_COMBINATIONS[i];
      if (
        newBoard[a] &&
        newBoard[a] == newBoard[b] &&
        newBoard[a] == newBoard[c]
      ) {
        return newBoard[a];
      }
    }
  };

  const clickBoard = (idx) => {
    const tempBoard = [...board];
    if(calcuclateWinner(tempBoard) || board[idx]){
      return
    }

    tempBoard[idx] = isXNext ? "X" : "O";
    setBoard(tempBoard);
    setIsXNext(!isXNext);
  };
  const getStatusMessage = () => {
    const newBoard = [...board];
    const winner = calcuclateWinner(newBoard);
    if (winner) {
      return `Winner is ${winner}`;
    }
    if (!board.includes(null)) {
      return "DRAW";
    }
    return `Next Turn  ${isXNext ? "X" : "0"}`;
  };
  return { board, clickBoard, getStatusMessage };
};

export default useTicToc;
