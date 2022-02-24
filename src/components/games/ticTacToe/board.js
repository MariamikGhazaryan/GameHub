import Square from './square';
import './ticTacToe.css';
import React from "react";

const Board = ({squares, click}) => {
    return (
        <div className='board'>
            {
                squares.map((square, i) => (
                    <Square key={i} value={square} clickBtn={() => click(i)}/>
                ))
            }
        </div>
    )
}

export default Board;
