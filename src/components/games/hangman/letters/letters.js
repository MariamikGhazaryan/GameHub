import "./letters.css";
import { useDispatch, useSelector } from "react-redux";
import { hangManSelector } from "../../../../redux/selectors";
import {
  guessedLettersAction,
  wrongLettersAction,
} from "../../../../redux/ducks/HangManDuck";

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
export default function Letters() {
  const { guessedLetters, wrongLetters, word } = useSelector(hangManSelector);
  const dispatch = useDispatch();
  const handleLetterClick = (e) => {
    const selectedLetter = e.target.innerText.toLowerCase();
    if (word.includes(selectedLetter)) {
      for (let i = 0; i < word.length; i++) {
        if (selectedLetter === word[i]) {
          guessedLetters[i] = selectedLetter;
          dispatch(
            guessedLettersAction({
              guessedLetters: guessedLetters,
            })
          );
        }
      }
    } else {
      if (!wrongLetters.includes(selectedLetter)) {
        wrongLetters.push(selectedLetter);
        dispatch(
          wrongLettersAction({
            wrongLetters: wrongLetters,
          })
        );
      }
    }
  };

  return (
    <div>
      {letters.map((letter) => {
        return (
          <button
            disabled={
              guessedLetters.includes(letter) || wrongLetters.includes(letter)
            }
            onClick={handleLetterClick}
            key={letter}
          >
            {letter.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
