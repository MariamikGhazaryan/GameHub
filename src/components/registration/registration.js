import "./registration.css";
import {register} from "../../helpers/api";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";

export default function Registration() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailAlreadyExists, setEmailAlreadyExists] = useState(false);

    const handleFirstNameInput = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameInput = (e) => {
        setLastName(e.target.value);
    };
    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    };

    const handleRegisterButton = (e) => {
        e.preventDefault();
        const body = {
            firstName,
            lastName,
            email,
            password,
        };
        const auth = {
            email: email,
            password: password,
        };
        register("users", body, auth)
            .then((res) => {
                res && navigate("../login");
            })
            .catch((err) => {
                if (err.toJSON().status === 400) {
                    setEmailAlreadyExists(true);
                }
            });
    };

    const navigateToLogin = () => {
        navigate("../login");
    }

    return (
        <div>
            <div className="registration-container">
                <h2 className="registration-title">Register</h2>
                <form onSubmit={handleRegisterButton}>
                    <input
                        placeholder="First Name"
                        type="text"
                        value={firstName}
                        onChange={handleFirstNameInput}
                        required
                    />
                    <input
                        placeholder="Last Name"
                        type="text"
                        value={lastName}
                        onChange={handleLastNameInput}
                        required
                    />
                    <input
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={handleEmailInput}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        minLength="6"
                        value={password}
                        onChange={handlePasswordInput}
                        required
                    />
                    {emailAlreadyExists === true && (
                        <div className="warning">User with this email already exists.</div>
                    )}
                    <button type="button" onClick={navigateToLogin}>
                        Login
                    </button>
                    <button type="submit">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
