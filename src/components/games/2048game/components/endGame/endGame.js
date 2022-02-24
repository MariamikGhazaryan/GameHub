import React from 'react';
import './endGame.css';

export const EndGame = ({ board, onRestart }) => {
	let contents = '';
	if (board.hasWon()) {
		contents = 'Good Job!';
	} else if (board.hasLost()) {
		contents = 'Game Over my friend';
	}
	if (!contents) {
		return null;
	}
	return (
		<div className='overlay'>
			<p className='message'>{contents}</p>
			<button className='tryAgain' onClick={onRestart} onTouchEnd={onRestart}>
				Again ?
			</button>
		</div>
	);
};
