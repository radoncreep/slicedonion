import { ADD_TO_WATCHLATER, REMOVE_FROM_WATCHLATER } from '../types';

const INITIAL_STATE = {
    list: []
};

export const watchLaterReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_TO_WATCHLATER:
            // console.log('payload', action.payload);
            let clone = [...state.list];
            let filterClone = clone.filter(anime => {
                if (anime.title === action.payload.title)
                    return anime.episodeNumber !== action.payload.episodeNumber;
                else
                    return anime;
            });

            return {
                list: [ action.payload, ...filterClone]
            };
        case REMOVE_FROM_WATCHLATER:
            console.log('ehy')
            let rmClone = [...state.list];
            let rmfilterClone = rmClone.filter(anime => anime.title !== action.payload.title);
            console.log('filter ', rmfilterClone)

            return {
                list: [ ...rmfilterClone ]
            };
        default: 
            return state;
    };
};