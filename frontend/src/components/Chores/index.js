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
import { completedChores } from '../../store/completionStatus';

const ChoresPage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const chores = useSelector(state => state.chores);
    //zone is only bringing in the location of the zone
    const zone = useSelector(state => state.singleZone.zone)
    const dispatch = useDispatch();
    const { zoneId } = useParams();
    const history = useHistory();
    const [selectedChore, setSelectedChore] = useState({});
    const [complete, setComplete] = useState(false);

    // Will initiate a fetch to grab all chores in this zoneId
    useEffect(() => {
        dispatch(getOneZone(zoneId))
    }, [dispatch, zoneId])

    //useEffect which will update each time the completed button is clicked or status is changed
    // useEffect(() => {
    //     dispatch(getOneZone(zoneId))
    // }, [dispatch])

    // Will initiate a fetch to grab all completed chores in this zoneId
    const handleCompleteChores = () => {
        history.push(`/zones/${zoneId}/completed`)
        dispatch(completedChores(zoneId))
    }

    // Will initiate a fetch to grab all incomplete chores in this zoneId
    const handleIncompleteChores = () => {
        // history.push('/zones/:zoneId/incomplete')
    }

    const choreArr = Object.values(chores)

    const choresList = choreArr?.filter(chore => chore.zone_id.toString() === zoneId)

    console.log('--->>>', choresList)

    useEffect(() => {
        dispatch(getSimpleList(sessionUser.id))
    }, [dispatch, sessionUser.id])

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
                    <ChoreBlocks key={nanoid()} complete={complete} setComplete={setComplete} setSelectedChore={setSelectedChore} chore={chore} />
                ))}
            </div>
        )
    }

    return (
        <div className="body-chores">
            <div className="chores-header">
                <button type="button" className="completed-chores" onClick={handleCompleteChores}>Completed</button>
                <h1>{zone?.location}</h1>
                <button type="button" className="incomplete-chores" onClick={handleIncompleteChores}>Incomplete</button>
            </div>
            {choreList}
            <button type="button" className="add-a-chore" onClick={addAChore}>Add a Chore</button>
            {Object.keys(selectedChore).length === 0 ? <NewChore choresList={choresList} /> : <ChoreDetails choresList={choresList} chore={selectedChore} />}
        </div>
    )
}

export default ChoresPage;