import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { NavLink, useHistory } from 'react-router-dom';
import './LoginForm.css';


function LoginFormPage({ isLoaded }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    const handleDemoSubmit = () => {
        dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' }))
    }

    const handleSignup = () => {
        history.push('/signup')
    }


    return (
        <div className="login-body">
            <div className="login-card">
                <div className="logo-container">
                    <img className="logo-login-page" src="images/logo.png" />
                    <div className="logo-text">Do Your <span className="chores">Chores!</span></div>
                    <div className="login-form">
                        <form onSubmit={handleSubmit}>
                            <ul>
                                {errors.map((error, idx) => <li className="error-li" key={idx}>{error}</li>)}
                            </ul>
                            <div className="username-container">
                                <label>Username or Email</label>
                                <input
                                    className="username-input"
                                    type="text"
                                    value={credential}
                                    onChange={(e) => setCredential(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="password-container">
                                <label>Password</label>
                                <input
                                    className="password-input"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="login-buttons">
                                {/* <div className="login-btn"> */}
                                <button id="login-btn" type="submit">Log In</button>
                                {/* </div> */}
                                {/* <div className="demo-btn"> */}
                                <button id="demo-btn" type="button" onClick={handleDemoSubmit}>Demo Login</button>
                                {/* </div> */}
                            </div>
                        </form>
                        <div className="signup-link">Don't have an account? Click here to <NavLink to="/signup">Sign up</NavLink></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginFormPage;
