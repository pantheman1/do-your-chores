import React, { useEffect, useState } from 'react';

export default function JoinSquad() {
    const [joinCode, setJoinCode] = useState("");

    const handleJoinSquad = (e) => {
        e.preventDefault();
        // check if the code is valid by looking in the redux state
        // if yes, then add the current user to the userSquad table
        // they should then see the squad on their squads list
    }

    const handleJoinMenu = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="squad__container-join">
                <label>Join a squad!</label>
                <input
                    className="squad__container-join--input"
                    onChange={handleJoinMenu}
                    value={joinCode}
                    placeholder="Enter code..."
                />
                <button type="button" onClick={handleJoinSquad}>Submit</button>
            </div>
        </>
    )
}