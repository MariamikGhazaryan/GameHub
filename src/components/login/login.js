import {useDispatch} from "react-redux";
import {login} from "../../helpers/api";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {changeCurrentUserAction} from "../../redux/ducks/UserDuck";
import './login.css';

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthorized, setIsAuthorized] = useState(true);

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    };

    const handleLoginButton = (e) => {
        e.preventDefault();
        const auth = {
            email: email,
            password: password,
        };

        login(`users`, auth)
            .then((res) => {
                if (res) {
                    setIsAuthorized(true);
                    localStorage.setItem("user", JSON.stringify(res["user"]));

                    dispatch(
                        changeCurrentUserAction({
                            currentUser: res["user"],
                        })
                    );
                    navigate("../games");
                }
            })
            .catch((err) => {
                if (err.toJSON().status === 400) {
                    setIsAuthorized(false);
                }
            });
    };

    const navigateToRegistration = () => {
        navigate("../registration");
    }

    return (
        <div>
            <div className="login-container">
                <h2 className="login-title">Login</h2>
                <form onSubmit={handleLoginButton}>
          <span>
            <b>E-mail</b>
          </span>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={handleEmailInput}
                        required
                    />

                    <span>
            <b>Password</b>
          </span>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={handlePasswordInput}
                        required
                    />
                    {isAuthorized === false && (
                        <div className="warning">Wrong email or password.</div>
                    )}
                    <button type="button" onClick={navigateToRegistration}>Create account</button>
                    <button type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
