import { useState } from "react"


const INITIAL_VALUE = Array(9).fill(null);
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const useTicTocTia = () => {

    const [board, setBoard] = useState(INITIAL_VALUE);
    const [isXNext, setIsXNext] = useState(true);

    const calculateWinner = (currentBoard) => {
      for(var i =0; i<WINNING_COMBINATIONS.length; i++){
        const [a, b, c] = WINNING_COMBINATIONS[i];
        if(currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]){
            return currentBoard[a];
        }
      }
      return null;
    }
    const handleClick = (index) => {
      const winner = calculateWinner(board);
      if(winner || board[index]){
        return 
      }
      const newBoard = [...board];
      newBoard[index] = isXNext ? 'X' : 'O';
      setIsXNext(!isXNext);
      setBoard(newBoard);
    }
    
   const getStatusMessage = () => {
    //winner
    const winner = calculateWinner(board);
    if(winner){
        return `Winner is ${winner}`
    }
    //draw
    if(!board.includes(null)){
        return 'Draw';
    }
    // who's turn

    return `${isXNext ? 'X' : 'O'} turn`
}
    return {board, handleClick, getStatusMessage};
}
export default useTicTocTia;