import { csrfFetch } from './csrf';

const GET_ONE_ZONE = 'zones/GET_ONE_ZONE';

const gettingOneZone = currentZone => ({
    type: GET_ONE_ZONE,
    currentZone
})

// Thunk for displaying a specific zone on the chores page
export const getOneZone = (id) => async dispatch => {
    const res = await csrfFetch(`/api/zones/zone/${id}`);

    if (res.ok) {
        const zone = await res.json();
        console.log('zone-->', zone)
        dispatch(gettingOneZone(zone))
    }
}

const singleZone = (state = {}, action) => {
    switch (action.type) {
        case GET_ONE_ZONE:
            return { ...state, ...action.currentZone }
        default:
            return state
    }
}


export default singleZone;