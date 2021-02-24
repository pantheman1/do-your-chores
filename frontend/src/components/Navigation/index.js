import React from 'react';
import { Link, NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import HomePage from '../HomePage';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        history.push('/login');
    }


    return (
        <div className="nav">
            <div className="left-side">
                <div className="menu-btn">
                    <ul>
                        <li>
                            {isLoaded && sessionLinks}
                        </li>
                    </ul>
                </div>
                <div className="home-text">
                    <h3>Home</h3>
                </div>
            </div>
            <div className="right-side">
                <div className="search-box">
                    <input
                        className="search-nav"
                        placeholder="search"
                        type="text"
                    />
                </div>
                <div className="plus-dropdown">
                    <button type="button">+</button>
                </div>
                <div className="profile">
                    <button type="button">Pic</button>
                </div>
            </div>
        </div>
    );
}

export default Navigation;