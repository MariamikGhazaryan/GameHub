import "./score.css";
import {useSelector} from "react-redux";
import {hangManSelector} from "../../../../redux/selectors";

export default function Score() {
    const {guessedLetters} = useSelector(hangManSelector);
    return (
        <div className="score">
            Score : {guessedLetters.filter((item) => item).length}
        </div>
    );
}
