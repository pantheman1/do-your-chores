import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { NavLink, useHistory } from 'react-router-dom';
import './LoginForm.css';
// const logo = require('../../../public/images/chores-logo.png')


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
        // <Redirect from="/" to="/signup" />
        history.push('/signup')
        console.log("------>>>>")
    }


    return (
        <div className="login-body">
            <div className="login-card">
                <form onSubmit={handleSubmit}>
                    {/* <img src={require('../../../public/images/chores-logo.png')} /> */}
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <label>
                        Username or Email
                    <input
                            type="text"
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Password
        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    {/* <ul>
                        <li>
                            {isLoaded && sessionLinks}
                        </li>
                    </ul> */}
                    <button type="submit">Log In</button>
                    <button type="button" onClick={handleDemoSubmit}>Demo Login</button>
                    <button type="button" onClick={handleSignup}>Sign up</button>
                </form>
            </div>
        </div>
    );
}

export default LoginFormPage;