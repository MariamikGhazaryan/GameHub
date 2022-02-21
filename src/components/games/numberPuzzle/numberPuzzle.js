import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import Display from "./components/presentation/Display";
import Button from "./components/containers/ButtonMove";
import {
  ButtonPlay,
  ButtonReset
} from "./components/containers/ButtonGameControl";

import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';


class NumberPuzzle extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {store} = this.props;

    return (
      <Grid
        className={
          "game" + (store.game.playing ? " playing" : " not-playing")
        }
      >
        <Row>
          <Col>
            <p>
              <h1 className={"text-center"}> Organize </h1>
            </p>
            <p class="display">
              <Display label="Score" value={store.game.moviments} />
            </p>
          </Col>
        </Row>

        {store.grid.map((line, lineIndex) => {
          return (
            <Row>
              {line.map((colValue, colIndex) => {
                return (
                  <Col
                    xs={12 / store.grid[0].length}
                    sm={12 / store.grid[0].length}
                  >
                    <Button row={lineIndex} col={colIndex} isPlaying={store.game.playing}>
                      {colValue}
                    </Button>
                  </Col>
                );
              })}
            </Row>
          );
        })}
        <Row>
          <p />
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
                <Col>
                  <ButtonReset />
                </Col>
              </Row>
            );
          }
        })()}
      </Grid>
    );
  }
}

function mapStateToProps(state) {
	return {
		store: state.NumberPuzzle,
	};
}

export default connect(mapStateToProps)(NumberPuzzle);