import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { episodesReducer } from './episodesReducer';
import { historyReducer } from './historyReducer';
import { watchLaterReducer } from './watchLaterReducer';


export default combineReducers({
    history: historyReducer,
    watchLater: watchLaterReducer,
    register: authReducer,
    playlist: episodesReducer
});