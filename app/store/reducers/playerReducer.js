import { REMOVE_ALL_EPISODES, UPDATE_ALL_EPISODES, UPDATE_CURRENT_EPISODE, UPDATE_NEXT_EPISODE } from "../types";

const INITIAL_STATE = {
    allEpisodes: [],
    current: 0,
    next: 0
};

export const playerReducer = ( state=INITIAL_STATE, action ) => {
    switch(action.type) {
        case UPDATE_ALL_EPISODES:
            return {
                ...state,
                allEpisodes: action.payload
            }
        case UPDATE_CURRENT_EPISODE:
            return {
                ...state,
                current: action.payload
            };
        case UPDATE_NEXT_EPISODE:
            return {
                ...state,
                next: action.payload
            };
        case REMOVE_ALL_EPISODES:
            return {
                allEpisodes: null,
                current: 0,
                next: 0
            };
        default:
            return state;
    };
};