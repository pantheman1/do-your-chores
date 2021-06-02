import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Redirect, useHistory, useParams, Link } from "react-router-dom";
import { getAllChores } from '../../store/chores';
import { nanoid } from 'nanoid';
import './chores.css'
import ChoreBlocks from './ChoreBlocks';
import ChoreDetails from './choreDetails';
import NewChore from './NewChore';

const ChoresPage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const chores = useSelector(state => Object.values(state.chores));
    const compChores = useSelector(state => state.completionStatus)
    const { zoneId } = useParams();
    //zone is only bringing in the location of the zone
    const zone = useSelector(state => Object.values(state.zones).filter(zone => zone.id === Number(zoneId)));
    const dispatch = useDispatch();
    const [selectedChore, setSelectedChore] = useState({});
    const [complete, setComplete] = useState(false);
    const [selectedButton, setSelectedButton] = useState('all');

    console.log("chores----", chores)
    let completedChores = chores.filter(chore => chore.isComplete === "true");
    let incompleteChores = chores.filter(chore => chore.isComplete === "false");

    // Will initiate a fetch to grab all chores in this zoneId
    useEffect(() => {
        dispatch(getAllChores(zoneId))
    }, [dispatch])

    // should get all chores based on the zoneId
    const handleAllChores = () => {
        dispatch(getAllChores(zoneId))
        setSelectedButton('all');
    }

    // Will initiate a fetch to grab all completed chores in this zoneId
    const handleCompleteChores = () => {
        setSelectedButton('completed');
        // dispatch(completedChores(zoneId))
    }

    // Will initiate a fetch to grab all incomplete chores in this zoneId
    const handleIncompleteChores = () => {
        setSelectedButton('incomplete');
    }

    if (!sessionUser) {
        return <Redirect to='/login' />
    }

    const addAChore = (e) => {
        e.preventDefault();
        setSelectedChore({})
    }

    console.log("selectedButton-->", selectedButton)

    let choreList;
    if (chores?.length > 0 && selectedButton === "all") {
        choreList = (
            <div className="chores-container">
                {chores.map(chore => (
                    <ChoreBlocks key={chore.id} complete={complete} setComplete={setComplete} setSelectedChore={setSelectedChore} chore={chore} />
                ))}
            </div>
        )
    } else if (chores?.length > 0 && selectedButton === "completed") {
        choreList = (
            <div className="chores-container">
                {completedChores.map(chore => (
                    <ChoreBlocks key={chore.id} complete={complete} setComplete={setComplete} setSelectedChore={setSelectedChore} chore={chore} />
                ))}
            </div>
        )
    } else if (chores?.length > 0 && selectedButton === "incomplete") {
        choreList = (
            <div className="chores-container">
                {incompleteChores.map(chore => (
                    <ChoreBlocks key={chore.id} complete={complete} setComplete={setComplete} setSelectedChore={setSelectedChore} chore={chore} />
                ))}
            </div>
        )
    }

    // Trying to render the Choreblocks component on the CompleteChores page. Currently very broken. 
    // Look at if statement above and something about the buttons

    return (
        <div className="body-chores">
            <div className="chores-header">
                <button type="button" className="completed-chores" onClick={handleCompleteChores}>Completed</button>
                <button type="button" className="incomplete-chores" onClick={handleIncompleteChores}>Incomplete</button>
                <button type="button" className="all-chores" onClick={handleAllChores}>All</button>
                <h1>{zone[0]?.location}</h1>
            </div>
            {/* {choreList} */}
            {selectedButton && selectedButton === "all" ? choreList : selectedButton && selectedButton === "completed" ? choreList : selectedButton && selectedButton === "incomplete" ? choreList : 'All'}
            {/* {selectedButton && selectedButton === "all" ? choreList : 'All'} */}
            <button type="button" className="add-a-chore" onClick={addAChore}>Add a Chore</button>
            {Object.keys(selectedChore).length === 0 ? <NewChore chores={chores} setSelectedChore={setSelectedChore} /> : <ChoreDetails chores={chores} chore={selectedChore} />}
        </div>
    )
}

export default ChoresPage;