import "./win.css";
import winner from "../images/winner.png";
import Restart from "../restart/restart";
import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {hangManSelector, userSelector} from "../../../../redux/selectors";
import {addGameScore} from "../../../../helpers/helper";

export default function Win() {
    const {guessedLetters} = useSelector(hangManSelector);
    const {currentUser} = useSelector(userSelector);

    useEffect(() => {
        addGameScore(currentUser.id, 'HangMan', guessedLetters.filter((item) => item).length);
    }, []);

    return (
        <div>
            <img className="winnerImage"
                 alt="winner"
                 src={winner}/>
            <Restart/>
        </div>
    );
}
