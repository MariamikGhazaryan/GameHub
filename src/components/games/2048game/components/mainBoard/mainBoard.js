import React, { Component } from 'react';
import TileView from '../tileView/tileView';
import Cell from '../cage/cage';
import { EndGame } from '../endGame/endGame';
import './mainBoard.css';
import {userSelector} from '../../../../../redux/selectors';
import { connect } from "react-redux";
import {addGameScore} from '../../../../../helpers/helper';

const rotateLeft = function (matrix) {
	const rows = matrix.length;
	const columns = matrix[0].length;
	const res = [];
	for (let row = 0; row < rows; ++row) {
		res.push([]);
		for (let column = 0; column < columns; ++column) {
			res[row][column] = matrix[column][columns - row - 1];
		}
	}
	return res;
};

const Tile = function (value, row, column) {
	this.value = value || 0;
	this.row = row || -1;
	this.column = column || -1;
	this.oldRow = -1;
	this.oldColumn = -1;
	this.markForDeletion = false;
	this.mergedInto = null;
	this.id = Tile.id++;
};

Tile.id = 0;
Tile.prototype.isNew = function () {
	return this.oldRow === -1 && !this.mergedInto;
};

Tile.prototype.hasMoved = function () {
	return (
		(this.fromRow() !== -1 &&
			(this.fromRow() !== this.toRow() ||
				this.fromColumn() !== this.toColumn())) ||
		this.mergedInto
	);
};

Tile.prototype.fromRow = function () {
	return this.mergedInto ? this.row : this.oldRow;
};

Tile.prototype.fromColumn = function () {
	return this.mergedInto ? this.column : this.oldColumn;
};

Tile.prototype.toRow = function () {
	return this.mergedInto ? this.mergedInto.row : this.row;
};

Tile.prototype.toColumn = function () {
	return this.mergedInto ? this.mergedInto.column : this.column;
};

const Board = function () {
	this.tiles = [];
	this.cells = [];
	for (let i = 0; i < Board.size; ++i) {
		this.cells[i] = [
			this.addTile(),
			this.addTile(),
			this.addTile(),
			this.addTile(),
		];
	}
	this.addRandomTile();
	this.setPositions();
	this.won = false;
};

Board.prototype.addTile = function () {
	const res = new Tile();
	Tile.apply(res, arguments);
	this.tiles.push(res);
	return res;
};

Board.size = 4;
Board.prototype.score = 0;

Board.prototype.moveLeft = function () {
	let hasChanged = false;
	for (let row = 0; row < Board.size; ++row) {
		const currentRow = this.cells[row].filter((tile) => tile.value !== 0);
		const resultRow = [];
		for (let target = 0; target < Board.size; ++target) {
			let targetTile = currentRow.length ? currentRow.shift() : this.addTile();
			if (currentRow.length > 0 && currentRow[0].value === targetTile.value) {
				const tile1 = targetTile;
				targetTile = this.addTile(targetTile.value);
				tile1.mergedInto = targetTile;
				const tile2 = currentRow.shift();
				tile2.mergedInto = targetTile;
				targetTile.value += tile2.value;
				this.score += targetTile.value;
			}
			resultRow[target] = targetTile;
			this.won |= targetTile.value === 2048;
			hasChanged |= targetTile.value !== this.cells[row][target].value;
		}
		this.cells[row] = resultRow;
	}
	return hasChanged;
};

Board.prototype.setPositions = function () {
	this.cells.forEach((row, rowIndex) => {
		row.forEach((tile, columnIndex) => {
			tile.oldRow = tile.row;
			tile.oldColumn = tile.column;
			tile.row = rowIndex;
			tile.column = columnIndex;
			tile.markForDeletion = false;
		});
	});
};

Board.fourProbability = 0.1;

Board.prototype.addRandomTile = function () {
	const emptyCells = [];
	for (let r = 0; r < Board.size; ++r) {
		for (let c = 0; c < Board.size; ++c) {
			if (this.cells[r][c].value === 0) {
				emptyCells.push({ r: r, c: c });
			}
		}
	}
	const index = ~~(Math.random() * emptyCells.length);
	const cell = emptyCells[index];
	const newValue = Math.random() < Board.fourProbability ? 4 : 2;
	this.cells[cell.r][cell.c] = this.addTile(newValue);
};

