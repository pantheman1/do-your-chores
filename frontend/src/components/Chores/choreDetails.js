import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Redirect, useHistory, useParams } from "react-router-dom";
import { getChoreItemById, getSimpleList } from '../../store/chores';
import NumericInput from 'react-numeric-input';
import './choresDetail.css'

const ChoreDetails = ({ chore, choresList }) => {
    const [name, setName] = useState(chore.name);


    // chores = object of all normalized chores
    const dispatch = useDispatch();

    const handleNameChange = (e) => {
        setName(e.target.value)
        // dispatch(updateNameValue(name))
    }

    return (
        <div className="detailed-view-pane">
            <h1>{chore.name}</h1>
            <h3>Detailed View</h3>
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
                <input>

                </input>
            </div>
            <div className="zone-btn">
                <label>Select a Zone</label>
                <select>

                    <option></option>
                </select>
            </div>
            <div className="estimated-time">
                <label>Estimated Time</label>
                <input>

                </input>
            </div>
            <div className="description-detailed">
                <label>Description</label>
                <input>

                </input>
            </div>
            <div className="mark-complete-btn">
                <button type="button">Mark Complete</button>
            </div>
        </div>
    )
}




export default ChoreDetails;