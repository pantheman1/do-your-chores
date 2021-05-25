import { csrfFetch } from './csrf';

const GET_SQUADS = 'squads/GET_SQUADS';
const CREATE_SQUAD = 'squads/CREATE_SQUAD';

const getSquadAction = (data) => ({
    type: GET_SQUADS,
    data
});

//Thunk that will fetch all OWNER Squads

export const getOwnerSquads = (userId) => async dispatch => {
    let res = await fetch(`/api/ownerSquads/${userId}`)
    if (res.ok) {
        const data = await res.json()
        dispatch(getSquadAction(data.squads));
    }
}

// this thunk will create a new squad on the Squad table
export const createSquad = (name) => async dispatch => {
    let res = await fetch(`/api/squads`)
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
