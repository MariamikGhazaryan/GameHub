import "./cell.css";
import { Tetrominoes } from "../tetrominoes";
export default function Cell({ type }) {
  const color = Tetrominoes[type].color;
  return <div style={{ background: color, opacity: 0.8 }}></div>;
}
