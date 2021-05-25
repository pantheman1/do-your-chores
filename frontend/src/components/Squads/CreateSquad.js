import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'


export default function CreateSquad() {

    const handleCreateSquad = (e) => {
        e.preventDefault();

    }

    return (
        <>
            <div className="squad__container-create">
                <Button type="submit" onClick={handleCreateSquad} variant="primary">Create a squad!</Button>
            </div>
        </>
    )
}
