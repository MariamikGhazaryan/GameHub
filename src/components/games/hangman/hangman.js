import { useEffect } from "react";
import "./hangman.css";
import WordPlaceholder from "./word-placeholder/word-placeholder";
import Letters from "./letters/letters";
import { useDispatch, useSelector } from "react-redux";
import {
  guessedLettersAction,
  wordAction,
  wrongLettersAction,
} from "../../../redux/ducks/HangManDuck";
import { hangManSelector } from "../../../redux/selectors";
import GameOver from "./game-over/game-over";
import Win from "./win/win";
import HangmanPicture from "./hangman-picture/hangman-picture";
import Score from "./score/score";

export default function Hangman() {
  const { wrongLetters, guessedLetters, restart } =
    useSelector(hangManSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word?number=1&lang=en")
      .then((res) => res.json())
      .then((resJson) => {
        const randomWord = resJson[0].toLowerCase();
        dispatch(
          guessedLettersAction({
            guessedLetters: new Array(randomWord.length).fill(null),
          })
        );
        dispatch(wordAction({ word: randomWord }));
      });
    return () => {
      dispatch(
        guessedLettersAction({
          guessedLetters: [],
        })
      );
      dispatch(
        wrongLettersAction({
          wrongLetters: [],
        })
      );
      dispatch(
        wordAction({
          word: "",
        })
      );
    };
  }, [restart]);

  const isGameOver = () => wrongLetters.length === 6;
  const isWin = () =>
    guessedLetters.length &&
    guessedLetters.filter((item) => !item).length === 0;

  return (
    <div className="container">
      <h1>Hangman</h1>
      <div>
        <HangmanPicture />
        {!isGameOver() && !isWin() && (
          <>
            <WordPlaceholder />
            <Letters />
            <Score />
          </>
        )}
        {isGameOver() && <GameOver />}
        {isWin() && <Win />}
      </div>
    </div>
  );
}
