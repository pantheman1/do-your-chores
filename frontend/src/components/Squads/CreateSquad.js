import React, { useState } from 'react';


export default function CreateSquad() {

    const handleCreateSquad = (e) => {
        e.preventDefault();

    }

    return (
        <>
            <div className="squad__container-create">
                <button type="button" onClick={handleCreateSquad}>Create a squad!</button>
            </div>
        </>
    )
}
