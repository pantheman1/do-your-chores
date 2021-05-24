import React, { useState } from 'react';


export default function JoinSquad() {
    const [joinCode, setJoinCode] = useState("");

    const handleJoinSquad = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="squad__container-join">
                <label>Enter a code to join a squad!</label>
                <input
                    className="squad__container-join--input"
                    onChange={e => setJoinCode(e.target.value)}
                    value={joinCode}
                />
                <button type="button" onClick={handleJoinSquad}>Submit</button>
            </div>
        </>
    )
}