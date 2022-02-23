import "./score.css";
import {useDispatch, useSelector} from "react-redux";
import {tetrisSelector} from "../../../../redux/selectors";
import {useEffect} from "react";
import {scoreAction} from "../../../../redux/ducks/TetrisDuck";

export default function Score() {
    const {clearedRowsCount, score} = useSelector(tetrisSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            scoreAction({
                score: clearedRowsCount,
            })
        );
    }, [clearedRowsCount]);
    return <div className="score-tetris">Score : {score}</div>;
}
