import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { allUserZones } from "../../store/zones"

const ZonePage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const zones = useSelector(state => state.zones);
    const dispatch = useDispatch();


    if (zones) {
        console.log('second time')
    }
    const zoneList = Object.values(zones);

    // console.log('>>>>>>>>', zones)
    useEffect(() => {
        dispatch(allUserZones(sessionUser.id))
    }, [dispatch])
    // console.log('/////////', zoneList)

    if (!sessionUser) {
        return <Redirect to='/login' />
    }

    let zoneLinks;
    if (zoneList.length > 0) {
        zoneLinks = (
            zoneList.map(zone => (
                <li key={zone}>{zone}</li>
            ))
        )
    }
    let content = (
        <ul>
            {zoneLinks}
            <li>Add a Zone</li>
        </ul>
    )


    return (
        <div>
            <h1>Zones</h1>
            {content}

        </div>
    )

}

export default ZonePage;