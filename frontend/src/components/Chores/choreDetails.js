import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Redirect, useHistory, useParams } from "react-router-dom";
import { getChoreItemById, getSimpleList } from '../../store/chores';
import './choresDetail.css'

const ChoreDetails = ({ chore }) => {
    const chores = useSelector(state => state.chores);
    const user = useSelector(state => state.zones)
    const dispatch = useDispatch();
    // console.log("chores---<><><", chore)
    // console.log('uuuusssseeeerrr-0----->>>>>', user)

    // const choresList = Object.values(chores)

    //create a conditional where if the chore exists, then populate the content.
    //if the chore does not exist then populate the empty chore details

    return (
        <div className="detailed-view-pane">
            <h1>{chore.name}</h1>
            <div className="mark-complete-btn">
                <button type="button">Mark Complete</button>
                <input
                    className="chore-text"
                // value={ }
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
        </div>
    )
}




export default ChoreDetails;