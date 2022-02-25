import { NavLink, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import "./games.css";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors";
import PleaseLogin from "../please-login/please-login";


const Games = () => {
	const { currentUser } = useSelector(userSelector);

	const TicTacToe = lazy(() => import('./ticTacToe/ticTacToe'));
	const MatchGame = lazy(() => import('./matchgame/match'));
	const Hangman = lazy(() => import('./hangman/hangman'));
	const Sapper = lazy(() => import('./sapper/sapper'));
	const Tetris = lazy(() => import('./tetris/tetris'));
	const NumberPuzzle = lazy(() => import('./numberPuzzle/numberPuzzle'));
	const Game2048 = lazy(() => import('./2048game/Game2048'));
	const Genaral = lazy(() => import('./general/general'));

	return (
		<div className='games'>
			<div>
				<NavLink className='navLink' to='tic-tac-toe'>
					Tic-Tac-Toe
				</NavLink>
				<NavLink className='navLink' to='match_game'>
					Match_game
				</NavLink>
				<NavLink className='navLink' to='hangman'>
					Hangman
				</NavLink>
				<NavLink className='navLink' to='tetris'>
					Tetris
				</NavLink>
				<NavLink className='navLink' to='sapper'>
					Sapper
				</NavLink>
				<NavLink className='navLink' to='number-puzzle'>
					Number puzzle
				</NavLink>
				<NavLink className='navLink' to='game-2048'>
					2048
				</NavLink>
			</div>
			<div className='games-container'>
				<Suspense fallback={<div>...Loading</div>}>
					<Routes>
						<Route
							path='tic-tac-toe'
							element={currentUser ? <TicTacToe /> : <PleaseLogin />}
						/>
						<Route
							path='match_game'
							element={currentUser ? <MatchGame /> : <PleaseLogin />}
						/>
						<Route
							path='hangman'
							element={currentUser ? <Hangman /> : <PleaseLogin />}
						/>
						<Route
							path='sapper'
							element={currentUser ? <Sapper /> : <PleaseLogin />}
						/>
						<Route
							path='tetris'
							element={currentUser ? <Tetris /> : <PleaseLogin />}
						/>
						<Route path='number-puzzle'
                   element={currentUser ? <NumberPuzzle /> : <PleaseLogin />}
						/>
						<Route
							path='game-2048'
							element={currentUser ? <Game2048 /> : <PleaseLogin />}
						/>
						<Route path='/' element={<Genaral />} />
					</Routes>
				</Suspense>
			</div>
		</div>
	);
};

export default Games;
