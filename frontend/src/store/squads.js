import { csrfFetch } from './csrf';

const GET_SQUADS = 'squads/GET_SQUADS';

const getSquadAction = () => ({
    type: GET_SQUADS,

});

//Thunk that will fetch all Squads

