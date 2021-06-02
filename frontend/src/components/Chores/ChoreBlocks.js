import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Redirect, useHistory, useParams, Link } from "react-router-dom";
import { nanoid } from 'nanoid';
import { updateDbFromStore, updateChore } from '../../store/zones';
import './chores.css'
import CompletedChores from "./CompleteChores";
import CompletedChoreButton from './CompleteButton'

const SimpleChoreView = ({ chore, setSelectedChore, complete, setComplete }) => {
    const dispatch = useDispatch();
    const [detailedView, setDetailedView] = useState(false);
    const [choreName, setChoreName] = useState('');

    //send value to thunk
    const updateDb = (e) => {
        dispatch(updateDbFromStore(e.target.value))
    }
    // console.log('the real chore-->>', chore)

    return (
        <div className="input-chore-container">
            <div className="input-isComplete">
                <CompletedChoreButton chore={chore} complete={complete} setComplete={setComplete} />
                <input
                    className="chore-input-box"
                    key={nanoid()}
                    type="text"
                    value={chore?.name}
                    onChange={e => setChoreName(e.target.value)}
                    onBlur={e => updateDb(e.target.value)}
                >
                </input>
            </div>
            <button
                className="chore-detail-btn"
                type="button" onClick={() => setSelectedChore(chore)}>Details</button>
        </div>
    )
}

export default SimpleChoreView;