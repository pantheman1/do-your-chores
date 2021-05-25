import { csrfFetch } from './csrf';

const GET_SQUADS = 'squads/GET_SQUADS';

const getSquadAction = (data) => ({
    type: GET_SQUADS,
    data
});

//Thunk that will fetch all OWNER Squads

export const getOwnerSquads = (userId) => async dispatch => {
    let res = await fetch(`/api/squads/${userId}`)
    if (res.ok) {
        const data = await res.json()
        dispatch(getSquadAction(data.squads));
    }
}


// Reducer

export default function SquadsReducer(state = {}, action) {
    let newState = {};
    switch (action.type) {
        case GET_SQUADS:
            action.data.forEach(item => {
                newState[item.id] = item;
            })
            return newState;
        default:
            return state;
    }
}
