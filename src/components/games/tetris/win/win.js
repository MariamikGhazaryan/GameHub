import "./win.css";
import {useSelector} from "react-redux";
import {tetrisSelector, userSelector} from "../../../../redux/selectors";
import React, {useEffect} from "react";
import {addGameScore} from "../../../../helpers/helper";

export default function Win() {
    const {score} = useSelector(tetrisSelector);
    const {currentUser} = useSelector(userSelector);

    useEffect(() => {
        addGameScore(currentUser.id, 'Tetris', score);
    }, []);

    return <div className="win">Win!</div>;
}
