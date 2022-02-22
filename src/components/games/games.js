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
  const Sapper = lazy(() => import("./sapper/sapper"))
  const Tetris = lazy(() => import("./tetris/tetris"));
  const NumberPuzzle = lazy(() => import("./numberPuzzle/numberPuzzle"));
  const LeaderBoard = lazy(() => import("./leaderboard/leaderboard"));

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
        <NavLink className="navLink" to="sapper">
          Sapper
        </NavLink>
        <NavLink className="navLink" to="tetris">
          Tetris
        </NavLink>
        <NavLink className="navLink" to="number-puzzle">
          Number puzzle
        </NavLink>
      </div>
      <div className="games-container">
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
            element={currentUser ? <Hangman /> : <PleaseLogin />} />
          <Route path="sapper" element={<Sapper />} />
          <Route path="tetris"
            element={currentUser ? <Tetris /> : <PleaseLogin />}
          />
            <Route path="number-puzzle" element={<NumberPuzzle />} />
            <Route
              path="/"
              element={<LeaderBoard />}
            />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default Games;
