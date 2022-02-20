import Cell from "../cell/cell";
import "./playGround.css";
import { useSelector } from "react-redux";
import { tetrisSelector } from "../../../../redux/selectors";

export default function PlayGround() {
  const { playGround } = useSelector(tetrisSelector);
  return (
    <div className="play-field">
      {playGround.map((row) =>
        row.map((cell, index) => <Cell key={index} type={cell[0]} />)
      )}
    </div>
  );
}