Board.prototype.move = function (direction) {
	// 0 -> left, 1 -> up, 2 -> right, 3 -> down
	this.clearOldTiles();
	for (let i = 0; i < direction; ++i) {
		this.cells = rotateLeft(this.cells);
	}
	const hasChanged = this.moveLeft();
	for (let j = direction; j < 4; ++j) {
		this.cells = rotateLeft(this.cells);
	}
	if (hasChanged) {
		this.addRandomTile();
	}
	this.setPositions();
	return this;
};

Board.prototype.clearOldTiles = function () {
	this.tiles = this.tiles.filter((tile) => tile.markForDeletion === false);
	this.tiles.forEach((tile) => {
		tile.markForDeletion = true;
	});
};

Board.prototype.hasWon = function () {
	return this.won;
};

Board.deltaX = [-1, 0, 1, 0];
Board.deltaY = [0, -1, 0, 1];

Board.prototype.hasLost = function () {
	let canMove = false;
	for (let row = 0; row < Board.size; ++row) {
		for (let column = 0; column < Board.size; ++column) {
			canMove |= this.cells[row][column].value === 0;
			for (let dir = 0; dir < 4; ++dir) {
				const newRow = row + Board.deltaX[dir];
				const newColumn = column + Board.deltaY[dir];
				if (
					newRow < 0 ||
					newRow >= Board.size ||
					newColumn < 0 ||
					newColumn >= Board.size
				) {
					continue;
				}
				canMove |=
					this.cells[row][column].value === this.cells[newRow][newColumn].value;
			}
		}
	}
	return !canMove;
};

class Game2048 extends Component {
	constructor(props) {
		super(props);
		this.state = { board: new Board() };
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	restartGame() {
		const score = this.state.board.score;
		const { currentUser } = this.props;
		addGameScore(currentUser.id, "Game2048", score);
		this.setState({ board: new Board() });
	}

	handleKeyDown (event) {
		if (this.state.board.hasWon()) {
			return;
		}
		if (event.keyCode >= 37 && event.keyCode <= 40) {
			event.preventDefault();
			const direction = event.keyCode - 37;
			this.setState({ board: this.state.board.move(direction) });
		}
	}

	handleTouchStart(event) {
		if (this.state.board.hasWon()) {
			return;
		}
		if (event.touches.length !== 1) {
			return;
		}
		this.startX = event.touches[0].screenX;
		this.startY = event.touches[0].screenY;
		event.preventDefault();
	}
	handleTouchEnd(event) {
		if (this.state.board.hasWon()) {
			return;
		}
		if (event.changedTouches.length !== 1) {
			return;
		}
		const deltaX = event.changedTouches[0].screenX - this.startX;
		const deltaY = event.changedTouches[0].screenY - this.startY;
		let direction = -1;
		if (Math.abs(deltaX) > 3 * Math.abs(deltaY) && Math.abs(deltaX) > 30) {
			direction = deltaX > 0 ? 2 : 0;
		} else if (
			Math.abs(deltaY) > 3 * Math.abs(deltaX) &&
			Math.abs(deltaY) > 30
		) {
			direction = deltaY > 0 ? 3 : 1;
		}
		if (direction !== -1) {
			this.setState({ board: this.state.board.move(direction) });
		}
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyDown);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyDown);
	}

	render() {
		const cells = this.state.board.cells.map((row, rowIndex) => {
			return (
				<div key={rowIndex}>
					{row.map((_, columnIndex) => (
						<Cell key={rowIndex * Board.size + columnIndex} />
					))}
				</div>
			);
		});
		const tiles = this.state.board.tiles
			.filter((tile) => tile.value !== 0)
			.map((tile) => <TileView tile={tile} key={tile.id} />);
		return (
			<div className='box'>
				<div className="exo">
					<h1 className='header-2048'>2048</h1>
					<button className='buttonScore'>Score {this.state.board.score}</button>
				</div>
				<div
					className='billing'
					onTouchStart={this.handleTouchStart.bind(this)}
					onTouchEnd={this.handleTouchEnd.bind(this)}
					tabIndex='1'
				>
					{cells}
					{tiles}
					<EndGame
						board={this.state.board}
						onRestart={this.restartGame.bind(this)}
					/>
				</div>
			</div>
		);
	}
}

export default connect(userSelector)(Game2048);
