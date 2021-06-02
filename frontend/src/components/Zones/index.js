import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useParams } from "react-router-dom";
import { addZone, squadZones } from "../../store/zones"
import './zones.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Button from 'react-bootstrap/Button'

const ZonePage = () => {
    const { squadId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const squads = useSelector(state => Object.values(state.ownerSquads).filter(squad => squad.squadId === Number(squadId)));
    const zones = useSelector(state => Object.values(state.zones));
    const [open, setOpen] = useState(false);
    const [location, setLocation] = useState("");
    const dispatch = useDispatch();

    const onOpenModal = (e) => {
        e.preventDefault();
        setOpen(true);
    }
    const onCloseModal = () => {
        setOpen(false);
        setLocation("");
    }

    useEffect(() => {
        dispatch(squadZones(squadId))
    }, [dispatch])

    if (!sessionUser) {
        return <Redirect to='/login' />
    }

    const handleAddZone = (e) => {
        e.preventDefault();
        const data = {
            squadId,
            location,
        }
        dispatch(addZone(data));
        setOpen(false);
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
            <>
                {zones?.map(zone => (
                    <div className="outer-tile-container" key={zone.id}>
                        <NavLink to={`/${squadId}/${zone.id}/chores`}>{imageGenerator()}{zone.location}</NavLink>
                    </div>
                ))}
            </>
        )
    } else {
        zoneLinks = (
            <h2>Create your first zone!</h2>
        )
    }

    return (
        zones.length > 0 &&
        <div className="outermost-container">
            <div className="inner-container">
                <div className="container__crewName">
                    <h1>{squads[0].Squad.name}</h1>
                </div>
                <div className="section-header">
                    <div className="header-text">Pick a Zone to Clean and Let's Get to Work!</div>
                </div>
                <div className="zone-container">
                    {zoneLinks}
                    <div className="outer-tile-container">
                        <button className="addZone-btn" onClick={onOpenModal}><img className="tile-img" src="/images/add-button.png" />Create a squad</button>
                    </div>
                </div>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <h2>Zone location: </h2>
                <input
                    className=""
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                />
                <div className="squad__container-create">
                    <Button type="button" className="img-links" onClick={handleAddZone}>Add a Zone</Button>
                </div>
            </Modal>
        </div>
    )
}

export default ZonePage;