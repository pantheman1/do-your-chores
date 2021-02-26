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
        dispatch(displaySimpleChore(chores))
    }
}

export const toggleIsComplete = (chore) => async dispatch => {
    const res = await csrfFetch(`/api/chores/${chore.id}`, {
        method: 'PATCH',
        body: JSON.stringify(chore)
    })

    if (res.ok) {
        const chores = await res.json();
        console.log("CHOooorres", chores)
        // console.log("CCCCHHHHHOOOOORRRRRREEEEE", chore.chore.id)
        dispatch(displaySimpleChore(chores))
    }
}

const ChoresReducer = (state = {}, action) => {
    switch (action.type) {
        case DISPLAY_SIMPLE_CHORE:
            // console.log('action--<><><>', action.choreList)
            const allChores = {};
            action.choreList.forEach(chore => {
                allChores[chore.id] = chore;
            });
            return { ...state, ...allChores }
        // case TOGGLE_ISCOMPLETE:
        //     console.log('action.chore.isComplete-->', action.chore.isComplete)

        //     return {
        //         ...state,
        //         isComplete: !action.chore.isComplete,
        //     }

        default:
            return state;
    }
}


export default ChoresReducer;