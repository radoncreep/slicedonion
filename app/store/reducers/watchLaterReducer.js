import { ADD_TO_WATCHLATER, REMOVE_FROM_WATCHLATER } from '../types';

const INITIAL_STATE = {
    list: []
};

export const watchLaterReducer = (state=INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case ADD_TO_WATCHLATER:
            if (typeof payload === "object") {
                
                let clone = [...state.list];
                let filterClone = clone.filter(anime => {
                    if (anime.title === payload.title)
                        return anime.episodeNumber !== payload.episodeNumber;
                    else
                        return anime;
                });
    
                return {
                    list: [ payload, ...filterClone ]
                };
            }

            return {
                list: payload
            }
        case REMOVE_FROM_WATCHLATER:
            let rmClone = [...state.list];
            let rmfilterClone = rmClone.filter(anime => anime.title !== payload.title);
            return {
                list: [ ...rmfilterClone ]
            };
        default: 
            return state;
    };
};