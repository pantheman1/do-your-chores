import { combineReducers } from 'redux';
import { csrfFetch } from './csrf';
import { login } from './session';


const DISPLAY_ZONES = 'zones/DISPLAY_ZONES';
const UPDATE_CHORE = 'chores/UPDATE_CHORE';

const displayZones = zoneList => ({
    type: DISPLAY_ZONES,
    zoneList
})

//update chore
const updateChoreContent = (zoneId, choreId, newValue) => ({
    type: UPDATE_CHORE,
    payload: {
        zoneId,
        choreId,
        newValue
    },
});

// Create action for adding a zone--------------
// const addZone = 

export const allUserZones = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/zones/${id}`);

    if (res.ok) {
        const data = await res.json();
        // console.log('-=-=-=-=-=-=-', data.squad)
        dispatch(displayZones(data.squad)) //the route sends us an object with a zones k/v pair
    }
}
// 
export const updateDbFromStore = (choreId, newValue) => async dispatch => {
    //call post route to post the new data
    // dispatch(updateChore());
}

export const updateChore = (choreId, newValue) => async dispatch => {
    //call post route to post the new data
    // dispatch(updateChore());
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

// import { updateChore, updateDbFromStore } from '../../store/zones.js'

// Notes from chatting with Bryan--
//state array of objects
// const dispatch = useDispatch()

// const zones = useSelector(state => state.zones.Zones)

// function updateDb(e) {
//     dispatch(updateDbFromStore())
// }

// <input onChange={event => dispatch(updateChore(zoneId, choreId, event.target.value))} onFocusLeft={updateDb}>