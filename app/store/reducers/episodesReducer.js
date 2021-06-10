import { ADD_EPISODES, REMOVE_EPISODES, SET_AS_CURRENT_EPISODE, SET_AS_NEXT_EPISODE, SET_AS_PREVIOUS_EPISODE } from "../types";

const INITIAL_STATE = {
    episodes: {
        data: [],
        currentEpisode: {},
        previousEpisode: {},
        nextEpisode: {}
    }
};

export const episodesReducer = (state=INITIAL_STATE, {type, payload} = action) => {
    switch (type) {
        case ADD_EPISODES:
            return {
                episodes: {
                    ...state.episodes,
                    // data: [...state.data],
                    data: payload, 
                    currentEpisode: {...state.currentEpisode},
                    previousEpisode: {...state.previousEpisode},
                    nextEpisode: {...state.nextEpisode}
                }
            };
        case REMOVE_EPISODES:
            console.log('removed')
            return {
                episodes: {
                    ...INITIAL_STATE.episodes
                }
            };
        case SET_AS_CURRENT_EPISODE:
            let currentClone = {
                ...state,
                episodes: {
                    ...state.episodes,
                    currentEpisode: { ...state.episodes.currentEpisode },
                    previousEpisode: { ...state.episodes.previousEpisode },
                    nextEpisode: { ...state.episodes.nextEpisode},
                }
            };

            currentClone.episodes.currentEpisode = payload;
            return currentClone;
        case SET_AS_PREVIOUS_EPISODE:
            let previousClone = {
                ...state,
                episodes: {
                    ...state.episodes,
                    currentEpisode: { ...state.episodes.currentEpisode },
                    previousEpisode: { ...state.episodes.previousEpisode },
                    nextEpisode: { ...state.episodes.nextEpisode},
                }
            };

            previousClone.episodes.previousEpisode = payload;
            return previousClone;
        case SET_AS_NEXT_EPISODE:
            // console.log('next ', next);
            let nextClone = {
                ...state,
                episodes: {
                    ...state.episodes,
                    currentEpisode: { ...state.episodes.currentEpisode },
                    previousEpisode: { ...state.episodes.previousEpisode },
                    nextEpisode: { ...state.episodes.nextEpisode},
                }
            };

            nextClone.episodes.nextEpisode = payload;
            // console.log('reducer ', nextClone);
            return nextClone;
        default:
            return state;
    };
};