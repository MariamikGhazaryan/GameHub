import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors";
import { changeCurrentUserAction } from "../../redux/ducks/UserDuck";
import useState from "react-hook-use-state"
import {Modal} from "./../modal/modal";
import "./../../App.css";

const Header = () => {
  const { currentUser } = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  
  const handleLogOutClick = () => {
    setShowModal(true);
  };

  const logOut = () => {
    dispatch(
      changeCurrentUserAction({
        currentUser: null,
      })
    );
    localStorage.removeItem("user");
    setShowModal(false);
    navigate("../login");
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <header className="header">
        <div>
          <NavLink className="navLink" to="games">
            GAMES
          </NavLink>
          <NavLink className="navLink" to="about">
            ABOUT
          </NavLink>
        </div>
        <div>
          {currentUser && (
            <NavLink className="navLink" to="my-account">
              My Account
            </NavLink>
          )}
          {!currentUser && (
            <NavLink className="navLink" to="login">
              Login
            </NavLink>
          )}
          {!currentUser && (
            <NavLink className="navLink" to="registration">
              Registration
            </NavLink>
          )}
          {currentUser && <button onClick={handleLogOutClick}>Log Out</button>}
        </div>
      </header>
      <Modal show={showModal}>
        <div>Do you want to log out?</div>
        <button className="yes-button" onClick={logOut}>Yes</button>
        <button className="no-button" onClick={hideModal}>No</button>
      </Modal>
    </>
  );
};

export default Header;
