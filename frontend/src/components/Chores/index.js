import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Redirect, useHistory, useParams, Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { getSimpleList } from '../../store/chores';
import { nanoid } from 'nanoid';
import { updateDbFromStore, updateChore } from '../../store/zones';
import { getOneZone } from '../../store/singleZone';
import './chores.css'
import ChoreBlocks from './ChoreBlocks';
import ChoreDetails from './choreDetails';
import NewChore from './NewChore';

const ChoresPage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const chores = useSelector(state => state.chores);
    const zone = useSelector(state => state.singleZone.zone)
    const dispatch = useDispatch();
    const { zoneId } = useParams();
    const [selectedChore, setSelectedChore] = useState({});

    // I need to get access to the Zone name so I can render it at the top of the
    //   page. 

    // console.log('singleZone-->', zone.location)

    useEffect(() => {
        dispatch(getOneZone(zoneId))
    }, [dispatch])

    const choreArr = Object.values(chores)

    const choresList = choreArr?.filter(chore => chore.zone_id.toString() === zoneId)

    useEffect(() => {
    }, [selectedChore])

    useEffect(() => {
        dispatch(getSimpleList(sessionUser.id))
    }, [dispatch])

    if (!sessionUser) {
        return <Redirect to='/login' />
    }

    const addAChore = (e) => {
        e.preventDefault();
        setSelectedChore({})
    }

    let choreList;
    if (choresList?.length > 0) {
        choreList = (
            <div className="chores-container">
                {choresList.map(chore => (
                    <ChoreBlocks key={nanoid()} updateSelected={setSelectedChore} chore={chore} />
                ))}
            </div>
        )
    }

    return (
        <div className="body-chores">
            <div className="chores-header">
                <h1>{zone.location}</h1>
            </div>
            {choreList}
            <button type="button" className="add-a-chore" onClick={addAChore}>Add a Chore</button>
            {Object.keys(selectedChore).length === 0 ? <NewChore choresList={choresList} /> : <ChoreDetails choresList={choresList} chore={selectedChore} />}
        </div>
    )
}

export default ChoresPage;