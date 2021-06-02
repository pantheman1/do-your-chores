import { csrfFetch } from './csrf';

const DISPLAY_CHORES = 'chores/DISPLAY_CHORES';
const TOGGLE_ISCOMPLETE = 'chore/TOGGLE_ISCOMPLETE';
const NEW_CHORE = 'chore/NEW_CHORE';

// Action Creators

const getAllChoresAction = choreList => ({
    type: DISPLAY_CHORES,
    choreList
});

const updateIsComplete = (chore) => ({
    type: TOGGLE_ISCOMPLETE,
    chore
})

const newChorePost = (newChore) => ({
    type: NEW_CHORE,
    newChore
})

// Thunk Action Creators

export const getAllChores = (zoneId) => async (dispatch) => {
    console.log("before-----")
    const res = await csrfFetch(`/api/chores/${zoneId}`);
    console.log("after-----")
    if (res.ok) {
        const chores = await res.json();
        dispatch(getAllChoresAction(chores))
    }
}

export const toggleIsComplete = (chore) => async dispatch => {
    const res = await csrfFetch(`/api/chores/${chore.id}`, {
        method: 'PATCH',
        body: JSON.stringify(chore)
    })

    if (res.ok) {
        const chores = await res.json();
        dispatch(getAllChoresAction(chores))
    }
}

export const postNewChore = (chore) => async dispatch => {
    const res = await csrfFetch(`/api/zones/${chore.zoneId}`, {
        method: 'POST',
        body: JSON.stringify(chore)
    })

    if (res.ok) {
        const newChore = await res.json();
        dispatch(newChorePost(newChore))
    }
}



// export const updateNameValue = name => async dispatch => {
//     const res = await csrfFetch(`/api/chores/${chore.id}`, {
//         method: 'PATCH',
//         body: JSON.stringify(name)
//     })

//     if (res.ok) {
//         const name = await res.json();
//         dispatch(displaySimpleChore(chores))
//     }
// }

const ChoresReducer = (state = {}, action) => {
    let newState = {};
    switch (action.type) {
        case DISPLAY_CHORES:
            action.choreList.forEach(chore => {
                newState[chore.id] = chore;
            });
            return newState;
        case NEW_CHORE:
            return {
                ...state,
                ...action.newChore
            }


        // case TOGGLE_ISCOMPLETE:
        //     return {
        //         ...state,
        //         isComplete: !action.chore.isComplete,
        //     }

        default:
            return state;
    }
}


export default ChoresReducer;