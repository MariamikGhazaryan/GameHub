import { NavLink, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import "./games.css";

const Games = () => {
  const TicTacToe = lazy(() => import("./ticTacToe/ticTacToe"));
  const Hangman = lazy(() => import("./hangman/hangman"));
  const Sapper = lazy(() => import("./sapper/sapper"))

  return (
    <div className="games">
      <div>
        <NavLink className="navLink" to="tic-tac-toe">
          tic-tac-toe
        </NavLink>
        <NavLink className="navLink" to="hangman">
          Hangman
        </NavLink>
        <NavLink className="navLink" to="sapper">
          Sapper
        </NavLink>
      </div>
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path="tic-tac-toe" element={<TicTacToe />} />
          <Route path="hangman" element={<Hangman />} />
          <Route path="sapper" element={<Sapper />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Games;
