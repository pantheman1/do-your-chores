import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";


const ChoresPage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const chores = useSelector(state => state.chores);
    const dispatch = useDispatch();

    if (!sessionUser) {
        return <Redirect to='/login' />
    }

    return (
        <h1>Chores</h1>
    )
}

export default ChoresPage;