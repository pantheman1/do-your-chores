import { csrfFetch } from './csrf';

const GET_USER_SQUADS = 'userSquads/GET_USER_SQUADS';
const USERS_BY_SQUADID = 'userSquads/USER_BY_SQUADID';

const getSquadAction = (data) => ({
    type: GET_USER_SQUADS,
    data
});

const getUsersBySquadAction = (data) => ({
    type: USERS_BY_SQUADID,
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

export const getUsersBySquad = (squadId) => async dispatch => {
    let res = await csrfFetch(`/api/userSquads/users/${squadId}`)
    if (res.ok) {
        const data = await res.json()
        dispatch(getUsersBySquadAction(data));
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
        case USERS_BY_SQUADID:
            action.data.forEach(item => {
                newState[item.userId] = item;
            })
            return newState;
        default:
            return state;
    }
}
