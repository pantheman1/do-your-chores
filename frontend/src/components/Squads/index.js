import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import JoinSquad from "./JoinSquad";
import CreateSquad from "./CreateSquad";

//this will be the dropdown

const Squads = () => {
    const squads = useSelector(state => Object.values(state.squads));
    const dispatch = useDispatch();

    // show a list of squads
    // click on a squad and it will take you to the list of zones available for that squad
    // if no squads, then have user join/create squad

    console.log("squads component index-----", squads)
    if (squads.length) {
        return (
            <>
                <div className="squad__container">
                    <div className="squad__container-header">
                        <h1>Choose a Squad</h1>
                    </div>
                    <div className="squad__container-squads">
                        {squads.map(squad => (
                            <div key={squad.id} className="squad__container-squads--squad">
                                <NavLink to={`/squads/${squad.id}`}>{squad.Squad.name}</NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <h1>Squad Component</h1>
                <CreateSquad />
                <JoinSquad />
            </>
        )
    }
}

export default Squads;