import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navigation.css';
import DropdownButton from 'react-bootstrap/DropdownButton'
import JoinSquad from "../Squads/JoinSquad";
import CreateSquad from "../Squads/CreateSquad";
import Profile from './Profile';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <Profile user={sessionUser} />
        );
    } else {
        history.push('/login');
    }

    return (
        <>
            {!isLoaded ? "Loading..." : ""}
            <div className="nav">
                <div className="left-side">
                    <NavLink to="/squads"><img className="menu-home" src="/images/logo-2.png" /></NavLink>
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
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                        <CreateSquad />
                        <JoinSquad />
                    </DropdownButton>
                </div>
            </div>
        </>
    );
}

export default Navigation;