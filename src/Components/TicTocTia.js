import React from 'react'
import useTicTocTia from '../hooks/use-tic-toc-tie'
import './index.css';
const TicTocTia = () => {
    const { board, handleClick, getStatusMessage } = useTicTocTia();
    return (
        <div>
           <h1>TicTocTia Problem</h1> 
            <h2>{getStatusMessage()}</h2>
            <div className="board">
                {board.map((b, index) => {
                    return <button
                        key={index + 1}
                        className="board-box"
                        onClick={() => { handleClick(index) }}
                        disabled ={b !== null}
                    >
                        {b}
                    </button>
                })}
            </div>

        </div>
    )
}

export default TicTocTia