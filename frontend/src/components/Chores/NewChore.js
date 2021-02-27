import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Redirect, useHistory, useParams, Link } from "react-router-dom";
import { nanoid } from 'nanoid';
import NumericInput from 'react-numeric-input';
import './chores.css'
import { getUsers } from "../../store/user";



const NewChore = () => {
    const [name, setName] = useState('');
    //need user state -- starts out as an empty object--how do I populate this so i can loop through and grab all the users?
    const users = useSelector(state => state.users)
    //need select a zone state
    const [assignee, setAssignee] = useState()
    const [estimatedTime, setEstimatedTime] = useState(0)
    const [validations, setValidations] = useState([])


    const validation = () => {
        const errors = [];

        if (estimatedTime < 0) errors.push(`You know cleaning takes longer than 0 minutes!`)

        setValidations(errors);
    }

    // chores = object of all normalized chores
    const dispatch = useDispatch();

    const handleNameChange = (e) => {
        setName(e.target.value)
        // dispatch(updateNameValue(name))
    }

    useEffect(async () => {
        await dispatch(getUsers())
    }, [dispatch])

    const allUsers = Object.values(users);
    console.log('uuuussssers', allUsers)

    return (
        <div className="detailed-view-pane">
            <h1>Create a new Chore!</h1>
            <div>
                <label>Chore Name</label>
                <input
                    className="chore-text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                >
                </input>
            </div>
            <div className="assignee-btn">
                <label>Assignee--select a user</label>
                <select
                // value={ }
                >
                    {allUsers.map(user => (
                        <option key={nanoid()}>{user.name}</option>
                    ))}
                </select>
            </div>
            <div className="zone-btn">
                <label>Select a Zone</label>
                <select>
                    { }
                    <option></option>
                </select>
            </div>
            <div className="estimated-time">
                <label>Estimated Time</label>
                <NumericInput min={0} max={90} value={0} step={5} />
            </div>
            <div className="description-detailed">
                <label>Description</label>
                <input>

                </input>
            </div>
            <div className="submit-new-chore-btn">
                <button type="submit">Submit</button>
            </div>
        </div>
    )
}




export default NewChore;