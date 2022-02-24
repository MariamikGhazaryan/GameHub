import './ticTacToe.css';
import React from "react";

const Square = ({value, clickBtn}) => {
    return (
        <button className='square' onClick={clickBtn}>{value}</button>
    )
}

export default Square;
