import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completedChores } from '../../store/completionStatus';
import { NavLink, Route, Redirect, useHistory, useParams, Link } from "react-router-dom";

const CompletedChores = () => {
    const compChores = useSelector(state => state.completionStatus)
    const dispatch = useDispatch();
    const { zoneId } = useParams();

    // useEffect(() => {
    //     dispatch(completedChores(zoneId))
    // }, [])
    console.log("COMPLETED CHORES-->>", compChores)

    // next steps: render compChores - find out the type of data for compChores state

    return (
        <div>
            <h1>Completed chores list</h1>
            <button type="button" onClick={e => dispatch(completedChores(zoneId))}>See Chores</button>
            {/* {compChores} */}
        </div>
    )

}


export default CompletedChores;