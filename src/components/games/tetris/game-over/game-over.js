import "./game-over.css";
import {useSelector} from "react-redux";
import {addScore} from "../../../../helpers/api";
import {tetrisSelector, userSelector} from "../../../../redux/selectors";
import React, {useEffect} from "react";

export default function GameOver() {
    const {score} = useSelector(tetrisSelector);
    const {currentUser} = useSelector(userSelector);

    useEffect(() => {
        const body = {
            userId: currentUser.id,
            game: 'Tetris',
            score: score
        }
        addScore(`scores`, body).then()
    }, []);

    return <div className="game-over">Game Over</div>;
}
