import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors";
import { changeCurrentUserAction } from "../../redux/ducks/UserDuck";

const Header = () => {
  const { currentUser } = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOutClick = () => {
    dispatch(
      changeCurrentUserAction({
        currentUser: null,
      })
    );
    localStorage.removeItem("user");
    navigate("../login");
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
    </>
  );
};

export default Header;
