import "./word-placeholder.css";
import {useSelector} from "react-redux";
import {hangManSelector} from "../../../../redux/selectors";
import React from "react";

export default function WordPlaceholder() {
    const {guessedLetters} = useSelector(hangManSelector);

    return (
        <div>
            {guessedLetters.map((letter, index) => (
                <li key={index} className="placeholder">
          <span className={letter ? "visible" : "not-visible"}>
            {letter ? letter : "-"}
          </span>
                </li>
            ))}
        </div>
    );
}
