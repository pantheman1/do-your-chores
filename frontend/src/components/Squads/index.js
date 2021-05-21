import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//this will be the dropdown

const Squads = () => {
    const dispatch = useDispatch();

    // show a list of squads
    // click on a squad and it will take you to the list of zones available for that squad

    useEffect(() => {
        // 
    }, [dispatch])

    return (
        <h1>Squad Component</h1>
    )
}

export default Squads;