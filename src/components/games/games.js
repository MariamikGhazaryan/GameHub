import {NavLink, Route, Routes} from "react-router-dom";

import TicTacToe from "./ticTacToe/ticTacToe";

import './games.css';




const Games = () => (
    <div className='games'>
        <div>
            <NavLink className='navLink' to='tic-tac-toe'>tic-tac-toe</NavLink>
        </div>
        <Routes>
            <Route path="tic-tac-toe" element={<TicTacToe />} />
        </Routes>
    </div>
)

export default Games