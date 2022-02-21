import { NavLink, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import "./games.css";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors";
import PleaseLogin from "../please-login/please-login";

const Games = () => {
  const { currentUser } = useSelector(userSelector);

  const TicTacToe = lazy(() => import("./ticTacToe/ticTacToe"));
  const MatchGame = lazy(() => import("./matchgame/match"));
  const Hangman = lazy(() => import("./hangman/hangman"));
  const Tetris = lazy(() => import("./tetris/tetris"));

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
        <NavLink className="navLink" to="tetris">
          Tetris
        </NavLink>
      </div>
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route
            path="tic-tac-toe"
            element={currentUser ? <TicTacToe /> : <PleaseLogin />}
          />
          <Route
            path="match_game"
            element={currentUser ? <MatchGame /> : <PleaseLogin />}
          />
          <Route
            path="hangman"
            element={currentUser ? <Hangman /> : <PleaseLogin />}
          />
          <Route
            path="tetris"
            element={currentUser ? <Tetris /> : <PleaseLogin />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Games;
