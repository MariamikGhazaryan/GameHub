import React, {useEffect, useState} from 'react';
import CreateBoard from '../../utils/createBoard';
import {revealed} from "../../utils/reveal";
import Cell from './cell/cell';
import './board.css';

const ROW = 10;
const COlUMN = 10;
const MINES = 20;
const NO_MINES_CELLS_QUANTITY = ROW * COlUMN - MINES;

function Board() {
    const [grid, setGrid] = useState([]);
    const [nonMinecount, setNonMinecount] = useState(0);
    const [mineLocation, setmineLocation] = useState([]);


    useEffect(() => {

        freshBoard();
    }, []);

    const freshBoard = () => {
        const newBoard = CreateBoard(ROW, COlUMN, MINES);
        setNonMinecount(NO_MINES_CELLS_QUANTITY);
        setmineLocation(newBoard.mineLocation);
        setGrid(newBoard.board);
    }
    const updateFlag = (e, x, y) => {
        e.preventDefault();
        let newGrid = JSON.parse(JSON.stringify(grid));
        newGrid[x][y].flagged = true;
        console.log(newGrid[x][y]);
        setGrid(newGrid);
    }
    const newfresh = () => {
        freshBoard();
    }
    const revealcell = (x, y) => {
        let newGrid = JSON.parse(JSON.stringify(grid));
        if (newGrid[x][y].value === "X") {
            for (let i = 0; i < mineLocation.length; i++) {
                newGrid[mineLocation[i][0]][mineLocation[i][1]].revealed = true;
            }
            setGrid(newGrid);
            setTimeout(newfresh, 2000);
        }
        if (nonMinecount === 0) {
            setTimeout(newfresh, 2000);
        } else {
            let revealedboard = revealed(newGrid, x, y, nonMinecount);
            setGrid(revealedboard.arr);
            setNonMinecount(revealedboard.newNonMines);
        }

    }

    return (
        <div className="parent">
            <div>
                <h3> score - {NO_MINES_CELLS_QUANTITY - nonMinecount} </h3>
                <h3> Non-Mines - {nonMinecount} </h3>
                {grid.map((singlerow, index1) => {
                    return (
                        <div className='sapper_board' key={index1}>
                            {singlerow.map((singlecol, index2) => {
                                return <Cell details={singlecol} key={index2} updateFlag={updateFlag}
                                             revealcell={revealcell}/>
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Board;
