import "./myAccount.css";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors";
import { changeCurrentUserAction } from "../../redux/ducks/UserDuck";
import { useNavigate } from "react-router-dom";
import { deleteUser, getUser } from "../../helpers/api";
import { useEffect, useState } from "react";
import { getScoresByUserId } from "../../helpers/api";

const MyAccount = () => {
  const { currentUser } = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [scores, setScores] = useState([]);

  useEffect(() => {
    getScoresByUserId(`scores`, currentUser.id)
      .then(res => setScores(res.data));
  }, []);

  const handleDeleteAccount = () => {
    dispatch(
      changeCurrentUserAction({
        currentUser: null,
      })
    );
    localStorage.removeItem("user");

    deleteUser(`users/${currentUser.id}`).then();
    scores.forEach(item => deleteUser(`scores/${item.id}`).then());
    navigate("../registration");
  };

  return (
    <div className="myAccount">
      <div className="userCard">
        <div>FirstName : {currentUser.firstName}</div>
        <div>LastName : {currentUser.lastName}</div>
      </div>
      <div>{scores.map(item => <div className="scoreItem" key={item.id}>{item.game} : {item.score}</div>)}</div>

      <button className="deleteAccountButton" onClick={handleDeleteAccount}>Delete account</button>
    </div>
  );
};

export default MyAccount;
