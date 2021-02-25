import { combineReducers } from 'redux';
import { csrfFetch } from './csrf';
import { login } from './session';


const DISPLAY_ZONES = 'zones/DISPLAY_ZONES';

const displayZones = zoneList => ({
    type: DISPLAY_ZONES,
    zoneList
})


export const allUserZones = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/zones/${id}`);

    if (res.ok) {
        const data = await res.json();
        // console.log('-=-=-=-=-=-=-', data.squad)
        dispatch(displayZones(data.squad)) //the route sends us an object with a zones k/v pair
    }
}

const ZonesReducer = (state = {}, action) => {
    switch (action.type) {
        case DISPLAY_ZONES:
            console.log('action-->', action.zoneList)
            const newState = { ...state, ...action.zoneList }
            return newState;
        default:
            return state
    }

}

export default ZonesReducer;