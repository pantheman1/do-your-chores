import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Redirect, Route, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { allUserZones } from "../../store/zones"
import Chores from '../Chores';
import { nanoid } from 'nanoid';

const ZonePage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const zones = useSelector(state => state.zones.Zones);
    const dispatch = useDispatch();


    if (zones) {
        console.log('second time')
    }
    // const zoneList = Object.values(zones);

    console.log('>>>>>>>>', zones)
    useEffect(() => {
        dispatch(allUserZones(sessionUser.id))
    }, [dispatch])
    // console.log('/////////', zoneList)

    if (!sessionUser) {
        return <Redirect to='/login' />
    }

    let zoneLinks;
    if (zones?.length > 0) {
        zoneLinks = (
            <ul className="chore-box">
                {zones.map(zone => (
                    <li key={nanoid()}><NavLink to={`/zones/${zone.id}`}>{zone.location}</NavLink></li>
                ))}
            </ul>
        )
    }


    return (
        <div>
            <h1>Zones</h1>
            {zoneLinks}
            <Link to="/">Add a Zone</Link>
        </div>
    )
}

export default ZonePage;