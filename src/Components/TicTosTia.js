import React from 'react'
import useTicToc from '../hooks/use-tic-toc'

const TicTosTia = () => {
    const { board, clickBoard, getStatusMessage } = useTicToc();
    return (
        <div>
            <h1>TicTocTia Problem</h1>
            <h2>{getStatusMessage()}</h2>
            <div className='board'>
                {
                    board.map((b, idx) => {
                        return <button className='board-box'
                            onClick={() => clickBoard(idx)}
                            disabled={b !== null}
                            key={idx}
                        >{b}</button>
                    })
                }
            </div>
        </div>
    )
}

export default TicTosTia