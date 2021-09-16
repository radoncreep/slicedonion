import { ADD_TO_WATCHLATER, ADD_TO_WATCHLATER_FROM_CACHE, REMOVE_FROM_WATCHLATER } from '../types';

const INITIAL_STATE = {
    list: []
};

export const watchLaterReducer = (state=INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case ADD_TO_WATCHLATER:
                
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
            
        case REMOVE_FROM_WATCHLATER:
            let rmClone = [...state.list];
            let rmfilterClone = rmClone.filter(anime => anime.title !== payload.title);
            return {
                list: [ ...rmfilterClone ]
            };

        case ADD_TO_WATCHLATER_FROM_CACHE:
            // console.log('cache red ', payload)
            return {
                list: [...payload]
            }
        default: 
            return state;
    };
};