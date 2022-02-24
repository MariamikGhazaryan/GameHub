import {useSelector} from "react-redux";
import "./game-over.css";
import Restart from "../restart/restart";
import {hangManSelector, userSelector} from "../../../../redux/selectors";
import {addScore} from "../../../../helpers/api";
import React, {useEffect} from 'react';

export default function GameOver() {
    const {word} = useSelector(hangManSelector);
    const {guessedLetters} = useSelector(hangManSelector);
    const {currentUser} = useSelector(userSelector);

    useEffect(() => {
        const body = {
            userId: currentUser.id,
            game: 'HangMan',
            score: guessedLetters.filter((item) => item).length
        };
        addScore(`scores`, body).then();
    }, []);

    return (
        <div>
            <div className="gameOver">Game Over</div>
            <div className="correctWord">
                Correct word was <span style={{color: "red"}}>{word}</span>.&#128546;
            </div>
            <Restart/>
        </div>
    );
}
