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
    const sessionUser = useSelector(state => state.session.user);
    const users = useSelector(state => state.users)
    const zones = useSelector(state => state.zones)
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [description, setDescription] = useState('')
    const [estimatedTime, setEstimatedTime] = useState(0)
    const [assignee, setAssignee] = useState(sessionUser.id)
    const { zoneId } = useParams()

    const handleSelectedUser = (e) => {
        setAssignee(e.target.value)
    }

    const objArray = Object.values(users)
    const squadUsers = objArray.filter(user => sessionUser.squadId === user.squadId)

    const onSubmit = async (e) => {
        e.preventDefault()
        const userIdString = assignee.split("-")[1];
        const userId = Number(userIdString);

        const newChore = {
            name,
            userId: assignee,
            estimatedTime,
            zoneId,
            description,
            isComplete: false,
        }
        await dispatch(postNewChore(newChore))
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