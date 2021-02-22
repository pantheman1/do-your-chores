import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <div className="login-body">
            <div className="login-card">
                <div className="logo-container">
                    <img className="logo-signup-page" src="images/boy-with-mop.png" />
                    <img className="logo-login-page" src="images/do-your-chores.png" />
                </div>
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <ul>
                            {errors.map((error, idx) => <li className="error-li" key={idx}>{error}</li>)}
                        </ul>
                        <div className="email-container">
                            <label>Email</label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="username-container">
                            <label>Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="password-container signup-password-input">
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="password-container signup-password-input">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="login-buttons">
                            <button className="login-btn signup-btn" type="submit">Sign Up</button>
                        </div>
                    </form>
                    <div>
                        <span className="return-to-login">Already have an account? Click here to </span><NavLink className="login-link" to="/login">Login</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupFormPage;