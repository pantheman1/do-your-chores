import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Redirect, useHistory, useParams, Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { getSimpleList } from '../../store/chores';
import { nanoid } from 'nanoid';
import { updateDbFromStore, updateChore } from '../../store/zones';
import './chores.css'
import ChoreBlocks from './ChoreBlocks';
import ChoreDetails from './choreDetails';

const ChoresPage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const zones = useSelector(state => state.zones.Zones);
    const dispatch = useDispatch();
    const { zoneId } = useParams();
    const [selectedChore, setSelectedChore] = useState({});

    console.log("zoneID--->>>", zoneId)

    const results = zones?.find(zone => zone.id.toString() === zoneId).Chores

    useEffect(() => {
        console.log('selectedChore', selectedChore)
    }, [selectedChore])

    // console.log('results---------->>>>', results)

    useEffect(() => {
        dispatch(getSimpleList(sessionUser.id))
    }, [dispatch])

    if (!sessionUser) {
        return <Redirect to='/login' />
    }

    let choreList;
    if (results?.length > 0) {
        choreList = (
            <div className="chores-container">
                {results.map(chore => (
                    <ChoreBlocks key={nanoid()} updateSelected={setSelectedChore} chore={chore} />
                ))}
            </div>
        )
    }

    return (
        <div>
            <h1>Chores</h1>
            {choreList}
            <NavLink to="/">Add a Chore</NavLink>
            <ChoreDetails chore={selectedChore} />
        </div>
    )
}

export default ChoresPage;