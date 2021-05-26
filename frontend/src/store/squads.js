import { csrfFetch } from './csrf';

const GET_SQUADS = 'squads/GET_SQUADS';
const CREATE_SQUAD = 'squads/CREATE_SQUAD';

const getSquadAction = (data) => ({
    type: GET_SQUADS,
    data
});

const addSquadAction = (data) => ({
    type: CREATE_SQUAD,
    data
})

//Thunk that will fetch all OWNER Squads

export const getOwnerSquads = (userId) => async dispatch => {
    let res = await fetch(`/api/ownerSquads/${userId}`)
    if (res.ok) {
        const data = await res.json()
        dispatch(getSquadAction(data.squads));
    }
}

// this thunk will create a new squad on the Squad table
export const createSquad = (data) => async dispatch => {
    const { name } = data;
    console.log("NAME---", name)
    let res = await csrfFetch(`/api/squads`, {
        method: "POST",
        body: JSON.stringify(data)
    })
    if (res.ok) {
        const data = await res.json();
        console.log("DATA-THUNK---", data)
        dispatch(addSquadAction(data));
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
        case CREATE_SQUAD:
            newState[action.data.id] = action.data
            return newState;
        default:
            return state;
    }
}
