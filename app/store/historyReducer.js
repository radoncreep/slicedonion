import { combineReducers } from 'redux';

const INITIAL_STATE = {
    current: []
};

const historyReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ADD_TO_HISTORY':
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

export default combineReducers({
    history: historyReducer
});