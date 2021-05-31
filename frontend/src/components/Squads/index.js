import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import JoinSquad from "./JoinSquad";
import CreateSquad from "./CreateSquad";

//this will be the dropdown

const Squads = () => {
    const squads = useSelector(state => Object.values(state.ownerSquads));
    const dispatch = useDispatch();

    // show a list of squads
    // if no squads, then have user join/create squad
    // click on a squad and it will take you to the list of zones available for that squad
    // if user is the owner, then you can create a zone
    // if user is not the owner, then they will see the list of zones, or a message saying no zones are available for this squad

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
                                <NavLink to={`/${squad.id}/zones`}>{squad.Squad.name}</NavLink>
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