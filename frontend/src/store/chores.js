import { csrfFetch } from './csrf';

const DISPLAY_SIMPLE_CHORE = 'chores/DISPLAY_SIMPLE_CHORE';
const TOGGLE_ISCOMPLETE = 'chore/TOGGLE_ISCOMPLETE';
const NEW_CHORE = 'chore/NEW_CHORE';

const displaySimpleChore = choreList => ({
    type: DISPLAY_SIMPLE_CHORE,
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

export const postNewChore = (chore) => async dispatch => {
    console.log("CHORE--->", chore)
    const res = await csrfFetch(`/api/zones/${chore.zone_id}`, {
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
//         console.log("CHOooorres", chores)
//         // console.log("CCCCHHHHHOOOOORRRRRREEEEE", chore.chore.id)
//         dispatch(displaySimpleChore(chores))
//     }
// }

const ChoresReducer = (state = {}, action) => {
    console.log("ACTION", action)
    switch (action.type) {
        case DISPLAY_SIMPLE_CHORE:
            // console.log('action--<><><>', action.choreList)
            const allChores = {};
            action.choreList.forEach(chore => {
                allChores[chore.id] = chore;
            });
            return { ...state, ...allChores }
        case NEW_CHORE:
            console.log("NEWCHORE", action.newChore)
            return {
                ...state,
                ...action.newChore
            }


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