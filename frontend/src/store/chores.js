import { csrfFetch } from './csrf';

const DISPLAY_SIMPLE_CHORE = 'chores/DISPLAY_SIMPLE_CHORE';

const displaySimpleChore = choreList => ({
    type: DISPLAY_SIMPLE_CHORE,
    choreList
});

export const getSimpleList = id => async (dispatch) => {
    const res = await csrfFetch(`/api/chores/${id}`);//zone id, not user id

    if (res.ok) {
        const data = await res.json();
        console.log('data---->>>>', data.chores)
        dispatch(displaySimpleChore(data.chores))
    }
}

const ChoresReducer = (state = {}, action) => {
    switch (action.type) {
        case DISPLAY_SIMPLE_CHORE:
            console.log('action-->', action.choreList)
            const newState = { ...state, chores: action.choreList }
            return newState;
        default:
            return state;
    }
}


export default ChoresReducer;