import { ADD_TO_HISTORY, ADD_TO_HISTORY_FROM_CACHE, ADD_TO_WATCHLATER_FROM_CACHE } from "../types";

const INITIAL_STATE = {
    current: []
};

export const historyReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_TO_HISTORY:
            let clone = [...state.current];
            let filterClone = clone.filter(anime => {
                if (anime.title === action.payload.title)
                    return anime.episodeNumber !== action.payload.episodeNumber;
                else
                    return anime;
            });

            return {
                current: [ action.payload, ...filterClone]
            };
        case ADD_TO_HISTORY_FROM_CACHE:
            if (state.current.length) {
                // LEFT HERE FOR THE PURPOSE OF ADDRESSING CACHE AND REDUX PERSISTENCE
                // ISSUE
                return {
                    current: [...action.payload]
                }
            } else {
                return {
                    current: [ ...action.payload ]
                }
            }
        default: 
            return state;
    };
};