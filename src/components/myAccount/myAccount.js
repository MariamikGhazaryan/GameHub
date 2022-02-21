import "./myAccount.css";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors";
import { changeCurrentUserAction } from "../../redux/ducks/UserDuck";
import { useNavigate } from "react-router-dom";
import { deleteUser, getUser } from "../../helpers/api";
import { useEffect } from "react";

const MyAccount = () => {
  const { currentUser } = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteAccount = () => {
    dispatch(
      changeCurrentUserAction({
        currentUser: null,
      })
    );
    localStorage.removeItem("user");

    deleteUser(`users/${currentUser.id}`).then();
    navigate("../registration");
  };
  return (
    <div className="myAccount">
      <div>FirstName : {currentUser.firstName}</div>
      <div>LastName : {currentUser.lastName}</div>
      <button onClick={handleDeleteAccount}>Delete account</button>
    </div>
  );
};

export default MyAccount;
