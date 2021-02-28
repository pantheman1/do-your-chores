import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Redirect, useHistory, useParams } from "react-router-dom";
import { getChoreItemById, getSimpleList } from '../../store/chores';
import NumericInput from 'react-numeric-input';
import { nanoid } from 'nanoid';
import './choresDetail.css'

const ChoreDetails = ({ chore }) => {
    const sessionUser = useSelector(state => state.session.user);
    const users = useSelector(state => state.users)
    const dispatch = useDispatch();
    const { zoneId } = useParams()
    const [name, setName] = useState(chore.name);
    const [assignee, setAssignee] = useState(users[chore.user_id])
    const [estimatedTime, setEstimatedTime] = useState(chore.estimated_time)
    const [description, setDescription] = useState(chore.description)

    const handleNameChange = (e) => {
        setName(e.target.value)
        // dispatch(updateNameValue(name))
    }

    const handleSelectedUser = (e) => {
        setAssignee(e.target.value)
    }

    const objArray = Object.values(users)
    const squadUsers = objArray?.filter(user => sessionUser.squad_id === user.squad_id)


    return (
        <div className="detailed-view-pane">
            <h1>{chore.name}</h1>
            <h3>Detailed View</h3>
            <form>
                <div>
                    <label>Chore Name</label>
                    <input
                        className="chore-text"
                        value={chore.name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                {/* <Assignee user={users} /> */}
                <div className="assignee-btn">
                    <label>Who's doing this Chore?</label>
                    <select
                        onChange={handleSelectedUser}
                        value={users[chore.user_id]}
                    >
                        {squadUsers && squadUsers.map(user => (
                            <option key={nanoid()}>{`${user.name}-${user.id}`}</option>
                        ))}
                    </select>
                </div>
                <div className="estimated-time">
                    <label>How many minutes will this chore take?</label>
                    <NumericInput onChange={e => setEstimatedTime(e)} min={0} max={90} value={chore.estimated_time} step={5} />
                </div>
                <div className="description-detailed">
                    <label>Description</label>
                    <textarea
                        value={chore.description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className="mark-complete-btn">
                    <button type="button">Mark Complete</button>
                </div>
                {/* <div className="submit-new-chore-btn">
                    <button hidden={!name.length ? true : false} type="submit">Submit</button>
                </div> */}
            </form>
        </div>
    )
}




export default ChoreDetails;