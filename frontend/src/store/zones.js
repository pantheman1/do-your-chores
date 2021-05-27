import { csrfFetch } from './csrf';

const DISPLAY_ZONES = 'zones/DISPLAY_ZONES';
const UPDATE_CHORE = 'chores/UPDATE_CHORE';
const USER_BY_ZONE = 'user/USER_BY_ZONE';

const displayZones = zoneList => ({
    type: DISPLAY_ZONES,
    zoneList
})

const grabUserData = zoneList => ({
    type: USER_BY_ZONE,
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

export const squadZones = (squadId) => async (dispatch) => {
    const res = await csrfFetch(`/api/zones/${squadId}`);

    if (res.ok) {
        const data = await res.json();
        dispatch(displayZones(data.zones)) //the route sends us an object with a zones k/v pair
    }
}
// 
export const updateDbFromStore = (choreId, newValue) => async dispatch => {
    //     const res = await csrfFetch(`/api/chores/${choreId}`, {
    //         method: 'PATCH',
    //         body: JSON.stringify({ newValue })
    //     });
    //     if (res.ok) {
    //         // const updatedChore = 
    //     }
    //     dispatch(updateChore());
}

export const getUserByZone = (id) => async dispatch => {
    const res = await csrfFetch(`/api/zones/${id}`);
    const data = await res.json();
    const obj = {};
    //normalized zones data
    data.squad.Zones.forEach(zone => {
        obj[zone.id] = zone;
    })
    const zonesArr = Object.values(obj);
    const zonesObj = {};
    zonesArr.forEach(zone => {
        zonesObj[zone.id] = zone
    })
    // const chores = zonesObj?.find(zone => zone.id.toString() === zoneId).Chores
    dispatch(grabUserData(zonesObj)) //the route sends us an object with a zones k/v pair
}

const ZonesReducer = (state = {}, action) => {
    let newState = {};
    switch (action.type) {
        case DISPLAY_ZONES:
            action.zoneList.forEach(zone => {
                newState[zone.id] = zone;
            })
            return newState;
        case USER_BY_ZONE:
            return {
                ...state,
                ...action.zoneList
            }
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