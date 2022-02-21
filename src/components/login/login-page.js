// import './login-page.css';
// import React, {useState} from "react";
// import {useMessagesData} from "../../contexts/messagesContext";
// import {useDispatch, useSelector} from "react-redux";
// import {login} from "../../redux/ducks/LoginDuck";
// import {loginSelector} from "../../helpers/reduxSelectors";
// import {useNavigate} from "react-router-dom";
//
// const LoginPage = () => {
//     const {messages} = useMessagesData();
//
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [isAuthorized, setIsAuthorized] = useState(null);
//     const [alreadyHasAccount, setAlreadyHasAccount] = useState(null);
//
//     const {isLoggedIn} = useSelector(loginSelector);
//
//     const handleCreateButton = () => {
//         let user = messages.find(item => item.username === username && item.password === password);
//         if (user) {
//             setAlreadyHasAccount(true);
//         } else {
//             messages.push({
//                 id: (messages.length + 1).toString(),
//                 name: username[0].toUpperCase() + username.slice(1),
//                 username: username,
//                 password: password,
//                 date: '',
//                 text: '',
//                 "textColor": "",
//                 "nameColor": "black"
//             });
//             setAlreadyHasAccount(false);
//             setIsAuthorized(true);
//             navigate('../');
//         }
//     };
//
//     const handleLoginButton = () => {
//         let user = messages.find(item => item.username === username && item.password === password);
//         if (user) {
//             dispatch(login({
//                 username: username,
//                 password: password,
//                 isLoggedIn: true
//             }));
//             setIsAuthorized(true);
//             navigate('../');
//         } else {
//             setIsAuthorized(false);
//         }
//     };
//
//     const handleUserNameInput = e => {
//         setUsername(e.target.value)
//     };
//
//     const handlePasswordInput = e => {
//         setPassword(e.target.value)
//     };
//
//     return (
//         <>
//             {isLoggedIn ?
//                 <h1 className='title'>You're already Logged In.</h1> :
//                 <div className="container">
//                     <h2 className='title'>Login</h2>
//
//                     <span><b>Username</b></span>
//                     <input type="text" placeholder="Enter Username"
//                            value={username}
//                            onChange={handleUserNameInput} required/>
//
//                     <span><b>Password</b></span>
//                     <input type="password" placeholder="Enter Password"
//                            value={password}
//                            onChange={handlePasswordInput} required/>
//                     {isAuthorized === false && <div className='warning'>Wrong username or password.</div>}
//                     {alreadyHasAccount === true && <div className='warning'>You already have an account.</div>}
//                     <button type="button" onClick={handleCreateButton}>Create account</button>
//                     <button type="submit" className='loginButton' onClick={handleLoginButton}>Login</button>
//                 </div>
//             }
//         </>
//     );
// };
//
// export default LoginPage;
