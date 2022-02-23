import "./myAccount.css";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors";
import { changeCurrentUserAction } from "../../redux/ducks/UserDuck";
import { useNavigate } from "react-router-dom";
import { deleteUser, getUser } from "../../helpers/api";
import { useEffect, useState } from "react";
import { getScoresByUserId } from "../../helpers/api";
import "../../App.css";
import {Modal} from "./../modal/modal";

const MyAccount = () => {
  const { currentUser } = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [scores, setScores] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getScoresByUserId(`scores`, currentUser.id)
      .then(res => setScores(res.data));
  }, []);

  const handleDeleteAccount = () => {
    setShowModal(true);
  };

  const deleteAccount = () => {
    dispatch(
      changeCurrentUserAction({
        currentUser: null,
      })
    );
    localStorage.removeItem("user");

    deleteUser(`users/${currentUser.id}`).then();
    scores.forEach(item => deleteUser(`scores/${item.id}`).then());
    setShowModal(false);
    navigate("../registration");
  }

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <div className="myAccount">
      <div className="userCard">
        <div>FirstName : {currentUser.firstName}</div>
        <br/>
        <div>LastName : {currentUser.lastName}</div>
      </div>
      <h2 className="my-scores"> My Scores</h2>
      <div>{scores.map(item => <div className="scoreItem" key={item.id}>{item.game} : {item.score}</div>)}</div>

      <button className="deleteAccountButton" onClick={handleDeleteAccount}>Delete account</button>
      <Modal show={showModal}>
        <div>Do you want to delete your account?</div>
        <button className="yes-button" onClick={deleteAccount}>Yes</button>
        <button className="no-button" onClick={hideModal}>No</button>
      </Modal>
    </div>
  );
};

export default MyAccount;
