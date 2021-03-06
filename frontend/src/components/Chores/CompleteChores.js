import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completedChores } from '../../store/completionStatus';
import { NavLink, Route, Redirect, useHistory, useParams, Link } from "react-router-dom";
import { toggleIsComplete } from '../../store/chores';
import ChoreBlocks from './ChoreBlocks';
import { nanoid } from 'nanoid';

const CompletedChores = ({ selectedButton, setSelectedChore }) => {
    const compChores = useSelector(state => state.completionStatus)
    // const chore = useSelector(state => state.chore)
    const [complete, setComplete] = useState();
    const dispatch = useDispatch();
    const { zoneId } = useParams();


    useEffect(() => {
        dispatch(completedChores(zoneId))
    }, [])

    const completedChoresArr = Object.values(compChores);
    console.log("COMPLETED CHORES-->>", completedChoresArr)

    let choreList;
    if (completedChoresArr?.length > 0) {
        choreList = (
            <div className="chores-container">
                {completedChoresArr.map(chore => (
                    <ChoreBlocks key={nanoid()} complete={complete} setComplete={setComplete} setSelectedChore={setSelectedChore} chore={chore} />
                ))}
            </div>
        )
    }

    return (
        <div className="input-chore-container">
            <div className="input-isComplete">
                <h1>Completed chores list</h1>
                {choreList}
                {/* <button type="button" onClick={e => dispatch(completedChores(zoneId))}>See Chores</button> */}
            </div>
        </div>
    )

}


export default CompletedChores;