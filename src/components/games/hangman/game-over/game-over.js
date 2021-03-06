import {useSelector} from "react-redux";
import "./game-over.css";
import Restart from "../restart/restart";
import {hangManSelector, userSelector} from "../../../../redux/selectors";
import React, {useEffect} from 'react';
import {addGameScore} from "../../../../helpers/helper";

export default function GameOver() {
    const {word} = useSelector(hangManSelector);
    const {guessedLetters} = useSelector(hangManSelector);
    const {currentUser} = useSelector(userSelector);

    useEffect(() => {
        addGameScore(currentUser.id, 'HangMan', guessedLetters.filter((item) => item).length)
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
