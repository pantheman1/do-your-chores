import { csrfFetch } from './csrf';

const DISPLAY_SIMPLE_CHORE = 'chores/DISPLAY_SIMPLE_CHORE';
const TOGGLE_ISCOMPLETE = 'chore/TOGGLE_ISCOMPLETE';

const displaySimpleChore = choreList => ({
    type: DISPLAY_SIMPLE_CHORE,
    choreList
});

const updateIsComplete = (chore) => ({
    type: TOGGLE_ISCOMPLETE,
    chore
})

export const getSimpleList = id => async (dispatch) => {
    const res = await csrfFetch(`/api/chores`);

    if (res.ok) {
        const chores = await res.json();
        console.log('list of chores---->>>>', chores)
        dispatch(displaySimpleChore(chores))
    }
}

export const toggleIsComplete = (chore) => async dispatch => {
    const res = await csrfFetch(`/api/chores/${chore.id}`, {
        method: 'PATCH',
        body: { chore }
    })

    if (res.ok) {
        const chore = await res.json();
        // console.log("CCCCHHHHHOOOOORRRRRREEEEE", chore.chore.id)
        dispatch(updateIsComplete(chore))
    }
}

const ChoresReducer = (state = {}, action) => {
    switch (action.type) {
        case DISPLAY_SIMPLE_CHORE:
            // console.log('action--<><><>', action.choreList)
            // const allChores = {};
            // action.choreList.forEach(chore => {
            //     allChores[chore.id] = chore;
            // });
            return { ...state, ...action.choreList }
        case TOGGLE_ISCOMPLETE:
            return {
                ...state, [action.choreId]: {
                    ...state[action.choreId],
                    isComplete: !state[action.choreId].isComplete,
                }
            }
        default:
            return state;
    }
}


export default ChoresReducer;