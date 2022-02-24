import "./restart.css";
import restartImg from "../images/restart.png";
import {restartAction, wrongLettersAction,} from "../../../../redux/ducks/HangManDuck";
import {useDispatch, useSelector} from "react-redux";
import {hangManSelector} from "../../../../redux/selectors";
import React from "react";

export default function Restart() {
    const dispatch = useDispatch();
    const {restart} = useSelector(hangManSelector);

    const handleRestartClick = () => {
        dispatch(
            restartAction({
                restart: !restart,
            })
        );
        dispatch(
            wrongLettersAction({
                wrongLetters: [],
            })
        );
    };
    return (
        <div className="restart-hangman">
            Dou you want to restart?
            <img
                className="restartImage"
                src={restartImg}
                alt="Restart"
                onClick={handleRestartClick}
            />
        </div>
    );
}
