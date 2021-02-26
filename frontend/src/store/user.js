import { csrfFetch } from './csrf';

const GET_USER = 'user/GET_USER';


const getUser = (id) => {
    return {
        type: GET_USER,
        id
    }
}

export const getUserById = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/users/`)
}