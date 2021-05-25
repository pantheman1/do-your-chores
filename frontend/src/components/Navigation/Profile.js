import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import Button from 'react-bootstrap/Button';

function Profile({ user }) {
    const dispatch = useDispatch();

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
            <DropdownButton
                title={
                    <span><i class="fas fa-user"></i></span>
                }
            >
                {
                    <ul className="profile-dropdown">
                        <li>{user.username}</li>
                        <li>{user.email}</li>
                        <li><Button variant="danger" onClick={logout}>Log Out</Button></li>
                    </ul>
                }

            </DropdownButton>
        </>
    );
}

export default Profile;