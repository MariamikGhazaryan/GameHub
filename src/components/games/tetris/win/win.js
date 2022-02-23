import "./win.css";
import {useSelector} from "react-redux";
import {addScore} from "../../../../helpers/api";
import {tetrisSelector, userSelector} from "../../../../redux/selectors";
import {useEffect} from "react";

export default function Win() {
    const {score} = useSelector(tetrisSelector);
    const {currentUser} = useSelector(userSelector);

    useEffect(() => {
        const body = {
            userId: currentUser.id,
            game: 'Tetris',
            score: score
        }
        addScore(`scores`, body).then()
    }, []);

    return <div className="win">Win!</div>;
}
