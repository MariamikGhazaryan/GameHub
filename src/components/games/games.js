import { NavLink, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import "./games.css";


const Games = () => {
  const TicTacToe = lazy(() => import("./ticTacToe/ticTacToe"));
  const Hangman = lazy(() => import("./hangman/hangman"));
  const MatchGame = lazy(() => import("./matchgame/match"));


  return (
    <div className="games">
      <div>
        <NavLink className="navLink" to="tic-tac-toe">
          Tic-Tac-Toe
        </NavLink>
        <NavLink className="navLink" to="match_game">
          Match_game
        </NavLink>
        <NavLink className="navLink" to="hangman">
          Hangman
        </NavLink>
      </div>
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path="tic-tac-toe" element={<TicTacToe />} />
          <Route path="match_game" element={<MatchGame />} />
          <Route path="hangman" element={<Hangman />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Games;
