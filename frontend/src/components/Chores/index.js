import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Redirect, useHistory, useParams, Link } from "react-router-dom";
import { getAllChores } from '../../store/chores';
import './chores.css'
import ChoreBlocks from './ChoreBlocks';
import ChoreDetails from './choreDetails';
import NewChore from './NewChore';

const ChoresPage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const chores = useSelector(state => Object.values(state.chores));
    const { zoneId } = useParams();
    const zone = useSelector(state => Object.values(state.zones).filter(zone => zone.id === Number(zoneId)));
    const dispatch = useDispatch();
    const [selectedChore, setSelectedChore] = useState({});
    const [complete, setComplete] = useState(false);
    const [selectedButton, setSelectedButton] = useState('all');

    let completedChores = chores.filter(chore => chore?.isComplete === true);
    let incompleteChores = chores.filter(chore => chore?.isComplete === false);

    useEffect(() => {
        dispatch(getAllChores(zoneId))
    }, [dispatch, selectedButton])

    if (!sessionUser) {
        return <Redirect to='/login' />
    }

    const addAChore = (e) => {
        e.preventDefault();
        setSelectedChore({})
    }

    let choreList;
    if (chores?.length > 0 && selectedButton === "all") {
        choreList = (
            <>
                {chores.map(chore => (
                    <ChoreBlocks key={chore.id} complete={complete} setComplete={setComplete} setSelectedChore={setSelectedChore} chore={chore} />
                ))}
            </>
        )
    } else if (completedChores?.length > 0 && selectedButton === "completed") {
        choreList = (
            <>
                {completedChores.map(chore => (
                    <ChoreBlocks key={chore.id} complete={complete} setComplete={setComplete} setSelectedChore={setSelectedChore} chore={chore} />
                ))}
            </>
        )
    } else if (incompleteChores?.length > 0 && selectedButton === "incomplete") {
        choreList = (
            <>
                {incompleteChores.map(chore => (
                    <ChoreBlocks key={chore.id} complete={complete} setComplete={setComplete} setSelectedChore={setSelectedChore} chore={chore} />
                ))}
            </>
        )
    }


    // Trying to render the Choreblocks component on the CompleteChores page. Currently very broken. 
    // Look at if statement above and something about the buttons

    return (
        <div className="body-chores">
            <div className="zone-location">
                <h1>{zone[0]?.location}</h1>
            </div>
            <div className="chores-header">
                <button type="button" className="completed-chores" onClick={e => setSelectedButton("completed")}>Completed</button>
                <button type="button" className="incomplete-chores" onClick={e => setSelectedButton("incomplete")}>Incomplete</button>
                <button type="button" className="all-chores" onClick={e => setSelectedButton("all")}>All</button>
            </div>
            <div className="chores-container">
                {selectedButton && selectedButton === "all" ? choreList : selectedButton && selectedButton === "completed" ? choreList : selectedButton && selectedButton === "incomplete" ? choreList : 'All'}
            </div>
            <button type="button" className="add-a-chore" onClick={addAChore}>Add a Chore</button>
            {Object.keys(selectedChore).length === 0 ? <NewChore chores={chores} setSelectedChore={setSelectedChore} /> : <ChoreDetails chores={chores} chore={selectedChore} />}
        </div>
    )
}

export default ChoresPage;