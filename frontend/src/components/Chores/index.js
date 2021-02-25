import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Redirect, useHistory, useParams } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { getSimpleList } from '../../store/chores';
import { nanoid } from 'nanoid';

const ChoresPage = ({ zones }) => {
    const sessionUser = useSelector(state => state.session.user);
    // const chores = useSelector(state => state.chores);
    const dispatch = useDispatch();
    const { zoneId } = useParams();

    // console.log("zoneID--->>>", zoneId)

    const results = zones?.find(zone => zone.id.toString() === zoneId).Chores

    console.log('results---------->>>>', results)

    useEffect(() => {
        dispatch(getSimpleList(sessionUser.id))
    }, [dispatch])

    if (!sessionUser) {
        return <Redirect to='/login' />
    }

    let choreList;
    if (results?.length > 0) {
        choreList = (results.map(result => (
            <li key={nanoid()}>{result.name}</li>
        )))
    }

    return (
        <div>
            <h1>Chores</h1>
            {choreList}
        </div>
    )
}

export default ChoresPage;