import { ADD_EPISODES, REMOVE_EPISODES, SET_AS_CURRENT_EPISODE, SET_AS_NEXT_EPISODE, SET_AS_PREVIOUS_EPISODE } from "../types";

const INITIAL_STATE = {
    episodes: {
        data: [],
        currentEpisode: null,
        previousEpisode: null,
        nextEpisode: null
    }
};

export const episodesReducer = (state=INITIAL_STATE, {type, payload} = action) => {
    switch (type) {
        case ADD_EPISODES:
            console.log('actions data ', type, payload)

            return {
                episodes: {
                    ...state.episodes,
                    data: payload
                }
            };
        case REMOVE_EPISODES:
            return {
                episodes: {
                    ...state.episodes,
                    data: payload,
                    currentEpisode: null,
                    previousEpisode: null,
                    nextEpisode: null
                }
            };
        case SET_AS_CURRENT_EPISODE:
            console.log('current episode ', payload)
            return {
                ...state.episodes,
                currentEpisode: payload
            }
        case SET_AS_PREVIOUS_EPISODE:
            console.log('previous episode ', payload)
            return {
                ...state.episodes,
                currentEpisode: payload
            }
        case SET_AS_NEXT_EPISODE:
            console.log('next episode ', payload)
            return {
                ...state.episodes,
                currentEpisode: payload
            }
        default:
            return state;
    };
};