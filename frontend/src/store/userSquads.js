import { csrfFetch } from './csrf';

const GET_USER_SQUADS = 'squads/GET_USER_SQUADS';
const CREATE_USER_SQUAD = 'squads/CREATE_USER_SQUAD';

const getSquadAction = (data) => ({
    type: GET_USER_SQUADS,
    data
});

//Thunk that will fetch all OWNER Squads

export const getUserSquads = (userId) => async dispatch => {
    let res = await csrfFetch(`/api/userSquads/${userId}`)
    if (res.ok) {
        const data = await res.json()
        dispatch(getSquadAction(data.squads));
    }
}

// this thunk will create a new squad on the Squad table
export const createUserSquad = (name) => async dispatch => {
    let res = await csrfFetch(`/api/squads`)
}


// Reducer

export default function UserSquadsReducer(state = {}, action) {
    let newState = {};
    switch (action.type) {
        case GET_USER_SQUADS:
            action.data.forEach(item => {
                newState[item.id] = item;
            })
            return newState;
        default:
            return state;
    }
}
