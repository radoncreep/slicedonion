import { combineReducers } from 'redux';
import { historyReducer } from './historyReducer';
import { playerReducer } from './playerReducer';
import { watchLaterReducer } from './watchLaterReducer';


export default combineReducers({
    history: historyReducer,
    watchLater: watchLaterReducer,
    nextEpisode: playerReducer
});