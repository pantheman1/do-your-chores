import { csrfFetch } from './csrf';

const COMPLETED_CHORES = 'completionStatus/COMPLETED_CHORES';
const INCOMPLETE_CHORES = 'completionStatus/INCOMPLETE_CHORES';

const completedChoresAction = choreList => ({
    type: COMPLETED_CHORES,
    choreList
});

const incompleteChoresAction = (chore) => ({
    type: INCOMPLETE_CHORES,
    chore
})

//Grab all complete chores
export const completedChores = zoneId => async (dispatch) => {
    console.log(`/api/chores/${zoneId}/completed`)
    const res = await csrfFetch(`/api/chores/${zoneId}/completed`);

    if (res.ok) {
        const chores = await res.json();
        dispatch(completedChoresAction(chores))
    }
}

//Grab all incomplete chores
export const incompleteChores = zoneId => async (dispatch) => {
    const res = await csrfFetch(`/api/chores/${zoneId}/incomplete`);

    if (res.ok) {
        const chores = await res.json();
        dispatch(incompleteChoresAction(chores))
    }
}

const CompletedChoresReducer = (state = {}, action) => {
    console.log("-->>pepep", action.allChores)
    switch (action.type) {
        case COMPLETED_CHORES:
            const allChores = {};
            action.choreList.forEach(chore => {
                allChores[chore.id] = chore;
            });
            return { ...state, ...allChores }
        case INCOMPLETE_CHORES:
            return {
                ...state,
                ...action.newChore
            }
        default:
            return state;
    }
}


export default CompletedChoresReducer;