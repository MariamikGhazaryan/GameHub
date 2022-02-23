import "./level.css";
import {useDispatch, useSelector} from "react-redux";
import {tetrisSelector} from "../../../../redux/selectors";
import {useEffect} from "react";
import {intervalAction, levelAction, winAction,} from "../../../../redux/ducks/TetrisDuck";

export default function Level() {
    const {clearedRowsCount, level} = useSelector(tetrisSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        const newLevel = Math.round(clearedRowsCount / 10) + 1;
        if (level < newLevel) {
            dispatch(
                levelAction({
                    level: newLevel,
                })
            );
            dispatch(
                intervalAction({
                    interval: 1000 / newLevel,
                })
            );
            if (newLevel === 10) {
                dispatch(
                    winAction({
                        win: true,
                    })
                );
            }
        }
    }, [clearedRowsCount]);
    return <div className="level"> Level : {level} </div>;
}
