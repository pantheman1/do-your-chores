import { csrfFetch } from './csrf';

const GET_USERS = 'user/GET_USER';


const getUsersList = (users) => {
    return {
        type: GET_USERS,
        users
    }
}

export const getUsers = () => async (dispatch) => {
    const res = await csrfFetch(`/api/users`)

    if (res.ok) {
        const users = await res.json()
        dispatch(getUsersList(users))
    }
}

export default function UsersReducer(state = {}, action) {
    switch (action.type) {
        case GET_USERS:
            console.log('action.users', action.users)
            const newState = {};
            action.users.forEach(user => {
                newState[user.id] = user
            })
            return newState
        default:
            return state;
    }
}