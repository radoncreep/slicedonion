import { combineReducers } from 'redux';
import { historyReducer } from './historyReducer';
import { watchLaterReducer } from './watchLaterReducer';


export default combineReducers({
    history: historyReducer,
    watchLater: watchLaterReducer
});