import img0 from "../images/0.png";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";

import "./hangman-picture.css";
import {useSelector} from "react-redux";
import {hangManSelector} from "../../../../redux/selectors";
import React from "react";

export default function HangmanPicture() {
    const {wrongLetters, guessedLetters} = useSelector(hangManSelector);
    const pictures = [img0, img1, img2, img3, img4, img5, img6];

    const isWin = () => guessedLetters.filter((item) => !item).length === 0;

    return (
        <div>
            {!isWin() && (
                <img className="picture"
                     alt="Hangman"
                     src={pictures[wrongLetters.length]}/>
            )}
        </div>
    );
}
