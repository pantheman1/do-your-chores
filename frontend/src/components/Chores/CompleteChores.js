import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completedChores } from '../../store/completionStatus';
import { NavLink, Route, Redirect, useHistory, useParams, Link } from "react-router-dom";
import { toggleIsComplete } from '../../store/chores';

const CompletedChores = () => {
    const compChores = useSelector(state => state.completionStatus)
    const chore = useSelector(state => state.chore)
    const [complete, setComplete] = useState();
    const dispatch = useDispatch();
    const { zoneId } = useParams();

    // next steps: render compChores - find out the type of data for compChores state

    const completedChoresArr = Object.values(compChores);
    console.log("COMPLETED CHORES-->>", completedChoresArr)


    return (
        <div className="input-chore-container">
            <div className="input-isComplete">
                <h1>Completed chores list</h1>
                <button type="button" onClick={e => dispatch(completedChores(zoneId))}>See Chores</button>
            </div>
        </div>
    )

}


export default CompletedChores;