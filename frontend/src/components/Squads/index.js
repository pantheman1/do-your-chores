import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

//this will be the dropdown

const Squads = () => {
    const squads = useSelector(state => Object.values(state.squads));
    const dispatch = useDispatch();

    // show a list of squads
    // click on a squad and it will take you to the list of zones available for that squad



    return (
        <>
            <h1>Squad Component</h1>
            <div className="squad__container">
                <div className="squad__container-header">

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
}

export default Squads;