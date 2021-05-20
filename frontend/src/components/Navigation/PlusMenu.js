import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';

function PlusMenu() {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

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

    return (
        <>
            <button className="dropdown-button" onClick={openMenu}>
                <i className="fas fa-plus-circle"></i>
            </button>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li>Create a New Squad</li>
                    <li>Join a Squad</li>
                </ul>
            )}
        </>
    );
}

export default PlusMenu;