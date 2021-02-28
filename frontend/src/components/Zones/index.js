import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Redirect, Route, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { allUserZones } from "../../store/zones"
import Chores from '../Chores';
import { nanoid } from 'nanoid';
import './zones.css';

const ZonePage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const zones = useSelector(state => state.zones.Zones);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allUserZones(sessionUser.id))
    }, [dispatch])

    if (!sessionUser) {
        return <Redirect to='/login' />
    }


    const images = [
        "/images/broom-dustpan-ella.png",
        "/images/bag-face-ella.png",
        "/images/boy-crying-ella.png",
        "/images/boy-with-mop.png",
        "/images/broom-dustpan-ella.png",
        "/images/rubber-gloves.png",
        "/images/spray-bottle.png",
        "/images/vacuum.png",
        "/images/winnie-the-pooh-ella.png",
    ]

    const randImage = () => {
        let min = Math.ceil(1);
        let max = Math.floor(images.length);
        return Math.floor(Math.random() * (max - min + 1));
    }

    const imageGenerator = () => {
        return (
            <img className="tile-img" src={`${images[randImage()]}`} />
        )
    }


    let zoneLinks;
    if (zones?.length > 0) {
        zoneLinks = (
            <div className="zone-container">
                {zones.map(zone => (
                    <div className="outer-tile-container" key={nanoid()}>
                        <NavLink to={`/zones/${zone.id}`}>{imageGenerator()}{zone.location}</NavLink>
                    </div>
                ))}
                <div className="outer-tile-container">
                    <NavLink className="img-links" to="/zones"><img className="tile-img" src="/images/add-button.png" />Add a Zone</NavLink>
                </div>
            </div>
        )
    }

    return (
        <div className="outermost-container">
            <div className="inner-container">
                <div className="section-header">
                    <div className="header-text">Pick a Zone to Clean and Let's Get to Work!</div>
                </div>
                {zoneLinks}
            </div>
        </div>
    )
}

export default ZonePage;