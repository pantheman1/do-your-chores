import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Redirect, useHistory, useParams, Link } from "react-router-dom";
import { nanoid } from 'nanoid';
import NumericInput from 'react-numeric-input';
import './chores.css'
import { getUsers } from "../../store/user";
import Assignee from "../Assignee/Assignee";
import * as sessionActions from "../../store/session";
import { getUserByZone } from '../../store/zones';



const NewChore = ({ choresList }) => {
    //logged in user
    const sessionUser = useSelector(state => state.session.user);
    //need user state -- starts out as an empty object--how do I populate this so i can loop through and grab all the users?
    const users = useSelector(state => state.users)
    const zones = useSelector(state => state.zones.Zones)
    const dispatch = useDispatch();
    //need select a zone state
    const [name, setName] = useState('');
    const [assignee, setAssignee] = useState(sessionUser.name)
    const [estimatedTime, setEstimatedTime] = useState(0)
    const [description, setDescription] = useState('')
    // const [errors, setErrors] = useState([])
    const { zoneId } = useParams()

    useEffect(() => {
        dispatch(getUserByZone(sessionUser.id))
    }, [dispatch])


    console.log('USERS-->>', sessionUser.squad_id)

    const objArray = Object.values(users)
    console.log('user-squad.id', objArray)
    const squadUsers = objArray.filter(user => sessionUser.squad_id === user.squad_id)

    console.log("--??>>", squadUsers)

    const onSubmit = (e) => {
        e.preventDefault()

    }

    const handleNameChange = (e) => {
        setName(e.target.value)
        // dispatch(updateNameValue(name))
    }

    const handleSelectUser = (e) => {
        setAssignee(e.target.value)
    }

    const handleTime = (e) => {
        setEstimatedTime(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    useEffect(async () => {
        await dispatch(getUsers())
    }, [dispatch])

    return (
        <div className="detailed-view-pane">
            <h1>Create a new Chore!</h1>
            {/* <ul className="errors">
                {errors && errors.map(error => (
                    <li key={error}>{error}</li>
                ))}
            </ul> */}
            <form onSubmit={onSubmit}>
                <div>
                    <label>Chore Name</label>
                    <input
                        className="chore-text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                {/* <Assignee user={users} /> */}
                <div className="assignee-btn">
                    <label>Who's doing this Chore?</label>
                    <select
                        onSelect={handleSelectUser}
                    >
                        {squadUsers.map(user => (
                            <option key={nanoid()}>{user.name}</option>
                        ))}
                    </select>
                </div>
                <div className="estimated-time">
                    <label>How many minutes will this chore take?</label>
                    <NumericInput onBlur={handleTime} min={0} max={90} value={estimatedTime} step={5} />
                </div>
                <div className="description-detailed">
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={handleDescription}
                    />
                </div>
                <div className="submit-new-chore-btn">
                    <button hidden={!name.length ? true : false} type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}




export default NewChore;