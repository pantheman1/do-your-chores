import React, { useEffect, useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export default function JoinSquad() {
    const [joinCode, setJoinCode] = useState("");

    const handleJoinSquad = (e) => {
        e.preventDefault();
        // check if the code is valid by looking in the redux state
        // if yes, then add the current user to the userSquad table
        // they should then see the squad on their squads list
    }


    return (
        <>
            <div className="squad__container-join">
                <label>Join a squad!</label>
                <InputGroup className="mb-3">
                    <input
                        className="squad__container-join--input"
                        onChange={e => setJoinCode(e.target.value)}
                        value={joinCode}
                        placeholder="Enter code..."
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={handleJoinSquad}>Submit</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </>
    )
}