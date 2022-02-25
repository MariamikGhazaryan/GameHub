import "./game-over.css";
import {useSelector} from "react-redux";
import {tetrisSelector, userSelector} from "../../../../redux/selectors";
import React, {useEffect} from "react";
import {addGameScore} from "../../../../helpers/helper";

export default function GameOver() {
    const {score} = useSelector(tetrisSelector);
    const {currentUser} = useSelector(userSelector);

    useEffect(() => {
        addGameScore(currentUser.id, 'Tetris', score);
    }, []);

    return <div className="game-over">Game Over</div>;
}
