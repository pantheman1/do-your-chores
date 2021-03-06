import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Redirect, useHistory, useParams, Link } from "react-router-dom";
import { nanoid } from 'nanoid';
import { updateDbFromStore, updateChore } from '../../store/zones';
import { toggleIsComplete } from '../../store/chores';
import './chores.css'
import CompletedChores from "./CompleteChores";
import CompletedChoreButton from '../CompleteButton';

const SimpleChoreView = ({ chore, updateSelected, complete, setComplete }) => {
    const dispatch = useDispatch();
    const [detailedView, setDetailedView] = useState(false);
    const [choreName, setChoreName] = useState('');
    // const [complete, setComplete] = useState(false);

    //send value to thunk
    const updateDb = (e) => {
        dispatch(updateDbFromStore(e.target.value))
    }
    // console.log('the real chore-->>', chore)

    // const toggleComplete = async () => {
    //     await dispatch(toggleIsComplete(chore))
    //     setComplete(!complete)
    //     // console.log(chore)
    // }

    // const getButtonHTML = () => {
    //     return "isComplete-btn " + (chore.isComplete ? " selected" : "")
    // }

    return (
        <div className="input-chore-container">
            <div className="input-isComplete">
                {/* <button className={getButtonHTML()} onClick={toggleComplete}><i className="far fa-check-circle"></i></button> */}
                <CompletedChoreButton chore={chore} complete={complete} setComplete={setComplete} />
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