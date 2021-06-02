import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { nanoid } from 'nanoid';
import NumericInput from 'react-numeric-input';
import './chores.css'
import { getUsersBySquad } from "../../store/userSquads";
import { postNewChore } from '../../store/chores';


const NewChore = ({ setSelectedChore }) => {
    const sessionUser = useSelector(state => state.session.user);
    const squadUsers = useSelector(state => Object.values(state?.userSquads))
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [description, setDescription] = useState('');
    const [estimatedTime, setEstimatedTime] = useState(0);
    const [assignee, setAssignee] = useState(sessionUser.id);
    const { zoneId, squadId } = useParams();

    const handleSelectedUser = (e) => {
        setAssignee(e.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        const newChore = {
            name,
            userId: assignee,
            estimatedTime,
            zoneId,
            description,
            isComplete: false,
        }
        console.log("newCHORE_-----", newChore)
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

    useEffect(() => {
        if (squadId) {
            dispatch(getUsersBySquad(squadId));
        }
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
                            {squadUsers && squadUsers.map(squadUser => (
                                <option value={`${squadUser.User.id}`} key={squadUser.userId}>{`${squadUser.User.name}`}</option>
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