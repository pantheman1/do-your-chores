import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Redirect, useHistory, useParams, Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { getSimpleList } from '../../store/chores';
import { nanoid } from 'nanoid';
import { updateDbFromStore, updateChore } from '../../store/zones';
import './chores.css'

const ChoresPage = () => {
    const sessionUser = useSelector(state => state.session.user);
    // const chores = useSelector(state => state.chores);
    const zones = useSelector(state => state.zones.Zones);
    const dispatch = useDispatch();
    const { zoneId } = useParams();

    console.log("zoneID--->>>", zoneId)

    const results = zones?.find(zone => zone.id.toString() === zoneId).Chores


    console.log('results---------->>>>', results)

    useEffect(() => {
        dispatch(getSimpleList(sessionUser.id))
    }, [dispatch])

    if (!sessionUser) {
        return <Redirect to='/login' />
    }

    // if (!results) {
    //     return <Redirect to='/create' />
    // }

    const updateDb = (e) => {
        dispatch(updateDbFromStore(e.target.value))
    }

    let choreList;
    if (results?.length > 0) {
        choreList = (
            <div className="chores-container">
                {results.map(chore => (
                    <div className="input-chore-container">
                        <div className="input-isComplete">
                            <button type="button" className="isComplete-btn">+</button>
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
                        <button type="button" className="chore-detail-btn">Details</button>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div>
            <h1>Chores</h1>
            {choreList}
            <NavLink to="/">Add a Chore</NavLink>
        </div>
    )
}

export default ChoresPage;