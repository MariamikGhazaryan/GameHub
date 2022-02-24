import React, { Component } from 'react';

export default class Tile extends Component {
	shouldComponentUpdate(nextProps) {
		if (this.props.tile !== nextProps.tile) {
			return true;
		}
		return !(!nextProps.tile.hasMoved() && !nextProps.tile.isNew());
	}
	render() {
		const tile = this.props.tile;
		const classArray = ['tile'];
		classArray.push('tile' + this.props.tile.value);
		if (!tile.mergedInto) {
			classArray.push('position_' + tile.row + '_' + tile.column);
		}
		if (tile.mergedInto) {
			classArray.push('merged');
		}
		if (tile.isNew()) {
			classArray.push('new');
		}
		if (tile.hasMoved()) {
			classArray.push('row_from_' + tile.fromRow() + '_to_' + tile.toRow());
			classArray.push(
				'column_from_' + tile.fromColumn() + '_to_' + tile.toColumn()
			);
			classArray.push('isMoving');
		}
		const classes = classArray.join(' ');
		return <span className={classes}>{tile.value}</span>;
	}
}
