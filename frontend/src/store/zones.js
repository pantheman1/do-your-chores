import { csrfFetch } from './csrf';

const DISPLAY_ZONES = 'zones/DISPLAY_ZONES';
const UPDATE_CHORE = 'chores/UPDATE_CHORE';
const ADD_ZONE = 'zones/ADD_ZONE';

const displayZones = zoneList => ({
    type: DISPLAY_ZONES,
    zoneList
})

const addZoneAction = newZone => ({
    type: ADD_ZONE,
    newZone
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


// Adds a zone to the squad
export const addZone = (data) => async (dispatch) => {
    let res = await csrfFetch(`/api/zones`, {
        method: "POST",
        body: JSON.stringify(data)
    });
    if (res.ok) {
        const newData = await res.json();
        dispatch(addZoneAction(newData));
    };
}

export const squadZones = (squadId) => async (dispatch) => {
    const res = await csrfFetch(`/api/zones/${squadId}`);

    if (res.ok) {
        const data = await res.json();
        dispatch(displayZones(data.zones)) //the route sends us an object with a zones k/v pair
    }
}

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

const ZonesReducer = (state = {}, action) => {
    let newState = {};
    switch (action.type) {
        case DISPLAY_ZONES:
            action.zoneList.forEach(zone => {
                newState[zone.id] = zone;
            })
            return newState;
        case ADD_ZONE:

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