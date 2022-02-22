import "./win.css";
import winner from "../images/winner.png";
import Restart from "../restart/restart";
import { useEffect } from 'react';
import {  useSelector } from "react-redux";
import { hangManSelector, userSelector } from "../../../../redux/selectors";
import { addScore } from "../../../../helpers/api";

export default function Win() {
  const { guessedLetters } = useSelector(hangManSelector);
  const { currentUser } = useSelector(userSelector);

  useEffect(() => {
    const body = {
      userId: currentUser.id,
      game: 'HangMan',
      score: guessedLetters.filter((item) => item).length
    }
    addScore(`scores`, body).then()
  }, []);
  
  return (
    <div>
      <img className="winnerImage" src={winner} />
      <Restart />
    </div>
  );
}
