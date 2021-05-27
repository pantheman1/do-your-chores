import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useParams } from "react-router-dom";
import { squadZones } from "../../store/zones"
import { nanoid } from 'nanoid';
import './zones.css';

const ZonePage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const squads = useSelector(state => Object.values(state.ownerSquads).filter(squad => squad.userId === sessionUser.id));
    const zones = useSelector(state => state.zones.Zones);
    const { squadId } = useParams();
    const dispatch = useDispatch();

    console.log("zones---->>", zones)
    console.log("squads---->>", squads)
    console.log("squadId--->>", squadId)

    useEffect(() => {
        dispatch(squadZones(squadId))
    }, [dispatch])

    if (!sessionUser) {
        return <Redirect to='/login' />
    }

    const handleAddZone = (e) => {
        e.preventDefault();
        // modal popup with add a zone form
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
        "/images/logo.png"
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
                    <button type="button" className="img-links" onClick={handleAddZone}><img className="tile-img" src="/images/add-button.png" />Add a Zone</button>
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