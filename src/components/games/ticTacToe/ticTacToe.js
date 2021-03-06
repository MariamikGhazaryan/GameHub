import React, {useEffect, useState} from 'react';
import Board from './board';
import {calculateWinner} from '../../../helpers/helper_tictacwinner'
import './ticTacToe.css';
import {useSelector} from "react-redux";
import {userSelector} from "../../../redux/selectors";
import {addGameScore} from "../../../helpers/helper";

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);
    const {currentUser} = useSelector(userSelector);

    useEffect(() => {
        if (winner) {
            addGameScore(currentUser.id, 'Tic-Tac-Toe', 1);
        }

    }, [winner]);

    const handleButton = (ind) => {
            const boardCopy = [...board];
            if (winner || boardCopy[ind]) {
                return;
            }
            boardCopy[ind] = xIsNext ? 'X' : 'O';
            setBoard(boardCopy);
            setXIsNext(!xIsNext);
        }
    ;
    const reStart = () => {
        if(!board.filter(item => !item).length && !winner) {
            addGameScore(currentUser.id, 'Tic-Tac-Toe', 0);
        }
        setBoard(Array(9).fill(null))
    };

    return (

        <div className='wrapper'>
            <h1 className='info'>Tic Tac Toe</h1>
            <button className='restart' onClick={reStart}>Restart</button>
            <Board squares={board} click={handleButton}/>
            <p className='info'>
                {winner ? 'Winner ' + winner : (xIsNext ? 'Player 1 to move' : 'Player 2 to move')}
            </p>
            <p className='info'>
                Score : {winner ? 1 : 0}
            </p>
        </div>

    )
};

export default TicTacToe
