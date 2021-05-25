import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux';


export default function CreateSquad() {
    const dispatch = useDispatch()

    const handleCreateSquad = (e) => {
        e.preventDefault();
        // create a squad
        // when the button is clicked we want to:
        // dispatch an action to create the squad itself
        // dispatch an action to create an entry in the ownerSquad table with the current user as the owner


    }

    return (
        <>
            <div className="squad__container-create">
                <Button type="submit" onClick={handleCreateSquad} variant="primary">Create a squad!</Button>
            </div>
        </>
    )
}
