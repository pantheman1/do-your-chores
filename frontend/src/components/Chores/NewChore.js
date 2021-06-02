import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Redirect, useHistory, useParams, Link } from "react-router-dom";
import { nanoid } from 'nanoid';
import NumericInput from 'react-numeric-input';
import './chores.css'
import { getUsers } from "../../store/user";
// import { getUserByZone } from '../../store/zones';
import { postNewChore } from '../../store/chores';


const NewChore = ({ setSelectedChore }) => {
    //logged in user
    const sessionUser = useSelector(state => state.session.user);
    //need user state -- starts out as an empty object--how do I populate this so i can loop through and grab all the users?
    const users = useSelector(state => state.users)
    const zones = useSelector(state => state.zones.Zones)
    const dispatch = useDispatch();
    //need select a zone state
    const [name, setName] = useState('');
    const [assignee, setAssignee] = useState('')
    const [estimatedTime, setEstimatedTime] = useState(0)
    const [description, setDescription] = useState('')
    // const [errors, setErrors] = useState([])
    const { zoneId } = useParams()

    // useEffect(() => {
    //     dispatch(getUserByZone(sessionUser.id))
    // }, [dispatch])

    const handleSelectedUser = (e) => {
        setAssignee(e.target.value)
    }

    const objArray = Object.values(users)
    const squadUsers = objArray.filter(user => sessionUser.squadId === user.squadId)

    const onSubmit = async (e) => {
        e.preventDefault()
        const userIdString = assignee.split("-")[1];
        const userId = Number(userIdString);
        const zoneId = Number(zoneId)

        const newUser = {
            name: name,
            userId: userId,
            estimatedTime: estimatedTime,
            zoneId,
            description: description
        }
        // chore is getting duplicated ////////////////////////bugbugbug
        // Create chore now will duplicate the chore when you click the COMPLETE button
        // The Create a new Chore form does not reset
        await dispatch(postNewChore(newUser))
        // setSelectedChore("")
        // newUser = {
        //     name: "",
        //     userId: "",
        //     estimatedTime: "",
        //     zoneId: "",
        //     description: "",
        // };
    }

    useEffect(async () => {
        await dispatch(getUsers())
    }, [dispatch])

    return (
        <div className="detailed-view-pane">
            <div className="inner-container-form">
                <div className="header-chore">
                    <h1>Create a new Chore!</h1>
                </div>
                {/* <ul className="errors">
                {errors && errors.map(error => (
                    <li key={error}>{error}</li>
                ))}
            </ul> */}
                <form className="chore-form" onSubmit={onSubmit}>
                    <div className="chore-name">
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
                            onChange={handleSelectedUser}
                            value={assignee}
                        >
                            <option value='' disabled>Select someone...</option>
                            {squadUsers && squadUsers.map(user => (
                                <option key={nanoid()}>{`${user.name}-${user.id}`}</option>
                            ))}
                        </select>
                    </div>
                    <div className="estimated-time">
                        <label>How many minutes will this chore take?</label>
                        <NumericInput onChange={e => setEstimatedTime(e)} min={0} max={90} value={estimatedTime} step={5} />
                    </div>
                    <div className="description-detailed">
                        <label>Description</label>
                        <textarea
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="submit-new-chore-btn">
                        <button hidden={!name.length ? true : false} type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}




export default NewChore;