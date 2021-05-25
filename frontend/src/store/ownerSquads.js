import { csrfFetch } from './csrf';

const GET_OWNER_SQUADS = 'squads/GET_OWNER_SQUADS';
const CREATE_OWNER_SQUAD = 'squads/CREATE_OWNER_SQUAD';

const getSquadAction = (data) => ({
    type: GET_OWNER_SQUADS,
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
        case GET_OWNER_SQUADS:
            action.data.forEach(item => {
                newState[item.id] = item;
            })
            return newState;
        default:
            return state;
    }
}
