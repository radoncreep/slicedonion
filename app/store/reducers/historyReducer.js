import { ADD_TO_HISTORY } from "../types";

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
        default: 
            return state;
    };
};