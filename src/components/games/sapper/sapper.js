import React from 'react';
import Board from './sapper-game/board/board';
import './sapper.css';

const Sapper = () => (

    <div className='sapper'>
        <div className="heading">
            <h1 className="sapper-title">MineSweeper</h1>
        </div>
        <div className="aligned">
            <Board/>
        </div>
    </div>
)

export default Sapper;
