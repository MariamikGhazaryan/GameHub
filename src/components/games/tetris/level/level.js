import "./level.css";
import { useDispatch, useSelector } from "react-redux";
import { tetrisSelector } from "../../../../redux/selectors";
import { useEffect, useState } from "react";
import { intervalAction } from "../../../../redux/ducks/TetrisDuck";

export default function Level() {
  const { clearedRowsCount } = useSelector(tetrisSelector);
  const dispatch = useDispatch();
  const [level, setLevel] = useState(1);

  useEffect(() => {
    const newLevel = Math.round(clearedRowsCount / 10) + 1;
    if (level < newLevel) {
      setLevel(newLevel);
      dispatch(
        intervalAction({
          interval: 1000 / newLevel,
        })
      );
    }
  }, [clearedRowsCount]);
  return <div className="level"> Level : {level} </div>;
}
