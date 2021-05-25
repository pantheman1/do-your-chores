import React from 'react';
import { Link, NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import HomePage from '../HomePage';
import PlusMenu from './PlusMenu';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

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
                <div className="zones-link">
                    <NavLink to="/zones">Zones</NavLink>
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
                <div className="menu-btn">
                    {isLoaded && sessionLinks}
                </div>
                <div>
                    <PlusMenu />
                </div>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                {/* <div className="plus-dropdown">
                    <button type="button"><img className="nav-plus-btn" src="/images/add-button.png" /></button>
                </div>
                <div className="profile">
                    <button type="button">Pic</button>
                </div> */}
            </div>
        </div>
    );
}

export default Navigation;