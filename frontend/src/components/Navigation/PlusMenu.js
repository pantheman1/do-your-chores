import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';

function PlusMenu() {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const [joinCode, setJoinCode] = useState("");

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const handleJoinSquad = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <button className="dropdown-button" onClick={openMenu}>
                <i className="fas fa-plus-circle"></i>
            </button>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li>Create a New Squad</li>
                    <div>
                        <label>Join a Squad</label>
                        <input
                            className="squad__container-join--input"
                            onChange={e => setJoinCode(e.target.value)}
                            value={joinCode}
                        />
                        <button type="button" onClick={handleJoinSquad}>Submit</button>
                    </div>
                </ul>
            )}
        </>
    );
}

export default PlusMenu;