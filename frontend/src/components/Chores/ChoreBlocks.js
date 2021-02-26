import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Redirect, useHistory, useParams, Link } from "react-router-dom";
import { nanoid } from 'nanoid';
import { updateDbFromStore, updateChore } from '../../store/zones';
import './chores.css'
import ChoreDetails from "./choreDetails";

const SimpleChoreView = ({ chore, updateSelected }) => {
    const dispatch = useDispatch();
    const [detailedView, setDetailedView] = useState(false);


    const updateDb = (e) => {
        dispatch(updateDbFromStore(e.target.value))
    }
    return (
        <div className="input-chore-container">
            <div className="input-isComplete">
                <button type="button" className="isComplete-btn">C</button>
                <input
                    className="chore-input-box"
                    key={nanoid()}
                    type="text"
                    value={chore.name}
                    onChange={e => dispatch(updateChore(chore.id, e.target.value))}
                    onBlur={e => updateDb(e.target.value)}
                >
                </input>
            </div>
            <button
                className="chore-detail-btn"
                type="button" onClick={() => updateSelected(chore)}>Details</button>
            <main className="detail-view" hidden={!detailedView}>
                {/* <button type="button" className="close-chore-detail-btn" >Close</button> */}
                {/* <ChoreDetails /> */}
            </main>
        </div>
    )
}

export default SimpleChoreView;