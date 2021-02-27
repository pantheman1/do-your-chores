import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Redirect, useHistory, useParams } from "react-router-dom";
import { getChoreItemById, getSimpleList } from '../../store/chores';
import NumericInput from 'react-numeric-input';
import { nanoid } from 'nanoid';
import './choresDetail.css'

const ChoreDetails = ({ chore, choresList }) => {
    const sessionUser = useSelector(state => state.session.user);
    const users = useSelector(state => state.users)
    const dispatch = useDispatch();
    const { zoneId } = useParams()
    const [name, setName] = useState(chore.name);
    const [assignee, setAssignee] = useState(users[chore.user_id])
    const [estimatedTime, setEstimatedTime] = useState(chore.estimated_time)
    const [description, setDescription] = useState(chore.description)

    // console.log("USERSEXYXYXYXYXYX", users[3])
    console.log("CHOREAGAIN-->", assignee)

    // useEffect(() => {
    //     setName(chore.name);
    //     setAssignee(`${chore.name}-${chore.id}`);
    //     setEstimatedTime(chore.estimated_time);
    //     setDescription(chore.description);
    // }, [name, assignee, estimatedTime, description])

    // chores = object of all normalized chores

    const handleNameChange = (e) => {
        setName(e.target.value)
        // dispatch(updateNameValue(name))
    }

    const handleSelectedUser = (e) => {
        setAssignee(e.target.value)
    }

    const objArray = Object.values(users)
    console.log('user-squad.id', objArray)
    const squadUsers = objArray?.filter(user => sessionUser.squad_id === user.squad_id)

    console.log("--??>>", squadUsers)

    // const onSubmit = async (e) => {
    //     const user_idString = assignee.split("-")[1];
    //     const user_id = Number(user_idString);

    //     const zone_id = Number(zoneId)
    //     console.log("NUMBER USER", zone_id)

    //     const newUser = {
    //         name: name,
    //         user_id: user_id,
    //         estimated_time: estimatedTime,
    //         zone_id: zone_id,
    //         description: description
    //     }
    //     console.log("FORM DATA--->", newUser)
    //     // await dispatch((newUser))
    //     e.preventDefault()
    // }

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