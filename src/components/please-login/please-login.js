import "./please-login.css";
import useState from "react-hook-use-state";
import {Modal} from "../modal/modal";

export default function PleaseLogin() {
  return (
    <Modal show={true}>
      Please <a className="url-to-login" href="../login">Log In</a> for playing a game.
    </Modal>
  );
}
