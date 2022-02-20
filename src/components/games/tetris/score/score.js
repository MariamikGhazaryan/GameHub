import "./score.css";
import { useSelector } from "react-redux";
import { tetrisSelector } from "../../../../redux/selectors";

export default function Score() {
  const { clearedRowsCount } = useSelector(tetrisSelector);
  return <div className="score-tetris">Score : {clearedRowsCount}</div>;
}
