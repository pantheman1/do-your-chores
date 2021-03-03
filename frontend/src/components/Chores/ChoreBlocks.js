import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Redirect, useHistory, useParams, Link } from "react-router-dom";
import { nanoid } from 'nanoid';
import { updateDbFromStore, updateChore } from '../../store/zones';
import { toggleIsComplete } from '../../store/chores';
import './chores.css'

const SimpleChoreView = ({ chore, updateSelected }) => {
    const dispatch = useDispatch();
    const [detailedView, setDetailedView] = useState(false);
    const [choreName, setChoreName] = useState('');

    //send value to thunk
    const updateDb = (e) => {
        dispatch(updateDbFromStore(e.target.value))
    }

    const toggleComplete = async () => {
        await dispatch(toggleIsComplete(chore))
    }

    return (
        <div className="input-chore-container">
            <div className="input-isComplete">
                <button className={"isComplete-btn " + (chore.isComplete ? " selected" : "")} onClick={toggleComplete}><i className="far fa-check-circle"></i></button>
                <input
                    className="chore-input-box"
                    key={nanoid()}
                    type="text"
                    value={chore.name}
                    onChange={e => setChoreName(e.target.value)}
                    onBlur={e => updateDb(e.target.value)}
                >
                </input>
            </div>
            <button
                className="chore-detail-btn"
                type="button" onClick={() => updateSelected(chore)}>Details</button>
        </div>
    )
}

export default SimpleChoreView;