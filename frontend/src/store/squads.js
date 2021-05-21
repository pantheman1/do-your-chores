import { csrfFetch } from './csrf';

const GET_SQUADS = 'squads/GET_SQUADS';

const getSquadAction = (data) => ({
    type: GET_SQUADS,
    data
});

//Thunk that will fetch all Squads

export const getSquads = (userId) => async dispatch => {
    let res = await fetch(`/api/squads/${userId}`)
    if (res.ok) {
        dispatch(getSquadAction(res.data));
    }
}


// Reducer

export default function SquadsReducer(state = {}, action) {
    let newState = {};
    switch (action.type) {
        case GET_SQUADS:
            return newState;
        default:
            return state;
    }
}
