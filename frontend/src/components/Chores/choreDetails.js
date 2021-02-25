import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Redirect, useHistory, useParams } from "react-router-dom";


const ChoreDetails = () => {
    const chores = useSelector(state => state.zones.zones)

    console.log("chores-=-=-=-", chores)


    return (
        <div>
            <form>
                <input
                    className=""
                >

                </input>
                <label></label>
                <input>

                </input>
                <label></label>
                <input>

                </input>
            </form>
        </div>
    )
}




export default ChoreDetails;