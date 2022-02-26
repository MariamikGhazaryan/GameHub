import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import {connect} from 'react-redux';

import Display from './components/presentation/Display';
import Button from './components/containers/ButtonMove';
import {ButtonPlay, ButtonReset,} from './components/containers/ButtonGameControl';
import { addGameScore } from "../../../helpers/helper";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NumberPuzzle = (props) => {
	console.log(props, 7777)

	const { store } = props.store;
	const { currentUser } = props.currentUser;
	console.log(currentUser)
		return (
			<Grid
				className={
					'puzzle-game' + (store.game.playing ? ' playing' : ' not-playing')
				}
			>
				<Row>
					<Col>
						<div>
							<h1 className='number-puzzle-header'> Organize </h1>
						</div>
						<div className='display'>
							<Display label='Score' value={store.game.moviments} />
						</div>
					</Col>
				</Row>

                {store.grid.map((line, lineIndex) => {
                    return (
                        <Row key={lineIndex}>
                            {line.map((colValue, colIndex) => {
                                return (
                                    <Col
                                        key={colIndex}
                                        xs={12 / store.grid[0].length}
                                        sm={12 / store.grid[0].length}
                                    >
                                        <Button
                                            key={colIndex}
                                            row={lineIndex}
                                            col={colIndex}
                                            isPlaying={store.game.playing}
                                        >
                                            {colValue}
                                        </Button>
                                    </Col>
                                );
                            })}
                        </Row>
                    );
                })}
                <Row>
                    <p/>
                </Row>

				{(() => {
					if (!store.game.playing) {
						return (
							<Row>
								<Col>
									<ButtonPlay />
								</Col>
							</Row>
						);
					} else {
						return (
							<Row>
								<Col onClick={() => addGameScore(currentUser.id, "NumberPuzzle", store.game.moviments)}>
									<ButtonReset />
								</Col>
							</Row>
						);
					}
				})()}
			</Grid>
		);
}

function mapStateToProps(state) {
    return {
        store: {store: state.NumberPuzzle},
				currentUser: state.UserDuck,
    };
}

export default connect(mapStateToProps)(NumberPuzzle);
